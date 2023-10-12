---
title: k8s 內安裝 redis-cluster
author: hwchiu
tags:
  - Redis
  - Kubernetes
  - Kustomize
  - Helm
---


如何投過 Bitnami 的 Helm Chart 來安裝 Redis-Cluster

採用 Kustomize + Helm 的方式 (ArgoCD)

```
$ cat kustomization.yaml
helmCharts:
- name: redis-cluster
  includeCRDs: false
  valuesFile: redis.yaml
  releaseName: redis-cluster
  namespace: production
  version: 9.0.5
  repo: https://charts.bitnami.com/bitnami

$ cat redis.yaml

global:
  storageClass: standard-rwo
existingSecret: redis-cluster
existingSecretPasswordKey: password
redis:
  resources:
    limits:
      cpu: 2
      memory: 2Gi
    requests:
      cpu: 0.1
      memory: 0.5Gi
  podAnnotations:
    'xxxxx': 'yyyyy'
```

這種部署方式就會啟動密碼驗證機制，而密碼則來自於同 namespace 的 secret 物件 `redis-cluster` 內的 key `password`.

如果想要無密碼驗證，可以使用下列方式

```
usePassword: false
```

'''note
如果已經先行有密碼驗證，則修改此欄位對於運行中的 Redis Cluster 不會有任何效果，這部分需要更多額外操作來完成，砍掉 PVC 重新部署是一個簡單暴力的方式。
'''

由於此架構會部署 Redis-cluster，預設情況下會部署三組(master+worker)的 statefulset，並且給兩組 servicee
```
redis-cluster                       ClusterIP      10.2.5.248    <none>        6379/TCP                                                                                          213d
redis-cluster-headless              ClusterIP      None          <none>        6379/TCP,16379/TCP                                                                                213d
```

另外要注意的是，redis-cluster 並不適用 `kubectl port-forward` 的方式連接，因為 redis-cluster 的溝通過程會回傳其他 Pod 的 IP 給你，而每個 Pod 的 IP 都用相同的 Port，因此除非你有辦法於本地產生一些虛擬網卡並且搭配多組 `kubectl port-forawrd` 幫每個 Pod 都打通，否則存取上會出問題。

舉例來說

```bash
$ kubectl port-forward --address 0.0.0.0 pod/redis-cluster-0 6379:6379
Forwarding from 0.0.0.0:6379 -> 6379
$ redis-benchmark -n 1 --cluster
Cluster has 3 master nodes:

Master 0: 1020525d25c7ad16e786a98e1eb7419d609b8847 10.4.0.119:6379
Could not connect to Redis at 10.4.0.119:6379: Connection refused
```

可以看到透過 port-forward 打進去後，接下來的連線就會轉到其他的 pod 然後就會失敗，因此這種情況要簡單使用還是部署一個包含 redis 指令的 Pod 到同樣的 namespace 並且用 `kubectl exec` 進去操作會比較順

```
$ kubectl run --image=hwchiu/netutils test
$ kubectl exec -it test -- bash
root@test:/# redis-benchmark -h redis-cluster -q  -c 20 -n 30000
PING_INLINE: 44977.51 requests per second
PING_BULK: 48154.09 requests per second
SET: 45317.22 requests per second
GET: 47169.81 requests per second
INCR: 50251.26 requests per second
LPUSH: 48465.27 requests per second
LPOP: 41265.48 requests per second
SADD: 37878.79 requests per second
SPOP: 49833.89 requests per second
LPUSH (needed to benchmark LRANGE): 51724.14 requests per second
LRANGE_100 (first 100 elements): 43041.61 requests per second
LRANGE_300 (first 300 elements): 35842.29 requests per second
LRANGE_500 (first 450 elements): 36014.41 requests per second
LRANGE_600 (first 600 elements): 33259.42 requests per second
MSET (10 keys): 42796.01 requests per second
```
