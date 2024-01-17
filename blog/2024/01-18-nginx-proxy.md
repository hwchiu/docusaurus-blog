---
title: 'Nginx Proxy_Pass 不會重新查詢 DNS'
authors: hwchiu
tags:
  - Linux
  - Kubernetes
---

若 Nginx 內使用 proxy_pass 來轉發，並且該目標是透過 DNS 指向的話，沒有處理好就只會查詢一次，查詢一次就意味若該 DNS 之後有轉變過，整個 nginx 都會指向舊的位置

解決方式就是加入 resolver 並且透過變數的方式去設定 proxy_pass

使用情境特別是 k8s 內的 headless

參考: https://rajrajhans.com/2022/06/force-dns-resolution-nginx-proxy/

之後再來寫一篇長篇文章記錄 source code 的閱讀心得
