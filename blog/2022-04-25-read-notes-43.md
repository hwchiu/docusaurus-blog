---
title: '閱讀筆記: 「三座獨立 k8s cluster 還是一個跨三個地區的 k8s cluster ?」'
tags:
  - Reading
  - Kubernetes
description: 「三座獨立 k8s cluster 還是一個跨三個地區的 k8s cluster ?」
date: 2022-04-25 00:05:08
---

標題: 「三座獨立 k8s cluster 還是一個跨三個地區的 k8s cluster ?」
類別: kubernetes
連結: https://itnext.io/3-reasons-to-choose-a-wide-cluster-over-multi-cluster-with-kubernetes-c923fecf4644

講到多套 kubernetes 的情況下，目前大部分的文章都會推薦用三套獨立的 kubernetes 叢集而非架設一套同時管理三個地點的 kubernetes 叢集。
本篇文章作者從不同的面向分享為什麼要選擇一個 kubernetes 管全部，而不是要架設三套 kubernetes 叢集。

# Latency
一套 kubernetes 最令人詬病且很難處理的就是 Latency 的問題，作者提到 Latency 的問題會影響 ETCD
ETCD 被影響後會影響整個叢集的運作，甚至連應用程式相關的處理都會變慢。

作者提到其實這個問題能夠採取兩個步驟來解決
1. 重新安排 etcd 的節點位置，或是使用 non-etcd 的解決方案
2. 透過 node labels 讓要使用 etcd 的服務跟 etcd 盡量靠近

註: 我是覺得這說法不能解決問題，一般應用程式要是被分散到不同地區你的存取還是有機會跨地區，除非要很認真地針對不同地區去設計 label，讓應用程式的部屬都只會固定同個地區，但是要這樣搞跟我直接搞三套不覺得後者會比較累。

# Security
作者一直強調使用 mesh VPN 來打通底層所有網路封包處理，讓你一個大 k8s 管理多個地區，就不用擔心底層網路問題

單套 k8s 的好處有什麼？作者認為有

# No Complicated tooling
作者提到 2021 年的 KubeConf 有各種管理多套 k8s 叢集的工具，如 KubeEdge, OpenShift Edge, Akri, Baetyl,
Kubermatic, Rancher, KubeFed... 等，如果用一套大 k8s 就可以不使用這些工具，直接減少與這類型複雜工具的依賴性
一套 k8s 叢集可以讓你使用最簡單也是最習慣的方式來管理所有環境

# No extra overhead
每套 K8s 環境中都會有如監控，日誌， registry 等各種工具，多套 k8s 的架構就是每個叢集都要安裝一份，但是如果採用一個大 k8s 的架構就只要維護一份即可
所以可以減少很多不必要的重複安裝。

# Ultimate Flexibility
這段其實不很理解，為什麼作者這麼想要推廣 mesh VPN ... 

註: 這篇文章底下有留言說探討到說 RBAC 等相關權限問題是個很大的問題，你一套 k8s 很難處理這些，事情沒有想像的這麼簡單

