---
title: '閱讀筆記: 「PwnKit, 長達 12 年可以讓一般使用者輕鬆變成 Root 的 CVE」'
authors: hwchiu
tags:
  - Reading
  - Security
description: '「PwnKit, 長達 12 年可以讓一般使用者輕鬆變成 Root 的 CVE」'
date: 2022-01-27 01:59:03
---

標題: 「PwnKit, 長達 12 年可以讓一般使用者輕鬆變成 Root 的 CVE」
類別: others
連結: https://blog.qualys.com/vulnerabilities-threat-research/2022/01/25/pwnkit-local-privilege-escalation-vulnerability-discovered-in-polkits-pkexec-cve-2021-4034

CVE-2021-4034 講述的是 pkexec 此工具的 vulnerability，其影響範圍非常廣大，主要原因有
1. 滿多系統預設都有安裝這個工具，而該工具預設有 SUID 的權限
2. 2009 後的版本就內建此安全性問題，所以請趕緊更新系統上的 pkexec
3. 任何使用者可以輕鬆地直接透過此漏洞變成 root 的身份，譬如你今天取得一個 nobody 的角色，你也是有辦法變成 root 的。

漏洞細節文章中有解釋非常多，主要是記憶體位置的處理沒有處理，當運行參數為空的時候，程式會意外地去讀取到後面的 envp 這塊用來存放環境變數的區塊，搭配
pkexec 後續的程式邏輯就有機會觸發本次 CVE 的安全性問題。
所以請趕緊更新系統上的 pkexec，確保該版本已經更新，否則任何一個使用者都可以輕鬆變成 root。

Ubuntu 使用者可參考 https://ubuntu.com/security/CVE-2021-4034

