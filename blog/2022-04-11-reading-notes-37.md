---
title: '閱讀筆記: 「升級 Kubernetes 1.22 的注意事項」'
authors: hwchiu
tags:
  - Reading
  - Kubernetes
description: 「升級 Kubernetes 1.22 的注意事項」
date: 2022-04-11 00:05:08
---

標題: 「升級 Kubernetes 1.22 的注意事項」
類別: kubernetes
連結: https://blog.runx.dev/will-that-kubernetes-v1-22-upgrade-break-my-application-cc339dc2e2c7

隨者各大公有雲逐步支援 Kubernetes 1.22，相關使用者可能都會開始進入升級的準備階段，而每次 Kubernetes 升級除了單純
思考 Kubernetes 本身的升級順利與否外，也要確認正在運行的所有 Kubernetes 資源與相關工具是否也能夠順利運行，這使得整個準備工作變得複雜與龐大。

從 Kubernetes 的角度來看，每次的升級除了基本的穩定性與相關功能修正外，最重要的還有 Kubernetes API 的改變，該改變影響巨大，譬如所有 Manifest 的內容，譬如眾多透過 YAML 所描述的各種資源
API 的改變都會提早通知所有社群，於先前的版本先將該 API 標為 deprecated 接者後續版本才會正式移除，譬如 networking.k8s.io/v1beta1 於 1.19 被標示為 deprecated 然後正式於 1.22 移除。
正式的版本 networking.k8s.io/v1 則從 1.19 正式啟用，讓管理者有大概有三個版本的時間轉移。

因此升級前一定要先架設一個測試環境，嘗試部署所有現存的資源來確保升級不會出現不預期的錯誤。

作者整理出關於 1.22 升級要注意的版本變化，如下(幾乎都是從 v1beta 變成 v1)
1. Webhook: admissionregistration.k8s.io/v1beta1 → admissionregistration.k8s.io/v1
2. CRD: apiextensions.k8s.io/v1beta1 → apiextensions.k8s.io/v1
3. APIService: apiregistration.k8s.io/v1beta1 → apiregistration.k8s.io/v1
4. TokenReview: authentication.k8s.io/v1beta1 → authentication.k8s.io/v1
5. SubjectAccessReview: authorization.k8s.io/v1beta1 → authorization.k8s.io/v1
6. CertificateSigningRequest: certificates.k8s.io/v1beta1 → certificates.k8s.io/v1
7. Lease: coordination.k8s.io/v1beta1 → coordination.k8s.io/v1
8. Ingress: extensions/v1beta1, networking.k8s.io/v1beta1 → networking.k8s.io/v1
9. IngressClass: networking.k8s.io/v1beta1 → networking.k8s.io/v1
10. RBAC resources: rbac.authorization.k8s.io/v1beta1 → rbac.authorization.k8s.io/v1
11. PriorityClass: scheduling.k8s.io/v1beta1 → scheduling.k8s.io/v1
12. Storage resources: storage.k8s.io/v1beta1 → storage.k8s.io/v1

