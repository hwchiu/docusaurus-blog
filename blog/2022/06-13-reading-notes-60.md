---
title: '閱讀筆記: 「分散式系統上的常見網路謬誤」'
authors: hwchiu
tags:
  - Reading
  - Network
description: 「分散式系統上的常見網路謬誤」
date: 2022-06-13 00:05:08
---

標題: 「分散式系統上的常見網路謬誤」
類別: others
連結: https://architecturenotes.co/fallacies-of-distributed-systems/

本篇文章是探討分散式系統上很常被開發者所忽略的網路情況，這些情境都容易被忽略與考慮，但是每個點實際上都會影響整個系統的效能與功能

這些常常被忽略的網路情況包含
1. The network is reliable
2. Latency is zero
3. Bandwidth is infinite
4. The network is secure
5. Topology doesn't change
6. There is one administrator
7. Transport cost is zero
8. The network is homogeneous

# The network is reliable

開發分散式系統的時候，一定要去考慮網路壞掉的情況，切記網路中的任何傳輸都不是 100% 穩定的。千萬不要假設所有封包與傳輸都沒有問題，必要時還要考慮重新連線，重新傳輸的情況。

# Latency 
網路時間還有一個要注意的就是延遲時間，通常 Client/Server 如果都是同一個系統內的服務時，這類型的時間可能非常短，如 ms 等級。
但是當 client 可能是來自真實使用者的手機裝置時，就要將 latency 這些因素給考慮進去，不能假設所有的 API 與網路請求都是秒回的情況。

更常見的還有導入 CDN 等方式透過地理性的位置來減少 client/server 之間要傳輸的距離。

文章內針對剩下的類別都有簡單的圖文並茂來解釋，淺顯易懂，有興趣的可以參閱全文

