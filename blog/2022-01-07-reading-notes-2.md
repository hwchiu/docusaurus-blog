---
title: '閱讀筆記: 「透過 Kubefarm 來自動化幫實體機器打造基於 Kubernetes in Kubernetes 的 Kubernetes 環境」'
authors: hwchiu
tags:
  - Reading
  - Kubernetes
  - DEevOps
description: 「透過 Kubefarm 來自動化幫實體機器打造基於 Kubernetes in Kubernetes 的 Kubernetes 環境」
date: 2022-01-07 00:05:08
---

標題: 「透過 Kubefarm 來自動化幫實體機器打造基於 Kubernetes in Kubernetes 的 Kubernetes 環境」
類別: Kubernetes
連結: https://kubernetes.io/blog/2021/12/22/kubernetes-in-kubernetes-and-pxe-bootable-server-farm/

摘要:
本篇文章要介紹 Kubefarm 這個專案，該專案的目的是希望能夠於大量的實體機器上去創建各式各樣的 Kubernetes 叢集供不同團隊使用
為了讓整體的運作更加自動化，作者先行介紹何謂 Kubernetes in Kubernetes 這個專案，如何透過 Kubeadm 的方式於一個現存的 Kubernetes 專案
去部署 control-plane 並且透過這個 control-plane 去控管其他的 kubernetes 叢集，基本上達到的效果就如同各種 kubernetes service 服務一樣，使用者完全看不到 control-plane 的元件。

雖然透過這個方式可以很輕鬆地去創建新的 Kubernetes 叢集來使用，但是使用上覺得還是不夠方便，特別是這些實體機器還是會有不少手動的過程要處理，
為了讓整體流程更加自動化，作者團隊又基於 Kubernetes in Kubernetes 這個專案為基礎再開發更上層的專案，稱為 Kubefarm，一個如農場般可以快速於實體機器創建各式各樣 kubernetes 叢集的解決方案

Kubefarm 由三個專案組成，分別是
Kubernetes in Kubernetes, LTSP (PXE-Server) 以及 Dnsmasq-Controller
透過這三者專案的結合，實體機器會自動取得 DHCP 的 IP 地址並且透過 PXE 系統自動化安裝 OS，待一切都安裝完畢後又會自動地加入到現存的 Kubernetes 叢集中

整篇文章滿長的，是一過非常有趣的用法與研究，如果團隊是大量實體非虛擬化機器的讀者可以研究看看別人遇到什麼問題以及透過何種思路去解決的。

