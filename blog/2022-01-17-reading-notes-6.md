---
title: '閱讀筆記: 「The pains of GitOps 1.0」'
tags:
  - Reading
  - GitOps
  - DevOps
description: 「The pains of GitOps 1.0」
date: 2022-01-17 00:05:07
---

標題: 「The pains of GitOps 1.0」
類別: cicd
連結: https://codefresh.io/about-gitops/pains-gitops-1-0/

作者認為很多文章都闡述 GitOps 對於部署帶來的好處，但是軟體世界沒有十全十美的東西，所以作者就探討了 12 個其認為 GitOps 的缺點

註:
1. 本篇文章是 2020 年底的文章，所以文章探討的內容也許當年沒有很好的解決方式，但是現在已經有了比較好的處理方式。
2. 我個人覺得文章的某些部分有點太牽強，已經假設 GitOps 是個萬能解法，什麼問題都要靠這個。就這個問題是不管有沒有 GitOps 都會存在的問題，有點為了反對而反對，與其說 GitOps 的缺點不如說沒有解決的問題。

這邊就節錄幾個文章中探討的議題，剩下有興趣的可以閱讀全文

# GitOps covers only a subset of the software lifecycle
作者認為 GitOps 的精神「我想要將 Git 專案內的所描述的狀態給同步到叢集中」這點只能處理應用程式部署的問題，但是其他的流程
譬如編譯程式碼，運行單元測試，安全性檢查，靜態掃描等過程都沒有辦法被 GitOps 給處理。

作者不滿的點主要是很多 GitOps 的工具好像都會宣傳自己是個全能的解決方案，能夠處理所有事情，但是實際上卻沒有辦法。
實際上其專注的點就是應用程式部署策略為主的部分，其餘部分還是團隊要有自己的方式去處理

# Splitting CI and CD with GitOps is not straightforward
過往很多團隊都會將 CI/CD 給整合到相同的 pipeline 中去處理，通常是最後一個階段就會將應用程式給部署到目標叢集，然而有外部 Controller 實作的 GitOps
解決方案會使得 CI/CD 兩者脫鉤，好處來說就是 pipeline 不需要去處理部署，只需要專心維護 Git 內的資訊，後續都讓 Controller 來處理。

然後某些團隊本來的 CI/CD 流程會於部署完畢後還會進行一些測試或是相關操作，這部分會因為 GitOps 將部署給弄走導致整個流程不太好處理，畢竟要如何讓
GitOps 部署完畢後又要可以觸發其他的工作也是額外要處理的事情

# There is no standard practice for GitOps rollbacks
雖然 GitOps 的核心是透過 Git Commit 去控制當前部署的版本，那發生問題時到底該怎麼處理，如何去 rollback?
作者舉兩種範例
1. 讓 GitOps 去指向之前的 Git Commit
2. 針對 Git 使用 Git revert 等相關操作來更新最新的內容
作者認為沒有一個標準來告訴使用者該怎麼使用以及處理

# Observability for GitOps (and Git) is immature
作者認為目前現有的 GitOps 工具都沒有辦法提供下列答案
1. 目前生產環境是否有包含 Feature X
2. Bug X,Y 是否只有存在於 Staging 環境？ 還是生產環境也有？

註: 有什麼概念是天生就可以有這些東西的..? GitOps 有點無妄之災

