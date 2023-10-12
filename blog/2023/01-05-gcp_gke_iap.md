---
title: 透過 GCP IAP Gateway 來保護 GKE 內的網站
authors: hwchiu
tags:
  - GCP
---

透過基本的 GKE + Serviec + Ingress 部署網站後通常都沒有太多存取問題，但是對於公開服務這件事情就需要考量資安，所有網站是否都需要經過認證與授權才可以讓外部存取？
有些第三方服務開源版本可能不方便銜接或是沒有實作這一塊，這時候可以透過 GCP 的  Identity-Aware Proxy(IAP) Gateway 快速搭建一個機制，所有存取該網站的人都會被導向 Google 登入，且只有符合設定 domain 的人登入後才可以存取網站內容。

流程需要
1. 到 OAuth 2.0 Consent 頁面那邊去創立一個物件，並且取得 client_id 以及 client_secret.
2. 產生一個 Secret 物件包含對應的 client_id 與 client_secret
3. 產生一個 BackendConfig 的物件，將上述的 secret 綁定到該 Backend 物件
4. 將 BackendConfig 與 Service 物件綁定

前三個步驟可以參考[官網設定 Enabling IAP for GKE](https://cloud.google.com/iap/docs/enabling-kubernetes-howto)


```
apiVersion: v1
kind: Service
metadata:
  annotations:
    cloud.google.com/backend-config: '{"default": "my-backend"}'
  name: dev-service
  namespace: dev
spec:
  ports:
    - name: http2
      port: 80
      protocol: TCP
      targetPort: 8080
    - name: https
      port: 443
      protocol: TCP
      targetPort: 8443
  selector:
    app: service
  sessionAffinity: None
  type: ClusterIP
 ```

一切設定完畢後，接下來還要到 GKE 那邊開啟 IAP 的設定，參考 [Setting up IAP access](https://cloud.google.com/iap/docs/enabling-kubernetes-howto)
