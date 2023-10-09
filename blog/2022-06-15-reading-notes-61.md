---
title: '閱讀筆記: 「啟動 container 直接 kernel panic 的 bug」'
authors: hwchiu
tags:
  - Reading
  - Container
  - Linux
description: 「啟動 container 直接 kernel panic 的 bug」
date: 2022-06-15 01:05:08
---

標題: 「啟動 container 直接 kernel panic 的 bug」
類別: others
連結: https://bugs.launchpad.net/ubuntu/+source/linux-aws-5.13/+bug/1977919

本篇文章探討的是一個關於 Ubuntu kernel(5.13+) bug 產生的各種悲劇，已知受害的雲端業者包含

linux-oracle
linux-azure
linux-gcp
linux-aws

等常見大廠。

簡單來說，預設設定下只要簡單跑一個 container 譬如
`docker run -it ubuntu bash` 就可以直接觸發 kernel panic，直接讓你系統死亡強迫重啟

整個 bug 結論來說就是，一連串的操作最後有機會導致使用到一個 null pointer，然後 kernel 就炸拉...

相關的修復可以參閱這個連結，裡面有大概提到問題發生點以及修復方式。
https://kernel.ubuntu.com/git/ubuntu/ubuntu-impish.git/commit/?id=6a6dd081d512c812a937503d5949e4479340accb

