---
title: '閱讀筆記: 「新手閱讀，我踩過的 Terraform 各種雷」'
tags:
  - Reading
  - Terraform
description: 「新手閱讀，我踩過的 Terraform 各種雷」
date: 2022-05-06 00:05:08
---

標題: 「新手閱讀，我踩過的 Terraform 各種雷」
類別: terraform
連結: https://medium.com/contino-engineering/10-things-i-wish-i-knew-before-learning-terraform-f13637a01aa6

本篇文章作者分享自己學習與使用 Terraform 多年來遇過的各種雷，也希望藉由這類型的文章可以讓每個踏入 Terraform 的人都不要走冤枉路

1. Make sure you have a terraform block in your configuration
TF 檔案中可以透過 Terraform 區塊來描述關於 Terraform 本身的一些限制，譬如版本條件，相關的 provider 來源以及版本。
這個區塊非常重要但是本身是一個 optional 選項，所以不寫其實不影響整體功能，但是沒有去限制使用的版本範圍其實就跟任何的軟體環境一樣非常危險，
很容易踩到「昨天還可以，今天就不行的」通靈現象，所以作者希望每個人都好好的將 Terraform 區塊描述清楚，確定當前支援的版本是哪個確保該 TF 能夠用正確的版本於任何環境執行

2. Statefile 實際上本身是純文字格式，作者想要提醒的是 State 檔案作為 Terraform 同步上最重要的檔案，其本身是一個純文字明碼的格式，這意味你運行過程中的任何帳號密碼其實都是純文字的格式存放於該檔案中。
所以 State 檔案的保存非常重要，需要用很嚴肅的資安態度來保護這個檔案，否則該檔案被人取得則你 TF 中的各種資訊都會被對方取得。
作者直接於文章中展示一個範例，該範例會創建一個 AWS aws_secretsmanager_secret_version，而該物件的 secret_id, secret_string 都會以明碼的方式被存放於 State 檔案中。

3. Have verbose variables and outputs blocks
TF 中的所有變數都可以用非常簡易的方式去宣告，但是如果妥善地利用這些內建的功能將可以使得變數的使用變得更加方便，特別是當該變數要跨 Module 使用時，呼叫者可以透過更輕易的方式
去理解該變數的格式與用法。
其中最為重要的則是 validation 的內容，作者以 AWS image_id 為範例，該變數基本上就是一個字串，所以使用者可以傳遞任何變數到該欄位去使用，但是如果搭配 validation，就可以讓 TF Apply 提早
先觀察到這些變數是否合法，能夠降低與避免不必要的失敗。
所以針對每個變數都好好的撰寫相關敘述與驗證，能夠讓團隊使用上減少無謂的猜想與溝通。

4. Integrate your environment with a pipeline early
Terraform 的入門非常容易，但是當你想要將 Terraform 導入到團隊中並且與其他人共同合作時，整個使用上的複雜度會大幅度增加。
作者認為如果真的要導入 Terraform 到整個團隊中，則要盡快且盡可能地將 Terraform 導入到現有的 pipeline 架構中，譬如 Terraform Cloud 服務
能夠幫你妥善的管理這些 Lock/State 並且透過 Terraform Apply 來執行變化。

作者還有第二篇探討剩下的用法，包含
Keep your code together as much as possible
Have clear lines of demarcation on responsibility
Use multiple environment files for the same code
Familiarise yourself with HCL’s functions and meta-arguments
Terraform is not a golden bullet

有興趣的讀者建議兩篇文章都閱讀一下

