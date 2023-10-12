---
title: gcloud ssh 到 GCP VM
authors: hwchiu
tags:
  - GCP
---


GCP 提供 OS login 等方式可以讓使用者透過 `gcloud compute ssh` 等方式登入到沒有 public IP 的機器上，但是每次設定上總是卡各種權限
而預設的 IAM Roles 裡面又沒有相關的身份可以一次搞定，常常要到處找到底缺哪個角色
經過一番努力跟嘗試後，確認只要給予下列權限就可以執行 `gcloud compute ssh`

```
compute.instances.osLogin
compute.instances.setMetadata
compute.instances.use
iam.serviceAccounts.actAs
iap.tunnelInstances.accessViaIAP
networkmanagement.connectivitytests.create
serviceusage.services.enable
```

因此創立一個新角色給予上面的權限，然後再把該角色綁定到目標使用者或群組，應該就可以透過 `gcloud compute ssh` 到遠方機器了。
