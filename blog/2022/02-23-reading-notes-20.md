---
title: '閱讀筆記: 「Paypal 如何調整 Kubernetes 讓其規模達到四千節點，20萬個 Pod」'
authors: hwchiu
tags:
  - Reading
  - Kubernetes
description: 「Paypal 如何調整 Kubernetes 讓其規模達到四千節點，20萬個 Pod」
date: 2022-02-23 00:05:08
---

標題: 「Paypal 如何調整 Kubernetes 讓其規模達到四千節點，20萬個 Pod」
類別: usecase
連結: https://medium.com/paypal-tech/scaling-kubernetes-to-over-4k-nodes-and-200k-pods-29988fad6ed

摘要:
Paypal 過去一直都使用 Apache Mesos 來運行其大部分的服務，而其最近正在針對 Kubernetes 進行一個評估與測試，想瞭解如果需要轉移到 Kubernetes 會有哪些問題需要挑戰與克服。
本篇文章著重的是效能問題，原先的 Apache Mesos 可以同時支持一萬個節點，因此 Kubernetes 是否可以拿到相同的效能
而本文節錄的就是擴充 Kubernetes 節點中遇到的各種問題以及 Paypal 是如何修正與調整讓 Kubernetes 可能容納盡可能更多的節點。

# Cluster Topology
1. 三個 Master 節點與三個獨立的 ETCD 叢集，所有服務都運行於 GCP 上。
2. 工作節點與控制平面的服務都運行於相同的 GCP Zone 上。

# Workload
效能測試方面是基於 k-bench 去開發的測試工具，基於平行與依序等不同方式來創建 Pod/Deployment 兩種資源。

# Scale
1. 測試初期先以少量的節點與少量的 Pod 開始，接者發現還有提升的空間就會開始擴充 Pod 與節點的數量。
2. 測試的應用程式是一個要求 0.1m CPU 的無狀態應用程式。
3. 最初的工作節有點 4 個 CPU，根據測試可以容納大概 40 Pod 左右。
接者就是不停地擴充數量，先從一千個節點開始，接者調整Pod 的數量直到 32,000 個 Pod。最後擴充到 4,100 個節點並且配上 200,000 個 Pod.
過程後期有調整節點的 CPU 數量讓其能夠容納更多的 Pod 數量

文章接下來開始針對 API Server, Controller Manager, Scheduler, ETCD 元件遇到的問題並且如何解決，中間提到了不少參數，這部分應該是大部分使用者都比較不會去研究與使用的參數
因此我認為本篇文章非常值得閱讀。
ETCD 的部分遇到很嚴重的效能問題，作者團隊觀察到大量的 Raft 溝通失敗個訊息，觀測到跟硬碟寫入速度有關，然而 GCP 沒有辦法單純增加效能，必須要同時提升硬碟空間，所以使用上彈性不變。
不過就算採用 1TB 的 PD-SSD ，當 4 千個節點同時加入到 Kubernetes 時依然會遇到效能上的問題，團隊最後決定使用本地端的 SSD 來想辦法改善寫入速度，結果又遇到 ext4 的一些設定
過程很多問題也很多解決方式。

結論來說: k8s 複雜

