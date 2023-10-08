---
title: >-
  閱讀筆記: 「如何用 2297 個 Linux Kernel Patches 來重新整理所有的 header file 並提升整個 Kernel
  建置時間高達 78」
tags:
  - Reading
  - Linux
description: 「如何用 2297 個 Linux Kernel Patches 來重新整理所有的 header file 並提升整個 Kernel 建置時間高達 78%」
date: 2022-02-04 00:05:08
---

標題: 「如何用 2297 個 Linux Kernel Patches 來重新整理所有的 header file 並提升整個 Kernel 建置時間高達 78%」
類別: 其他
連結: https://www.phoronix.com/scan.php?page=news_item&px=Linux-Fast-Kernel-Headers

摘要:
Linux Kernel 的長期貢獻者 Ingo Molnar 花了一年多的時間整理 Kernel 內的 Header 架構，一口氣提交了 2297 個 patches，其中影響
的檔案數量有 25,288 個，並且加入了 178,024 行數，移除了 74,720 行。
這一系列的改動直接重新整理 Linux Kernel 內將近 10,000 個不同的 header 檔案，這次的整理將過去 30 年累積的各種你呼叫我，我呼叫你這
種「Dependency Hell」問題給一起處理掉，結果論來說提升了整體建置時間 50% ~ 80 %
