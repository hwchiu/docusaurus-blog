---
title: '閱讀筆記: 「你真的有正確使用 SSH 嗎?」'
authors: hwchiu
tags:
  - Reading
description: 「你真的有正確使用 SSH 嗎?」
date: 2022-04-15 00:05:09
---

標題: 「你真的有正確使用 SSH 嗎?」
類別: tools
連結: https://smallstep.com/blog/use-ssh-certificates/

SSH 基本上是每個系統管理員都熟悉不過的工具，而本文的作者指出 SSH 使用上有一些小缺陷，譬如
1. 使用者體驗很差，每一個新使用 SSH 的人如果不熟悉其概念，每次連線到新機器都會看到一次 Yes/No 的選擇，就因為不熟大部分的人都會直接選擇 Yes 來通過，
背後實際發生什麼事情都不清楚，只知道會動就好
2. 大規模的管理 SSH 非常麻煩且花費時間，Hostname 如果前後有出現重複的還會出現問題，需要重新處理 known_hosts 等相關資料
3. 透過 Key 的管理聽起來很安全，但是其架構使得使用者通常不太會換 key，會一直重富使用固定的那把 Key 來避免重新處理一切問題

舉了一些問題後，作者點出能夠真正駕馭 SSH 的應該是採取 SSH Certificate 而非使用 SSH Public Key 來進行身份驗證。
作者團隊開發了些許工具來幫助其他人能夠更輕鬆的使用 SSH Certificate 但是卻發現這類型的工具卻沒有受到歡迎與採用，因此也針對這個現象
進行問卷調查，想瞭解這類型的工具為什麼不受青睞，原因包含
1. 根本沒聽過 SSH Certificate
2. Certificate 以及 PKI 架構對人們來說不容易理解，很難理解其好處
3. 轉換中間有一些陣痛期，所以與其花時間去學習這些不如就繼續使用本來的 Public Key 機制

文章後半開始介紹 SSH Public Key 與 SSH Certificate 的差異
Public Key 的概念非常簡單，就是透過一組 Private/Public Key 並且將 Public Key 給寫入到目標節點帳戶上的 ~/.ssh/authorrized_keys.
節點數量爆炸多的情況下要如何有效率的去管理這些檔案則是一個非常麻煩但是又不能不處理的事情，這也是作者為什麼要推廣 SSH Certificate 的原因之一

SSH Certificate 的方式移除了關於 SSH Public Key 不停重複上傳與設定的情境，相反的則是將自身的 Public Key 給綁到 Certificate 內，同時也包含如過期時間，名稱等其他資料。
目標 Certificate 本身會由一個 CA 簽署，而每台 Server 都需要去修改 /etc/ssh/sshd_config 來指定相關的 CA Key 讓該 SSH 能夠信任。
文章後半部分介紹更多關於 SSH Certificate 的好處以及用法

