---
title: "你真的理解過 PING 這個指令嗎?"
authors: hwchiu
keywords: [Linux, Ping]
tags:
  - Linux
  - Network
  - Kernel
  - Ubuntu
description: 探討 ping 指令的不同實作方式
date: 2021-09-07 01:11:47
---

# 前言
2021/06 某天晚上，我正透過 ping 指令研究一下 ICMP 封包，霎那間不知道哪來的靈感，便把 ping 指令上的 capabilities 給拔掉，結果整個 ping 指令依然可以運作，這個結果完全是我沒有預料到的
畢竟 ICMP 封包以前預設情況下是使用者不太能自行創造的，所以 ping 指令從早期的 setuid 到後來引進 Linux Capabilities 提供更細緻的權限管理，都是要讓 ping 這個指令能夠順利地開啟 RAW socket 來發送 ICMP 封包。
不知道從什麼時候開始， ping 指令已經不需要上述機制的幫忙，任何使用者都可以輕鬆地透過 PING 指令發送 ICMP 的封包，而這篇文章就是針對這個現象觀察的筆記。

# Ping 指令觀察

這邊使用三種不同的環境來看一下 ping 這個指令不同的設定方式

## Ubuntu 14.04
第一個實驗環境如下
1. Ubuntu 14.04.5 LTS
2. Linux network-lab 4.4.0-31-generic #50~14.04.1-Ubuntu SMP Wed Jul 13 01:07:32 UTC 2016 x86_64 x86_64 x86_64 GNU/Linux
3. ping utility, iputils-s20121221

該 Ubuntu 環境底下的 ping 是來自 iputiles 這個套件，版本是 2012/12/21

先透過 ls -l 的指令去觀察，可以發現 ping 這個指令的權限比較特別，是 rwsr-xr-x，其中 s 的部分就是所謂的 setuid，透過 setuid 可以讓執行該程式的使用者短暫提升權限變成該程式的 owner，這意味任何執行 ping 這個應用程式的使用者都會短暫被提權到 root 權限。

因此使用 ping 指令就會非常正常，沒有什麼特別的問題。

```bash=
vagrant@network-lab:~$ ls -l $(which ping)
-rwsr-xr-x 1 root root 44168 May  7  2014 /bin/ping*
vagrant@network-lab:~$ ping 8.8.8.8 -c 1
PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=1 ttl=63 time=20.7 ms

--- 8.8.8.8 ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 20.740/20.740/20.740/0.000 ms
```

這時候嘗試透過 chmod u-s 的方式將 setuid 給移除，移除後就會看到 ping 指令的權限變回到 rwxr-xr-x 的權限。
這時候如果直接執行 ping 指令就會發現沒有辦法運作，直接得到 `icmp open socket: Operation not permitted` 錯誤訊息。

但是如果採用 sudo 的方式讓自己提權到 root，則 ping 指令也是可以順利進行。

```bash=
vagrant@network-lab:~$ sudo chmod u-s $(which ping)
vagrant@network-lab:~$ ls -l $(which ping)
-rwxr-xr-x 1 root root 44168 May  7  2014 /bin/ping
vagrant@network-lab:~$ ping 8.8.8.8 -c 1
ping: icmp open socket: Operation not permitted
vagrant@network-lab:~$
vagrant@network-lab:~$ sudo ping 8.8.8.8 -c1
PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=1 ttl=63 time=14.0 ms

--- 8.8.8.8 ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 14.020/14.020/14.020/0.000 ms
vagrant@network-lab:~$
```

嘗試透過 strace 去觀察一下到底上述的 `icmp open socket` 跟什麼有關，可以發現是 `socket(PF_INET, SOCK_RAW, IPPROTO_ICMP) = -1 EPERM (Operation not permitted)` 這個 syscall 造成的，看起來一般使用者是沒有辦法創造基於 ICMP 協定的 RAW Socket，所以才需要借助 setuid 來提權。

