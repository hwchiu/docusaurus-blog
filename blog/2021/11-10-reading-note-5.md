---
title: '閱讀筆記: 「Kubernetes CNI 效能比較」'
authors: hwchiu
tags:
  - Reading
  - Network
  - Kubernetes
  - CNI
description: 「Kubernetes CNI 效能比較」
---

# Kubernetes CNI 效能比較
連結: https://www.hwchiu.com/docs/2020/cni-performance-2020

1. Kube-OVN 不但資源吃很多，效能還很不好
2. Canal/Calico/Flannel 三者的運算資源使用量都不多，且效能都很好
3. Kube-Router 的效能都很差，資源使用方便也不是特別出色
4. WeaveNet 與 Cilium 效能都不差，但是 Cilium 吃的效能很高，可說跟 Kube-OVN 同等級，而 WeaveNet 用到的資源少
5. 這次的實驗評比我認為其實能看到的東西有限，主要是不同的 CNI 所搭配的解決方案不同，目標要配合的情境也不同，雖然從圖表中可以看到 Kube-OVN 的綜合評比最差，但是其要用的場景本>身就不太一樣，單純用最原始的流量互打來判別優劣其實不太對
6. 如果今天要選擇網路 CNI 的時候，可以看到效能跟資源方面， Flannel/Calico/Canal 幾乎等級都差不多，而且 Calico 還支援加密與 Network Policy 等功能。
7. 此外，目前 Flannel 也從 Kubeadm 的官方教學頁面中移除，因為太多問題且維護者沒有要修復。所以我認為如果沒有特別使用情境需求的話，可以考慮使用 Calico.
8. Cilium 對於安全性以及 load-balancing 方面也有別的功能，就如同(5)點所提到，不同的場景有不同的需求，有些功能是獨占的。
