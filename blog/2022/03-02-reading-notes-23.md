---
title: '閱讀筆記: 「Golang 原始碼的的版本控制歷史」'
authors: hwchiu
tags:
  - Reading
  - Golang
  - Git
description: 「Golang 原始碼的的版本控制歷史」
date: 2022-03-02 00:05:08
---

標題: 「Golang 原始碼的的版本控制歷史」
類別: others
連結: https://research.swtch.com/govcs

本篇文章是 rsc 來仔細介紹 golang 的發展歷史，主要是針對整個開發過程的版本控制轉移以及一些有趣的 Commmit
舉例來說，如果你去看 golang 的 commit 會發現第一筆 commit 是 1972 年的內容，並且該 commit 增加了一個  src/pkg/debug/macho/testdata/hello.b 的檔案

而以實際狀況來說，前面四筆都是假的 commit，第五筆 commit 才是 golang 開發的第一筆 commit，這之間的緣由牽扯到版本控制的轉變。
以 Golang 來說，其經歷了四次轉變化，從最初的 Subversion 到 Perforce 到 Mercurial 到 Gerrit

其中 golang 正式對外公開是發生於 Mercurial 的過程中，而這些假的 commit 也是這個時間點由 rsc 自己產生的，當作一個復活節彩蛋的概念
有興趣的可以閱讀全文

