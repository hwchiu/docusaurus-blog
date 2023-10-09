---
title: 'Container Storage Interface 與 kubernetes'
sidebar_position: 19
date: 2019-10-05 07:16:04
tags:
  - Kubernetes
  - CSI
  - Storage
  - iThome
description: 本篇文章著重於 Kubernetes 本身與 CSI 的關係，一直以來 kubernetes 甚至到 1.16 來說， CSI 都不是一個必需的設定，反而是依賴大量 in-tree 的整合程式碼來處理各式各樣的儲存後端，這雖然使用方便但是對於後續的擴充性，維護性，彈性都帶來的很大的危害。也因此 CSI 才有誕生的機會，所以對於長期使用 in-tree 的管理人員來說，勢必有一天要轉移到 CSI才有機會想到新的功能以及相關功能的修復

---


# 前言

前篇文章探討了關於 **CSI** 架構以及相關的標準，並且看了一下官方所分享的幾種部署與運作的流程，而 **CSI** 就如同其他的標準介面一樣，其實不只是單純給 **kubernetes** 使用，而是希望所有實現該介面的管理工具都可以很順利的使用相容於該介面的解決方案。

而本篇文章還是要回到 **kubernetes**，我們來看一下對於 **kubernetes** 來說，其對於 **CSI** 進行了哪些方面的整合以及如何使用

# Kubernetes

如同先前有提到，最早期的 **kuberentes** 是把所有的儲存方案整合程式碼都與 **kubernetes** 放在一起，就是所謂的 **in-tree** 的概念，這種方式也對儲存方案提供者以及 **kubernetes** 維護者都帶來些許的不方便。

雖然後來 **CSI** 的提出，甚至 **kubernetes** 開始支援，這些 **in-tree** 解決方案的支援我目前覺得短期內還不會全部移除，基於向下相容的整合，也許也要到某一個版本開始才會開始正式除去，讓所有的使用者都透過 **CSI** 的架構來使用各式各樣的儲存方案。

## Release

從下列的一次次的釋出版本對應表中可以看到自從 **v1.13** 後， **CSI** 可算是正式支援，而非先前的 **Alpha/Beta** 等測試行為。

| Kubernetes | CSI Spec Compatibility | Status |
| -------- | -------- | -------- |
| v1.9     | v0.1.0     | Alpha     |
| v1.10    | v0.2.0     | Beta     |
| v1.11    | v0.3.0     | Btea     |
| v1.13    | v0.3.0, v1.0.0     | GA     |

