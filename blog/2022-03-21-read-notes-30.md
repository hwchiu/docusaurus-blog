---
title: '閱讀筆記: 「Terraform 生態下的五個相關輔助工具」'
tags:
  - Reading
  - Terraform
description: 「Terraform 生態下的五個相關輔助工具」
date: 2022-03-21 00:05:08
---

標題: 「Terraform 生態下的五個相關輔助工具」
類別: terraform
連結: https://betterprogramming.pub/5-essential-terraform-tools-to-use-everyday-e910a96e70d9https://medium.com/geekculture/my-jq-cheatsheet-34054df5b650

隨者 IaC 的概念落地開花，愈來愈多團隊嘗試使用 Terraform 來管理各式各樣的 infrastructure，作者本篇文章分享五個自己每天使用的 Terraform 輔佐工具，分別是

1. TFSwitch
2. TFLint
3. Terraform-docs
4. Checkov
5. Infracost

TFSwitch: 如果環境中目前因為歷史因素沒有辦法統一轉移到相同版本的 Terraform 使得你必須要用不同版本的 Terraform 來處理不同的專案的話，可以透過 TFSwitch 來幫助你快速地切換版本

TFLint: 就如同大部分的 Lint 工具一樣， TFLint 針對 Terraform 的工具，特別是跟特定 CloudProvider 整時候會有更多的錯誤偵錯，將該工具整合到 CI/CD pipeline 中更可以幫助團隊避免合併一個有問題的 Terraform code.

Terraform-docs: 這是一套能夠將你的 Terraform module 直接產生對應 Markdown 格式文件的工具，如果本身有撰寫 Terraform Module 的團隊都可以使用這工具試試看，看看產生的文件是否可以滿足基本需求

Checkov: 這是一套支援 Terraform 的靜態程式碼掃描工具，可以用來檢查是否有可能的安全性漏洞與不良好的設定，目前預設大概有 750+ 以上的預設規則，

Infracost: 這工具會的目的就如同專案名稱一樣，根據創造的雲端資源幫你估計這些資源的實際花費，對於要控管成本的團隊來說，可以提供一個粗略的金額概念，畢竟如網路流量等相關付費還是要實際上線才知道，但是可以快速地針對不同的 infra 直接列出大概的金額差異，搭配得宜對於整體工作流程還是有幫助的。

