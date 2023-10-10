---
title: '閱讀筆記: 「使用 k3s Rancher Vault and ArgoCD 來實作 GitOps」'
authors: hwchiu
tags:
  - Reading
  - GitOps
  - Rancher
description: 「使用 k3s Rancher Vault and ArgoCD 來實作 GitOps」
---

連結: https://adam-toy.medium.com/implementing-gitops-on-kubernetes-using-k3s-rancher-vault-and-argocd-f8e770297d3a

這邊跟大家分享一篇 GitOps 實作心路歷程，這篇文章中總共使用下列工具
1. AWS, 所有環境都基於 AWS 此 cloud provider
2. K3S, 一套由 Rancher 開發的輕量級 Kubernetes 發行版本
3. Rancher, 管理 K3S 介面
4. Cert-Manager, 與 Let's Encrypt 連動，管理相關憑證
5. Vault, Secret 管理工具
6. ArgoCD GitOps 使用工具，連動 Git Repo 與 K8s
7. Terraform, IaaC 的一種工具
這篇文章從頭開始介紹如何整合上述工具，並且完成一個簡易的範例，透過這些範例也讓你理解每個元件對應的功能，如何使用，共重要的是從一個大範圍的視角來看，這些元件的地位，更可以幫助你瞭解整體架構
有興趣的可以閱讀全文
