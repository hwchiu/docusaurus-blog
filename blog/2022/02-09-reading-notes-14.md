---
title: '閱讀筆記: 「透過一點小技巧讓你的 Makefile 有一個更好的 Help說明」'
authors: hwchiu
tags:
  - Reading
  - Linux
description: 「透過一點小技巧讓你的 Makefile 有一個更好的 Help說明」
date: 2022-02-09 00:05:08
---

https://daniel.feldroy.com/posts/autodocumenting-makefiles

標題: 「透過一點小技巧讓你的 Makefile 有一個更好的 Help說明」
類別: tools
連結: https://daniel.feldroy.com/posts/autodocumenting-makefiles

本篇文章使用 python 搭配 Makefile 的內建語法來輕鬆幫你的 Makefile 加上各種 Help 訊息，整個概念滿簡單的
1. 每個 Target 後面都補上一個基於 ## 的註解說明
2. 使用 define/endef 來定義一個 python3 的內容，該 python3 會從 stdin 中去判別該 target 是否含有 ## 的字串，有的話就組合起來，並且輸出
3. 加入一個 help 的 target，將內建變數 MAKEFILE_LIST 給丟到上述的 python3 去執行

有興趣的可以看看，整個寫法非常簡單有趣。

