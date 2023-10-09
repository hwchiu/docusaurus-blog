---
title: '閱讀筆記: 「CPU Limit 造成的效能低落」'
tags:
  - Reading
  - Linux
  - Kernel
  - ResourceManagement
description: 「CPU Limit 造成的效能低落」
---

# CPU Limit 造成的效能低落
連結: https://erickhun.com/posts/kubernetes-faster-services-no-cpu-limits/

想必大家一定都有使用過 CPU Limit 的經驗，透過這個機制能夠確保每個 Container 使用的 CPU 資源量，也可以保證每個節點上面會有足夠 CPU 供 Kubernetes 原生服務 (kubelet) 使用。
然而本篇文章就要來跟大家分享一個設定 CPU Limit 反而造成效能更差的故事，故事中當 CPU 設定為 800ms 的時候，卻發現實際運行的 Container 最高大概就只有 200ms 左右，這一切的一切都是因為 Liniux Kernel 的臭蟲導致!
一個直接的做法就是針對那些本來就沒有過高 CPU 使用量服務取消其 CPU Limit，作者於文章中也探討了一些機制要如何保護與應對這些被移除 CPU 限制的服務。
這個臭蟲於 Linux Kernel 4.19 後已經修復，但是要注意你使用的發行版本是否有有包含這個修復，作者列出一些已知的發行版本修復狀況
Debian: The latest version buster has the fix, it looks quite recent (august 2020). Some previous version might have get patched.
Ubuntu: The latest version Ubuntu Focal Fosa 20.04 has the fix.
EKS has the fix since December 2019, Upgrade your AMI if necessary.
kops: Since June 2020, kops 1.18+ will start using Ubuntu 20.04 as the default host image.
GKE: THe kernel fix was merged in January 2020. But it does looks like throttling are still happening.
