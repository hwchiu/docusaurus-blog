---
title: '閱讀筆記: 「基於 eBPF 的 ServiceMesh」'
authors: hwchiu
tags:
  - Reading
  - eBPF
  - ServiceMesh
description: 「基於 eBPF 的 ServiceMesh」
date: 2022-05-11 00:05:08
---

標題: 「基於 eBPF 的 ServiceMesh」
類別: networking
連結: https://isovalent.com/blog/post/2021-12-08-ebpf-servicemesh

本篇文章是 2021末 由 Cilium 背後的 isovalent 公司團隊所發表的文章，主要探討一個全新的 Service Mesh 的架構可能帶來的好處，整篇文章以 Cillium + eBPF 為背景去探討
我認為如果對於 eBPF 沒有全面理解的情況下，其實只能讀懂這篇文章想要帶來的果，沒有辦法去理解到底整體實作與運作原理，同時因為 eBPF 本身的用途除了網路(Cilium)之外有愈來愈多的底層除錯工具都是透過 eBPF 的概念來實作的，因此學習 eBPF 的概念其實帶來的好處很多，有空的都推薦大家花點時間去學習。

本文主要分成幾個部分
1. 什麼是 Service Mesh 以及目前的主流做法
2. 聊一下 Linux 網路傳輸的歷史發展
3. 基於 eBPF 的 Service Mesh 架構
4. 不同架構下的差異以及可能的隱性成本

隨者分散式應用程式架構的興起，如何針對這些散落各地的應用程式提供關於網路連線方面的資訊一直以來都是維運上的問題，過往最簡單的方式就是針對各種開發環境導入相關框架
每個應用程式都需要修改來整合這些框架，但是隨者整個架構發展與要求愈來愈多，譬如開發環境有不同程式語言，甚至有不可修改的第三方應用程式，除了網路監控外還想要導入認證授權，負載平衡等各種功能
要求每個應用程式開發者引用這些框架已經沒有辦法漂亮的滿足所有需求，因此一個能夠無視應用程式本體的透明性框架架構就變成眾人追捧與渴望的解決方案。

現今大部分的 Service Mesh 就是採取這種透明性的架構，透過額外 Proxy 來攔截應用程式的封包進行後續管理與監控，使得
1. 應用程式開發者專注自己的商業邏輯開發
2. 第三方不可修改應用程式也可以導入這些進階網路功能

以 kubernetes 來說，目前主流都是透過 sidecar 的概念，讓每個應用程式旁邊都放一個 Proxy 的應用程式，同時基於 Pod 內 Containers 可以使用 localhost 互通的方式來處理連線。
應用程式本身都透過 localhost 打到 Proxy，而所有對外連線都讓 Proxy 幫忙處理，因此所有的進階功能都實作於該 Proxy 上。

Isovalent 認為這種方式功能面上可行，但是認為如果導入 Sidecar 其實有很多隱性成本
1. 根據測試不管哪種 Service Mesh/Proxy 的解決方案都會使得真正連線的 Latency 提高 3~4 倍，這主因是 Linux Kernel 的架構導致，所有的網路封包
都必須要於 Linux Kernel Network Stack 來回繞行很多次，封包這種東西來回本身又會牽扯到 Context Switch, Memory Copy 等各種成本，所以整體 Latency 的提升是不可避免的。
2. 系統的額外資源需求，每個 Pod 都需要一個額外的 Proxy 來處理，以一個 500 節點，同時每個節點都有 30 Pod 來說，整個環境就要額外部署 15,000 的 Proxy 的 Container，每個 Container 消耗 50MB 就至少要額外 750G 的記憶體，
同時也要注意隨者 Pod/Node 等數量增加，每個 Proxy 可能就需要更多的記憶體來維護這些 Mesh(網格) 之間的資訊，因此使用的 Memory 量只會愈來愈多。

所以 Cillium/Isovalent 想要引入基於 eBPF 的架構來打造一個不同架構的 Service Mesh。透過 eBPF 的架構使得整個 Service Mesh 的發生點是發生於 Kernel 階段，而非一個獨立的 Uses Proxy。
這邊帶來的改變有
1. 基於 eBPF 的特性，其本身就有辦法針對系統上所有 Socket 去執行特定的函式，所以 Cillium 就可以偷偷去修改應用程式的網路流量，不論是修改封包內容，偵錯與監控等都可以達到
2. 不需要如同之前一樣每個 Pod 都部署一個獨立的應用程式，取而代之的是撰寫通用的 eBPF 程式來提供各種功能
3. 由於所有的事情都發生於 Kernel，甚至可以達到基於 Socket-level 的封包處理，所以封包不需要繞來繞去，整個處理的路徑非常的短，因此產生的 Latency 非常的小

非常對於這系列戰爭有興趣的人花點時間去把 eBPF 的概念補齊，接下來針對這系列的大戰與討論就能夠有更多的背景去理解

