---
title: '閱讀筆記: 「透過 Helm 與 Terraform 來自動 Re-new Cloudflare origin CA」'
tags:
  - Reading
  - Kubernetes
  - Helm
  - Terraform
description: 「透過 Helm 與 Terraform 來自動 Re-new Cloudflare origin CA」
date: 2022-03-11 00:05:08
---

標題: 「透過 Helm 與 Terraform 來自動 Re-new Cloudflare origin CA」
類別: usecase
連結: https://awstip.com/auto-renew-cloudflare-origin-ca-with-terraform-and-helm-d28be3f5d8fa?source=linkShare-91a396987951-1645539866&gi=a18b2bbd9604

本篇文章是過工具介紹文，探討如何基於 Helm 與 Terraform 這兩個不同層級的工具來處理 Cloudflare 的憑證。

# Why Cloudflare
根據 W3Techs 的調查顯示， 81.2% 的網站都使用 Cloudflare 來提升讀取速度或安全防護。
透過 CDN 的概念與機制，網站可以讓全球使用者有更快的讀取速度，此外也愈來愈多的網站會透過 Cloudflare 來處理如機器人, DDOS 之類的流量攻擊，畢竟要自己架設網站處理這些攻擊非常困難
因此讓 Cloudflare 這類型的網站來幫忙過濾與處理能夠讓團隊更專注於本身的業務開發與維運

# Kubernetes
想要在 Kubernetes 內妥善管理所有使用的憑證其實也是一個麻煩事情，除了要能夠設置正確來創立憑證外，能夠於到期前自動 re-new 也是一個不可或區的功能。
Kubernetes 內跟憑證有關的最知名專案我想就是 Cert-Manager，而 Cloudflare 也基於此專案撰寫了相關的 Kubernetes Controller，如 Origin CA 等
因此本文使用的功能與示範都會基於 cert-manager 與 Cloudflare 的架構。

# 目的
本文的目的是希望能夠將過往手動的繁瑣步驟給自動化，讓 Kubernetes 可以獲得 Cloudflare 提供的好處，如憑證與相關域名等。
內文是基於 Terraform 作為出發點，然後透過 Kubernetes Provider 的方式來與之互動，一步一步的安裝各種資源最後成功於叢集內獲得相關域名的 SSL 憑證以及其他資源

