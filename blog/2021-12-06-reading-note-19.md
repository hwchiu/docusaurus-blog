---
title: '閱讀筆記: 「Kubernetes Resource Limit/Request 誤用造成的錯誤」'
authors: hwchiu
tags:
  - Reading
  - Kubernetes
  - ResourceManagement
description: 「Kubernetes Resource Limit/Request 誤用造成的錯誤」
---


連結: https://itnext.io/how-to-set-kubernetes-resource-requests-and-limits-a-saga-to-improve-cluster-stability-and-a7b1800ecff1

今天這篇文章探討的則是 resources 底下的 request/limit 問題。
本文作者之前遇到一個非常規律的服務警告問題，花了非常多時間與步驟去查詢，最後才發現是 Pod 裡面 Resource 的設定不夠嚴謹與完善。
舉例來說，
resources:
     limit: cpu: 1000m
     request: cpu: 100m
今天假設有一個服務描述，我對 cpu 的最低要求是 0.1顆，但是極限是 1顆
且有一個節點本身有 3 顆 CPU，這種情況下，我們對該服務設定多副本運行(10個). 那根據 request 的要求，10個副本頂多只需要 1 顆 cpu，所以非常輕鬆的可以將 10 個服務運行起來，但是如何今天遇到尖峰流量
，每個 pod 都瘋狂使用 CPU會發生什麼事情？
每個副本的極限都是 1 顆，因此 10 個副本就可以衝到 10 顆 CPU..而系統上只有 3顆，這就會造成 CPU 完全不夠使用，最後導致每個應用程式都在搶 CPU 使用，如果沒有特別設定相關的 nice 值來處理，可能會造
成關鍵 process 無法回應(案例中就是kubelet)。
這案例中 limit/request = 10x，作者認為這數字太大，它覺得合理的大概是 2x ~ 5x，並且最重要的是要定期去檢視系統上資源的用量， limit 要設定的合理，如果本身有很大量需求，建議還要搭配 node select,
affinity/anti-affinity 讓每個 pod 最好找到適合的配置方式，然後也要避免尖峰流量到來時，系統資源被吃光甚至影響到 kubelet/kube-proxy 等底層服務的運作。
