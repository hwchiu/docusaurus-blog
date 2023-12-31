---
title: Linux-Kernel-PacketCapture
date: '2013-04-01 13:30'
comments: true
tags:
  - System
  - Kernel
  - Network
---

最近突然對抓封包挺有興趣的，正好以前修網際網路規約時，有trace過linux中TCP/IP相關的code

所以這次就來嘗試看看自己分析封包。

第一個方式就是重編kernel,直接在kernel中寫CODE，但是這樣的缺點就是重編kernel太消耗時間了，
每次修改都要等個十多分鐘，實在不是很有效益，所以這個方案直接放棄

而我採用的方法是利用kernel module的方式，自己先在kernel中加入自定義function,接收來自上層的封包，然後再透過修改kernel module的方式來分析取得的封包，這樣的話，我只有一開始需要重編kernel，後續都直接修改kernel module，編譯速度飛快，效率就高得許多。

使用的資訊版本如下
**linux:2.6.32**
**function name: myPacket**

#Step1
在送出封包的function中，加入我們自定義function的使用,所以目標就是位於
**/net/core/dev.c**中的`dev_queue_xmit`這個function，修改如下

1. 先加入一個function pointer,參數是sk_buff,回傳int
2. 在function中，判斷function pointer是否有值，有的話就執行該function,並把sk_buff傳入
```c

	int(*myPacket)(struct sk_buff*)=0;

	int dev_queue_xmit(struct sk_buff *skb)
	{
		if(myPacket)
		{
			myPacket(skb);
		}
		...ignore
	}

```
#Step2
接者我們要讓kernel module知道有myPacket這個function存在所以在**/net/core/sock.c**這個檔案中


1. 以extern的方式宣告該function pointer
2. 過EXPORT_SYMBOL這個marco來把這個function 給export到外部的kernel module讓其使用

	extern int(*myPacket)(strcut sk_buff*)=0;
	EXPORT_SYMBOL(myPacket);


#Step3
**kernel重編!!**

#Step4
最後，就開始撰寫我們的kernel module

1. 先寫一個簡單kernel module
2. 自定義一個處理function myPacketAnalyze
3. extern 剛剛的myPacket function pointer
4. 讓myPacket 給指向自定義的myPacketAnalyze
5. 撰寫myPacketAnalyze
6. 我想要看看該封包的ip header information

``` c
	#include <linux/module.h>
	#include <linux/kernel.h>
	#include <linux/skbuff.h>
	#lnclude <linux/ip.h>
	extern int(*myPacket)(strcut sk_buff*)=0;
	int myPacketAnalyze(struct sk_buff* skb)
	{
		struct iphdr *iph;
		iph = ip_hdr(skb);
		printk("version = %d\n",iph->version);
		printk("header_len = %d\n",iph->ihl);
		printk("tos = %d\n",iph->tos);
		printk("total_len = %hu\n",iph->tot_len);
		printk("id = %hu\n",iph->id);
		printk("frag = %hu\n",(iph->frag_off)<<13);
		printk("frag_off = %hu\n",iph->frag_off&0x1111111111111);
		printk("protocol = %d\n",iph->protocol);
		printk("ttl = %d\n",iph->ttl);
		printk("souce_addr = %u.%u.%u.%u\n",NIPQUAD(iph->saddr));
		printk("dest_addr = %u.%u.%u.%u\n",NIPQUAD(iph->daddr));
	}
	int init_module(void)
	{
		myPacket = myPacketAnalyze;
		return 0;
	}
	void cleanup_module(void)
	{
		myPacket = 0;
	}


```

