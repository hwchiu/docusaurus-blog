---
title: '閱讀筆記: 「goss, 一個簡易且迅速的 server 驗證工具」'
authors: hwchiu
tags:
  - Reading
description: '「goss, 一個簡易且迅速的 server 驗證工具」'
date: 2022-06-01 00:05:08
---

標題: 「goss, 一個簡易且迅速的 server 驗證工具」
類別: others
連結: https://github.com/aelsabbahy/goss

今天要介紹的是一個驗證工具 goss，該工具的目的非常簡單，讓系統管理員可以透過 YAML 的方式幫機器上的服務撰寫 Unit Testing
什麼情況會需要使用這類型工具？

舉例來說，當你今天部署了一個全新機器(手動/自動後)，你安裝了下列軟體
1. sshd
2. nginx
3. docker
4. ....

同時你也根據需求事先創建了一些使用者，接者你想要驗證這些軟體與相關設定是否設定完成
最直覺的方式就是手動檢查，一個一個服務與設定人工檢查

而 goss 這套軟體的目的就是讓你用 YAML 的方式去撰寫你想要驗證的所有服務，可以用來驗證包含
1. 使用者 (uid, gid, home, shell)
2. Package: 系統是否有透過 rpm, de, pacman, apk 等安裝套件
3. File: 檢查檔案資料夾是否存在
4. Addr: 用來檢查 $IP:$Port 是否可以被存取
5. Port: 用來檢查 $Port 是否有開啟
6. DNS: 用來檢查是否可以解析特定 DNS 
7. Process: 檢查特定 Process 是否有開啟
8. Mount: 檢查是 Mount Point 以及相關參數
9. Kernel Param: 檢查 Kernel 參數
10. ...等

Goss 除了基本用法外，也有人基於其概念往上疊加 dgoss，用來驗證 Docker 的運行狀態，還有類似的 dcgoss，針對 docker-compose 來使用。
當然目前也很多人會透過 Ansible 的方式來自動化部屬，而 Ansible 本身其實也有相關的測試框架可以用來測試部署結果，所以到底要用哪類型的工具
來驗證 Server 等級的狀態就根據團隊需求與現有流程而定，比較沒有一個獨大的工具用法。

