---
title: '閱讀筆記: 「/proc/meminfo 與 free 指令的內容比較」'
tags:
  - Reading
  - Linux
description: 「/proc/meminfo 與 free 指令的內容比較」
date: 2022-06-03 02:05:07
---

標題: 「/proc/meminfo 與 free 指令的內容比較」
類別: others
連結: https://access.redhat.com/solutions/406773

本篇文章要探討的是到底 /proc/meminfo 與 free 這個指令所列出來的 memory 相關資訊到底該怎麼匹配

雖然文章有特別強調主要是針對 RedHat Enterprise Linux 5,6,7,8,9，但是我認為大部分的 Linux 發行版的差異不會太大，畢竟整體都是來自於 Kernel 內的實作，我認為還是值得閱讀與理解。

對於大部分的系統管理員來說，勢必都有聽過 free 這個指令，該指令可以列出系統上當前的 memory 使用狀況，舉例來說通常會有
Total, Used, Free, Shared, Buffers, Cached 之類的欄位(不同版本可能會有些許差異)。
不熟悉的人可能會認為系統上的記憶體就只有“全部“,"使用中","閒置" 等三種類型，而實際上的記憶體處理遠比這些複雜，這也是為什麼 free 的輸出欄位會比較多的原因

除了 Free 指令外， Kernel 本身還有提供一個特殊的檔案位置讓使用者可以讀取當前的 memory 狀況，該位置為 /proc/memifno，其會提供如
MemTotal, MemFree, Buffers, Cached 等相關欄位

本文並不會針對每個欄位去探討實際上的意義，取而代之的是簡單的比對，透過幾個列表讓你清楚的知道 free 指令輸出的每個欄位要如何與 /proc/meminfo 去比較，要如何轉換等
特別要注意的是文章內有仔細地針對不同 RedHat Enterprise Linux 版本去分別探討，所以如果是 RedHat 系列的使用者更要好得閱讀並確保能夠理解自己當前使用版本的狀況

