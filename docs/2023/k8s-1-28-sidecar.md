---
title: 'Kubernetes 1.28 Sidecar Container 初體驗'
author: hwchiu
image: https://hackmd.io/_uploads/Sk3senHea.png
tags:
  - Kubernetes
description: 嘗試看看 Kubernetes v1.28 的 sidecar 服務帶來的差異性
---

本篇文章記錄如何於 Kubernetes 1.28 嚐鮮最新的 sidecar container 功能

Sidecar Container 是 Kubernetes 內非常著名且常見的設計模式，通常是於 Pod 內部署多個 Container
其中 Sidecar Container 會協助主要容器完成各種功能，譬如
1. Network Proxy: 如 Service Mesh 架構下幫忙轉發與處理各種網路流量
2. Log Collection: 幫忙處理主要容器的 log

然而對於 Kubernetes 來說，這兩種 container 本質上並無差異，生命週期與管理方式都一樣，這些特性使得 sidecar container 的使用上會造成一些問題
1. 以 Job 來說，主要容器已經結束結果 sidecar container 還在運行，使得 Job 沒辦法正確判斷 Pod 是否順利結束
2. Sidecar container 的啟動順序太晚，使得主要容器啟動時還不能使用，造成錯誤必須要等 containre 重啟

以(2)來說，常見的範例有
1. istio sidecar container 比主要容器晚起來，導致主要容器起來瞬間網路不通
2. 以 GKE 來說，透過 cloud sql proxy 來存取 Cloud SQL 時， cloud sql proxy 比主要容器晚起來，因此主要容器就沒有辦法連接到 DB 最後產生錯誤

因此過往都要搭配各種 workaround 來修正。

而這次 Kubernetes 正式從內部支援 sidecar container 的架構，其獨立的生命週期管理能夠從根本上去解決上述的常見問題，讓整個解決方式更為漂亮。

# 環境
本篇文章基於下列軟體
1. Ubuntu 22.04
2. Kubeadm: 1.28.2-1.1
3. Kubelet: 1.28.2-1.1
4. Kubectl: 1.28.2-1.1
5. Containerd: 1.6.24-1

## System

由於環境會使用 kubeadm 來安裝，並且使用 containerd 作為 container runtime，因此準備下列腳本安裝所有相關軟體並且設定相關環境參數

```bash=
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.28/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Add the repository to Apt sources:
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.28/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list
sudo apt-get update
sudo apt-get install containerd.io=1.6.24-1
https://github.com/containernetworking/plugins/releases/download/v1.3.0/cni-plugins-linux-amd64-v1.3.0.tgz
sudo mkdir -p /opt/cni/bin
sudo tar Cxzvf /opt/cni/bin cni-plugins-linux-amd64-v1.3.0.tgz
sudo apt-get install -y kubelet=1.28.2-1.1 kubeadm=1.28.2-1.1 kubectl=1.28.2-1.1

sudo modprobe br_netfilter
sudo modprobe overlay
sudo sysctl -w net.ipv4.ip_forward=1

cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward                 = 1
EOF


cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
EOF

sudo sysctl --system

containerd config default | sudo tee /etc/containerd/config.toml
sudo sed -i 's/SystemdCgroup \= false/SystemdCgroup \= true/g' /etc/containerd/config.toml
sudo systemctl restart containerd
```

## Kubeadm

準備下列 Kubeadm 檔案來打開 Sidecar Container 的設定檔案 `kubeadm.config`
```yaml=
apiVersion: kubeadm.k8s.io/v1beta3
kind: ClusterConfiguration
networking:
  podSubnet: 192.168.0.0/16
apiServer:
  extraArgs:
    feature-gates: "SidecarContainers=true"
controllerManager:
  extraArgs:
    feature-gates: "SidecarContainers=true"
scheduler:
  extraArgs:
    feature-gates: "SidecarContainers=true"
---
apiVersion: kubelet.config.k8s.io/v1beta1
featureGates:
  SidecarContainers: true
kind: KubeletConfiguration
```

```bash=
sudo kubeadm init --config=kubeadm.config
```

創建完畢後安裝 Calico CNI

```bash=
kubectl create -f https://raw.githubusercontent.com/projectcalico/calico/v3.26.1/manifests/tigera-operator.yaml
kubectl create -f https://raw.githubusercontent.com/projectcalico/calico/v3.26.1/manifests/custom-resources.yaml
```

當節點變成 Ready 後，執行下列指令將 taint 給移除
```
kubectl taint nodes master node-role.kubernetes.io/control-plane:NoSchedule-
```

# Experiment
以下來示範兩種 sidecar container 使用上的可能性，並且探討如何使用 1.28 的新功能來解決

## Case 1
第一個情境探討於 Job 的情況下使用 sidecar container 造成的判定問題

