---
title: '閱讀筆記: 「強化 Kubernetes 叢集的必備工具」'
authors: hwchiu
tags:
  - Reading
  - Kubernetes
description: 「強化 Kubernetes 叢集的必備工具」
date: 2022-04-18 00:05:09
---

標題: 「強化 Kubernetes 叢集的必備工具」
類別: kubernetes
連結: https://medium.com/mycloudseries/must-haves-for-your-kubernetes-cluster-to-be-production-ready-dc7d1d18c4a2

作者本篇文章想要分享一個其用來讓一個 Kubernetes 變得能夠真正上戰場的相關工具，因此文章中特別強調是 Production-Ready 的情況。
一個 Production Ready 的 K8s 叢集必須對於下列每個大項目都要有相關處理方式，譬如
1. Reliability and Availability
2. Security
3. Network, Monitoring & Observability
4. Backup/Recovery
5. Cost Optimization
6. Cluster Visualization

Reliability and Availability:
該領域的兩個指標代表的意義不太一樣，但是對於一個提供服務的叢集來說都一樣重要

這邊作者列舉了幾個工具譬如
1. K8s 內建的 HPA
2. AWS 的 karpenter，讓你針對基於節點為單位來擴充
3. Cluster-Autoscaler
4. Goldilocks

Backup/Recovery
有不少人團隊都對於對於叢集的備份與還原感到頭痛，目前最知名的開源專案莫過於 Velero，其支援不同的儲存設備如 Cloud Storage 等來存放，讓不同環境的 k8s 使用者都有辦法去備份其叢集內的資料

Cost Optimization

對於雲端架構來說，基本上雲端業者的內建功能已經可以針對如 VM, 底層架構等各種服務去列舉出各自的花費金錢，將此概念套入到 Kubernetes 本身大抵上只能理解到 Master Node, Worker Node 等之類的花費，
因此透過 Kubecost 之類的專案來將成本的洞察範圍擴充到 Kubernetes 內部，以 namespace, pod 等各種 k8s 的資源為單位來列舉實際花費的金額，能夠讓團隊更有效地去管理相關花費

