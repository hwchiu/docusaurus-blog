---
title: '閱讀筆記: 「DNS 5 秒 Dealy 的緣由」'
tags:
  - Reading
  - Network
  - Linux
description: 「DNS 5 秒 Dealy 的緣由」
---

連結: https://www.weave.works/blog/racy-conntrack-and-dns-lookup-timeouts

今天跟大家分享一個 UDP 於 Linux Kernel 內的 Race Condition 問題。這問題我以前於 Linux Kernel 3.14 也有採過一樣的雷，但是到今日都還沒有一個很漂亮的解決方案，這邊就快速的跟大家介紹一下這個問題>
是什麼，以及跟 k8s 有什麼關係
# 發生前提
1. 使用 UDP 這種沒有重送機制的協定
2. Kernel 有開啟 conntrack 此功能
# 發生條件
相同的 Client 短時間內透過 UDP (也許是不同 thread) 送出兩個 UDP 封包到外面，對於 Linux Kernel 來說，會希望透過 conntrack 來追蹤每一條連線，但是底層建立的時候會有一些會有一些機制，因此當兩個封
包同時進入的時候，有可能就會因為先後順序導致第二個封包被丟棄
# 可能發生問題
DNS 的請求封包預設情況下會同時透過 UDP 送出 A & AAAA 兩個封包，而這兩個封包如果很巧的採到這個情況，然後你的 A 封包就沒有辦法順利解出 DNS，最後就要等五秒的 timeout 來重新發送
下偏這篇文章就是 weave works 遇到 DNS 5秒 timeout 的問題，然後仔細的將我上面所寫的總結給解釋清楚，每一個步驟發生什麼事情，什麼是 conntrack 以及暫時的 workaround 是什麼
之後會在跟大家分享目前一些解決方法怎麼做
