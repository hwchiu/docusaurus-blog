---
title: '閱讀筆記: 「容器的除錯之路，遇到 Permission Denied 該怎麼辦」'
tags:
  - Reading
  - Container
  - Debug
description: 「容器的除錯之路，遇到 Permission Denied 該怎麼辦」
date: 2022-05-04 00:05:08
---

標題: 「容器的除錯之路，遇到 Permission Denied 該怎麼辦」
類別: container
連結: https://live-rhes.pantheonsite.io/sysadmin/container-permission-denied-errors

作者提到大部分遇到 Container 權限問題時，最無腦的一招就是 --privileged 直接硬上權限，但是其實大家都不知道自己到底缺少什麼權限，盲目地使用 --privileged 的確可以解決問題
但是實務上卻是犧牲 Security 換來的，因為不知道缺少什麼而直接硬開，其實就是硬生生的將幾乎所有保護功能都關閉。

本篇文章就來探討當遇到權限問題時有可能是什麼造成的，以及應該如何精準地去設定這些權限而不是用一招 --privileged 跳過。
此外由於作者本身就是 Podman 開發團隊，因此文章之後的介紹與範例都會基於 Podman 來完成，

1. 錯誤定位

如果你的容器問題透過 --privileged 也不能解決，那至少你的問題跟本篇文章的關聯性不大，或是說你的問題其實根本不是安全性方面的設定問題，只有當妳確認你的問題
可以因為 --privileged 而解決時本篇文章的內容才會對你有幫助

1. Is SELinux the issue?
2. Is AppArmor the issue?
3. Test capabilities
4. Test SECCOMP
5. Test masked kernel filesystem

除了上述五個安全性設定外，作者也針對 namespace 探討可能會出現的問題，包含
1. Is user namespace the issue?
2. Is network namespace the issue?
3. Is pid namespace the issue?

最後就是不免俗的推薦大家使用看看 rootless container，畢竟大部分的應用程式其實都沒有要寫入系統的需求，理論上來說應該都要可以運行於 rootless 的模式

整篇文章整理的非常的好，每個類別都有指令操作來介紹概念，對於這些資安控管不熟的人來說可以說是一個溫習的好機會