舉例來說，以下列的 YAML 部署一個有 sidecar container 的 Job 服務，該範例中的 sidecar 單純是個示範，其功能不重要。
```yaml=
apiVersion: batch/v1
kind: Job
metadata:
  name: pi
spec:
  template:
    spec:
      containers:
      - name: pi
        image: perl:5.34.0
        command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]
      - name: sidecar
        image: hwchiu/netutils
      restartPolicy: Never
  backoffLimit: 4
```

部署該 YAML 可以觀察到下列情況
```YAML=
$ kubectl get pods,job
NAME           READY   STATUS     RESTARTS   AGE
pod/pi-6q4lh   1/2     NotReady   0          17m

NAME           COMPLETIONS   DURATION   AGE
job.batch/pi   0/1           17m        17m
```

主要容器運行完畢結束，但是 sidecar container 繼續運行，因此使得當前的 Pod 沒有辦法達到 "Completed" 的狀態，因此 Job 無法正常判定。

而現在來嘗試看看 v1.28 的新功能

該功能的邏輯是建立在一個 "會不停運行的 initContainer" 之上，因此設定上是從 "initContainer" 出發，並且透過 "restartPolicy" 來開啟 sidecar container 的功能。
一旦 sidecare container 設定 "restartPolicy: Always"，其背後的運作邏輯就會有些許改變
1. 本身不需要結束就可以繼續往下執行其他 Init Container
2. 本身若發生問題離開，會自動重啟
3. 本身的運行狀態不會影響 Pod 本身的狀態判定

接下來嘗試下列 YAML 檔案，我們將 sidecar container 搬移到 init container 的階段，來試試看這樣的情況下 Pod 是否可以順利結束

```YAML=
apiVersion: batch/v1
kind: Job
metadata:
  name: pi-sidecar
spec:
  template:
    spec:
      initContainers:
      - name: network-proxy
        image: hwchiu/python-example
        restartPolicy: Always
      containers:
      - name: pi
        image: perl:5.34.0
        command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]
      restartPolicy: Never
  backoffLimit: 4
```

```bash=
$ kubectl get pods
NAME               READY   STATUS      RESTARTS   AGE
pi-sidecar-bszf2   0/2     Completed   0          42s
```

從運作結果來看， Pod 本身所認為的 Conainer 數量依然是 2，但是這時候就可以順利結束完成 Completed 狀態
```bash=
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  79s   default-scheduler  Successfully assigned default/pi-sidecar-bszf2 to master
  Normal  Pulling    78s   kubelet            Pulling image "hwchiu/python-example"
  Normal  Pulled     77s   kubelet            Successfully pulled image "hwchiu/python-example" in 1.511s (1.511s including waiting)
  Normal  Created    77s   kubelet            Created container sidecar
  Normal  Started    77s   kubelet            Started container sidecar
  Normal  Pulled     76s   kubelet            Container image "perl:5.34.0" already present on machine
  Normal  Created    76s   kubelet            Created container pi
  Normal  Started    76s   kubelet            Started container pi
  Normal  Killing    67s   kubelet            Stopping container network-proxy
```

另外從 `kubectl describe pods` 中去觀察，可以看到最後一項 `Stopping container network-proxy`，這意味當主要容器結束之後，sidecar container(network-proxy) 會自己被系統結束，並不會影響到主要容器的生命週期。

## Case 2

第二個範例中模擬的情境是透過 sidecar container 達成類似 Proxy 的連線，因此 sidecar container 必須要比主要容器更早啟動。

以下列 YAML 為範例
```yaml=
apiVersion: apps/v1
kind: Deployment
metadata:
  name: proxy
spec:
  replicas: 3
  selector:
    matchLabels:
      run: proxy
  template:
    metadata:
      labels:
        run: proxy
    spec:
      containers:
      - name: app
        image: hwchiu/netutils
        command: ["/bin/sh"]
        args: ["-c", "nc -zv localhost 5000 &&  sleep 1d"]
      - name: proxy
        image: hwchiu/python-example
        ports:
        - containerPort: 5000
        startupProbe:
          httpGet:
            path: /
            port: 5000
```

該範例中部署兩個 Container，其中 sidecar container 是一個聽 5000 port 的服務器，而主要容器起來時若 sidecar 還沒準備好就會直接離開等待下次重啟
```bash=
$ kubectl get pods
NAME                     READY   STATUS    RESTARTS      AGE
proxy-74dc7b8d88-77cft   2/2     Running   1 (49s ago)   52s
proxy-74dc7b8d88-rlz8m   2/2     Running   1 (47s ago)   52s
proxy-74dc7b8d88-zjkdh   2/2     Running   1 (46s ago)   52s
$ kubectl logs -p proxy-74dbbdccd5-cf9pg
Defaulted container "app" out of: app, proxy
localhost [127.0.0.1] 5000 (?) : Connection refused
```

重上述的部署結果可以觀察到所有的 Pod 都會因為順序問題使得主要容器會重啟一次，從前述失敗的 log 也可以觀察到因為 sidecar container 還沒準備好因此導致運行失敗。
透過 `kubectl describe pod` 觀察相關事件

