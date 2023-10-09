---
title: Bash 下要如何處理 Signal
authors: hwchiu
tags:
  - Linux
description: Bash 下 Signal 的各種介紹
date: 2021-12-19 23:03:36
---

連結: https://linuxconfig.org/how-to-propagate-a-signal-to-child-processes-from-a-bash-script

基本 Bash 介紹文，探討 trap 的用法，如何於不同的情況下正確攔截 SIGNAL，同時如果 script 中運行的程式有無背景執行
會有什麼差異，推薦給對 Bash 不熟的讀者閱讀重新複習


