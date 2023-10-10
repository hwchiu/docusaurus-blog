---
title: '閱讀筆記: 「透過 Kubernetes Event-Driver Autoscaler(KEDA) 來根據各種指標動態擴充容器」'
authors: hwchiu
tags:
  - Reading
  - Kubernetes
description: 「透過 Kubernetes Event-Driver Autoscaler(KEDA) 來根據各種指標動態擴充容器」
date: 2022-04-13 00:05:09
---

標題: 「透過 Kubernetes Event-Driver Autoscaler(KEDA) 來根據各種指標動態擴充容器」
類別: kubernetes
連結: https://medium.com/@casperrubaek/why-keda-is-a-game-changer-for-scaling-in-kubernetes-4ebf34cb4b61

Kubernetes 內已經有 HPA 的物件可以讓 K8s 根據一些基本的指標來動態調整 Pod 的數量，而 KEDA 這款 CNCF 的孵化專案則是完全強化 HPA 的效果
KEDA 的概念很簡單，就是應用程式應該要可以有更多的指標來幫忙動態擴充，除了最基本的 CPU/Memory 等基本指標外， KEDA 來支援了下列各種不同指標，讓 k8s 可以使用更為廣泛的指標，譬如
1. Redis 內某個 Queue 的長度
2. K8s 內其他 Pod 的數量
3. PostgreSQL Query 的結果
4. Elasticsearch Query 的結果
5. 各種雲端服務，如 Azure Event Hubs, AWS CloudWatch, GCP Pub/Sub
6. Kafka
... 等各種不同指標

使用方式很單純，一切的規則都是基於 K8s 的 CRD 來描述與管理，因此團隊可以使用 YAML 的方式來定義這些擴充的規則
文章中有基於 CPU/Memory 的基本介紹使用，同時文章中也有官方的連結來介紹各種不同指標的示範用法

