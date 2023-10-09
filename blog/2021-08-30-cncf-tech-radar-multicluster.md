---
title: CNCF MultiCluster 使用者調查報告
authors: hwchiu
tags:
  - Devops
  - CloudNative
  - Kubernetes
description: >-
  本篇文章節錄自 CNCF End User Technology Radar 關於 MultipCluster
  的報告，擷取相關重點並加上個人心得來跟大家分享現在 CNCF 社群是怎麼處理多個 Cluster 的
date: 2021-08-30 22:30:16
---

# 前言
今天要分享的 CNCF CD 使用者調查報告是由  CNCF End User Technology Radar 所發佈的，該專案會定期針對不同領域發布一些不同領域的研究，調查 CNCF 的會員針對不同的軟體有什麼樣的想法，因此這篇文章就帶大家來看一下這篇關於 Multicluster Management 的報告，來看看這些 CNCF 使用者們都使用哪些工具，對於這些工具又有什麼評價

本文主要翻譯自 [Multicluster Management, June 2021
](https://radar.cncf.io/2021-06-multicluster-management)，並且加上個人心得

詳細的報告影片可以參閱 [Webinar: CNCF end user technology radar, June 2021](https://www.youtube.com/watch?v=mjg_x9iYEIc)

# Radar
Technology Radar 旨在成為特定領域的一個意見參考指南，因此 CNCF End User Techonlogy Radar 就是一個針對科技領域受眾所建立的一個專案參考指南，這些專案領域都聚焦於 Clou Native 上，透過這個報告可以知道 CNCF End User Community 內這些公司他們實際上都使用哪些解決方案，對於這些方案保持什麼樣的看法

## Level
為了簡單量化這些調查報告，所有的調查都會要求使用者對於是否推薦這個專案給予下列答案之一
1. Adopt
這個答案代表該使用者(通常是廠商)是明確的推薦這個技術，使用者已經使用這個專案一段時間，而且也被團隊內證實的確是穩定且有幫助的
2. Trail
這個答案代表使用者有成功的使用過這些技術且推薦大家要多關注這些技術的發展
3. Assess
這個答案代表使用者有嘗試使用過且認為他們是有未來的，推薦大家當你專案內有特別需求的時候可以去看看這些專案

基本上我的認知就是信心程度，由上到下遞減。

除了上述三個答案之外，還有一個選項就是 `HOLD`，顧名思義就是可以停一下，不要太執著這個專案甚至不要使用。

關於這個專案的一些運作，譬如題目跟專案的選擇，甚至一些概念的介紹都可以參閱[官方網站](https://radar.cncf.io/how-it-works)


# Multi Cluster

這次題目為 Multicluster Management，主要想要探討 CNCF 團隊是如何管理多套 Kubernetes 叢集的。

不過 RADAR 團隊將結果分成兩類，分別是 Cluster Deployment 以及 Core Services/Add-ons，前者主要探討如何去管理與部署 Kubernetes Cluster，後者則是探討當前述的 Cluster 搭建完畢後，接下來會部署哪些核心服務來提供更上層的使用者去使用。

![](https://i.imgur.com/DDhT6Ru.png)

從上述結果來看，可以看到 Cluster Management 的問券調查中，按照人數投票排名下來
1. 公有雲的 Kubernetes 服務(AKS,EKS...etc)
2. 客製化的部署工具
3. Terraform
4. 私有雲的 Kubernetes 管理服務(地端管理平台)
而 kOps 以及 Cluster API 目前都是屬於有被嘗試使用，但是並沒有獲得大多數使用者強烈推薦於正式生產環境使用。

![](https://i.imgur.com/tDT4I0N.png)
當叢集架設完畢後，有哪些相關服務與共識是團隊會使用與安裝的，按照人數投票排名下來
1. 各種 Operators 的服務，譬如 Prometheus-Operator, Kafka-Operator
2. 使用 Helm 來部署與管理應用程式
3. 使用 Kustomize 來部署與管理應用程式
4. 使用 ArgoCD 來完成 GitOps 部署
5. 使用 Flux 來完成 GitOps 部署
Jsonnet 也有出現於投票清單中，但是並沒有獲得大部分使用者認同適合放到生產環境上。

從數據圖來看的結果如下

![](https://i.imgur.com/WBr1VRd.png)

1. 公有雲的 Kubernetes 服務沒什麼意外的獲得很多使用者的青睞，畢竟能夠幫忙將叢集管理與升級的煩惱用錢花掉，的確可以讓團隊省下很多麻煩，特別是這些步驟又麻煩，一旦出錯還要有能力可以復原，所以大部分團隊會希望能夠更專注於上層應用程式的部署是完全可以預料的。
2. 內部的客製化部署工具影片中就沒有探討太多到底有哪些類型，私有雲與資料中心的環境很多時候還是需要團隊自己動手去維護與撰寫相關的部署工具，此外 Terraform 的熱門程度一直居高不下，不知道之後有沒有機會看到 Pulumi 衝上來的一天。
3. RADAR Team 有觀察到當管理叢集數量不多時，有些團隊會使用 kOps, Kubeadm 等工具進行簡單管理與維護，但是當叢集數量更多時就會改用 Kubernetes 管理服務，雖然影片中沒有特別提到，不過我認為 Rancher 應該也算一種 Kubernetes 管理服務。
4. Operator 這個框架的流行讓愈來愈多複雜的應用程式能夠用簡單的方式去管理與部署，譬如 Prometheus，管理人員透過易懂的 CRD 內容與 YAML 格式就能夠輕鬆的設定 Prometheus，或是 Kafka 可以自己去管理 Kafka Cluster，管理者不太需要知道管理這些叢集的底層設定與方式，一切都讓 Operator 處理，結論 Operator 真的太棒了
5. Helm/Kustomize 還是主流的應用程式管理方式，偷偷提一下新版的 Kustomize 已經支援 Helm Chart 了，可以直接用 Kustomize 去部署一個 Helm Chart 的應用程式，當然背後一定還是轉成純 Kubernetes YAML。
6. 現成 GitOps 解決方案的使用者也是愈來愈多， ArgoCD/Flux 兩位老牌解決方案還是相對出名

# RADAR Team 想法
1. 多叢集管理目前沒有一個銀色子彈可以一統江山，不同環境與需求都有各自的一片天
2. 社群目前很期待 ClusterAPI 的茁壯發展，希望能夠減少更多客製化的需求與複雜度。
3. 眾多社群工具一起結合來解決問題，特別觀察到 GitOps 最常搭配 Helm 使用，而 Operator 的解決方案也很常透過 GitOps/Helm 的方式給部署到叢集中
4. Operator 真的很棒


