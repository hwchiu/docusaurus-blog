---
title: gcloud 切換帳號
author: hwchiu
tags:
  - GCP
---

當環境中有多組 GCP 帳號要登入存取時，譬如一組個人帳號，一組 service account，這時後可以透過 gcloud 的一些指令才切換與檢視

```bash
$ gcloud config configurations list

NAME       IS_ACTIVE  ACCOUNT                                              PROJECT                COMPUTE_DEFAULT_ZONE  COMPUTE_DEFAULT_REGION
default    False      aaaa@yyyyy.com                                   first-project
name2      False      bbbb@yyyyy.com
name3      True       ccccc@yyyy-admin.iam.gserviceaccount.com
```

如果要切換可以使用
```
$ gcloud config configurations activate name2
```

進行切換，這時候 gcloud command 就可以轉移過去了。
如果有用 GKE 的，還要額外呼叫一次 `gcloud container clusters update` 去更新 KUBECONFIG