---
title: '閱讀筆記: 「2021年回顧，因為 DB 的效能的爭論所以我女友跟我分手了....」'
tags:
  - Reading
description: 「2021年回顧，因為 DB 的效能的爭論所以我女友跟我分手了....」
date: 2022-01-10 00:05:07
---

標題: 「2021年回顧，因為 DB 的效能的爭論所以我女友跟我分手了....」
類別: usecase
連結: https://ottertune.com/blog/2021-databases-retrospective/

摘要:

2021 對於 DB 行業來說發生了許多風風雨雨，作者列出幾個觀察到的現象並且給予一些評論

「Dominance of PostgreSQL」
愈多愈多的人開發一個新的應用程式時首選都是 PostgreSQL 這個穩定可信賴且一直不停加入新功能的資料庫。
2010 年時 PostgreSQL 的開發團隊決定採取更為激進的方式來每年都要釋出一個主要版本的演進，其相容性的能力使得 PostgreSQL 能夠跟很多系統整合。
譬如前端介面如 Amazon Aurora, YugaByte, Yellowbrick 甚至 Google 都於 2021/10 宣布要讓 Cloud Spanner 支援 PostgreSQL

作者也嘗試從 Database Subreddit 上去爬文搜尋，基於過去一年所有發文去統計每個資料庫的出現次數，以結論來看 PostgreSQL -> MySQL -> MongoDB -> Oracle -> SQLite 等
這個過程不是非常嚴謹的統計分析，只是一個簡單的方式去觀察該論壇上大家都喜歡討論什麼資料庫而已。

「Benchmark Violence」
Benchmark 一直以來都是各個廠商展示軍火的地方，想辦法利用這些數據去說服大眾自己才是最棒的，作者列出去年三個激烈的 benchmark 討論
1. Databricks vs. Snowflake
2. Rockset vs. Apache Druid vs. ClickHouse
3. ClickHouse vs. TimescaleDB

作者也有參與上述血流成河的 Benchmark 的戰場，但是這些爭論的過程中作者失去了不少朋友，甚至連女朋友也一起離開了，作者回過頭來看這一切都
不值得，此外由於現在雲端的 DBMS 也有許多可最佳化的參數，要直接去比較彼此的優劣其實沒有這麼簡單。

後面還有「Big Data, Big Money」以及「In Memoriam」 兩個不同的議題，有興趣的可以點選全文閱讀

