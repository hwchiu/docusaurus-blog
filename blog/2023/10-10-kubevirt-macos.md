---
title: 'Kubevirt 初體驗'
authors: hwchiu
tags:
  - Kubernetes
  - Kubevirt
---

本文紀錄如何於 Linux(Ubuntu 22.04) 環境上簡易搭建 Kubevirt 的環境

# 環境搭建

## KVM

安裝指令來檢查 qemu 相關狀態
```bash=
sudo apt install libvirt-clients
```

使用 virt-host-validate 檢查相關
```bash=
$ virt-host-validate qemu
  QEMU: Checking for hardware virtualization                                 : PASS
  QEMU: Checking if device /dev/kvm exists                                   : PASS
  QEMU: Checking if device /dev/kvm is accessible                            : FAIL (Check /dev/kvm is world writable or you are in a group that is allowed to access it)
  QEMU: Checking if device /dev/vhost-net exists                             : PASS
  QEMU: Checking if device /dev/net/tun exists                               : PASS
  QEMU: Checking for cgroup 'cpu' controller support                         : PASS
  QEMU: Checking for cgroup 'cpuacct' controller support                     : PASS
  QEMU: Checking for cgroup 'cpuset' controller support                      : PASS
  QEMU: Checking for cgroup 'memory' controller support                      : PASS
  QEMU: Checking for cgroup 'devices' controller support                     : WARN (Enable 'devices' in kernel Kconfig file or mount/enable cgroup controller in your system)
  QEMU: Checking for cgroup 'blkio' controller support                       : PASS
  QEMU: Checking for device assignment IOMMU support                         : WARN (No ACPI DMAR table found, IOMMU either disabled in BIOS or not supported by this hardware platform)
  QEMU: Checking for secure guest support                                    : WARN (Unknown if this platform has Secure Guest support)
```

可以看到中間有一個錯誤，這時候需要安裝 `sudo apt install qemu-kvm` 並且調整權限 `sudo usermod -aG kvm $USER`.

```bash=
$ virt-host-validate qemu
  QEMU: Checking for hardware virtualization                                 : PASS
  QEMU: Checking if device /dev/kvm exists                                   : PASS
  QEMU: Checking if device /dev/kvm is accessible                            : PASS
  QEMU: Checking if device /dev/vhost-net exists                             : PASS
  QEMU: Checking if device /dev/net/tun exists                               : PASS
  QEMU: Checking for cgroup 'cpu' controller support                         : PASS
  QEMU: Checking for cgroup 'cpuacct' controller support                     : PASS
  QEMU: Checking for cgroup 'cpuset' controller support                      : PASS
  QEMU: Checking for cgroup 'memory' controller support                      : PASS
  QEMU: Checking for cgroup 'devices' controller support                     : WARN (Enable 'devices' in kernel Kconfig file or mount/enable cgroup controller in your system)
  QEMU: Checking for cgroup 'blkio' controller support                       : PASS
  QEMU: Checking for device assignment IOMMU support                         : WARN (No ACPI DMAR table found, IOMMU either disabled in BIOS or not supported by this hardware platform)
  QEMU: Checking for secure guest support                                    : WARN (Unknown if this platform has Secure Guest support)
```

## Kubernetes
透過 minikube 搭建一個 k8s (provider採用 docker 減少第二層虛擬化)
```bash=
$ minikube start --cni=flannel
```

叢集準備好後，安裝 kubevirt-operator
```bash=
$ export VERSION=$(curl -s https://api.github.com/repos/kubevirt/kubevirt/releases | grep tag_name | grep -v -- '-rc' | sort -r | head -1 | awk -F': ' '{print $2}' | sed 's/,//' | xargs)
$ echo $VERSION
$ kubectl create -f https://github.com/kubevirt/kubevirt/releases/download/${VERSION}/kubevirt-operator.yaml
namespace/kubevirt created
customresourcedefinition.apiextensions.k8s.io/kubevirts.kubevirt.io created
priorityclass.scheduling.k8s.io/kubevirt-cluster-critical created
clusterrole.rbac.authorization.k8s.io/kubevirt.io:operator created
serviceaccount/kubevirt-operator created
role.rbac.authorization.k8s.io/kubevirt-operator created
rolebinding.rbac.authorization.k8s.io/kubevirt-operator-rolebinding created
clusterrole.rbac.authorization.k8s.io/kubevirt-operator created
clusterrolebinding.rbac.authorization.k8s.io/kubevirt-operator created
deployment.apps/virt-operator created
```

