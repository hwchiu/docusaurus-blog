---
title: Build Mozilla NSS on windows
date: '2016-11-02 13:21'
tags:
  - NSS
  - Windows
---

最近因為在處理 firefox 的憑證問題，所以要藉由 mozilla 自己的 **certutil.exe**來進行憑證的操作，
由於Mozilla現在已經不在官網提供執行檔，必須要自己手動下載來Build，因此就到官網來查詢安裝步驟了

#Fetch Source Code
由於NSS會需要使用到NSPR內的一些header files,所以在建置ＮＳＳ的時候也必須要將ＮＳＰＲ給一併抓下來

官方推薦可以使用下列的方式獲取最新的 source code

```
hg clone https://hg.mozilla.org/projects/nspr
hg clone https://hg.mozilla.org/projects/nss
```

若要抓取特定的 release 版本，可以到[這裡](https://ftp.mozilla.org/pub/security/nss/releases/)進行下載。

#Build Environment
由於是在 Windows 上面建置，所以必須要先安裝好對應的安裝環境，可以參考[此篇教學](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Build_Instructions/Windows_Prerequisites)將整個 Mozilla Build給建置完畢。

#Build
基本上按照[這篇文章](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/NSS/Building)的步驟就可以開始Build Code了，所有的變數都是環境變數，如**OS_TARGET**等


#Trouble Shooting
由於我的 Windows 是中文版的，在建置的過程中會因為踩到Warning C4819的問題，有嘗試使用過**chcp**的方式將 code page 給換掉也沒有用，後來是參考[這篇文章](https://groups.google.com/a/chromium.org/forum/#!topic/chromium-dev/3DV8Huz5C0M)，將Windows系統的 Code Page 切換到英文或是其他 SBCS Code Page即可
