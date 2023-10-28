---
title: Kubernetes 中 VPA, HPA, CA, CPA 的差異是什麼?
keywords: [Kubernetes]
authors: hwchiu
image: https://hackmd.io/_uploads/autoscaler.png
tags:
  - Kubernetes
  - Linux
  - DevOps
description: 簡述一下 Kubernets 中 HPA, VPA, CPA, CA 等相關技術的差異
---


Kubernetes 內有各式各樣的自動擴展機制，譬如 HPA(Horizontal Pod Autoscaling)，該技術可根據不同條件而動態調整 Pod 的副本數量，使得 Pod 有更好的能力去處理當前的流量而不需要管理人員不停介入調整數量。
除了 HPA 外，Kubernetes 還有其他相關的機制，如 VPA, CA 以及 CPA，本篇文章就針對這些類別進行探討，主要會分成

1. 目標
2. 觸發條件
3. 調整對象

三個面向分別探討

# HPA (Horizontal Pod Autoscaler)

### 目標
Deployment/ReplicaSet 可以部署多副本的 Pod，但是固定數量不夠彈性，特別是應用程式本身的流量與時段有關，這種需求下就可以透過 [HPA](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) 來動態調整 Pod 的數量

### 觸發條件
HPA 是內建於 Kubernetes 內的 Controller，其會與 API Server 去詢問相關資源來確認是否要調整 Pod 的數量(變多或是變少)。
當環境中安裝 Metrics Server 後就可以使用基於 CPU/Memory 等資源用量作為決策的依據，這些用量會與 Pod 內所設定的 CPU/Memory Request 去進行比較來判別是否超過門檻，此外用量可以根據 Pod 整體用量或是針對單 Continaer 去計算

### 調整對象
調整 Pod 的數量，其中有很多參數包含 Behavior 等可以調整 Pod 數量每次更動的百分比或是絕對數值

:::info

HPA 除了預設的資源用法外，也可以導入 Metric 或是 KEDA 等專案來提供不同面向的決策
:::


# VPA (Vertical Pod Autoscaler)

### 目標
相較於 HPA 是水平擴展副本數量來因應流量處理， [VPA](https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler) 採取的則是調整單一副本的資源用量，譬如 CPU, Memory。
新開發應用程式要部署到 Kubernetes 中時很常會發生不知道該如何設定 Resource Request/Limit，而 VPA 則會長期觀察副本的資源用量並進行相關操作，相關操作可以分成調整設定並且重啟 Pod 亦或是單純給予建議並不重啟 Pod，後者仰賴維運人員去收集並且修改部署檔案來使用觀察後的資源用量。


### 觸發條件
當 VPA Controller 部署到環境中後，就可以創建 VPA 來指名要哪些 Deployment 需要被觀察， VPA 主要會針對 CPU/Memory 兩塊的 Request/Limit 去觀察並且計算出一個適當的數字，其中觀察這件事情需要時間才會收斂，過短的收集時間會推斷出一個不適合的使用量。

### 調整對象
VPA 以 Pod 為單位去進行修改，不會修改 Pod 的副本數量，而是估算其 CPU/Memory 的 Request/Limit 用量，Auto/Recreate 模式下會將該 Pod 重啟並且設定對應的數值，而 Off 模式下則是單純計算數值並不會重啟 Pod。


# CPA (Cluster Propotional Autoscaler)

### 目標
HPA 與 VPA 是常見的資源用量管理方式，基於水平與垂直兩個不同面向去調整應用程式以處理當前需求。[CPA](https://github.com/kubernetes-sigs/cluster-proportional-autoscaler) 則希望能夠根據叢集的規模來水平調整 Pod 的副本數量，最常見的範例是 DNS 服務，CPA 可以根據當前叢集的規模等級來動態調整 DNS 的數量，規模等級可以是節點的數量或是整體 CPU 的數量來調整。

### 觸發條件
不同於 HPA/VPA 是根據應用程式本身的資源用量，CPA 的觸發調整則是節點本身的規模能力。設定的角度是以應用程式出發，去探討每一個副本可以處理多少個節點數量或是總 CPU 數量，相關設定為 `coresPerReplica` 與 `nodesPerReplica`，其中會透過下列公式計算出當前適合的 Pod 數量

```
replicas = max( ceil( cores * 1/coresPerReplica ) , ceil( nodes * 1/nodesPerReplica ) )
```

### 調整對象
CPA 會以設定的`coresPerReplica` 與 `nodesPerReplica` 與當前節點規模去計算來得到合適的數量，並且動態的目標 Pod 的副本數量。

# CA (Cluster Autoscaler)

### 目標
前述 HPA, VPA, CPA 都是根據情況調整 Pod 的數量，而 [CA](https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler) 則是根據條件來動態調整節點的數量，譬如當前所有節點上的資源用量都已經被 Pod 給要求光了，導致沒有多的 CPU/Memory 分配給新部署的 Pod，這種情況下就需要動態加入的新的節點以提供更多運算資源。相反的當節點上的資源使用量多低，這時候就可以動態移除節點來節省不必要的節點，特別是雲端環境下可以達到省錢的目的。

通常節點移除時都會透過類似 Drain 的方式來踢除節點，這時候也要特別注意 *PodDisruptionBudget* 以及 *terminationGracePeriodSeconds* 等參數的使用來確保應用程式轉移期間不會對現有服務造成太大影響。


:::info

Drain 指令本身是否可以順利完成取決於節點上所有的 Pod 是否都順利被移除，若有 Pod 需要特別長的時間(*terminationGracePeriodSeconds*)來處理關機流程，則踢除節點的時間則取決於該 Pod 是否順利結束。
:::


### 觸發條件
一個常見的觸發方式是當有任何 Pod 因為系統上沒有足夠資源用量而產生 Pending 時，就會使得 CA Controller 去加入一個新的節點，當新節點順利加入到 Kubernetres 叢集並且為 Ready 後，該應用程式就可以被順利部署並且運行。反過來當節點使用量低於門檻一段時間後就可將目標節點上的 Pod 都轉移並且移除。

:::info

不同 Kubernetes 平台的實作方式不同，因此使用上則需要確認各自的實作方式與相關設定，譬如新創立的節點應該要平均分配於不同的 Zone 或是有相關的 Annotation 可以使得特定應用程式所在節點不會被回收，所有設定都以各 Kubernetes 平台為主。

:::


### 調整對象
以節點為單位去調整，節點移除時所有運行之 Pod 都會被重新調度到其他節點。

# Summary

1. 上述所有機制並非互斥，譬如應用程式類別可以使用 HPA 來調整數量，並且搭配 CA 來動態調整節點數量來符合需求
2. 由於 Pod 與節點都會因為這些操作而有數量上的增減，有可能就會發生 Pod 分配情形不如預期，這時候就可能要仰賴如 [descheduler](https://github.com/kubernetes-sigs/descheduler) 或是 [Affinity, SpreadConstraint](https://medium.com/me/stats/post/e52eebb4bc38) 等機制來均衡部署情況


以下圖總結上述四種差異

![](./assets/autoscaler.png)


# Reference
1. https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/
2. https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler
3. https://github.com/kubernetes-sigs/cluster-proportional-autoscaler
4. https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler

