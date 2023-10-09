---
title: '閱讀筆記: 「Rancher v2.5 Release」'
authors: hwchiu
tags:
  - Reading
  - Rancher
  - RKE
description: 「Rancher v2.5 Release」
---

連結: https://www.suse.com/c/rancher_blog/rancher-2-5-delivers-on-computing-everywhere-strategy/

Rancher v2.5 版本與過往的差異，這邊就來重點節錄一些改變
1. 強化與雲端環境 EKS 與 輕量級 K3s 環境的整合，此外宣稱所有 Kubernetes 服務上面都可以安裝 Ranche 用其來幫忙管理
Rancher v2.5 釋出!
這幾天 Rancher 正式釋出 v2.5 版本，這邊就來重點節錄一些改變
1. 強化與雲端環境 EKS 與 輕量級 K3s 環境的整合，此外宣稱所有 Kubernetes 服務上面都可以安裝 Ranche 用其來幫忙管理
2. 針對美國環境要求而開發更具安全性的發行版，符合 FIPS(Federal Information Processing Standars)
3. 整合 GitOps 部署，針對大規模 Edge 叢集的自動部署解決方案 fleet
4. Monitoring 強化，減少與 Rancher 本身的連接性，反而更加使用 Prometheus operator 來提供服務。管理人員可以直接創建相關的 CRD 提供服務，而這些資訊也都會被 Rancher UI 給一併呈現
其中 (4) 裡面還提供的 cluster-level 的客製化設定，就不需要向過往一樣要開很多個 project-level 的 prometheus 來處理，這方面輕鬆不少
資料來源：
- https://rancher.com/.../rancher-2-5-delivers-computing...
- https://github.com/rancher/fleet
- https://fleet.rancher.io/
- https://github.com/rancher/rancher/issues/23239
2. 針對美國環境要求而開發更具安全性的發行版，符合 FIPS(Federal Information Processing Standars)
3. 整合 GitOps 部署，針對大規模 Edge 叢集的自動部署解決方案 fleet
4. Monitoring 強化，減少與 Rancher 本身的連接性，反而更加使用 Prometheus operator 來提供服務。管理人員可以直接創建相關的 CRD 提供服務，而這些資訊也都會被 Rancher UI 給一併呈現
其中 (4) 裡面還提供的 cluster-level 的客製化設定，就不需要向過往一樣要開很多個 project-level 的 prometheus 來處理，這方面輕鬆不
