---
title: '閱讀筆記: 「ClickHouse 與 Elasticsearch 的比較」'
authors: hwchiu
tags:
  - Reading
description: 「ClickHouse 與 Elasticsearch 的比較」
date: 2022-02-25 00:05:08
---

標題: 「ClickHouse 與 Elasticsearch 的比較」
類別: other
連結: https://developer.aliyun.com/article/783804

這篇文章內容非常精彩，從不同層面去探討 Elasticsearch 與 ClickHouse 這兩套解決方案的差異，探討了包含
1. 分散式架構
2. 儲存架構，包含寫入資料的設計，底層 Segment 與 DataPart 的差異以及 Schemaless 特性帶來的影響
3. 查詢架構，包含底層引擎是如何計算使用者的輸入
4. 效能測試，針對不同的場景來比較效能

文章很長且滿多技術坑，適合對於 Elasticsearch 有維運與管理有經驗的使用者

