---
title: CircleCI Context 的使用
author: hwchiu
tags:
  - CirclecCI
  - DevOps
---


CircleCI 專案夠多且每個專案都有相關權限要存取時，推薦使用 Context 的概念來簡化設定。
Context 是一個抽象化的物件，其可以描述
1. 所有的環境變數
2. 限制使用的專案

而所有運行 CircleCI 的專案都可以繼承該 Context 來自動獲取所有環境變數

假設環境需要存取雲端資源，可以把用到的所有資訊寫到一個 Context 內，並且設定好所有環境變數
接下來每個專案的 CircleCI 就只需要使用類似下面的語法
```
workflows:
  test:
    jobs:
      - test:
          filters:
            branches:
              only: master
          context:
            - AWS
```
就會把 AWS Context 內的環境變數都繼承近來，因此未來要維護只需要針對 Context 去維護，就不需要每個專案都去設定

使用上不要使用任何員工的帳號去綁定 Project，不然員工離職很麻煩，最好創建一個 machine account，用該 account 的 ssh key 來串連 GitHub 與 CircleCI，這樣離職才不會產生太多問題