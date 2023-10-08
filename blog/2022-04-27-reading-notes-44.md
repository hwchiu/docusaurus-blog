---
title: '閱讀筆記: 「istio 下因為YAML 與 Go template 結合產生的 CVE」'
tags:
  - Reading
  - ServiceMesh
  - Security
description: 「istio 下因為YAML 與 Go template 結合產生的 CVE」
date: 2022-04-27 00:05:08
---

標題: 「istio 下因為YAML 與 Go template 結合產生的 CVE」
類別: others    
連結: https://paper.seebug.org/1882/

熟悉 Kubernetes 的使用者一定對於各式各樣的資源格式感到不陌生，譬如描寫一個 Pod 需要準備些關於 containers 的基本資料，其餘還有 Label, Annotation 等
各種資料需要填寫。

Kubernetes 內透過 apimachinery 的方式來驗證每個欄位是不是合法，譬如最常見的就是創建資源名稱時有時候會因為_等出現格式不符合，準確來說是 Pod 的方式來驗證每個欄位是不是合法，譬如最常見的就是創建資源名稱時有時候會因為_等出現格式不符合，準確來說是
透過 DNS RFC 1123 來驗證 Pod 是否合法。
部分的數值資料可能會於 Controller 中額外去檢查，至於自定義的 CRD(Customer Resource Definition) 則是創建時可以透過 openAPIV3Schema 去定義每個欄位的合法數值。

今天這篇文章要介紹的問題是跟 istio 環境的問題，當使用者創建一個名為 Gateway 的資源到叢集中時， istio 會去讀取該 Gateway 資料並且轉換為 Service/Deployment 兩個底層資源。
作者仔細研究發現創建 Service 時會從 Gateway 中的 Annotation 找到名為 "networking.istio.io/service-type" 的資料，並用其作為 Serivce 的 type.

然而 Annotation 的數值沒有並沒有任何檢查機制，所以使用者可以於該欄位 "networking.istio.io/service-type" 填入各種數值，因此作者就嘗試撰寫一個非常長的 Annotation，譬如
```
  annotations:
    networking.istio.io/service-type: |-
      "LoadBalancer"
      apiVersion: apps/v1
      kind: Deployment
      metadata:
        name: pwned-deployment
        namespace: istio-ingress
      spec:
        selector:
          matchLabels:
            app: nginx
        replicas: 1
        template:
          metadata:
            labels:
              app: nginx
          spec:
            containers:
            - name: nginx
              image: nginx:1.14.3
              ports:
              - containerPort: 80
              securityContext:
                privileged: true
```

結果非常順利的， isio 最終創造了一個作者故意描述的 deployment，而該 deployment 還特別的設定 privileged: true 的選項並且透過這次的測試證明該 YAML 的檢查問題導致使用者有機會插入任何想要的資源到環境中
對本文有興趣的可以觀看一下