#Step4
這邊簡單介紹一下IP HEADER
![](https://lh3.googleusercontent.com/-bx6mrN_NVGw/UdAlum_Ad_I/AAAAAAAAAsw/Er2dWeUWg7o/w880-h559-no/ipheader.jpg)



Version:4bit,代表者IP的版本，目前是4or6 代表ipv4 ipv6。

Header Length:4bit 代表header的長度，單位是4BYTE，最小值是5(20BYTE)，若IP HEADER中有其他options，則值會更大。

Type of Service (tos):8bit，代表QOS跟TOS，可用來調整優先權。

Total Lngth: 16bit, 代表ip header的長度(header + data),單位是byte

Identifier(ID): 16bit,會跟flag & fragment offset 一起使用，對封包進行fragment的操作。

flag: 3bit，目前使用兩個bit,分別代表Don't Fragments(DF)跟More Fragments(MF),
用來告知此封包的分段資料。

Fragment Offset:13bit,這個被分段封包在整個完整封包中的位置。

Time to live: 8bit,控制封包傳送節點的次數，每通過一個router就減一，當TTL為0時，就丟棄該

Protocol: 8bit,代表此封包使用的協定。

	enum {
	  IPPROTO_IP = 0,               /* Dummy protocol for TCP               */
	  IPPROTO_ICMP = 1,             /* Internet Control Message Protocol    */
	  IPPROTO_IGMP = 2,             /* Internet Group Management Protocol   */
	  IPPROTO_IPIP = 4,             /* IPIP tunnels (older KA9Q tunnels use 94) */
	  IPPROTO_TCP = 6,              /* Transmission Control Protocol        */
	  IPPROTO_EGP = 8,              /* Exterior Gateway Protocol            */
	  IPPROTO_PUP = 12,             /* PUP protocol                         */
	  IPPROTO_UDP = 17,             /* User Datagram Protocol               */
	  IPPROTO_IDP = 22,             /* XNS IDP protocol                     */
	  IPPROTO_DCCP = 33,            /* Datagram Congestion Control Protocol */
	  IPPROTO_RSVP = 46,            /* RSVP protocol                        */
	  IPPROTO_GRE = 47,             /* Cisco GRE tunnels (rfc 1701,1702)    */

	  IPPROTO_IPV6   = 41,          /* IPv6-in-IPv4 tunnelling              */

	  IPPROTO_ESP = 50,            /* Encapsulation Security Payload protocol */
	  IPPROTO_AH = 51,             /* Authentication Header protocol       */
	  IPPROTO_BEETPH = 94,         /* IP option pseudo header for BEET */
	  IPPROTO_PIM    = 103,         /* Protocol Independent Multicast       */

	  IPPROTO_COMP   = 108,                /* Compression Header protocol */
	  IPPROTO_SCTP   = 132,         /* Stream Control Transport Protocol    */
	  IPPROTO_UDPLITE = 136,        /* UDP-Lite (RFC 3828)                  */

	  IPPROTO_RAW    = 255,         /* Raw IP packets                       */
	  IPPROTO_MAX
	};


Source IP: 來源端IP位置

Destination IP:收端IP位置

Options: 控制項，可有可無，包含LSR、SSR、RR、TS。



寫完kernel module並且編譯掛上module後，我首先想先觀察看看ping的封包，於是我執行下列指令

	ping 140.113.235.81
接者到/var/log/message去看訊息，看看印出來的資訊如何

	version =4
	header_len =5
	tos  = 0
	total_len = 21504
	id =0
	frag = 0
	frag_off = 64
	protocl = 1
	ttl = 64
	souce_addr = 140.113.214.84
	dest_addr = 140.113.235.81

可以看到version=4,代表ipv4，protocol = 1 就是icmp的封包
而因為沒有options，所以header_len是5
其中最令我那悶的是那封包長度，竟然是兩萬多byte.....
現在還想不透為什麼

經由wireshark幫忙檢查驗證後，發現是我的寫法寫錯了，myPacketAnalyze給重新寫過

```c

	int myPacketAnalyze(struct sk_buff* skb)
	{
		struct iphdr *iph;
		iph = ip_hdr(skb);
		printk("version = %d\n",iph->version);
		printk("header_len = %d\n",iph->ihl);
		printk("tos = %d\n",iph->tos);
		printk("total_len = %hu\n",ntohs(iph->tot_len));
		printk("id = %hu\n",ntohs(iph->id));
		printk("frag = %hu\n",(nthos(iph->frag_off))>>13);
		printk("frag_off = %hu\n",(ntohs(iph->frag_off))&0x1111111111111);
		printk("protocol = %d\n",iph->protocol);
		printk("ttl = %d\n",iph->ttl);
		printk("souce_addr = %u.%u.%u.%u\n",NIPQUAD(iph->saddr));
		printk("dest_addr = %u.%u.%u.%u\n",NIPQUAD(iph->daddr));
	}
```

輸出為

	version =4
	header_len =5
	tos  = 0
	total_len = 84
	id =0
	frag = 2
	frag_off = 0
	protocl = 1
	ttl = 64
	souce_addr = 140.113.214.84
	dest_addr = 140.113.235.81

原因是我忘了去使用ntohs去轉換byte order,所以
	84:   00000000 01010100
	21504:01010100 00000000
轉換後的結果就比較正常，且令人信服
接下來想嘗試看看修改TCP|IP header的資訊，然後利用簡單的TCP server/client來測試相關，之後有弄再補上。
