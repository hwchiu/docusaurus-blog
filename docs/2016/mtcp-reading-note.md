---
title: mTCP 讀後筆記
date: '2016-08-31 14:39'
comments: true
tags:
  - Network
  - System
  - Paper
---
之前在網路上看到了一篇 paper
[mTCP: A Highly Scalable User-level TCP Stack for Multicore Systems](http://www.ndsl.kaist.edu/~kyoungsoo/papers/mtcp.pdf)
標題覺得還滿有趣的，就花了些時間將其看完，並且用這篇文章當作筆記


Introduction
------------
- 當前的 TCP connection 中，大部分的封包都是小size的，如何快速的處理這些封包是個提升效能的重點
- 根據這篇[論文](http://dl.acm.org/citation.cfm?id=2464442)，在特定的網路環境下(large cellular network)，超過 90% 的 TCP 封包都小於 32KB，超過 50% 的則是小於 4KB。
- 當前的 Linux Kenrl 的架構使得處理小封包的速度沒有很好的表現。
- 目前世界上有很多種方案嘗試解決此問題。
	- 修改 kernel 的，如 MegaPipe, FlexSC
  - 在 user-space 提供高速的 Packet I/O，這部分通常是直接跟網卡操作，跳過 kernel。如 netmap, DPDK, PSIO。
- 上述的方案都難以應用到現有的系統
	- 改 kernel code 對於已經應用的伺服器來說，不是那麼方便
  - user-space library 的缺點
  	1. 沒有實作 TCP stack，所以使用者都要自己想辦法去處理整個data (每個 Layer 自行處理）
  	2. 沒有提供統一的介面，現存的應用程式很難 porting
- 本篇 paper 提出的一個新的架構 mTCP，宗旨就是解決上述所有問題
	- 不修改 kernel, 實作於 user-space
  - 讓現有的應用程式可以容易使用，快速轉換
  	1. 提供良好的 wrapper 給當前的 BSD-socket API，同時也提供 event 相關的(epoll)
  	2. 實作 TCP stack
    3. 架構上要解決當前 kernel 的架構問提，提升整體的處理速度




Current Limitation
------------------
作者在文章中提及當前 linux kernel 的四個問題，這些問題導致當前的 TCP stack 沒有辦法很有效率的處理封包。
####Lack of connection locality
		有不少應用程式會使用 Multi-Thread，這些 threads 會一起共享一個 listen socket's accept queue. 這種情況下這些 thread 彼此間要透過 lock 來搶奪該 socket 的使用權，這邊會使得thread的效率下降
		Kernel 對於 connection locality的不 support 會因為 CPU 的cache miss產生額外的負擔

####Shared file descriptor space
		對於 POSIX-compliant 的 OS 來說， 對於每個 process 來說，其 fd 是共享的，舉例來說每次在創建新的 fd 時，都要去尋找當前最小可用的數字來使用。
    對於一個處理大量連線的忙碌 server 來說，每個 thread 在建立 socket 的時候，就會因為 lock 間的爭奪而產生一個額外的負擔。
    對 socket 也使用 fd 來進行操作，也會對 linux kernel 內的 VFS 造成額外的負擔。（這邊我看不太懂）

####Inefficient per-packet processing
		先前的研究指出，龐大的封包結構(sk_buff),每個封包的記憶體處理以及ＤＭＡ這些行為是小封包處理效率不佳的主因。

####System call overhead
		對於短週期的連線來說，BSD socket API 需要頻繁地在 user/kernel space做切換，根據 FlexSC 和 VOS的研究指出，大量的system call會對 cpu的處理狀態造成混亂(top-level caches, branch prediction table, etc)，因此效能會下降。



Current Solution
----------------
####Lack of connection locality
- Affinity-Accept
- MegaPipe
- Linux kernel's socket option SO_REUSEPORT (after 3.9.4)

####Shared file descriptor space
- MegaPipe

####Inefficient per-packet processing
- User level packet I/O libray
	- Intel DPDK
  - Libzero for DNA
  - netmap

####System call overhead
- FlexSC
-	VOS


Why User-level TCP
------------------
1. 可擺脫和 kernel 的糾纏
	- 當前 kernel 中的架構，因為 fd 的共用，TCP stack 很難從 kernel 中獨立抽出來。
2. 可直接套用當前一些高效率的 packet I/O library，如 netmap, DPDK,etc.
3. 在不修改 kernel 的情況下，可以批次的處理封包。
4. 能夠輕易的支援現存的 application。
	- mTCP 提供了類似 BSD-like 的 socket API.


Design
------
####Introduction
- mTCP 希望在向下支援當前的 multi-threaded, event-driven 應用程式的前提下，提供在多核心系統下有高擴展性的系統
- mTCP 必須要提供 BSD-like 的 socket API 以及 event-driven API，能夠讓現存的應用程式簡單的轉換過去
- mTCP 由兩大物件組成，分別是 **User-level TCP stack** 以及 **Packet I/O library**.

####Implementation
- 對於每一個應用程式來說，mTCP於每個 CPU Core 上運行一個 thread.
<blockquote class="imgur-embed-pub" lang="en" data-id="a/2fQFi"><a href="//imgur.com/2fQFi"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
- mTCP 會透過其 **Packet I/O library**直接對 NIC 處理封包的收送
	- 由於 mTCP 這部分是依賴現存的解決方案，而當前所有的 **Packet I/O library** 都有一個限制，就是每個 NIC 上面只能運行一個 application。
	- 這限制作者相信未來會被解決的。

User-level Packet I/O Library
-----------------------------
#### Introduction
		當前有很多高速的 (100M packets/seconds) packet I/O system 都不適合來實作 Transport-layer stack (such TCP),因為這些 system 的底層都是採用 polliing 的方ㄕ取處理封包，採用 pollung 的方式會浪費 cpu cycle。
		此外，mTCP 希望能夠提供在多網卡狀況下，能夠高效率處理 TX/RX queues 的多工能力。舉例來說，假如系統當前正在等待 control packet 的到來，若此時因為要去 polling RX 封包，就會導致 TX 沒有辦法順利的將封包送出，若 TX 想要送出的是如 ACK/SYN 之類的封包，可能就會觸發 TCP 的重傳機制導致整體速度下降。

    為了解決這個問題， mTCP 這邊採用了 PacketShader I/O engine (PSIO) 來提供高效率的 event-driven packet I/O interface.
		PSIO 使用 RSS 這個技術來達到 flow-level 的封包分配技術，讓每條 connection 的封包都能夠維持在同一個 RX queue中。藉此降低不同 CPU競爭封包的負擔。

#### Implementation
- 提供了與 **select** 類似的 **ps_select**。
	- 此 API 會去監聽有興趣網卡的TX/RX queue事件，與 netmap 提供的 selece/poll 類似

User-level TCP Stack
--------------------
#### Introduction
- 為了減少大量 **system call** 對於 kernel 造成的負擔，必須要將kernel內關於TCP的操作都搬移到 user-space來操作
- 在 mTCP 中，採用一個名為 **zero-thread TCP**來提供此功能，主要的應用程式可以透過簡單的 function call而不是system call來達到一樣的功能，同時有更好的效能。
- 上述設計的唯一限制就是內部 TCP 處理的正確性會依賴於該 application 是如何去呼叫 TCP 相關的 function( timely invocation)
- 在 mTCP 中，採用不同的 thread 來處理上述的問題，應用程式的 thread 跟 mTCP 的 thread 中間是透過一個 share buffer 來交換資料，而 application 只能使用 mTCP 提供的 function 來操作 share buffer。
藉由這種方式，可以確保 TCP 的 data在共用上是安全且正確無誤的.
當應用程式想要修改 share buffer 時，會發送一個 write request 到所謂的 job queue內，接者 mTCP 內的 thread當搶到 CPU 後，會去把 job queue 內的工作取出，然後執行對應的指令。
- 然而，上述的設計其實會因為共用的資料跟mTCP與application的切換而產生額外的負擔，這些負擔反而比傳統的system call還來得龐大
- 接下來的章節，會講述 mTCP 最後如何實作並且克服上述的問題

#### Implementation

##### Basic TCP Processing
<blockquote class="imgur-embed-pub" lang="en" data-id="AMYWvLB"><a href="//imgur.com/AMYWvLB"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
- mTCP Thtread 從網卡的 RX queue 讀取批次資料(batch)後，直接傳給內部的 TCP 邏輯處理。
- 對於每一個封包來說，首先會先搜尋(或創造)對應的 TCP control block(TCB)，此 TCB 會存放於 flow hash table。
以上圖為例，當 server 收到一個對應於其 SYN/ACK 的ACK時，新的 connection 就會被建立，此時會將對應的 TCB 給放到 **accept queue**，同時會在產生一個 **read event** 給對應的 **listen socket**。
在連線建立後，當資料封包到達 mTCP時，mTCP 會將封包的內容給複製一份到 socket 的 **read buffer**，同時也產生一份 **read event** 給對應的 socket，這樣 application 那邊就可以用 **read** 的函式讀取到封包的內容。
- 當 mTCP 處理好所有接收到的封包後，會將所有在 **queue **內的 **event **都推到 application 上的 **queue** 去，同時透過 **signal** 的方式叫起該 application 來處理封包。
- 對於 application 來說，接下來封包的 write 處理都不會產生 content switch，而是會透過 mTCP 的架構將所有要往外送的封包都寫入一個 send buffer 同時也將對應的 tcb 放到 **write queue**內。接下來 mTCP 會收集所有要往外送的 tcb，然後統一放入一個 **send list**中，最後批次的將這些封包直接送到網卡的 **TX queue** 處理。


##### Lock-free, Per-core Data Structures
- 為了減少mTCP threads之間的 CPU 競爭， mTCP 將所有資源(flow pool, socket buffers,etc.)每個 CPU core都放置一份，此外，還可以透過 *RSS*的技術來達到 flow-level 的CPU affinity。
此外，mTCP在 **application** 與 **mTCP **之間使用了 **lock-free** 的資料結構，同時也提供了一種更有效率的方式來管理 TCP timer相關的操作。


**Thread mapping and flow-level core affinity**
Flow-level core affinity 總共分成兩個階段執行
1. packet I/O 這層要確保在當前可用且搭配 *RSS* 的 *CPU* 上去分配 TCP connection，透過此機制可以處理每個 core 上面的 TCP 規模問題。
2. mTCP 對於每個 **application thread**都會產生一個 thread，並且讓這兩個 thread 都處於同一個 physical CPU core上，這樣可以確保**packet**與**flow**的在處理上能夠享有 core affinity。

**Multi-core and cache-friendly data structures**
1. 下列常用的資料結構都會存放在每個 TCP Thread 中保有獨立一份
	- Flow Hash Table
  - Socket Id Manger
  - Pool of TCB
  - socket buffers.
2. 藉由上述資料的安排，能夠大幅減少跨 threads/CPU cores 之間的資料存取，同時提供良好的平行性。
3. 假如今天有一個資料必須要跨 Thread 存取(譬如 mTCP thread 跟 application thread)，首先會先將所有的資料結構對每一個CPU都放一份，然後使用single-producer/single-consumer來達到lock-free data structure的存取
從 application 到 mTCP 來看， mTCP 維護 **write**, **connect** **close** 的 queues，反過來則是維護一個**accept**的 queue。
4. 為了能夠更加利用 CPU cacue 機制，mTCP也會記住目前比較常用的資料結構大小並使其符合CPU cache的機制，然後讓其大小對齊於CPU的 cache line 大小
舉例來說，TCB會被分成兩個部分，第一個部分是 64 bytes，存放了最常使用到的欄位以及兩個指標指向剩下比較少用到的部分，分別是128以及192 bytes
5.為了將記憶體要求與釋放造成的負擔最小化，mTCP會在每個core都去要求記憶體來存放**TCB**與**socket buffers**，
此外，由於**TCB**存取模式很隨機，為了降低**TCB**在 **TLM** miss 的機率，於是使用了大量的 page，並且將 tcb 與 hash table index 相關的資訊都放入pages中。

**Efficient TCP timter management:**
1. 在 TCP 的運作過程中，有三個地方需要有 timrer 的處理
	- 重傳的 timeout
  - connection 在TIME_WAIT狀態時的等待
  - connection keep-alive 的檢查

mTCP 提供了兩種模式的 timers，一種是以排序的list來管理，另外一種則是以hash table來管理。
對於**coarse grain timers**來說(如TIME_WAIT, keep-alive check)，mTCP使用一個 list來記住所有tcb，並且依據其timeout的值來進行排序。(要維護這個 sorting list是簡單的事情，因為每次要被加進來的新TCB，其timeout一定是比當前list內的還要大)
mTCP每一秒都會進行確認，檢查該 list 內是否有 tcb 已經過時需要被處理了。
對於**fine-grained retransmission timers**來說，mTCP使用了 hash table 來找查 tcb，而使用的 key 則是當前剩下的時間(使用milliseconds為單位)。當一個 hash bucket的時間到達時，就會一口氣將bucket內所有的 **tcbs**一起進行處理。

##### Batched Event Handling
<blockquote class="imgur-embed-pub" lang="en" data-id="a/hHYNf"><a href="//imgur.com/hHYNf"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
- mTCP 藉由batch的方式一口氣處理多個 flow event，藉此可以降低大量 event 造成的 content switch。
- 當 mTCP 收到封包時，會自己產生一個 flow-level event，最後會統一將該 event 通知到 application。如上圖所示
若 application 要送封包時，會把所有的 write event 放到 write queue，之後 mTCP 會從 queue 內將 jobs取出，然後一口氣送到 NIC 的 TX queue去處理。
- 這部分的並不是獨創的想法，目前**MegaPipe**,**VOS**都有實作這功能

##### Optimizing for Short-lived Connections
mTCP 採用了兩個方式來最佳化小封包的傳輸，分別是
**Priority-based packet queueing** 以及**Lightweight connection setup**。

##### Priority-based packet queueing
對於TCP連線來說，控制封包(SYN/ACK)不但是個小封包的傳輸，也對整個傳輸速率扮演很重要的角色，因此SYN/ACK能夠愈早送到對方是愈好的。
然後當系統中有大量的資料封包要傳輸時，這些控制封包可能就會因為要競爭 TX queue 而提高了 queueing dealy。
mTCP為了解決這個問題，決定導入Priority的概念來處理封包，針對這些控制封包給予更高的優先權，能夠盡早的往外送，
外了達成這個概念，在TX部分實作了三種list，每種list分別存放不同種類的封包，分別是 Control, Ack, Data 三種。
當要把封包推向TX queue的時候，會依此順序將三個 list 的封包從TX queue 送出，藉此避免這些重要封包會有過大的queueing delay。

##### Lightweight connection setup
根據研究發現，在建立起整個 TCP connection 過程中，有很大一部份的負擔都是在於要配置記憶體給TCB以及Socket Buffer。
當同時有多個thread呼叫**malloc**,**free**時，kernel內的記憶體管理者會很忙碌地來服務每個thread的請求。
為了解決這個問題，mTCP會事先從kernel配置一個很大的記憶體池，當有任何Thread想要配置記憶體時，就可以直接從該記憶體池中去存取，