```bash=
vagrant@network-lab:~$ strace ping 8.8.8.8 -c1
...
capget({_LINUX_CAPABILITY_VERSION_3, 0}, NULL) = 0
capget({_LINUX_CAPABILITY_VERSION_3, 0}, {0, 0, 0}) = 0
socket(PF_INET, SOCK_RAW, IPPROTO_ICMP) = -1 EPERM (Operation not permitted)
capget({_LINUX_CAPABILITY_VERSION_3, 0}, NULL) = 0
capget({_LINUX_CAPABILITY_VERSION_3, 0}, {0, 0, 0}) = 0
socket(PF_INET, SOCK_DGRAM, IPPROTO_IP) = 3
connect(3, {sa_family=AF_INET, sin_port=htons(1025), sin_addr=inet_addr("8.8.8.8")}, 16) = 0
getsockname(3, {sa_family=AF_INET, sin_port=htons(44904), sin_addr=inet_addr("10.0.2.15")}, [16]) = 0
close(3)                                = 0
dup(2)                                  = 3
fcntl(3, F_GETFL)                       = 0x8002 (flags O_RDWR|O_LARGEFILE)
fstat(3, {st_mode=S_IFCHR|0620, st_rdev=makedev(136, 0), ...}) = 0
mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f845fe4a000
lseek(3, 0, SEEK_CUR)                   = -1 ESPIPE (Illegal seek)
write(3, "ping: icmp open socket: Operatio"..., 48ping: icmp open socket: Operation not permitted
) = 48
close(3)                                = 0
munmap(0x7f845fe4a000, 4096)            = 0
exit_group(2)                           = ?
```



## CentOS 7
1. CentOS Linux release 7.9.2009 (Core)
2. 3.10.0-1062.18.1.el7.x86_64
3. ping utility, iputils-s20160308


這個環境中首先透過 ls 觀察 ping 指令的權限，可以發現是單純的 rwx-r-xr-x，但是 ping 指令是可以正常運作的

```bash=
vagrant@network-lab:~$ ls -l $(which ping)
-rwxr-xr-x. 1 root root 66176 Aug  4  2017 /usr/bin/ping
vagrant@network-lab:~$ ping 8.8.8.8 -c1
PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=1 ttl=93 time=7.85 ms

--- 8.8.8.8 ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 7.851/7.851/7.851/0.000 ms
```

