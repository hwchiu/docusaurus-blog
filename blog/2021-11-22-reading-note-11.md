---
title: '閱讀筆記: 「Kubernetes manageFields 討論」'
tags:
  - Reading
  - Kubernetes
description: 「Kubernetes manageFields 討論」
---

連結: https://github.com/kubernetes/kubernetes/issues/90066?fbclid=IwAR3d3oXBtTz2ChxmqXQmLGIrghUxN3Tz67EYWZiuzNfltqVedAlFheg3qLA

如果你機會跑過 kubernetes 1.18 版本，一定要試試看最基本的 kubectl get pods -o yaml，看看是不是內容裡面多出了非常多 f:{} 系列的檔案，導致整個 Yaml 變得非常冗長，閱讀不易，甚至想要抓取到最原始>
的內容都非常麻煩。
Kubernetes 官方 Github 上還有相關的 issue 再討論這個欄位，詢問是否有辦法能夠清除。不少人都提出了一些希望的用法來處理
Issue: https://github.com/kubernetes/kubernetes/issues/90066
目前看下來最簡單的做法還是透過 kubectl plugin, kubectl-neat 來幫忙完成，可以透過 krew 這個 kubectl 管理工具來安裝管理
https://github.com/itaysk/kubectl-neat
此工具可以將 Server 上得到 Yaml 的內容給整理最後得到最初的檔案
至於到底什麼是 managedFiles? 這個由欄位的出現是因為 1.18 以後，已經將 Server Side Apply 更新策略預設啟用而導致的，而 Server Side Apply 則是一種用來管理 Declarative 設定檔案的方式，對使用者來>
說基本上完全無感，因為一切都還是透過 kubectl apply 來使用，只是到底如何判斷  當前檔案內容與系統上內容誰先誰後，誰對誰錯，甚至當有人透過 kubectl edit 去編輯內容的時候，到底該怎麼更新。
