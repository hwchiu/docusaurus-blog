---
title: '閱讀筆記: 「使用 Open Policy Agent 來保護 Ingress 的誤用」'
authors: hwchiu
tags:
  - Reading
  - Kubernetes
  - OPA
  - Network
description: 「使用 Open Policy Agent 來保護 Ingress 的誤用」
---

連結: https://www.cncf.io/blog/2020/09/29/enforce-ingress-best-practices-using-opa/

不知道大家有沒有聽過 Open Policy Agent (OPA) 這個 CNCF 專案?
有滿多專案的背後都使用基於 OPA 的語言 Rego 來描述各式各樣的 Policy，譬如可以使用 conftest 來幫你的 kubernetes yaml 檢查語意是否有符合事先設定的 Policy。
本篇文章則是跟大家分享如何使用 OPA 來針對 Ingress 資源進行相關防呆與除錯，一個最基本的範例就是如何避免有多個 Ingress 使用相同的 hostname 卻指向不同的 backend service. 過往可能都是靠人工去維護
，確保沒有一致的名稱，但是透過 OPA 的概念我們可以再佈署 Ingress 到 Kubernetes 前先進行一次動態的比對，確保當前設定符合所有 Policy，得到所謂的 Approved 後才能夠佈署進去。
有興趣的人可以看看這篇文章，甚至學習一下 OPA 的使用方式
