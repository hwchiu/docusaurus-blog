---
title: '閱讀筆記: 「Mizu, 一套用來檢視 Kubernetes Traffic 的視覺化工具」'
tags:
  - Reading
  - Network
  - Kuberentes
description: '「Mizu, 一套用來檢視 Kubernetes Traffic 的視覺化工具」'
date: 2022-05-25 00:05:08
---

標題: 「Mizu, 一套用來檢視 Kubernetes Traffic 的視覺化工具」
類別: tools
連結: https://getmizu.io/docs/

Mizu 是一個專門針對 Kubernetes 開發的流量分析工具，該工具透過簡單好用的 UI 讓你檢視叢集內的流量走向，其支持的協定有
HTTP, REST, gRPC, Kafka, AMQP 以及 Redis 等相關的應用程式封包。

雖然說透過大部分的 Service Mesh 也都可以提供一樣的功能，但是 Mizu 的特色就是其輕量的架構設計，就是針對流量分析而已，所以如果團隊目前沒有現成的解決方案時，
可以考慮試試看 Mizu 這套輕量級的解決方案。

Mizu 本身由兩個元件組成，分別是 CLI 以及 Agent，當你安裝 Mizu 的 Kubernetes 內時，其會安裝兩個元件
1. 透過 Daemonset 安裝 Agent 到所有節點
2. 透過 Pod 安裝一個 API Server

Agent 會針對需求去抓取節點上特定的 TCP 封包(目前也只有支援 TCP 流量，這意味如 ICMP, UDP, SCTP 等就沒有辦法)，此外要特別注意這類型的解決方案為了能夠
抓取到節點上的所有流量，通常都會讓這類型的 Agent 都設定為 hostnetwork: true，如此一來該 Agent 才有辦法觀察到節點上的所有網卡來進行流量擷取。

有些 k8s 環境會透過如 OPA(Gatekeeper) 等機制去控管要求所有的 Pod 不准使用 hostnetwork，有這些規範的可能就要注意一下整合上的問題。

有興趣的可以稍微玩看看，看看這類型的工具是否可以幫忙除錯

