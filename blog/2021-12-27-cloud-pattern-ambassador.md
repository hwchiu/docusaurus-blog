---
title: '[Cloud Design Pattern] - Ambassador 模式'
authors: hwchiu
tags:
  - CloudNative
  - DesignPattern
description: Cloud Design Pattern
date: 2021-12-27 22:52:08
---

連結: https://docs.microsoft.com/.../archit.../patterns/ambassador

微軟文件中的系列好文，探討雲端方面的各種設計模式，而本篇探討的是 Ambassador 模式
想法:
1. 想要提供更多進階的網路功能到應用程式上，譬如 TLS、circuit、breaking、routing 或 metering。
2. 應用程式不太方便修改來符合上述功能。
3. 部署一個跟原應用程式相鄰的應用程式來處理這些網路功能。
應用程式過於古老，團隊沒有辦法進行深度修改或是團隊中的應用程式使用過多的語言與框架完成，很難簡易的將這些功能給導入到既有的應用程式中
這時候部署一個全新的應用程式就可以再不修改既有應用程式的前提下來提供這些進階的網路功能。
這個模式普遍被稱為 ambassador 模式，而本篇文章就是針對該模式進行一個科普概念。
文章最後還要探討使用這種模式的一些注意事項，譬如網路的延遲會因為多一個應用程式而提升，所以使用上也要評估看看是否合適。
也有簡單的列出什麼情況適合使用 ambassador 什麼情況不適合。