這種情況下 ping 可以運作是因為透過了 [Linux Capabilities](https://man7.org/linux/man-pages/man7/capabilities.7.html) 這個框架賦予該應用程式額外的權限，可以透過 getcap 這個指令來觀察
```bash=
vagrant@network-lab:~$ getcap $(which ping)
/usr/bin/ping = cap_net_admin,cap_net_raw+p
```

從上述的指令可以觀察到 ping 這個應用程式被賦予了 net_admin, net_raw+p(permitted) 這兩個主要權限，這時候透過 strace 去觀察該 ping 指令的運行(strace 預設情況都會忽略 setuid/capabilities, 要用 -u 去處理)，可以看到整個過程很順利基於 SOCK_RAW 去開啟一個 ICMP 協定的 socket，該 socket fd 是 3，後續就針對 3 這個 fd 進行 ICMP 封包的讀寫。

```bash=
vagrant@network-lab:~$ sudo strace -u vagrant ping 8.8.8.8 -c1
....
socket(AF_INET, SOCK_RAW, IPPROTO_ICMP) = 3
....
setsockopt(3, SOL_SOCKET, SO_TIMESTAMP, [1], 4) = 0
setsockopt(3, SOL_SOCKET, SO_SNDTIMEO, "\1\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0", 16) = 0
setsockopt(3, SOL_SOCKET, SO_RCVTIMEO, "\1\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0", 16) = 0
getpid()                                = 32035
...
sendto(3, "\10\0\230\34}#\0\1\271\0217a\0\0\0\0(y\v\0\0\0\0\0\20\21\22\23\24\25\26\27"..., 64, 0, {sa_family=AF_INET, sin_port=htons(0), sin_addr=inet_addr("8.8.8.8")}, 16) = 64
recvmsg(3, {msg_name={sa_family=AF_INET, sin_port=htons(0), sin_addr=inet_addr("8.8.8.8")}, msg_namelen=128->16, msg_iov=[{iov_base="E`\0T\0\0\0\0]\1\247q\10\10\10\10\n\36\233\252\0\0\240\34}#\0\1\271\0217a"..., iov_len=192}], msg_iovlen=1, msg_control=[{cmsg_len=32, cmsg_level=SOL_SOCKET, cmsg_type=SCM_TIMESTAMP, cmsg_data={tv_sec=1630998969, tv_usec=759874}}], msg_controllen=32, msg_flags=0}, 0) = 84
write(1, "64 bytes from 8.8.8.8: icmp_seq="..., 5464 bytes from 8.8.8.8: icmp_seq=1 ttl=93 time=7.96 ms
) = 54
write(1, "\n", 1
)                       = 1
write(1, "--- 8.8.8.8 ping statistics ---\n", 32--- 8.8.8.8 ping statistics ---
) = 32
write(1, "1 packets transmitted, 1 receive"..., 601 packets transmitted, 1 received, 0% packet loss, time 0ms
```

這個時候如果透過 setcap 將 capbility 給拔掉，整個 ping 指令又會不能正常運作了。

```bash=
vagrant@network-lab:~$ sudo setcap -r $(which ping)
vagrant@network-lab:~$ ./ping 8.8.8.8 -c1
ping: socket: Operation not permitted
vagrant@network-lab:~$ sudo strace -u vagrant ping 8.8.8.8 -c1
...
socket(AF_INET, SOCK_DGRAM, IPPROTO_ICMP) = -1 EACCES (Permission denied)
socket(AF_INET, SOCK_RAW, IPPROTO_ICMP) = -1 EPERM (Operation not permitted)
open("/usr/share/locale/locale.alias", O_RDONLY|O_CLOEXEC) = 3
fstat(3, {st_mode=S_IFREG|0644, st_size=2502, ...}) = 0
mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f088dd51000
read(3, "# Locale name alias data base.\n#"..., 4096) = 2502
read(3, "", 4096)                       = 0
close(3)                                = 0
...
write(2, "ping: socket: Operation not perm"..., 38ping: socket: Operation not permitted
...
```



## Ubuntu 20.04

前述兩個環境分別透過 SetUID 與 Capabilities 讓一般使用者都可以順利的使用 PING ，然而下列的實驗環境卻完全不同了

1. Ubuntu 20.04.1 LTS
2. Linux network-lab 5.4.0-58-generic #64-Ubuntu SMP Wed Dec 9 08:16:25 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux
3. ping:  ping from iputils s20190709

該系統下的 ping 指令也沒有賦予 SetUID 的權限，但是 Capabilities 還是有給予 net_raw 的權限，這時候嘗試將該 Capabilities 給移除並且使用 ping 看看。

```bash=
vagrant@network-lab:~$ ls -l $(which ping)
-rwxr-xr-x 1 root root 72776 Jan 30  2020 /usr/bin/ping
vagrant@network-lab:~$ getcap $(which ping)
/usr/bin/ping = cap_net_raw+ep

vagrant@network-lab:~$ sudo setcap -r $(which ping)
vagrant@network-lab:~$ getcap $(which ping)
vagrant@network-lab:~$ ping 8.8.8.8 -c1
PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=1 ttl=63 time=22.2 ms

--- 8.8.8.8 ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 22.150/22.150/22.150/0.000 ms
```

與前述不同的是，就算不給予 SetUID 與 Capabilities， ping 指令也可以正常運作，就算使用最基本的 strace 去觀察 ping 指令也可以正常運作，似乎除了 SetUID 與 Ccapbilities 外還有其他的機制來幫忙處理

```bash=
vagrant@network-lab:~$ strace ping 8.8.8.8 -c1
...
socket(AF_INET, SOCK_DGRAM, IPPROTO_ICMP) = 3
socket(AF_INET6, SOCK_DGRAM, IPPROTO_ICMPV6) = 4
...
sendto(3, "\10\0\v\372\0\0\0\1`\0247a\0\0\0\0\211\274\f\0\0\0\0\0\20\21\22\23\24\25\26\27"..., 64, 0, {sa_family=AF_INET, sin_port=htons(0), sin_addr=inet_addr("8.8.8.8")}, 16) = 64
setitimer(ITIMER_REAL, {it_interval={tv_sec=0, tv_usec=0}, it_value={tv_sec=10, tv_usec=0}}, NULL) = 0
recvmsg(3, {msg_name={sa_family=AF_INET, sin_port=htons(0), sin_addr=inet_addr("8.8.8.8")}, msg_namelen=128->16, msg_iov=[{iov_base="\0\0\23\367\0\3\0\1`\0247a\0\0\0\0\211\274\f\0\0\0\0\0\20\21\22\23\24\25\26\27"..., iov_len=192}], msg_iovlen=1, msg_control=[{cmsg_len=32, cmsg_level=SOL_SOCKET, cmsg_type=SO_TIMESTAMP_OLD, cmsg_data={tv_sec=1630999648, tv_usec=855986}}, {cmsg_len=20, cmsg_level=SOL_IP, cmsg_type=IP_TTL, cmsg_data=[63]}], msg_controllen=56, msg_flags=0}, 0) = 64
write(1, "64 bytes from 8.8.8.8: icmp_seq="..., 5464 bytes from 8.8.8.8: icmp_seq=1 ttl=63 time=21.3 ms
) = 54
write(1, "\n", 1
)                       = 1
write(1, "--- 8.8.8.8 ping statistics ---\n", 32--- 8.8.8.8 ping statistics ---
) = 32
write(1, "1 packets transmitted, 1 receive"..., 601 packets transmitted, 1 received, 0% packet loss, time 0ms
) = 60
write(1, "rtt min/avg/max/mdev = 21.289/21"..., 53rtt min/avg/max/mdev = 21.289/21.289/21.289/0.000 ms
) = 53
close(1)                                = 0
close(2)                                = 0
exit_group(0)                           = ?
+++ exited with 0 +++
```


透過 strace 的觀察結果，我發現呼叫的 syscall 有些微的不同，之前的系統是透過 `socket(AF_INET, SOCK_RAW, IPPROTO_ICMP) = 3` 取得一個基於 RAW Socket 的 ICMP Socket，而新版則是呼叫 `socket(AF_INET, SOCK_DGRAM, IPPROTO_ICMP) = 3`，基於 DGRAM 類型的 ICMP Socket.

針對這個關鍵字去搜尋後可以得到這個最初討論的 Linux Kernel Patch [ipv4: add ICMP socket kind
](https://lwn.net/Articles/420800/)，該 Patch 希望於基於 SOCK_DGRAM 去增加一個全新的 IPPROTO_ICMP 的類型封包，讓收送 ICMP 封包可以不需要透過 RAW Socket 來處理，而是讓 Kernel 幫忙處理掉 ICMP 的封包來回，藉此打造出一個不用權限的 ping 指令。
這也是為什麼第三個環境系統上的 ping 指令不需要任何 SetUID 與 Capabilities 也能夠順利的收送 ICMP 封包，原因就是底層 Kernel 使用的機制不同，從過往的 RAW Socket 改成專門提供 ICMP 服務的 socket。

上述的 Patch 最後還是有加上一些門檻，並非所有使用者都可以直接呼叫 `socket(AF_INET, SOCK_DGRAM, IPPROTO_ICMP)` 來收送 ICMP 封包，只有呼叫者的 GID 符合 net.ipv4.ping_group_range 這個參數的使用者才可以直接呼叫。

以第三個系統來說，可以觀察到
```bash=
vagrant@network-lab:~$ sysctl net.ipv4.ping_group_range
net.ipv4.ping_group_range = 0   2147483647
vagrant@network-lab:~$ id
uid=1000(vagrant) gid=1000(vagrant) groups=1000(vagrant),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),111(lxd),118(lpadmin),119(sambashare),997(docker)
```

該系統內只要使用者的 GID 是介於 0~2147483647 的就可以呼叫該特殊的 socket，基於實驗精神，將該參數改到無法符合當前 vagrant 使用者的 GID 並且再次執行 ping 看看
```bash=
vagrant@network-lab:~$ sudo sysctl -w net.ipv4.ping_group_range="2147483647 2147483647"
net.ipv4.ping_group_range = 2147483647 2147483647
vagrant@network-lab:~$ sysctl net.ipv4.ping_group_range
net.ipv4.ping_group_range = 2147483647  2147483647
vagrant@network-lab:~$  ping 8.8.8.8 -c1
ping: socket: Operation not permitted
```

透過 sysctl 的指令將 `ping_group_range` 的範圍修改成只有 2147483647 可以符合，而 vagrant 這個使用者的 GID 並沒有包含其中，所以這時候的 ping 指令就沒有辦法順利啟動。

最後進行一個小實驗，手動新增一個全新的 group，將其 GID 設定為 2147483647，並命名為 ping_test
接者將 vagrant 使用者加入到該 ping_test 的群組中，再次使用 ping 指令測試看看。

```bash=
vagrant@network-lab:~$ sudo groupadd ping_test -g 2147483647
vagrant@network-lab:~$ sudo usermod -a -G ping_test vagrant
vagrant@network-lab:~$ id
uid=1000(vagrant) gid=1000(vagrant) groups=1000(vagrant),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),111(lxd),118(lpadmin),119(sambashare),997(docker),2147483647(ping_test)
vagrant@network-lab:~$ ping 8.8.8.8 -c1
PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=1 ttl=63 time=15.0 ms

--- 8.8.8.8 ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 15.027/15.027/15.027/0.000 ms
 ```

果不其然的 ping 又可以順利啟動了

透過一系列簡單的實驗觀察了不同系統上三種不同的 ping 實作方式，有趣的讀者也可以觀察一下自己的系統目前是採取何種方式的實作

