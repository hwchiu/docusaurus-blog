---
title: '[書本導讀]-淺談GitOps過往'
keywords: [gitops, pros and cons]
tags:
  - Kubernetes
  - Devops
  - GitOps
description: >-
  本文為電子書本[GitOps: What You Need to Know
  Now](https://info.container-solutions.com/gitops-what-you-need-to-know-now)
  的心得第三篇。已獲得作者授權同意
date: 2020-09-27 18:17:01
---

本文大部分內容主要擷取自 [GitOps: What You Need to Know Now](https://info.container-solutions.com/gitops-what-you-need-to-know-now) ，已獲得作者授權同意

本文為 GitOps 系列文，主要探討 GitOps 的種種議題，從今生由來，說明介紹，工具使用到實作上的種種挑戰，讓大家可以從不同角度來學習 GitOps。

# 前言
本篇文章我們將探討 GitOps 於歷史洪流中的發展，藉由這些發展來學習與理解 GitOps 與其他部署方式，譬如 `Everything as Code`, Devops 等現代部署方式或是過往傳統的部署方式。

# GitOps 是不是一個新的發想
看到這邊，我相信滿多熟悉各式各樣的設定管理工具，原始碼控制以及各式各樣部署交付工具與流水線系統的讀者可能都會好奇，到底 GitOps 裡面有什麼新的東西？
為了回答這個問題，我們來看一下 GitOps 之前的各種概念發展們，來看看 GitOps 到底跟他們有什麼不同

![](https://i.imgur.com/VQ7JWY6.png)

## `Everything As Code` 以及 DevOps
GitOps 可以很合理的視為是 `Everything As Code` 的延續發展，都強調透過原始碼工具來管理這些編碼後的應用開發與交付產物。
這個概念在 2015 因為 Terraform 的發展與崛起而被更廣泛的支持，透過 Terraform 的幫忙，使用者可以透過程式化的方式來自動完成基礎建設的交付，而不再需要手動的部署。

談到 DevOps，這個相關且更早的概念則是於 2009 年由 `DevOpsDays` 這個會議開始茁壯發展。雖然 DevOps 本身並沒有任何正式的定義，其精神則是開發工具與技術應該要應用到維運的實戰上。
舉例來說，一個經典貫策 DevOps 精神的就是 CALMS(Culture, Automation, Lean, measurement, Sharing)以及其中的 Automation 流水性則是 GitOps 定義中不可缺少的一塊。


## Declarative Code
宣告式程式碼本身不是一個全新的概念，譬如 `Makefile` 或是` HTML` 都是宣告式的概念，舉例來說。宣告式的概念從過去到現在則是一直發展，譬如 `Chef`, `Puppet` 甚至 `Ansible` 等工具都有透過自己的語言(Domain-Specific Languages DSLs)來完成這些目的。
上述這些設定檔管理工具都透過宣告式的方式來處理不同維度的事情。
譬如， Chef 則是透過宣告式的方式來處理高維度的事情，但是如果將其修改套用到每個節點上，這些修改就會變成立即性的，而非宣告式的處理。相對於 Chef 來說， Puppet 則將宣告式的概念發展得更好。

2015 後， Kubernetes 與 Terraform 的崛起將整個宣告式的概念給集大成，這兩者的結合提供了一條宣告式的道路來滿足任何點到點服務所需要的所有資源。


## The Control/Reconciler Loop
Control loops 這個概念自從軟體存在以來已經發展許久，過去十年來，這個概念被廣泛
的應用到各式各樣的設定管理工具，譬如 Chef 以及 Puppet。
這些工具通常都會安裝一個代理人到環境中的所有節點，透過這個代理人來觀察當前系統狀態是什麼，並且根據其差異與需求來進行後續處理。

Kubernetes 其架構的核心概念就是 Control/Loop，每個節點上都會有一個代理人程式`kubelet`，其負責協調所有該節點上的資源是否符合預期狀態。

# 全部整合一起
GitOps 可以被視為是 `Everything as Code` 的後續發展，自從 2015 開始，由 `Everything as Code` 為基底開始，接者遇到各式各樣合適的工具，最後全部組織再一起，就成為了 GitOps，其特性
1. 強調 Git, Kubernetes 以及 Terraform 是目前 GitOps 發展中的主流，但是不是唯一標準，任何工具可以滿足這些概念都可以。
2. 為宣告式程式碼以及 Control-Loop 概念的擁護者，透過這個機制來維護狀態與部署應用
3. 強調除了 `Everything as Code` 之外的第二個好處，