實驗當下使用的版本是 v1.1.0-alpha.0，安裝完畢後檢查 kubevirt namespace 的資源
```bash=
$ kubectl -n kubevirt get pods
NAME                               READY   STATUS    RESTARTS   AGE
virt-operator-57f9fb965d-5lnqf     1/1     Running   0          46m
virt-operator-57f9fb965d-f5zg4     1/1     Running   0          46m
```

接下來安裝 CRD 物件
```bash=
$ kubectl create -f https://github.com/kubevirt/kubevirt/releases/download/${VERSION}/kubevirt-cr.yaml
```

安裝完畢後可以看到有一個名為 `kubevirt` 的物件(CRD為 kubevirt,簡稱 kv)被創立，因此 operator 就會針對該物件去創立 kubevirt 相關的服務 Pod
```bash=
$ kubectl -n kubevirt get kv kubevirt -o yaml
apiVersion: kubevirt.io/v1
kind: KubeVirt
metadata:
  annotations:
    kubevirt.io/latest-observed-api-version: v1
    kubevirt.io/storage-observed-api-version: v1
  creationTimestamp: "2023-10-10T14:35:55Z"
  finalizers:
  - foregroundDeleteKubeVirt
  generation: 2
  name: kubevirt
  namespace: kubevirt
  resourceVersion: "1490"
  uid: bc621d93-4910-4b1f-b3c8-f8f1f4e27a38
spec:
  certificateRotateStrategy: {}
  configuration:
    developerConfiguration: {}
  customizeComponents: {}
  imagePullPolicy: IfNotPresent                                                                                                                                                                  workloadUpdateStrategy: {}
$ kubectl -n kubevirt get pods
NAME                               READY   STATUS    RESTARTS   AGE
virt-api-77f8d679fc-hntws          1/1     Running   0          49m
virt-controller-6689488456-4jtv8   1/1     Running   0          48m
virt-controller-6689488456-68hnz   1/1     Running   0          48m
virt-handler-psc4w                 1/1     Running   0          48m
```

基本上就是預設的設定檔案，然後對應的 API, Controller 以及 Handler 都被創建出來處理後續的操作。

# Virtctl

透過官方指令直接抓取對應版本的 virtctl

```bash=
VERSION=$(kubectl get kubevirt.kubevirt.io/kubevirt -n kubevirt -o=jsonpath="{.status.observedKubeVirtVersion}")
ARCH=$(uname -s | tr A-Z a-z)-$(uname -m | sed 's/x86_64/amd64/') || windows-amd64.exe
echo ${ARCH}
curl -L -o virtctl https://github.com/kubevirt/kubevirt/releases/download/${VERSION}/virtctl-${VERSION}-${ARCH}
chmod +x virtctl
sudo install virtctl /usr/local/bin
```

```bash=
-> % virtctl version
Client Version: version.Info{GitVersion:"v1.1.0-alpha.0", GitCommit:"67902ed9de43d7a0b94aa72b8fd7f48f31ca4285", GitTreeState:"clean", BuildDate:"2023-09-18T10:45:14Z", GoVersion:"go1.19.9", Compiler:"gc", Platform:"darwin/arm64"}
Server Version: version.Info{GitVersion:"v1.1.0-alpha.0", GitCommit:"67902ed9de43d7a0b94aa72b8fd7f48f31ca4285", GitTreeState:"clean", BuildDate:"2023-09-18T12:03:45Z", GoVersion:"go1.19.9", Compiler:"gc", Platform:"linux/arm64"}
```

'''info
官方文件有說明可以透過 kubectl krew 的平台來安裝 virtctl 指令，透過 `kubectl krew install virt` 來安裝並使用，但是目前並沒有支援 darwin-arm64 (MacOS M1/M2)
'''

# 安裝 VM

