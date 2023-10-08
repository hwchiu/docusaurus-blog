---
title: '閱讀筆記: 「GitHub 上常常看到的奇妙 commit 到底是什麼？」'
tags:
  - Reading
  - Git
description: 「GitHub 上常常看到的奇妙  commit 到底是什麼？」
date: 2022-02-11 00:05:08
---

標題: 「GitHub 上常常看到的奇妙  commit 到底是什麼？」
類別: others
連結: https://people.kernel.org/monsieuricon/cross-fork-object-sharing-in-git-is-not-a-bug

每過一段時間都可以於 GitHub 上面看到一些看起來很嚇人的 Commit，最經典莫過於 Linux Kernel 中的各種內容，譬如檔案被砍光，README 加入一些驚嚇言論
不知道情的使用者可能會想說這個內容是真正的 Github Repo 上的東西，鐵定是真正被認可而合併進去的，所以相信不疑。
殊不知這一切其實都只是 Git 的底層設計使得一些有心人可以打造出一些以假亂真的內容，文章中就有列出兩個關於 Linux Kernel 的有趣 Commit.

文章內詳細的去解釋整個來龍去賣以及底層 Git 的設計，包含 blob, tree, commit 之間的關係，並且說明為什麼有心人可以輕鬆的產生這些以假亂真的 Commit。
舉個範例來說，Linux Kernel 的整個 Git 專案大概有 3GB 的大小，然後被 Fork 的次數高達 40000 次，請問從實作方面來考量，你會希望
1. 每個 Fork 有一份屬於自己的 Git 專案?
2. 仰賴 Git 的底層設計，針對差異性去記錄每個 Fork 專案？

如果是選項(1)的話，那這樣至少要準備 120TB 的資料，從儲存方面來說完全不是一個可接受的實作方式，因此自然而然的都會是基於(2)的方式去實作
因此該 Linux Kernel 的 Git 專案實際上裡面記錄了所有的 Fork 資料，而每個人針對自己的 Fork 去進行更新等行為也都會記錄到 Linux Kernel 本身的專案上。
換句話說， 那 40000 個 Fork 出來的專案實際上還是共用同一份 Git 專案，因此每個人的 Commit 都只要該 Hash 被知道，其他人都有機會去檢視與瀏覽。

而 GitHub 的 UI 又允許使用者以 Commit Hash 的方式去瀏覽每一個 Commit 的內容，因此就可以跑到主要專案去輸入自己 Fork 產生的 Commit 來產生以假亂真的 Commit 內容。

對於整體有興趣的可以觀看全文

