---

title: 觀測 K8s 內 OOM 事件
authors: hwchiu
tags:
  - Kubernetes
  - O11y
---


Kubernetes 內的容器運行上可能會遇到 OOM (Out Of Memory)，通長會有兩種情況
1. 應用程式本身的 Memory Limit 沒有設定好，因此踩到上限被移除
2. 眾多應用程式的 Memory Request 沒有設定好，導致系統資源被互搶直到系統沒有足夠記憶體，因此觸發 OOM 開始砍人

這類型的事件可以透過下列的方式去觀測
1. 安裝 [kube event exporter](https://github.com/resmoio/kubernetes-event-exporter)，該專案會將所有 event 以不同的方式輸出。簡易方式可以採用 stdout 的方式輸出
2. 透過 Logging 系統收集 stdout 的 log，從中分析是否有 OOM 的事件發生，有的話可以發送 Alert

以 Loki 來說，可以採用下列語法去過ㄌㄩ
```bash=
count_over_time({container="kube-event-exporter"}[1m] | json | __error__ != "JSONParserErr" | reason="OOMKilling")
```

