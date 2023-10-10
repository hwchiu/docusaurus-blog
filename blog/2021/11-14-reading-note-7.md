---
title: '閱讀筆記: 「terraform,Terraform Module 依賴性討論」'
authors: hwchiu
tags:
  - Reading
  - Terraform
  - IaC
description: 「terraform,Terraform Module 依賴性討論」
---

連結: https://medium.com/hashicorp-engineering/creating-module-dependencies-in-terraform-0-13-4322702dac4a

Terraform 這個工具想必大家都玩過也聽過，這邊非常推薦大家升級到 0.13 版本，這個版本中解決了關於 Module 之間依賴性的問題，能夠使用原先就有的 depends_on 的語法來直接描述，而不需要按照過往以前用>
各種 fake resource 等機制來完成，整個 Terraform 程式碼會更佳清晰與簡單!

