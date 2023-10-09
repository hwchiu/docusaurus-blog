---
title: '閱讀筆記: 「How to enforce Kubernetes network security policies using OPA」'
tags:
  - Reading
  - Kubernetes
  - Security
  - OPA
description: 「How to enforce Kubernetes network security policies using OPA」
---

連結: https://www.cncf.io/blog/2020/09/09/how-to-enforce-kubernetes-network-security-policies-using-opa

不知道大家是否都有使用 Network Policy 來設定 Kubernetes 內部的 ACL?
這邊有個叫做 OPA 的工具可以用幫你驗證你的 Network Policy 是否運作良好，甚至當有新的應用服務要部署的時候，也會確定是否有跟 Network Policy 衝突
有興趣的人可以研究看看
