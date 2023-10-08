---
title: '閱讀筆記: 「Kubernetes 內透過 DNS-01 處理 wildcard TLS 的兩三事」'
tags:
  - Reading
  - Kubernetes
description: 「Kubernetes 內透過 DNS-01 處理 wildcard TLS 的兩三事」
date: 2022-01-21 00:05:07
---

標題: 「Kubernetes 內透過 DNS-01 處理 wildcard TLS 的兩三事」
類別: introduction
連結: https://medium.com/linkbynet/dns-01-challenge-wildcard-tls-certificates-on-kubernetes-d2e7e3367328

很多人都會使用 Kubernetes 的 Ingress 讓外部可以存取的部署的應用程式，同時會透過 Ingress 搭配 Cert Manager 來處理 TLS 的憑證
大部分情況下都會使用 HTTP-01 的方式來進行域名擁有性的認證，而某些情況可能不方便透過 HTTP 來驗證的話就會採取 DNS-01 的方式透過 DNS 創建一個
TXT 的資訊來驗證域名的擁有權，本篇文章則是作者分享 DNS-01 的一些心得分享

1. 文章開頭有介紹使用的 Stack，包含透過 Terraform 來架設模擬環境，並且使用 Scaleway DNS 作為 DNS Provider
2. Cert-Manager 部分的 DNS Provider 要採用 webhook 的方式來動態處理請求，當 cert-manager 偵測到有新的 TLS 憑證
需求時就會透過 webhook 的方式去創建遠方的 DNS TXT 紀錄，接者 Let's Encrypt 就會透過 TXT 來判斷你是否真的擁有個域名

對 DNS-01 使用有興趣的可以看看本篇文章

