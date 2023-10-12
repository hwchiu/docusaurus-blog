---

title: istio 操作記錄
authors: hwchiu
tags:
  - ServiceMesh
  - Network
---


預設的 istio-proxy 都會吃掉一些 CPU/Memory，當叢集內的 Pod 數量過多時，這些 sidecar 吃掉的數量非常可觀
如果是採用 istiooperator 的方式安裝，可以採用下列方式修改
```
...
  spec:
    values:
      global:
        proxy:
          privileged: false
          readinessFailureThreshold: 30
          readinessInitialDelaySeconds: 1
          readinessPeriodSeconds: 2
          resources:
            limits:
              cpu: 2000m
              memory: 1024Mi
            requests:
              cpu: 100m
              memory: 128Mi
```

這個設定是 global 的設定，如果是單一的 Pod 要自行調整，可以於 Pod annotations 中加入列下資訊調整
```
annotations:
  sidecar.istio.io/proxyCPU: 50m
  sidecar.istio.io/proxyMemory: 128Mi
```


如果要更新 istio，建議參考官方 [Canary Approach](https://istio.io/latest/docs/setup/upgrade/canary/) 的步驟，使用金絲雀部署的方式逐步調整
其原理很簡單
1. 同時部署兩個版本的 istiod
2. 逐步重啟 Pod 來套用新版本的 istio，直到所有 pod 都轉移到新版本的 istiod
3. 移除舊的

基本上安裝過程要透過 "--revision=1-14-2" 的方式去打版本，安裝完畢後就是單純只有 control plane

接下來就取決當初如何設定 sidecare 的，如果是 namespace 的話，就可以直接改 namespace 裡面的
```
istio.io/rev=1-14-2
```
接下來就逐步重啟 Pod 就可以切換到新的 istio 版本。

另外可以透過 `istioctl proxy-status` 觀察每個 Pod 目前搭配的版本，透過此指令觀察升級進度

一旦全部升級完畢可以用 `istioctl uninstall --revision 1-13-1 -y` 來移除舊版本


