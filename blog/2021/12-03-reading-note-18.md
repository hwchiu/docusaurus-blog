---
title: '閱讀筆記: 「Container Image 的儲存挑戰」'
authors: hwchiu
tags:
  - Reading
  - Container
  - Storage
description: 「Container Image 的儲存挑戰」
---

連結: https://medium.com/flant-com/cleaning-up-container-images-with-werf-ec35b5d46569

不知道大家有沒有遇過本地儲存空間滿了，再也抓不了 docker image 的慘痛經驗呢？ 本文就想要探討的是遠方 Container Image 上的管理問題，隨者時間演進，愈來愈多的版本產生，那作為管理者，我們要怎麼去>
看待這些 image，放任他們無限擴張嘛？ 這些資源背後都代表一個儲存空間，也就意味額外的成本開銷。
作者想要解決的問題是，如何設計一套自動機制去刪除用不到的 image tag，保留會用到的，為了解決這個問題，要先定義什麼叫做 "用得到的 image tag".
本文列舉了四種需要保留 image tag的情況
1) Production 環境正在使用的 image tag, 如果刪除了，遇到 ImagePullPolicy:Always 的情況那可真的麻煩了
2) 遇到緊急情況，應用程式需要退版，因此保留的 image tag 可不能只有當前版本，過往穩定版本也都要保留
3) 從開發角度來看需要的 image tag, 譬如我們開了一個 PR，這個 PR 有一個對應的 image tag, 再這個 PR 還沒有結束前，這個 image tag 應該都要保留讓開發者去驗證與使用
4) 最後則是特定版本號或是code name等專屬名稱
作者使用 werf 這套 k8s 建置佈署工具來幫忙，這工具除了常見的 build/deploy 外，還可以刪除遠方的 container image。 因此作者整合一套演算法，將其與 werf 整合，讓整個 CI/CD 的過程中能夠自動去產生新
的 image，並且根據需求去移除用不到的 image.
有興趣的記得點選下列原文來學習更多
