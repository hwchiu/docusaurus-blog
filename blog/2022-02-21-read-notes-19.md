---
title: '閱讀筆記: 「macOS 的 fsync 實作其實跟大家想像的完全不同 」'
tags:
  - Reading
description: 「macOS 的 fsync 實作其實跟大家想像的完全不同 」
date: 2022-02-21 00:05:08
---

標題: 「macOS 的 fsync 實作其實跟大家想像的完全不同 」
類別: others
連結: https://mobile.twitter.com/marcan42/status/1494213855387734019?t=TyXUEg-2LcbNiKkv0JVOsg&s=09

以下節錄自該留言串
「As it turns out, macOS cheats. On Linux, fsync() will both flush writes to the drive, and ask it to flush its write cache to stable storage.

But on macOS, fsync() only flushes writes to the drive. Instead, they provide an F_FULLSYNC operation to do what fsync() does on Linux.」

簡單來說就是 Linux 的 fsync 會執行兩次動作，最終讓當次修改給寫回到底層儲存設備，而 macOS 的版本卻不會真的確認寫回硬碟，所以這個導致很多仰賴 fsync 的應用程式就會有一些不預期的行為，這也是為什麼首篇發文的內容
「Well, this is unfortunate. It turns out Apple's custom NVMe drives are amazingly fast - if you don't care about data integrity.

If you do, they drop down to HDD performance. Thread.」

