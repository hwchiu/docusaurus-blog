---
title: '閱讀筆記: 「透過 Crossplane 與 ArgoCD 來達成應用程式與基礎建設的 GitOps 部署方式」'
authors: hwchiu
tags:
  - Reading
  - GitOps
  - DevOps
description: 「透過 Crossplane 與 ArgoCD 來達成應用程式與基礎建設的 GitOps 部署方式」
date: 2022-01-19 00:05:08
---

標題: 「透過 Crossplane 與 ArgoCD 來達成應用程式與基礎建設的 GitOps 部署方式」
類別: cicd
連結: https://medium.com/containers-101/using-gitops-for-infrastructure-and-applications-with-crossplane-and-argo-cd-944b32dfb27e

作者表示過往很多教學文章當探討到 Kubernetes 部署議題的時候，通常都不會去探討如何部署 Kubernetes 而是專注於應用程式的部署，
理由非常直觀，文章就是要專注於 Deployment 的議題，能夠讓讀者更容易地去閱讀與參考，另外一個背後的原因其實是因為 Kubernetes 部署的方式
太多種，常見的方式使用 Terraform 透過 IaC 的概念來管理，而應用程式都使用 Helm/Kustomize 完全不同的方式來管理

而作者今天想要探討的是如何透過 ArgoCD 來建設一個 GitOps 的環境，並且於上面使用 Crossplan 這個解決方案來處理各種底層基礎建設的需求，如此一來
就可以統一透過 Helm/Kustomize 的方式來描述這些基礎建設

Crossplan 很類似 Terraform 但是有者一些些微的差異
1. Crossplan 本身是 Kubernetes 的應用程式，所以本身的描述方式就是 Kubernetes 的 YAML 方式
2. 可以使用 kubectl, Helm/Kustomize 等方式來部署這些描述並且讓 Crossplan 來幫忙創建描述的基礎建設

由於整個 Crossplan 可以視為一個 Kubernetes 應用程式，所以直接使用 ArgoCD 的方式來部署
有興趣的可以閱讀全問

