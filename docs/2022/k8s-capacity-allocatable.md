---
slung: k8s-resource-management
title: 'Kubernetes, system-reserved, kube-reserved, cgroup 與 capacity, allocatable 的複雜關係'
keywords: [Kubernetes, resource management, CPU, Memory]
tags:
  - Kubernetes
  - DevOps
description: kubelet 上關於資源控管的幾個參數探討
author: hwchiu
date: 2022-01-12 23:33:12
---

# 前言
玩過 Kubernetes 的玩家大概都知道 Pod 裡面都可以透過 Request/Limit 的方式來限制單一Pod 針對 CPU, Memory 的用量，而 Kubernetes
會根據這些使用量幫忙分發這些 Pod 到符合需求的節點上，不考慮其他各種條件下，一個最基本的條件就是節點上要有足夠的 CPU/Memory 供目標 Pod 使用。

透過 kubectl describe node 可以觀察到每個節點上的資源分配，其中關於資源分配有兩個重要的概念分別是 Capacity 與 Allocatable，而本篇文章就來仔細研究一下這兩個
概念的差異以及實務上要注意的地方有哪些。

對於一個 Kubernetes 的節點來說，資源量通常會包含 CPU, Memory, Ephemeral-Storage 等，而節點本身擁有的總量就會稱為 Capacity，而能夠分配給 Kubernetes Pod 的總量則會稱為
Allocatable。

透過 kubectl describe node 都可以到這些資料，譬如透過 kubeadm 安裝的預設叢集資訊如下
註: 本篇文章所有環境都基於 Kubernetes v1.21.8

```bash
Capacity:
  cpu:                2
  ephemeral-storage:  64800356Ki
  hugepages-2Mi:      0
  memory:             4039556Ki
  pods:               110
Allocatable:
  cpu:                2
  ephemeral-storage:  59720007991
  hugepages-2Mi:      0
  memory:             3937156Ki
  pods:               110
```

上述的資料是由每個節點上的 kubelet 維護而回傳的，以 kubelet 來說， Capacity 與 Applicatable 之間的關係是如下


`Capacity = Allocatable + System-Reserved + Kube-Reserved + Eviction-Thresholds`

