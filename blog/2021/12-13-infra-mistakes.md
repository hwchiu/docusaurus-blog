---
title: Infrastructure 各種踩雷經驗
authors: hwchiu
tags:
  - Kubernetes
  - Ubuntu
  - Linux
  - Network
date: 2021-12-13 21:29:39
---

連結: https://matduggan.com/mistakes/

本文是作者踩過的各種 Infrastructure 雷，希望讀者能夠避免這些雷。

總共有幾大類，分別
1. Don't migrate an application from the datacenter to the cloud
2. Don't write your own secrets system
3. Don't run your own Kubernetes cluster
4. Don't Design for Multiple Cloud Providers
5. Don't let alerts grow unbounded
6. Don't write internal cli tools in python

其中第六點簡短扼要，大概就是「沒有人知道如何正確地去安裝與打包你的 python apps, 你真的要寫一個內部的 python 工具就給我讓他完全跨平台不然就給我改用 go/rust, 不要浪費生命去思考到底該如何安裝那些東西」

這讓我想到你的 Python 跟我的 Python 每次都不一樣，有已經不支援的 python 2.x, 還有各種可能會互相衝突的 python 3.x....


