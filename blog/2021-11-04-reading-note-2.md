---
title: '閱讀筆記: 「淺談 Service Mesh」'
tags:
  - Reading
  - ServiceMesh
description: 「淺談 ServiceMesh」
---

連結: https://buoyant.io/service-mesh-manifesto/

一篇關於 Service Mesh 的好文，發布已經有段時間了不過還是值得一讀， 文章作者是非常早期 Service Mesh 項目: Linkerd 的核心開發成員之一也是新創公司 Buoyant 公司的 CEO
相信大家應該對於 Service Mesh 一詞已經不陌生，可能對於這個名詞比較熟悉的朋友大多是從另一個 Service Mesh 項目:  Istio 去了解 Service Mesh 的面貌，從這篇文章你可以從不同觀點認識 Service Mesh ，
全文非常長內容涵蓋：
- Service Mesh 詳盡介紹
- 為什麼 Service Mesh 可以被施行？
- 為什麼 Service Mesh 是個好的 idea (比起其他方法)？
- Service Mesh 幫助了什麼？
- Service Mesh 有解決掉所有問題嗎？
- 為什麼在現今 Service Mesh 可以被施行？
- 為什麼人們那麼愛談論 Service Mesh？
- 身為一個謙虛的開發者需要關注 Service Mesh 嗎?
- 一系列F&Q
這裡對 Service Mesh 的需求做個小結，Service Mesh 帶來了三大好處：
1. Reliability: 包含提供請求重試、超時、金絲雀部署(Traffic shifting/splitting) 等功能
2. Observability: 包含提供請求成功率、延時、粒度到個別服
3. Security: ACL 及 Mutual TLS (客戶端及服務端互信）
值得一提的是，本篇作者 William Morgan 對於 istio 持負面的態度，並不是因為 istio 與 linkerd 處於競爭關係的兩個產品，而是對於 istio 在 service mesh 做了太多的商業性 marketing 操作（大部分來自Go
ogle的操作)
有興趣的朋友也可以在 Podcast 上聽到作者在 Podcast 上的訪談: https://reurl.cc/N6GbW9