![](https://i.imgur.com/Okle0jI.png)

# System-Reserved
作為一個 Kubernetes 節點，其本身除了幫 Kubernetes 運行各種容器外本身系統上也會有一些服務要運行，譬如 sshd, dhclient 等各種系統服務，以 CPU 的概念來說
如果今天將節點上所有的 CPU 都分配給 Kubernetes Pod 使用，那有沒有可能節點上的系統應用，如 sshd 等就沒有足夠的 CPU 去維持基本運作？
而上述的 System-Reserved 就是針對這個情境設計的，主要是讓 kubelet 知道請預留一些系統資源給系統相關服務，不要將所有的節點資源都分配給 Pod 使用。

預設值: 除非特別指定，否則預設不開
設定: kubelet 透過 --system-reserved 來設定不同資源量

# Kube-Reserved
與 System-Reserved 概念完全一樣，不過 Kube-Reserved 的目的則是針對任何與 Kubernetes 互動的應用，最簡單的範例就是 kubelet 這個應用程式，透過這個參數可以稍微地讓
kubelet 彈性一點的去設計資源用量，針對 system(系統應用)與 kube(k8s 相關應用)等資源控制

預設值: 除非特別指令，否則預設不開
設定: kubelet 透過 --kube-reserved 來設定不同資源量


# Evicition-Thresholds
舉例來說，當節點上 Memory 使用過多時，就有可能會產生 OOM 的情況導致系統上的正在運行的 K8s Pod 被 Kernel 給刪除，為了盡量減少這個問題的發生可能性， kubelet
發現節點資源快不夠時就會開始將運行的 Pod 給踢出去，讓 Scheudler 想辦法將該 Pod 給調度到其他資源比較充沛的節點去運行。
所以 Eviction Thresholds 就是一個資源門檻，當系統資源低於該門檻時就會觸發剔除機制

預設值: 預設打開，Memory 是 100MiB, Ephemeral-Storage 是 10%
設定: kubelet 透過 --eviction-hard 來設定不同資源量

有了基本概念後來看一下上述的概念

```
Capacity:
  cpu:                2
  ephemeral-storage:  64800356Ki
  hugepages-2Mi:      0
  memory:             4039556Ki
  pods:               110
Allocatable:
  cpu:                2
  ephemeral-storage:  59720007991
  hugepages-2Mi:      0
  memory:             3937156Ki
  pods:               110
```

這邊分析幾個重要的節點資源
- CPU: 沒有差異
- Memory: 4039556Ki-3937156Ki, 差額是 102400Ki, 也就是 100Mi
- Ephemeral-Storage: 64800356Ki - 59720007991 Byte, 先將前者轉為 Byte 乘上 12，這時候就是
`Capacity:66355564544`, `Allocatable: 59720007991`, 所以 59720007991/66355564544 大約是 0.8999999851 也就是 0.9
所以真正能夠配置的容量只有 90%

註: Mi, Ki, Gi 都是基於 1024

前述的 Memory/Ephemeral-Storage 的基本用量都是被 Evicition Threshold 給佔走。
這時候嘗試針對 Kube-Reserved, System-Reserved 以及 evictionHard 三個參數來設定看看

註: Eviction Threshold 的設定實際上透過 evictionHard 的參數

針對 /var/lib/kubelet/config.yaml 加入下列內容
```yaml
systemReserved:
  memory: 500Mi
  cpu: 250m
kubeReserved:
  memory: 1Gi
  cpu: 500m
evictionHard:
  memory.available: 200Mi
  nodefs.available: 20Gi
```
並且透過 `sudo systemctl restart kubelet` 重啟 kubelet 來載入新設定，一切都完畢後就透過 `kubectl describe node` 觀察一下變化

```
Capacity:
  cpu:                2
  ephemeral-storage:  64800356Ki
  hugepages-2Mi:      0
  memory:             4039556Ki
  pods:               110
Allocatable:
  cpu:                1250m
  ephemeral-storage:  43828836Ki
  hugepages-2Mi:      0
  memory:             2274180Ki
  pods:               110
```

先計算一下我們的設定會使用多少系統資源如下表
注意的是 Memory 有 Gi 與 Mi，而 1Gi 則是 1024 Mi，所以總額是 1724 Mi

| 資源類型  | SystemReserved | KubeReserved | EvictionHard |   總共 |
| --------  | -------------- | ------------ | ------------ | -- --- |
| CPU     | 250m     | 500m     |  0 | 750m |
| Memory     | 500Mi     | 1Gi     |  200Mi | 1724Mi |
| Ephemeral-storage     | 0     | 0     |  20Gi | 20Gi |


有個基本概念後就來計算一下實際上的差異吧

- CPU 部分 2 代表 2000m, 所以差額很簡單就是 750m
- Memory 部分先使用 Ki 進行運算，相減得到 1765376 Ki, Ki/1024 會得到 Mi，所以 1765376Ki/1024 = 1724 Mi
- Storage 的話也是先用 Ki 運算會得到 20971520Ki, 將這個 Ki/1024/1024 會得到 Gi，所以 20971520/1024/1024= 20Gi

| 資源類型 | Capacity | Allocatable |      差額 |
| -------- | -------- | ----------- | --------- |
| CPU      | 2        | 1250m       | 750m      |
| Memory   | 4039556Ki     | 2274180Ki     |  1724Mi |
| Ephemeral-storage     | 64800356Ki     | 43828836Ki     |  20Gi |


經過驗算結果完全符合預期，以一張圖來概括上述的概念

![](https://i.imgur.com/h5xkn15.png)


# Enfore Node Allocatable
上述瞭解了基本 Capacity 與 Allocatable 的基本概念與計算方式後，下一個來瞭解的就是更為細節的應用程式控管。

實際上 system-reserved 與 kube-reserved 這兩個參數的含義是
「請求 kubelet 根據 system-reserved 與 kube-reserved 的參數幫我預留系統資源，避免 Kubernetes Pod 佔用過多資源。」

這時候先問幾個問題來思考
1. 系統應用程式或是 Kubernetes 相關應用程式如果用超過設定(system-reserved, kube-reserved) 的系統資源，會發生什麼事情？
2. 什麼樣的應用程式歸類於 system-reserved? 什麼樣的應用程式歸類於 kube-reserved?
3. 自行開發的應用程式可以加入到其中一個類別嗎？

預設情況下，上述的答案是
1. 沒有事情，什麼都不會發生
2. 因為超過也不會發生任何事情，所以到底有誰也沒有意義
3. 因為超過也不會發生任何事情，所以自己的應用程式要不要被納管也沒有意義

如果希望(1)可以有所作為，譬如應用程式用太多就把他砍掉，那該怎麼做？

這時候就要使用 kubelet 的另外一個參數 `--enforce-node-allocatable `，這個參數有三個參數可以組合使用，分別是
pods, system-reserved 以及 kube-reserved 。

該參數的意義是「哪些類型的資源超過用量要被系統幹掉」，預設值是 Pods，這也是為什麼 Pod 如果有透過 request/limit 等設定一些用量但是卻超過時可能就會觸發 OOM 然後被系統直接砍掉
而 system-reserved 與 kube-reserved 預設都不會被設定，所以用超過量也沒有任何問題。

而實作上 kubelet 也不參與任何監控與刪除應用程式的決策，只是單純根據設定把一切都交給 cgroup，讓 kernel 來幫忙處理，所以如果你看文件的話會告說如果想要於 enforce-node-allocatable
中設定 system-reserved 與 kube-reserved 的話，你也必須要設定 --kube-reserved-cgroup, --system-reserved-cgroup 這兩個參數。

註:
- 上述兩個參數預設都是空白，所以要使用一定要設定
- 本文就不介紹 cgroup 的概念，直接假設讀者都有基本概念

加入以下資料到 /var/lib/kubelet/config.yaml
``` yaml
systemReservedCgroup: /system.slice
enforceNodeAllocatable:
  - pods
  - system-reserved
```

上述範例是告訴 kubelet 請幫我針對 system-reserved 群組的應用程式進行容量控管，另外 system-reserved 的定義就是所以 /system.slice 這個 cgroup 路徑下的應用程式。
我的 Ubuntu 18.04 環境中， /system.slice 關於 CPU 則有下列應用程式
``` bash
○ → lscgroup cpu:/system.slice
cpu,cpuacct:/system.slice/
cpu,cpuacct:/system.slice/irqbalance.service
cpu,cpuacct:/system.slice/systemd-update-utmp.service
cpu,cpuacct:/system.slice/vboxadd-service.service
cpu,cpuacct:/system.slice/lvm2-monitor.service
cpu,cpuacct:/system.slice/systemd-journal-flush.service
cpu,cpuacct:/system.slice/containerd.service
cpu,cpuacct:/system.slice/systemd-sysctl.service
cpu,cpuacct:/system.slice/systemd-networkd.service
cpu,cpuacct:/system.slice/systemd-udevd.service
cpu,cpuacct:/system.slice/lxd-containers.service
cpu,cpuacct:/system.slice/cron.service
cpu,cpuacct:/system.slice/sys-fs-fuse-connections.mount
cpu,cpuacct:/system.slice/networking.service
cpu,cpuacct:/system.slice/sys-kernel-config.mount
cpu,cpuacct:/system.slice/docker.service
cpu,cpuacct:/system.slice/polkit.service
cpu,cpuacct:/system.slice/systemd-remount-fs.service
cpu,cpuacct:/system.slice/networkd-dispatcher.service
cpu,cpuacct:/system.slice/sys-kernel-debug.mount
cpu,cpuacct:/system.slice/accounts-daemon.service
cpu,cpuacct:/system.slice/systemd-tmpfiles-setup.service
cpu,cpuacct:/system.slice/kubelet.service
cpu,cpuacct:/system.slice/console-setup.service
cpu,cpuacct:/system.slice/vboxadd.service
cpu,cpuacct:/system.slice/systemd-journald.service
cpu,cpuacct:/system.slice/atd.service
cpu,cpuacct:/system.slice/systemd-udev-trigger.service
cpu,cpuacct:/system.slice/lxd.socket
cpu,cpuacct:/system.slice/ssh.service
cpu,cpuacct:/system.slice/dev-mqueue.mount
cpu,cpuacct:/system.slice/ufw.service
cpu,cpuacct:/system.slice/systemd-random-seed.service
cpu,cpuacct:/system.slice/snapd.seeded.service
cpu,cpuacct:/system.slice/rsyslog.service
cpu,cpuacct:/system.slice/systemd-modules-load.service
cpu,cpuacct:/system.slice/blk-availability.service
cpu,cpuacct:/system.slice/systemd-tmpfiles-setup-dev.service
cpu,cpuacct:/system.slice/rpcbind.service
cpu,cpuacct:/system.slice/lxcfs.service
cpu,cpuacct:/system.slice/grub-common.service
cpu,cpuacct:/system.slice/ebtables.service
cpu,cpuacct:/system.slice/snapd.socket
cpu,cpuacct:/system.slice/kmod-static-nodes.service
cpu,cpuacct:/system.slice/run-rpc_pipefs.mount
cpu,cpuacct:/system.slice/lvm2-lvmetad.service
cpu,cpuacct:/system.slice/docker.socket
cpu,cpuacct:/system.slice/apport.service
cpu,cpuacct:/system.slice/apparmor.service
cpu,cpuacct:/system.slice/systemd-resolved.service
cpu,cpuacct:/system.slice/system-lvm2\x2dpvscan.slice
cpu,cpuacct:/system.slice/dev-hugepages.mount
cpu,cpuacct:/system.slice/dbus.service
cpu,cpuacct:/system.slice/system-getty.slice
cpu,cpuacct:/system.slice/keyboard-setup.service
cpu,cpuacct:/system.slice/systemd-user-sessions.service
cpu,cpuacct:/system.slice/systemd-logind.service
cpu,cpuacct:/system.slice/setvtrgb.service
```

從上述的檔案名稱應該可以看到滿滿的系統服務。

修改完畢 kubelet 後重啟會發現 kubelet 啟動失敗，觀察 log 會得到一個告知 `/system.slice` 路徑不存在的錯誤
``` bash
kubelet.go:1391] "Failed to start ContainerManager" err="Failed to enforce System Reserved Cgroup Limits on \"/system.slice\": [\"system.slice\"] cgroup does not exist"
```

實際上這個問題是 `kubelet 會嘗試從眾多 cgroup 子系統去找，只要有一個沒有存在就直接當錯誤`，根據下列的[原始碼](https://github.com/kubernetes/kubernetes/blob/c1e69551be1a72f0f8db6778f20658199d3a686d/pkg/kubelet/cm/cgroup_manager_linux.go#L257-L305)

``` go

func (m *cgroupManagerImpl) Exists(name CgroupName) bool {
	if libcontainercgroups.IsCgroup2UnifiedMode() {
		cgroupPath := m.buildCgroupUnifiedPath(name)
		neededControllers := getSupportedUnifiedControllers()
		enabledControllers, err := readUnifiedControllers(cgroupPath)
		if err != nil {
			return false
		}
		difference := neededControllers.Difference(enabledControllers)
		if difference.Len() > 0 {
			klog.V(4).InfoS("The cgroup has some missing controllers", "cgroupName", name, "controllers", difference)
			return false
		}
		return true
	}

	// Get map of all cgroup paths on the system for the particular cgroup
	cgroupPaths := m.buildCgroupPaths(name)

	// the presence of alternative control groups not known to runc confuses
	// the kubelet existence checks.
	// ideally, we would have a mechanism in runc to support Exists() logic
	// scoped to the set control groups it understands.  this is being discussed
	// in https://github.com/opencontainers/runc/issues/1440
	// once resolved, we can remove this code.
	allowlistControllers := sets.NewString("cpu", "cpuacct", "cpuset", "memory", "systemd", "pids")

	if _, ok := m.subsystems.MountPoints["hugetlb"]; ok {
		allowlistControllers.Insert("hugetlb")
	}
	var missingPaths []string
	// If even one cgroup path doesn't exist, then the cgroup doesn't exist.
	for controller, path := range cgroupPaths {
		// ignore mounts we don't care about
		if !allowlistControllers.Has(controller) {
			continue
		}
		if !libcontainercgroups.PathExists(path) {
			missingPaths = append(missingPaths, path)
		}
	}

	if len(missingPaths) > 0 {
		klog.V(4).InfoS("The cgroup has some missing paths", "cgroupName", name, "paths", missingPaths)
		return false
	}

	return true
}
```

kubelet 會於我的系統中去找 cpu, cpuacct, cpuset, memory, systemd, pids, hugetlb 這些子系統，很不幸我的系統中
cpuset, hugetlb, systemd 並沒有包含 /system.slice 這個路徑，這邊可以透過 mkdir -p 的方式創建 cgroup 的關係

這意味如果要使用這個參數來控制時，要好好設定目標的 cgroup 路徑才可以正常啟動 kubelet

```bash
○ → mkdir -p /sys/fs/cgroup/hugetlb/system.slice
○ → mkdir -p /sys/fs/cgroup/cpuset/system.slice
○ → mkdir -p /sys/fs/cgroup/systemd/system.slice
○ → systemctl restart kubelet
```

一切都正常執行完畢後就可以透過 cgroup 的指令來檢查前述設定的 system-reserved 資源是否都有被設定到對應的 cgroup 上

先複習一下先前的表格

| 資源類型 | SystemReserved | KubeReserved |      EvictionHard |   總共 |
| -------- | -------- | -------- | --- |  --- |
| CPU     | 250m     | 500m     |  0 | 750m |
| Memory     | 500Mi     | 1Gi     |  200Mi | 1724Mi |
| Ephemeral-storage     | 0     | 0     |  20Gi | 20Gi |

SystemReserved 的 cpu 是 250m, 而 Memory 是 500Mi

```bash
○ → cat /sys/fs/cgroup/cpu/system.slice/cpu.shares
256
○ → cat /sys/fs/cgroup/memory/system.slice/memory.limit_in_bytes
524288000
```

這邊可以看到 CPU 是 256，以 1024 為單位去計算就是 25% 也就是 250m 的單位
而 Memory 的單位是 bytes，524288000/1024/1024 = 500Mi
可以看到 CPU 的設定完全與前述的設定一致，為了二次求證打開 kubelet 設定修改成不同的數值再次觀察

```yaml
systemReserved:
  memory: 1Gi
  cpu: "1"
```

```bash
○ → cat /sys/fs/cgroup/cpu/system.slice/cpu.shares
1024
○ → cat /sys/fs/cgroup/memory/system.slice/memory.limit_in_bytes
1073741824
```

這時候可以看到 cpu.shares 符合設定的 "1"，而 memory 則是 1024^3，也就是 1Gi.

所以這種情況下該 cgroup /system.slice 就會受到 cgroup 的控管確保其使用資源量不會超過設定。

講了這麼多回到前述三個問題
1. 系統應用程式或是 Kubernetes 相關應用程式如果用超過設定(system-reserved, kube-reserved) 的系統資源，會發生什麼事情？
2. 什麼樣的應用程式歸類於 system-reserved? 什麼樣的應用程式歸類於 kube-reserved?
3. 自行開發的應用程式可以加入到其中一個類別嗎？

充分理解後答案就是
1. 看你有沒有透過 enforce-node-allocatable 讓 kubelet 請 kernel cgroup 幫忙控管
2. 透過 system-reserved-cgroup 與 kube-reseved-cgroup 兩個參數來指定 cgroup 路徑
3. 將你的應用程式加入到對應的 cgroup 群組，請記得不同的資源是不同的路徑


最後，如果你對這些設定有興趣也認為似乎可以更佳控管系統資源用量，請務必先行測試並且確認自己了解 cgroup 的一切概念，以免未來除錯時完全不知道該從何下手
此外，針對 system-reserved, kube-reserved 等應用程式的系統用量，請先用監控系統長期觀察獲得一個概念後再來設定
同時要抱持者一旦開啟這兩個設定，這些應用程式是有機會被 OOM 移除的心理準備與認知，以免到時候發生問題時一問三不知，不知道發生什麼事情

