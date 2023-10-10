---
title: '閱讀筆記: 「 談談遷移應用程式到 Kubernetes 內的失敗經驗談」'
authors: hwchiu
tags:
  - Reading
  - Kubernetes
description: 「 談談遷移應用程式到  Kubernetes 內的失敗經驗談」
date: 2022-02-14 00:05:08
---

標題: 「 談談遷移應用程式到  Kubernetes 內的失敗經驗談」
類別: Kubernetes
連結: https://medium.com/@marcong_54227/unsuccessful-experience-of-migrating-applications-to-kubernetes-a896823d9b95

作者團隊於 2019 年要開發一個全新的 API 應用程式，當時部門的 IT 團隊計畫要將既有的 VM-Based 應用程式給轉換到 Container-Based，最後團隊使用了 RedHat 的系統，並且使用
OpenShift 做為容器管理平台。

從結果來看，該專案從 2020/05 一路到 2021/05 花了整整一年也沒有順利的將應用程式轉移到 OpenShift 中，其中的一些重點有
1. 初期建設時 RedHat 有展示過如何使用 Java 基於 Fuse 開發應用程式，但是作者團隊全部都是 .Net 的經驗，因此團隊花了很多時間來學習如何使用 Fuse
2. 2020/06 時因為團隊的進度緩慢，所以 IT 團隊尋找外部的軟體顧問，尋求如何將 .Net 從 VM 轉移到 OpenShift
3. 團隊內的開發者都不擅長學習新技術，對於學習新技術這一塊非常不行。
4. 外部團隊幫忙建置了 CI/CD 系統，然後團隊內從 2020/09 開始進行程式開發與轉移，可惜直到 2021/05 依然沒有半個產品成功的用 OpenShift 作為正式生產環境
5. 與此同時，外部團隊也撰寫了幾個 .NET 示範應用程式來展示容器化的注意事項，然而團隊本身對 Container 的知識非常薄落，所以團隊人員沒有辦法參考這些範例程式來改善自己開發過程

最後團隊內又針對不同團隊給予不同的想法
1. Application Team
2. Server Team
3. Network Team
4. IT Management Team

譬如 Application Team 的開發人員都只滿足自身的技能，而且拒絕學習新技能，誇張的是一年過後團隊內的人也沒有辦法撰寫 dockerfile 或是使用 docker build.

後續還有一些針對不同團隊的想法與總體建議，整體來說非常真實，一個血淋淋的轉換案例。

