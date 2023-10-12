---
title: 'ArgoCD 安裝筆記'
authors: hwchiu
tags:
  - GitOps
  - ArgoCD
---


ArgoCD 安裝方式多元化，本身有簡單部署也有 HA 狀態的部署，以下示範如何用 Kustomize 來安裝 ArgoCD 並且之後還可以用 ArgoCD 控管 ArgoCD 自己本身的設定

使用 https://github.com/argoproj/argo-cd/tree/master/manifests/cluster-install 這個簡易安裝

準備一個 kustomizatiom.yaml，然後如果想要客製化就準備其他的 yaml 來調整
最後搭配一個 Application Yaml 來控管自己
```bash=
$ cat kustomization.yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - https://github.com/argoproj/argo-cd/manifests/cluster-install?ref=v2.7.7

patchesStrategicMerge:
 - argocd-rbac-cm.yaml
 - argocd-application-controller.yaml
 - argocd-applicationset-controller.yaml
 - argocd-cm.yaml
 - argocd-cmd-params-cm.yaml
 - argocd-dex-server.yaml
 - argocd-redis.yaml
 - argocd-repo-server.yaml
 - argocd-server.yaml
 - argocd-notifications-cm.yaml
```