---
title: '閱讀筆記: 「 Kubernetes 四種不同開發環境的比較」'
tags:
  - Reading
  - Kubernetes
description: 「 Kubernetes 四種不同開發環境的比較」
date: 2022-02-16 00:05:07
---

標題: 「 Kubernetes 四種不同開發環境的比較」
類別: Kubernetes
連結: https://loft-sh.medium.com/kubernetes-development-environments-a-comparison-f4fa0b3d3d8b

根據 VMware 2020 的一個研究報告指出，如何存取 Kubernetes 叢集是影響開發者生產效率的最大要素，所以本篇文章就是就會針對如何去評估與挑選一個適合開發者的
Kubernetes 叢集與存取方式。

作者將 Kubernetes 叢集分成四大類，分別是
1. Local Cluster: 開發者會基於自己本地的電腦來創造一個本地的 Kubernetes 叢集
2. Individual Cloud-Based Cluster: 開發者基於雲端環境來創建一個專屬於該開發者的 Kubernetes 叢集
3. Self-Service Namespace: 使用基於 namespace 的方式來讓多位開發者共享一個 Kubernetes 叢集
4. Self-Service Virtual Cluster: 讓 Kubernetes 來創建更多小 Kubernetes 叢集並且讓每個使用者有獨立專屬的 Kubernetes 叢集

為了比較這四種不同的叢集，作者定義了幾個不同的面向，針對這幾個面向來評比，分別是

1. Developer Experience: 對於開發者來說要如何開始使用叢集，包含架設的複雜度，使用的難易度以及需要的相關背景多寡
2. Admin Experience: 對於公司的管理人員來說需要花多少心力來管理該從開發者環境，除了基本的管理還要考慮增加新使用者帶來的負擔
3. Flexibility/Realism: 該開發環境與正式生產環境的架構相似度如何，此外開發者是否有足夠的彈性去客製化該叢集的所有設定
4. Scalability: 該環境是否能夠根據開發需求來擴充？ 特別是針對部分需要大量使用資源的應用程式開發是否有辦法處理。
5. Isolation/Stability: 開發者彼此之間的隔離程度如何，彼此之間的工作是否會影響彼此？ 有資安問題的時候是否會連環爆？
6. Cost: 該解決方案的成本多寡，成本就是真正的金錢考量。

文章一開始就有列出一個結論表，對於這個議題有興趣的歡迎閱讀

