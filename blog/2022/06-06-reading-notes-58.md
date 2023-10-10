---
title: '閱讀筆記: 「使用 StressChaos 的經驗來學習 Pod Memory 使用情況」'
authors: hwchiu
tags:
  - Reading
  - Kubernetes
  - ResourceManagement
description: 「使用 StressChaos 的經驗來學習 Pod Memory 使用情況」
date: 2022-06-06 03:05:07
---

標題: 「使用 StressChaos 的經驗來學習 Pod Memory 使用情況」
類別: others
連結: https://chaos-mesh.org/blog/how-to-efficiently-stress-test-pod-memory/

本篇文章是來自於 Chaos Mesh 內的官方文章，主要是想要探討為什麼使用 Chaso Mesh 來測試記憶體狀況時結果實際狀況與設定的狀況不一致
文章一步一步的探討所有問題最後同時也整理了一些關於 Kubernetes 內的 Memory 相關機制

文章開頭，作者先部署了一個簡單的 Pod(只有一個 container)，該 Pod 針對 Memory 的部分設定 request: 200Mi, limits: 500Mi
結果作者到該 Container 中透過 free 與 top 的指令，都觀察到顯示的記憶體使用量高達 4G，這部分明顯與設定的 limits 500Mi 有所衝突
因此這邊產生了第一個點要特別注意

Kubernetes 是透過 cgroup 來計算與控管 Pod 的 Memory 用量，然而 free/top 等指令並沒有跟 cgroup 整合，因此就算跑到 container 中執行這兩個
指令看到的輸出其實都是 host 相關的，如果想要知道真正 container 相關的數量，還是要使用 cgroup 相關的指令來取得，譬如
cat /sys/fs/cgroup/memory/memory.usage_in_bytes 

文章還有特別提到 Kubernetes 會針對 Request/Limit 的設定方式來將你的 Pod 分為三個等級，分別是 BestEffort, Burstable 以及 Guaranteed
其中當系統因為 OOM 不足要開始找受害者下手時，被設定為 Guaranteed 的應用程式則會是最低優先度，只有真的找不到其他受害者時才會來處理 Guaranteed 類型的 Pod。

最後則是更細部的去探討 Kubernetes 關於 Memory 的使用與管理
對於 Kubernetes 來說， 當系統上 Memory 數量不足時，可能會觸發 Evict 的行為，開始將部分運行的 Pod 給踢出該節點，而如同前面所述， Kubernetes 是依賴
Cgroup 來處理的，因此 /sys/fs/cgroup/memory/memory.usage_in_bytes 自然而然就成為其決策的重要參數

其中要注意的是 /sys/fs/cgroup/memory/memory.usage_in_bytes 代表的並不是 "剛剛好系統上正在被使用的 Memory 數量"，其數值則是由
"resident set", "cache", "total_inactive_file" 等三個面向組合而成，因此 Kubernetes 實際上會先從
/sys/fs/cgroup/memory/memory.usage_in_bytes 與 /sys/fs/cgroup/memory/memory.stat 取得相關參數，其中後者可以得到如 total_inactive_file 的數量
最後透過下列算式
working_set = usage_in_bytes - total_inactive_file 來得到一個名為 working_set 變數，該變數實際上也可以由 kubectl top 獲取，這也是 kubernetes 用來判斷是否執行 evict 的主要指標。

一個節點還有多少可用的 Memory 則是透過
memory.available = nodes.status.capacity[memory] - working_set
所以每個節點的總共量扣掉 workign_set 就是當前可用量，一旦當前可用量低於門檻時，也就是 k8s 執行 evict 之時
官網文件中其實有滿仔細的去描述這些操作行為
有興趣的可以花點時間全部看完
https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/

