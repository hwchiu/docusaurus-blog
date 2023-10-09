---
title: '閱讀筆記: 「Amazon EKS Upgrade Journey From 1.17 to 1.18」'
tags:
  - Reading
  - AWS
  - EKS
description: 「Amazon EKS Upgrade Journey From 1.17 to 1.18」
---

連結: https://medium.com/swlh/amazon-eks-upgrade-journey-from-1-17-to-1-18-e35e134ca898

這邊跟大家分享一篇 EKS 升級的心得文章，該文章記錄了 EKS 從 k8s 1.17 到 1.18 的過程，並且先分享了幾個 1.18 主要新功能，包含了
1. Topology Manager (Beta)
2. Service Side Apply (Beta)
3. Pod Topology Spread (Beta)
... 等
詳細升級過程看起來無痛輕鬆，有興趣的可以參考全文
當然升級 K8S 最重要的還是要注意 Resource 的 API 版本是否有變，譬如 1.16 就讓很多人採到 Deployment 使用  extensions/v1beta1 的錯誤，所以每次升級請先檢查有沒有哪些過舊的 API 版本被丟棄，以免升>
級後現有的服務部屬不上去
題外話： ingress 如果還是使用 extensions/v1beta1 的話，建議都換成 networking.k8s.io/v1beta1 (k8s 1.14+), 到了 1.22 後本來的 extensions/v1beta1 就不能用囉
