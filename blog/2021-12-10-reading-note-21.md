---
title: '閱讀筆記: 「三個加強 Kubernetes 服務穩定性的經驗」'
authors: hwchiu
tags:
  - Reading
  - Kubernetes
description: '三個加強 Kubernetes 服務穩定性的經驗'
date: 2021-12-10 22:29:51
---

連結: https://medium.com/kudos-engineering/increasing-resilience-in-kubernetes-b6ddc9fecf80

今天這篇文章作者跟大家分享一些如何加強 Kubernetes 服務穩定的方式，這篇文章這邊做個簡單摘要一下
發生問題:
作者的 k8s 是基於 Google Kubernetes Service (GKE)的叢集，運作過程中有時候會發現部分節點當掉，最後導致部分的服務不能正確使用。這邊作者團隊從兩個角度出發去改善
1. 研究為什麼節點會一直當掉，與 Google Supporte Team 來回信件最後有找到問題點
2. 強化 Kubernetes 服務的韌性，就算有部分節點壞掉也要讓服務能夠繼續運行
，本文主要的一些觀點也都是基於這邊發展
強化方式
1. 修正 Deployment 的數量，並且加上 Anti-Affinity，讓這些 Deployment 的副本能夠散落到不同的節點上，避免所有 Pod 都塞到同個節點，最後該節點出問題導致 Pod 全部出問題。
2. 所有需要被 Service 存取的服務都加上 Readess Probe 來確保這些服務都準備好後才會收到服務，避免一些請求被送過來確又不能正確處理
3. 加入 Pre-Stop 的使用，再裡面透過 sleep 10的方式，讓 Pod 要被刪除能夠將手上的封包請求給處理完畢
(請看註解補充)
註: 我個人認為第三點其實不太需要，比較漂亮的作法應該是實作 Singal Handler 去處理 SIGTERM 的訊號，收到此訊號後就不要再接受任何 Request 並且把剩下的工作處理完畢，當然如果這部份處理的時間過長，超過預設的 GracePeriod (30sec)，就會被 SIGKILL 給強制刪除。
要解決這個問題可能就要從應用程式下手去看如何改善，或是透過修改 Pod Spec 來提昇 GracePeriodTemination 的長短

