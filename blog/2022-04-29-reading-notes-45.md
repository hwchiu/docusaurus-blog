---
title: '閱讀筆記: 「使用 serverless 5年後的心酸經驗談」'
authors: hwchiu
tags:
  - Reading
  - Serverless
description: 「使用 serverless 5年後的心酸經驗談」
date: 2022-04-29 00:05:08
---

標題: 「使用 serverless 5年後的心酸經驗談」
類別: usecases
連結: https://dev.to/brentmitchell/after-5-years-im-out-of-the-serverless-compute-cult-3f6d

本文作者想要分享自己過去五年來使用 Serveless 的經驗談，從不同角度切入導入 Serveless 後的痛點。
作者的 serverless 環境是基於 AWS 環境，使用了包含
1. API GAteway
2. Cognito
3. Lambda
4. DynamoDB
5. DAX
6. SQS/SNS/EventBridge

作者提及了幾個痛點，包含
1. Testing
2. Account Chaos
3. Security
4. No Fundamental Enforcement
5. DNS Migration Failures
6. Microservice Hell
7. API Respones 回傳不一致

這篇文章最有趣的點不是文章本身，而是底下的留言討論，雖然有少數留言是支持作者但是大部分的人都是秉持反對的意見來看這篇文章。
我自己的角度是這篇文章提出非常多問題，但是這些問題我看不太出來跟 Serveless 的關係是什麼，更多的是公司的文化，工程品質與開發工具有關
譬如作者說團隊內有很多非資深工程師會因為 serveless 的易用而依賴自己的想法去攥寫，譬如光 Auth 就有十種不同方式。
但是仔細思考這個問題，似乎 server-based 的架構也會有這問題，完全是公司的文化與規範問題。
其他問題還有很多寫 serveless 的人都沒有 HTTP 的深厚底子，所以 200,400,500 想回就回，然後回傳格式也都沒有統一固定
這些東西其實跟 serverless 也沒有直接關係，更多依然是 Code Review 的問題，工程師品質的問題。

所以有時候看文章除了單純閱讀外，也要思考一下作者講的東西自己是否認同，同時也可以看下留言處，來自不同文化與團隊的留言往往能夠帶來更大的啟發，也是閱讀網路文章上我覺得非常有價值的地方