透過官方示範檔案部署第一個 VM
```bash=
$ kubectl apply -f https://kubevirt.io/labs/manifests/vm.yaml
virtualmachine.kubevirt.io/testvm created
$ kubectl get vm
NAME     AGE   STATUS    READY
testvm   7s    Stopped   False
```

預設情況下，創建好 VM 並不代表 VM 已經啟動，這時候可以透過 `virtctl` 將該 VM 給運行起來

```bash
$ virtctl start testvm
VM testvm was scheduled to start
```

當 VM 啟動後，對應的 Pod 就會正式被部署到環境內
```bash
$ kubectl get pods -o wide
```

這時候來研究一下該 Pod 的一些架構

先透過 `virtctl console testvm` 登入後觀察一下 VM IP
```
$ ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1450 qdisc pfifo_fast qlen 1000
    link/ether 52:54:00:0c:00:55 brd ff:ff:ff:ff:ff:ff
    inet 10.0.2.2/24 brd 10.0.2.255 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::5054:ff:fe0c:55/64 scope link
       valid_lft forever preferred_lft forever
$ ip r
default via 10.0.2.1 dev eth0
10.0.2.0/24 dev eth0  src 10.0.2.2
```

IP 是 `10.0.2.2` 並且 Gateway 是 `10.0.2.1`
這時候進入到對應的 Pod 去觀察
```bash
$ kubectl exec -it virt-launcher-testvm-pnn4j -- bash
bash-5.1$ ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
2: eth0@if14: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1450 qdisc noqueue state UP group default
    link/ether 12:37:77:cf:6d:63 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 10.244.0.10/24 brd 10.244.0.255 scope global eth0
       valid_lft forever preferred_lft forever
3: k6t-eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1450 qdisc noqueue state UP group default qlen 1000
    link/ether 02:00:00:00:00:00 brd ff:ff:ff:ff:ff:ff
    inet 10.0.2.1/24 brd 10.0.2.255 scope global k6t-eth0
       valid_lft forever preferred_lft forever
4: tap0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1450 qdisc fq_codel master k6t-eth0 state UP group default qlen 1000
    link/ether d6:0e:c5:6f:41:f1 brd ff:ff:ff:ff:ff:ff
bash-5.1$
```

這邊可以看到 Pod 上面的 `k6t-eth0` 是有 IP `10.0.2.1` 同時可以看到下方有一個 tap0 的網卡，該網卡有設定 `master k6t-eth0`
因此可以推斷 `k6t-eth0` 是 Linux Bridge， tap0 則是 bridge 下的一個 Port，透過下列指令可以確認
```bash

bash-5.1$ ls /sys/class/net/k6t-eth0/brif
tap0
bash-5.1$ ls /sys/class/net/k6t-eth0/bridge/
ageing_time    group_fwd_mask          multicast_last_member_count     multicast_query_response_interval  nf_call_arptables   root_port                 vlan_protocol
bridge_id      hash_elasticity         multicast_last_member_interval  multicast_query_use_ifaddr         nf_call_ip6tables   stp_state                 vlan_stats_enabled
default_pvid   hash_max                multicast_membership_interval   multicast_router                   nf_call_iptables    tcn_timer                 vlan_stats_per_port
flush          hello_time              multicast_mld_version           multicast_snooping                 no_linklocal_learn  topology_change
forward_delay  hello_timer             multicast_querier               multicast_startup_query_count      priority            topology_change_detected
gc_timer       max_age                 multicast_querier_interval      multicast_startup_query_interval   root_id             topology_change_timer
group_addr     multicast_igmp_version  multicast_query_interval        multicast_stats_enabled            root_path_cost      vlan_filtering
bash-5.1$
```

k6t-eth0 底下有眾多 bridge 的設定，並且 brif 底下有 tap0，而實務上該 tap0 則是 kvm 創建 vm 後將其綁到 VM 內，因此會與 VM 內的 eth0 掛勾，可以想成是一條大水管，一邊進去另外一邊出來
看來詳細細節還是需要閱讀[interface networks](https://kubevirt.io/user-guide/virtual_machines/interfaces_and_networks/#passt)，似乎提供不同網路模式來達成不同功能，有空來玩看看彼此差異研究下實作細節。

