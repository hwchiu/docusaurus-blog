---
title: '閱讀筆記: 「本地開發 Kubernetes 的各種選擇」'
authors: hwchiu
tags:
  - Reading
  - Kubernetes
  - DevX
description: 「本地開發 Kubernetes 的各種選擇」
---

連結: https://www.dex.dev/dex-videos/development-clusters

不知道大家第一次接觸 kubernetes 的時候都是使用哪套解決方案來打造你的 K8s 叢集？ 亦或是作為一個開發者，你平常都怎麼架設 K8s 來本地測試?
這篇文章提到了作為一個 Local Kubernetes Cluster 幾個選擇，並且點出了三個需要解決的問題
1.  Container Registry, 作為一個開發環境，應該不會想要每次測試都要將 Container Image 給推到遠方，譬如 dockerHub, Quay，這樣整體效率低落
2. Builder, 如何有效率的幫忙建置你的應用程式，並且與 Kubernete 整合，讓開發者可以更專心於本地開發，而不要擔心太多 k8s 之間的設定
https://www.dex.dev/dex-videos/development-clusters
3. Runtime, 底層使用哪套 Container Runtime, 譬如 docker/containerd/cri-o
註: 我個人對第三點其實沒太多感覺，不覺得本地測試這個會影響太多
後面列舉了當前知名的相關專案，譬如 KIND, K3D, MicroK8S, Minikube 以及 Docker for desktop. 並且簡單的比較了一下這些本地開發的差異。
不知道大家平常本地開發時，都會用哪一套?
我個人是比較常使用 KIND 來測試，畢竟輕量化且同時支援多節點，環境也乾淨，測試起來也方便。