從 [官方文件](https://kubernetes.io/docs/concepts/storage/volumes/#csi) 來看，過往存放眾多儲存解決方案介紹的頁面，現在最下面也新增了 **CSI** 的選項，接下來儲存這條路線應該都是往 **CSI** 邁進，而 **in-tree** 整合的程式碼也不會主要維護的對象，而是讓這些解決方案提供者自行透過 **CSI** 的架構來維護。
因此能的話會建議接下來的部署都往 **CSI** 邁進，不要再使用各種 **in-tree** 的發展，除非你使用的儲存方案目前還沒有對應的 **CSI** 整合。

此外 **CSI** 使用上也有一些要注意的點，譬如官方文件有提到

> Once a CSI compatible volume driver is deployed on a Kubernetes cluster, users may use the csi volume type to attach, mount, etc. the volumes exposed by the CSI driver.

> The csi volume type does not support direct reference from Pod and may only be referenced in a Pod via a PersistentVolumeClaim object.

使用上一定要注意相關的版本，這其實非常的麻煩，現在同時擁有 **CRI**, **CNI** 以及 **CSI** 三個標準在手，每個標準都有自己的發行版本號，同時 **kubernetes** 本身也有自己的版本號。所以升級 **kubernetes** 的時候更要注意這些相容性的問題。

此外一個使用上的改變就是若採用 **CSI**，則不能直接於 **Pod** 的資源內直接描寫對應的解決方案，而一定要透過 **PVC** 的方式來採用，至於最底層是 **PV** 或是 **StorageClass** 都可以。


## Migration

開發者也知道要從 **in-tree** 切換到 **CSI** 是一個轉換期，因此目前 **kubernetes** 也內建了 [migrating-to-csi-drivers-from-in-tree-plugins](https://kubernetes.io/docs/concepts/storage/volumes/#migrating-to-csi-drivers-from-in-tree-plugins) 相關的功能，但是要注意的是這個功能並不是全部的解決方案都支援，必須要仔細看每個解決方案本身是否有支援，如下方所列

[awsElasticBlockStore](https://kubernetes.io/docs/concepts/storage/volumes/#csi-migration-2)
> CSI Migration
FEATURE STATE: Kubernetes v1.14 alpha
The CSI Migration feature for awsElasticBlockStore, when enabled, shims all plugin operations from the existing in-tree plugin to the ebs.csi.aws.com Container Storage Interface (CSI) Driver. In order to use this feature, the AWS EBS CSI Driver must be installed on the cluster and the CSIMigration and CSIMigrationAWS Alpha features must be enabled.

[azureDisk](https://kubernetes.io/docs/concepts/storage/volumes/#csi-migration-2)
> CSI Migration
FEATURE STATE: Kubernetes v1.15 alpha
The CSI Migration feature for azureDisk, when enabled, shims all plugin operations from the existing in-tree plugin to the disk.csi.azure.com Container Storage Interface (CSI) Driver. In order to use this feature, the Azure Disk CSI Driver must be installed on the cluster and the CSIMigration and CSIMigrationAzureDisk Alpha features must be enabled.

不同的解決方案都有於不同版本的 **kubernetes** 實作了 **CSI Migration** 的方式，預期中管理者是可以不需要重新修改 **StorageClass**, **PVs**, **PVCs** 等相關設定檔案，而是會在背後自動地將操作一個一個的全部導向 **CSI** 的架構，而非 **In-tree** 的運作邏輯。

## CSI Implementation

現在到底有多少個解決方案支援 **CSI** 架構，就如同 **CRI**, **CSI** 一樣官方都有去紀錄目前有自己提交支援 **CSI** 的解決方案，根據 [drivers](https://kubernetes-csi.github.io/docs/drivers.html) 的列表，目前支援的解決儲存方案數量高達數十種(請點選連結自行查看)

根據文章中的表格可以看到公有雲支援的不少，譬如 Google，Azure，AWS，Digital Ocean 甚至是 Alicloud。 此外除了公有雲之外，也可以看不少儲存設備廠商的支援，譬如 Pure Storage，NetApp，Nutanix，此外不少的開源儲存解決方案， OpenEBS, Ceph, GlusterFS, MooseFS 等都在支持清單中。

這麼多的儲存方案到底要怎麼選，我認為這個問題非常困難，絕對不是一句**聽說xxxx好像很厲害，我們就導入來使用** 就樣不負責任就可以輕鬆選擇的議題。
儲存設備如同第一篇所述，牽扯過多的議題要選擇
1. 有沒有想過自己的使用情境是 **random access** 還是 **sequencial access**?
2. 本身公司是否已經有相關的儲存設備，這些設備有提供 CSI 的解決方案嗎?
3. 需要的會是 BlockDevice 還是 Mountable Volume?
4. 本身要考慮多重讀寫嗎?
5. 備份本身的議題有研究過嗎

真的很在意儲存功能的團隊，建議還是要找對儲存功能瞭解的人來評估，千萬不要搖擺不定聽別人一句話就一頭栽下去，到時候要換資料也麻煩。

## Architecture

如果你嘗試去搜尋關於 Kubernetes & CSI 的架構，看到的圖片大致上都跟下面類似
![](https://i.imgur.com/Di2JZ8H.png)
本圖節錄自[supercharging-kubernetes-storage-with-csi](https://blogs.vmware.com/cloudnative/2019/04/18/supercharging-kubernetes-storage-with-csi/)

這張圖片裡面有幾個東西要特別觀察
1. 分成 DaemonSet Pod 以及 StatefulSet Pod
2. 每個 Pod 裡面都有多個 Container, 其中分成兩個顏色，綠色跟橘色
3. 到處都有 gRPC 的溝通

接下來我們來仔細探討這些重點，因為基本上都大部分的 **CSI** 解決方案架構都長這樣，這也是為了 **CSI** 開發者所設計的架構，能夠最簡化一切的需求。
### DaemonSet/StatefulSet
之前有提過 **CSI** 裡面會有兩個服務角色，分別是 **Controller** 以及 **Node**，首先 **Node** 服務本身是一個所有欲使用儲存方案的節點都要運行的服務，因此會透過 **DaemonSet**來部署。
相對來說，**Controller** 除非本身有自行額外的多重服務架構，不然基本上都是會希望只有一個副本的服務在運行，採用 **StatefulSet** 可以確保都只會有一個服務在運行，特別是如果今天有重起的時候，會特別確認前一個狀態已經 **Terminated** 後才去創建下一個，避免任何時刻有兩個以上的 **Pod** 運行。

### Sidecar Containers
綠色的部分就是儲存方案提供者自行撰寫的部分，對應到 **Controller** 以及 **Node** 兩個角色。
而橘色的部分是 **kubernetes** 提供給開發者輔助，降低開發門檻同時把責權抽離的好幫手。

由於 **kubernetes** 內部會有 **storageclass**, **pvc**, **pv** 等資源的創立，要如何讓 **CSI Controller/Node**之後有這些事件發生，一種常見做法就是這些服務本身內部也使用 **kubernetes** API 去監聽相關的事件，並且執行對應的事情。 但是這種情況下其實跟 **CSI** 的 gRPC 介面好像也沒有什麼關聯，就一個 **kubernetes controller** 就可以完成的架構。

因此上述的橘色內的各式各樣的容器就被發展出來，這些容器專心於 **kubernetes** 溝通，監聽各種相關事件，一旦聽到任何需要處理的資訊的時候，就會經由 **unix socket** 並且透過 **gRPC** 叫同**Pod**裡面的 **Driver** 去處理。

這種情況下， **CSI** 解決方案提供者只需要專注於解決方案跟介面的實現即可，不需要去在意 **kubernetes** 本身的事件。

不同的 **sidecar** 都有不同的用途，可以參考[官方開發指南](https://kubernetes-csi.github.io/docs/sidecar-containers.html) 詳細介紹每種 Container 的用途。


## gRPC

就如同 **CRI,CNI** 一樣， **kubelet** 本身也有實現部分 **CSI** 處理的邏輯，特別是有些跟 **Node** 有關的操作就會直接透過 **kubelet** 去呼叫，譬如 CSI NodeGetInfo, NodeStageVolume, 以及 NodePublishVolume

這種情況下，**kubelet** 會使用 **unix socket** 配上 **gRPC** 與 **Node**服務聯繫來直接觸發相關操作。

詳細的溝通過程可以參考 [Communication Channels
](https://github.com/kubernetes/community/blob/master/contributors/design-proposals/storage/container-storage-interface.md#communication-channels)

# Summary

本文簡述了一下 **CSI** 與 Kubernetes 的相對關係，以及相關架構，接下來我們會嘗試部署一個基於 **CSI** 的儲存設備來直接嘗試看看新架構下系統又多出了什麼資源，以及有什麼資訊可以觀察

# 參考

- https://kubernetes-csi.github.io/docs/introduction.html
- https://arslan.io/2018/06/21/how-to-write-a-container-storage-interface-csi-plugin/
- https://blogs.vmware.com/cloudnative/2019/04/18/supercharging-kubernetes-storage-with-csi/
- https://github.com/kubernetes/community/blob/master/contributors/design-proposals/storage/container-storage-interface.md

