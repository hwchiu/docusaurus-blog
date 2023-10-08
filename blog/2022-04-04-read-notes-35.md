---
title: '閱讀筆記: 「Dockerfile 中透過 COPY --chomd 比透過 RUN chomd 可以省下更多空間」'
tags:
  - Reading
  - Docker
description: 「Dockerfile 中透過 COPY --chomd 比透過 RUN chomd 可以省下更多空間」
date: 2022-04-04 00:05:08
---

標題: 「Dockerfile 中透過 COPY --chomd 比透過 RUN chomd 可以省下更多空間」
類別: containers
連結: https://blog.vamc19.dev/posts/dockerfile-copy-chmod/

本篇文章是作者探討自己建制 Image 中所發現的一些有趣事實。
作者使用一個大概 70MB 的 image，並且安裝與運行大概 90MB 左右的額外空間，結果最後整個 image 高達 267 70MB
因此作者就花了一些時間來研究整體原因並且嘗試理解到底發生什麼事情

作者首先檢視自己的 Dockerfile，其內容簡單不複雜，包含如
COPY 一個 Binary (該 Binary 80 MB 左右)
RUN xxxxx
等常見用法。

詳細檢視所有的 layer 資訊後，作者發現 RUN 這個指令竟然產生了 94.4MB 的全新 layer，而就是這個 layer 導致整體空間變成 267 MB.
作者的 RUN 指令執行
1. 透過 apt-get 安裝四個套件
2. 透過 chmod 將前述 COPY 來的檔案給予執行的權限
3. 創建資料夾

作者檢查過安裝的套件，大概只有 6MB 左右，但是整個 layer 很明確就是多了 94.4 MB 出來，因此經過測試與研究後，作者觀察到
當移除第二步(修給檔案給予執行的權限)後整個空間瞬間變得很小，整體 image 最後的大小就符合預期的 174MB。

所以整個問題就出來了，為什麼單純執行一個 RUN chmod 就會使得整個 image layer 變大?
簡單來說 image 的底層是基於 OverlayFS，而 OverlayFS 的一大特色就是 CoW, Copy on Write，作者起初覺得
我只是透過 chmod 去修改該 Binary 一個屬性而以，本身並沒有寫入檔案到檔案系統中，怎麼會產生這麼大的檔案變化？

仔細研究 OverlayFS 的文件後終於水落石出，原來除了寫入檔案外，修改檔案的某些 metadata 也會觸發 CoW 的機制
```
When a file in the lower filesystem is accessed in a way the requires write-access, such as opening for write access, changing some metadata etc., the file is first copied from the lower filesystem to the upper filesystem (copy_up).
```

至於為什麼修改個 metadata 也要觸發 CoW 主要是跟安全性有關，文章中有關於這部分的額外連結，有興趣的可以參考

