---
title: '閱讀筆記: 「Linux 5.17 將使用 BLAKE2s 來替代 SAH1 來達到更安全更快速的隨機亂數產生器」'
tags:
  - Reading
  - Linux
description: 「Linux 5.17 將使用 BLAKE2s 來替代 SAH1 來達到更安全更快速的隨機亂數產生器」
date: 2022-01-24 00:05:08
---

標題: 「Linux 5.17 將使用 BLAKE2s 來替代 SAH1 來達到更安全更快速的隨機亂數產生器」
類別: other
連結: https://www.phoronix.com/scan.php?page=news_item&px=Linux-5.17-RNG

Linux Kernel 內亂數子系統的維護者近期遞交了一個將 SAH1 給全面替換為 BLAKE2s 的相關 Patch

相對於 SHA1 來說， BLAKE2s 本身更為安全，同時計算速度也更快，這邊也可以參考下列這篇 2017 的文章
https://valerieaurora.org/hash.html 來探討不同 HASH 演算法的一些狀態，雖然沒有及時更新到 2022 的狀態，但是如果 2017 都
不安全的東西現在就更不應該使用，譬如文章中提到 SAH1 於 2017 就被 Google 用(6500 CPU或是110 GPU)的實驗來證實有衝突，建議停止使用。

