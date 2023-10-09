---
title: '閱讀筆記: 「SO_REUSEPORT 提昇 Nginx 效能」'
tags:
  - Reading
  - Network
  - Performance
description: 「SO_REUSEPORT 提昇 Nginx 效能」
---

連結: https://blog.cloudflare.com/the-sad-state-of-linux-socket-balancing/

今天要來跟大家分享一個單一節點如何提高應用程式吞吐量與服務能力的方式
這個方式主要探討的是應用程式對於網路連線的 I/O 模型，試想一個常見的使用範例。
一個主要的 Process 會去聽取一個固定的 port number (ex port 80)，並且通知後面眾多的 worker 來幫忙處理這些封包連線，而這些 worker 的工作就是處理連線。
整個架構中是一個 1 v.s N 的狀況， 一個負責 Listen ，N個負責處理連線內容
而今天要分享的則是想要讓架構變成 N v.s N 的狀況， 會有 N 個 Process, 每個 Process 配上一個 Worker。
而這 N個 process 同時共享一樣的 Port (ex, port 80)
這種情況下可以減少多個 worker 共享一個 listen socket 時的各種保護機制，取而代之的則是每個 listen socket 配上一個專屬的 worker 來處理。
要達成這樣的架構非常簡單，只要透過 SO_REUSEPORT 這個 socket option 告
訴 Kernel 當前這個 PORT 可以重複使用。
當封包送到 kernel 後則是由 kernel 幫你分配封包到所有使用相同地址的 Listen Socket (Process)
根據 nginx 官方文章的測試，這種架構下對於 RPS (Request per second) 有顯著的提升，有興趣的可以看看下列兩篇文章

