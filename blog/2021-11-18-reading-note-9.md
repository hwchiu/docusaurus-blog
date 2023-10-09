---
title: '閱讀筆記: 「Java 應用程式於容器內的效能問題」'
tags:
  - Reading
  - Container
  - Jave
  - Performance
description: 「Java 應用程式於容器內的效能問題」
---

連結: https://mucahit.io/2020/01/27/finding-ideal-jvm-thread-pool-size-with-kubernetes-and-docker/

如果有在 Kubernetes 內部署 Java 應用程式的人，千萬不要錯過這篇文章，此文章中分享 Java 應用程式關於 Thread Pool Size 的問題，同時當 Java 應用程式容器化並且部署到 Kubernettes 內之後，該怎麼設定
 JVM 來讓其能夠更高效率的於容器化環境下工作