```
  Normal  Scheduled  6m20s                  default-scheduler  Successfully assigned default/proxy-74dbbdccd5-dzdmz to master
  Normal  Pulled     6m18s                  kubelet            Successfully pulled image "hwchiu/netutils" in 1.447s (1.447s including waiting)
  Normal  Pulling    6m18s                  kubelet            Pulling image "hwchiu/python-example"
  Normal  Pulled     6m15s                  kubelet            Successfully pulled image "hwchiu/python-example" in 2.459s (2.459s including waiting)
  Normal  Created    6m15s                  kubelet            Created container proxy
  Normal  Started    6m15s                  kubelet            Started container proxy
  Normal  Pulling    6m14s (x2 over 6m19s)  kubelet            Pulling image "hwchiu/netutils"
  Normal  Created    6m13s (x2 over 6m18s)  kubelet            Created container app
  Normal  Pulled     6m13s                  kubelet            Successfully pulled image "hwchiu/netutils" in 1.47s (1.47s including waiting)
  Normal  Started    6m12s (x2 over 6m18s)  kubelet            Started container app
```

可以觀察到 Proxy 容器啟動後就馬上去抓取 App 的容器，中間幾乎沒有任何間隔。


接下來導入 sidecar container 的機制再次嘗試看看

```yaml=
apiVersion: apps/v1
kind: Deployment
metadata:
  name: proxy-sidecar
spec:
  replicas: 3
  selector:
    matchLabels:
      run: proxy-sidecar
  template:
    metadata:
      labels:
        run: proxy-sidecar
    spec:
      initContainers:
      - name: proxy
        image: hwchiu/python-example
        ports:
        - containerPort: 5000
        restartPolicy: Always
        startupProbe:
          httpGet:
            path: /
            port: 5000
      containers:
      - name: app
        image: hwchiu/netutils
        command: ["/bin/sh"]
        args: ["-c", "nc -zv localhost 5000 &&  sleep 1d"]
```


轉換為

```bash=
$ kubectl get pods
proxy-sidecar-5dd9ff76f8-47mll   2/2     Running   0               2m34s
proxy-sidecar-5dd9ff76f8-cmjjs   2/2     Running   0               2m34s
proxy-sidecar-5dd9ff76f8-qctk8   2/2     Running   0               2m34s
$ kubectl describe pods proxy-sidecar-5dd9ff76f8-qctk8
...
  Normal  Scheduled  2m16s  default-scheduler  Successfully assigned default/proxy-sidecar-5dd9ff76f8-qctk8 to master
  Normal  Pulling    2m14s  kubelet            Pulling image "hwchiu/python-example"
  Normal  Pulled     2m11s  kubelet            Successfully pulled image "hwchiu/python-example" in 1.507s (2.923s including waiting)
  Normal  Created    2m11s  kubelet            Created container proxy
  Normal  Started    2m11s  kubelet            Started container proxy
  Normal  Pulling    2m5s   kubelet            Pulling image "hwchiu/netutils"
  Normal  Pulled     2m1s   kubelet            Successfully pulled image "hwchiu/netutils" in 1.475s (4.405s including waiting)
  Normal  Created    2m     kubelet            Created container app
  Normal  Started    2m     kubelet            Started container app
```

當導入 sidecar container 的設定後，可以觀察到 Proxy 容器起後動過了一段時間才去抓取新的 Image，這是因為 sidecar container 會等到其 StartupProbe 結束後才開始往下去執行主要容器，透過這種機制就可以確保 sidecar container 會比主要容器更早運行。

最後以這兩張圖來呈現一下案例二的流程，過往將所有容器都放到 containers 中來處理 sidecar container 的邏輯。
![](./assets/H1NslhSxp.png)

而新版架構則將其設定搬移到 initContainer 中，並且是從 Kubernetes 內部來處理專屬的生命週期

![](./assets/Sk3senHea.png)


# Summary

以目前初次體驗來說， sidecar container 帶來的好處非常的明顯，能夠減少很多過往的 workaround，讓 sidecar container 的模式更加自然，以 [istio](https://istio.io/latest/blog/2023/native-sidecars/) 來說，其新版本也支援使用 k8s 1.28 sidecar 的功能，不過因為還沒測試過因此不確定從 istio 的角度來說
實際上會有什麼樣的差異。
另外此項功能於 1.28 還只是 alpha 版本，接下來還有 Beta 以及 GA，最快也要兩個版本大概六個月，這樣可能就是 1.30，而各大公有雲平台 (GKE/EKS/AKS) 想要追到 1.30 想必也不短期內會發生的事情，因此除非自已去調整 feature gate 來啟動，不然短期內應該還很難大量落地。

# Reference
https://kubernetes.io/blog/2023/08/25/native-sidecar-containers/

