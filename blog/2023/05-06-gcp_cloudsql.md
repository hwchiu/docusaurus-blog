---
title: CloudSQL 收費注意事項
authors: hwchiu
tags:
  - GCP
  - SQL
---


GCP CloudSQL 本身的[收費機制](https://cloud.google.com/sql/pricing#storage-networking-prices)常見取決於
1. 機器等級強度，若有開 HA 模式則價格兩倍
2. 硬碟使用量

其中 (1) 的主要是由 vCPU 與 Memory 的用量來決定價格，詳細資訊可以參閱網頁介紹

另外 CloudSQL 本身是可以直接升級機器強度的，可以手動也可以透過 Terraform 來管理，不過升級過程中
副會處於 downtime 不能存取階段，升級時間處決於當前機器的強度與資料量，短則一分鐘，長20分鐘都有可能。

另外硬碟使用量的部分有兩種設定機制
1. 固定硬碟用量
2. 動態調整用量，當硬碟用量超過 90% 以上後就會自動調整用量

另外硬碟用量也會有收費的問題，假如當硬碟用量清空想要縮小硬碟用量，這部分目前還沒有辦法操作，需要開 Support ticket 請 GCP 幫忙縮小硬碟空間。