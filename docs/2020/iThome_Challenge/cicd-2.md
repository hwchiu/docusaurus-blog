---
title: 'Kubernetes 物件管理'
sidebar_position: 2
tags:
  - iThome
  - DevOps
  - Kubernetes
description: iThome-2020 系列文章
date: 2020-10-23 17:00:14
---

本文將於賽後同步刊登於筆者[部落格](https://hwchiu.com/)
有興趣學習更多 Kubernetes/DevOps/Linux 相關的資源的讀者，歡迎前往閱讀
更多相關科技的技術分享，歡迎追蹤 [矽谷牛的耕田筆記](https://www.facebook.com/technologynoteniu)


所有接觸及使用過 Kuberntees 的玩家一定都知道如何透過 Yaml 來管理 Kubernetes 內滿滿的物件與應用程式

Kubernetes 內的眾多資源，譬如 Deployment/Pod/ConfigMap/Ingress/Service... 等全部都可以透過 YAML 的方式來管理及部署

我認為這也是最簡單且最直覺的作法，官方的所有文件都是基於 YAML 為範例來介紹如何玩轉 Kubernetes

舉例來說，下列的 [官方文件](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/) 則分享了五種管理 Kubernetes 物件的方式，這五種方式其實分成兩大類， Imperative 與 Declarative 兩種概念

根據這兩種概念底下又可以分成不同的實作方式，其中最簡單的一個問題就是，你能不能說出 `kubectl apply` 以及 `kubectl create` 這兩者的差異

想要理解這兩者差異，非常推薦閱讀官方文件 [Kubernetes Object Management](https://kubernetes.io/docs/concepts/overview/working-with-objects/object-management/) 來學習，裡面有非常詳細的介紹與比較



回到本文來，到底什麼是應用程式? 筆者認為一個應用程式則是包含了該服務會用到的所有物件資源，譬如 Deployment + Service + ConfigMap

因此下文所講述的應用程式其實背後含義就是多個 Kubernetes 物件

對於一個應用程式來說，如果要將其部署到 Kuberentes 裡面，我認為有下列的議題可以探討

1. 該應用程式是否需要散播給其他使用者使用，其他使用者屬於相同單位還是世界任意使用者
2. 該應用程式是否需要版本控制來提供不同版本的需求?
3. 該應用程式是否會需要不同環境而有不同的設定?



### 分享與散佈

今天一個應用程式如果有需要給外部使用，譬如可以透過類似 `apt install` 的方式來外部安裝，這種情況下我們會需要一些方式來包裝

應用程式，所謂的包裝除了原本所需要的眾多 Kubernetes 物件外，可能也會牽扯到下列議題

1. 文件系統，如何讓外部使用者可以清楚地知道該怎麼使用，以及使用上有什麼要注意的部分
2. 依賴性系統，如果該應用程式本身又依賴其他應用程式，這種情況下要如何讓使用者可以順利安裝全部所需的資源物件
3. 一套發布系統，可以讓開發者跟使用者都方便去上傳/下載這些應用程式

### 版本控制

版本控制的議題相對單純，今天一個程式開發本身就會有版本的變化，其所需要的 Kuberentes 物件資源是不是也會有版本的差異？

譬如 1.0.0 版本需要 ConfigMap 而 2.0.0 則移除了這個限制，所以今天 Kubernetes 的應用程式，本身是否也可以有版本控制的概念來控

管，這樣使用上時就可以更有彈性的去選擇所需要的版本

### 客製化

客製化的議題也是單純，對於 Kubernetes 的物件資源來說，針對不同的使用環境，會需要不同的設定檔案，譬如同樣一個 Kubernetes

Service, 有些環境覺得使用 ClusterIP 就可以，有些環境會需要使用 NodePort 來存取，甚至有些會使用 LoadBalancer

所以今天應用程式是否有辦法讓使用者很方便的去進行客製化的設定，最簡單的做法也許就是一個環境一大包設定檔案，但是這樣建置起

來非常沒有效率，同時維護上也會有眾多問題



## 解決方案

看了上面這些議題之後，接下來要思考的就是到底有什麼方式可以處理上述這些議題?

如果使用最原生的 Yaml ，是否能完成上述的要求？

這個答案我認為可以，雖然麻煩但是有效。

事實上也滿多服務都透過 Yaml 配上 Git 的方式來散步其應用程式，使用者根據不同的 URL 來安裝不同的 Yaml 檔案，同時如果有需求就

自己直接修改該 Yaml 來滿足，譬如一個知名的 CNI Flannel 就是透過這種方式，將 Yaml 的內容全部寫到一個檔案中，然後透過 Github

來維護不同版本，使用者根據不同的 URL 來安裝不同版本的 Flannel。

如果不想要走原生 Yaml 檔案，那可以怎麼做?

相關的開源專案滿多的，我認為主流有兩套，分別是 Helm 以及 Kustomize，這兩套解決方法都用不同的設計思維來讓解決上述問題(部

分，非全部)，就我個人認為，目前除了 Helm 以外，還沒有任何一套開源專案可以滿足 `分享與散佈` 的需求，然而 Helm 於某些情況下又

受到大家的厭惡，輾轉改用 Kustomize 來部署，這中間的取捨沒有絕對，完全是根據應用場景選擇

整個 Kubernetes 生態系的概念也是這樣，沒有一個絕對的解決方案，每個方案都有適合自己的應用場景，最困難的點一直都是如何分析

自己的使用情境並且找到合適的解決方案

整個系列文中我們都會使用 Helm 作為我們的應用程式安裝解決方案，如果對 Kustomize 有興趣的朋友，歡迎自己閱讀官方文件學習怎

麼使用



