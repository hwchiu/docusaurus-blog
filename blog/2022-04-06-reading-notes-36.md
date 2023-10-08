---
title: '閱讀筆記: 「kubectl delete 的行為跟 docker delete 完全不同」'
tags:
  - Reading
  - Kubectl
description: 「kubectl delete 的行為跟 docker delete 完全不同」
date: 2022-04-06 00:05:08
---

標題: 「kubectl delete 的行為跟 docker delete 完全不同」
類別: kubernetes
連結: https://www.acritelli.com/blog/kubectl-delete-sigkill/

熟悉 Linux 系統的人想必都了解 Signal 的概念，特別是幾個常見的如 SIGTERM, SIGKILL 等，

作者的團隊嘗試透過 SIGKILL 的行為來驗證與測試團隊內部署的 Kuberentes Pod，特別是當遇到 ungraceful shutdown 的情境時這些 Pod 會如何運作。
團隊嘗試透過 kubectl delete 的方式來刪除這些 Pod，但是實驗過程中發現 --grace-period 這個參數的運作行為與團隊的預期行為不同。
kubectl delete 得說明文件中特別指出

```
      --grace-period=-1: Period of time in seconds given to the resource to terminate gracefully.
Ignored if negative. Set to 1 for immediate shutdown. Can only be set to 0 when --force is true
(force deletion).
```
作者看文這段文字說明後滿腦問號，提出兩個問題
1. grace-period 設定為 1 的 immediate shutdown 是直接送出 SIGKILL 嗎？ 還是說會有一秒的間隔時間才發送 SIGKILL?
2. grace-period 設定為 0 是代表沒有間隔，所以也是馬上送出 SIGKILL 嗎? 還是說其只是單純將資源從 k8s API 中移除而沒有等待而已？

作者認為文件沒有辦法解決這些問題，所以設計了一些實驗來測試

--grace-period=1 的實驗結果是
1. 送出 SIGTERM
2. 等待一秒
3. 送出 SIGKILL

作者對於這個行為感到不解，認為 "immediate shutdown" 應該就是要馬上關閉呀，怎麼可以送 SIGTERM 給 Pod 讓 Pod 有機會可以優雅的結束一切？
因為對於這行為的認知不同導致作者團隊的測試行為沒有辦法順利完成。

接下來測試 --grace-period=0 & --force=true 

文件中說明這樣設定會立刻將該資源從 API Server 內給刪除並且避開 graceful 的階段。
最後測試的結果是
1. 發送 SIGTERM
2. 等待 30 秒
3. 發送 SIGKILL

作者表示又糊塗了，沒想到設定 grace-period=0 竟然中間還有 30 秒的時間，這完全與預料的不同，更麻煩的是文件也沒有講得非常清楚到底什麼是正確的行為，
此外還提到 Docker 就支援真正的 immediate shutdown，直接送 SIGKILL。

另外作者發現 K8s GitHub 中的也有人提出類似的 issue，對於這些 graceful 的行為感到不解同時文件說明不夠精準。

這件事情很難說誰正確誰不正確，畢竟不同的系統架構下的設計方式與條件都不同，不過的確 K8s 的指令文件有時候是真的不是精準，需要仔細測試才可以理解到底運作行為為何

