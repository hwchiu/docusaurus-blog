---
title: '閱讀筆記: 「如何判別到底要不要使用 Service Mesh」'
tags:
  - Reading
  - ServiceMesh
description: 「如何判別到底要不要使用 Service Mesh」
date: 2022-03-13 23:05:08
---

標題: 「如何判別到底要不要使用 Service Mesh」
類別: Network
連結: https://medium.com/google-cloud/when-not-to-use-service-mesh-1a44abdeea31

本篇文章是一個經驗探討文，想要探討近年來非常熱門的網路網格(Service Mesh) 到底導入時要怎麼抉擇與判斷。
Service Mesh 如果用得正確與適當，能夠為團隊帶來很多優勢，可以讓團隊更專注於軟體的服務上，讓 Service Mesh 幫忙提供各種方便的功能。
但是如果使用錯誤則可能只會造成整體架構更加複雜，同時也沒有解決什麼真的重點問題，一切只是疊床架屋的空殼而已。

1. 採用 Service Mesh 要儘早
作者認為到底要不要導入 Service Mesh 是一個專案初期就要決定的事情，即使 Istio 網站有特別教學如何將專案從 non-MTLS 給轉移到基於 Istio MTLS 的過程
但是作者說真的跑過這些流程就知道絕對不是官網寫的三言兩語這麼簡單，有太多額外的事情要考慮，譬如上層安裝的服務，網路分層設計等，這些會因為有沒有 Service Mesh
而有不同的決定

2. 不要當 Yes Man
作者體驗過最多的案例就是每個團隊看到下列問題都是不停的說 YES，然後最後就直接無腦導入 Service Mesh
1. 我們需不需要強化資安
2. 使用 mTLS 能不能強化資安
3. mTLS 是不是很難管理
4. Service Mesh 是不是可以讓 mTLS 便於管理

連續四個 YES 下來就直接無懸念的導入 Service Mesh，殊不知

因此作者接下來就列出幾個要導入 Service Mesh 前需要仔細思考過的問題

1. 是否有計畫於當下或是未來使用到 Serivce Mesh 的所有功能
Service Mesh 的功能除了 mTLS 外還有各式各樣跟流量有關的管理，譬如 A/B Testing, 金絲雀部署等。
透過 Service Mesh 能夠讓應用程式不需要實作這些功能而依然可以享有這些功能的好處。
所以作者認為團隊中的所有人都要仔細的注意，到底你們即將採用的 Service Mesh 有哪些功能可以用，這樣可以避免應用程式重複開發相同功能。
作者也提到不需要第一天就決定好要採用什麼功能，但是至少要仔細理解自己採用的解決方案到底有什麼功能，然後未來改善架構的時候可以即時的想起來這功能有提供

2. 團隊中是否有人對於 Service Mesh 有足夠的理論或是實戰理解？
作者看到的非常多團隊很多人根本不理解 Kubernetes 以及 Service Mesh 但是就想要導入 Service Mesh。
由於對 Service Mesh 完全不理解，連其實作的概念都不同，所以當問題發生的時候就什麼都不能做，因為根本不懂也不知道該從何下手
請花時間學習與理解你要使用的專案，以確保你有足夠的背景知識去使用與除錯

除了問題之外，作者也認為要導入 Service Mesh 到生產環境並不是單純的建構一個 Hello World 這麼簡單，還有很多事情要考慮，譬如
1. 自動化
2. 監控與追蹤
3. 除錯與已難雜症排除

整篇文章非常的棒，有興趣的可以詳細閱讀

