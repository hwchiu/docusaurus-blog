---
title: '閱讀筆記: 「NPM 的 colors modules 打亂一堆人...」'
tags:
  - Reading
description: 「NPM 的 colors modules 打亂一堆人...」
date: 2022-01-11 08:05:08
---

標題: 「NPM 的 colors modules 打亂一堆人...」
類別: other
連結: https://research.swtch.com/npm-colors

NPM 上一個著名的 Module Color 以及 Faker 的作者這幾天生氣氣的修改這兩個 module，於 Color 內塞入了無限循環並且印出各種亂碼
然後所有使用這兩個 module 的工具一旦更新就會發現自己的 Terminal 輸出整個爆炸，完全看不懂了。

這篇文章是 Golang 的作者 Russ Cox 分享關於這件事情的一些看法，簡單來說每個開放原始碼的授權都有提到並沒有保固這種事情，所以任何現代化的模組管理者
設計時都必須要考量到這種版本更新的可能性，並且盡可能地去減少。

文章中以 aws-cdk 作為範例， aws-cdk 最初描述時是使用 ^1.4.0 的方式來參考各種 ^1.4.0 版本的 color，結果 color 的作者就直接爆氣來一個炸彈，aws-cdk 直接更新然後建置，最後
產生出一個令人崩潰的版本。

作者認為任何一個系統要更新的時候應該都需要緩慢與穩健的去逐步更新，並且這些更新都要經過一段時間的觀察與測試來降低各種可能放到生產系統出包的可能性。

以下節錄自文章中的重點
「High-fidelity builds solve both the testing problem and the gradual rollout problem. A new version of colors wouldn’t get picked up by an aws-cdk install until the aws-cdk authors had gotten a chance to test it and push a new version configuration in a new version of aws-cdk. At that point, all new aws-cdk installs would get the new colors, but all the other tools would still be unaffected, until they too tested and officially adopted the new version of colors.」

