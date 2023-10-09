---
title: '閱讀筆記: 「 取代 Docker Desktop 的高效率開發環境」'
authors: hwchiu
tags:
  - Reading
  - DevOps
description: 「 取代 Docker Desktop 的高效率開發環境」
date: 2022-02-18 00:05:09
---

標題: 「 取代 Docker Desktop 的高效率開發環境」
類別: Container
連結: https://medium.com/partoo/replacing-docker-desktop-with-a-more-efficient-development-environment-582c61c50984

作者認為 Docker Desktop 是一個非常好的開發環境工具，能夠簡化很多設定讓開發者更容易的開發應用程式，但是對於 Windows/Mac 的使用者來說
Docekr Desktop 實際上也是先運行一個基於 Linux 的 VM 並且於其中運行 Docker Container。這種架構實際上帶來了一些使用上的缺陷，包含
1. FileSystem 的處理效能非常不好，不論是使用 cahced 或是 gRPC-fuse 檔案系統還是沒有辦法得到很好的效能。
2. 資源使用有問題不如預期，作者設定希望最多使用 6GB 結果最後卻使用到了 15GB，幾乎吃光系統所有記憶體
3. 官方幾乎沒有文件去探討該 VM 的存取方式(雖然滿多人會用 nsenter 進入)，所以很難把一些本地檔案給直接放到 VM 內來提昇儲存相關的問題，變成所有的儲存都只能用 docker volume 來處理。

作者的公司 Partoo 採取了 VM + Vagrant + Ansible 的方式來創建開發者環境，讓每個加入團隊的開發者都可以輕鬆簡單的建設期開發環境
並且文章中也探討如何於本地端使用 Vistual Studio Code, PyCharm 來編輯 VM 的檔案並且順利的進行應用程式開發。

從效率來看，相對於直接使用 Dodcker Desktop 來看，作者團隊的測試程式基於自己的 VM 提升了將近 30% 的效能，主要的問題就是儲存系統與 Docker Container 之間的掛載關係差異。

