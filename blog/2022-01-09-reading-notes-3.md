---
title: '閱讀筆記: 「使用 OpenKruise v1.0 提供更進階的 workload 部署與升級」'
tags:
  - Reading
  - Kubernetes
description: 「使用 OpenKruise v1.0 提供更進階的 workload 部署與升級」
date: 2022-01-09 00:05:08
---

標題: 「使用 OpenKruise v1.0 提供更進階的 workload 部署與升級」
類別: tool
連結: https://www.cncf.io/blog/2021/12/23/openkruise-v1-0-reaching-new-peaks-of-application-automation/

Openkruise 1.0 版本釋出，該專案是 CNCF 沙盒層級的專案，主要是由阿里巴巴開發與維護，不久前的 Kubeconf 中阿里巴巴的議題也有
分享到有將此專案部署到期內部的 Kubernetes 管理平台

該專案主要是強化 Kubernetes 內應用程式的自動化，包含部署，升級，維運等面向，此外其架構是基於 Operator 去設計的，因此任何的 Kubernetes 叢集都可以安裝這個功能。
相對於原生的 Deployment 等部署方式， Openkruise 提供了

1. 強化 workloads 的部署方式，包含支援原地更新，金絲雀等不同的升級策略。
2. Sidecar 容器的管理，可以更方便地去定義想要自動掛到不同 workloads 上的 sidecar 容器。
3. 提供更多方便維運的功能，譬如可以針對 container 進行重啟，可以針對不同節點進行先行下載 container image，將一個應用程式給部署到多個 namespace 甚至還可以
去定義 Pod 裏面所有 containers 的啟動優先順序，如果 Pod 內的容器彼此之間有依賴性時就可以透過這個功能讓整個啟動過程更加順暢。

有興趣的可以研究看看此專案

