---
title: 'Multus 下如何透過 network policy 設定'
authors: hwchiu
tags:
  - Linux
  - Kubernetes
---

由於 Multus 下會透過多組 CNI 讓 Pod 內去呼叫多個 CNI 最後產生多個網卡，而 NetworkPolicy 這種情況下其實有點危險
當安裝的 CNI 數量夠多且每個都支援時也有可能讓這些 controller 太忙
另外大部分的 Multus 都是使用 SRIOV, Bridge, Macvlan 等本來就沒有實作 Network Policy 的 CNI，若有需求時就有點麻煩

Multus 那有相關的專案來解決這個問題，以下專案提供介面
https://github.com/k8snetworkplumbingwg/multi-networkpolicy

該專案被用於 openshift 環境內，實作的專案(iptables)如下
https://github.com/openshift/multus-networkpolicy

其會動態的進入到目標 Pod 內去下 iptables 的規則來控管封包的進出

專案內的 deploy.yaml 可以直接安裝，不過下列參數需要修改
1. 修改參數
        args:
        - "--host-prefix=/host"
        # uncomment this if runtime is docker
        # - "--container-runtime=docker"
        - "--network-plugins=bridge"
        - "--v=9"
        - "--container-runtime-endpoint=/run/containerd/containerd.sock"
2. 若不需要可以移除 custom iptavles 相關的 volume

(1) 的部分要特別注意 --networks-plugins=bridge 以及 --container-runtime-endpoint
前者要跟 multus 串連的 multus 一致，這樣才會運作


接者就要部署專屬的 MultiNetworkPolicy 的物件，用法與傳統的 Network Policy 一樣

```yaml=
apiVersion: k8s.cni.cncf.io/v1beta1
kind: MultiNetworkPolicy
metadata:
  name: test-network-policy
  namespace: default
  annotations:
    k8s.v1.cni.cncf.io/policy-for: bridge-network
spec:
  podSelector:
    matchLabels:
      app: debug
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - ipBlock:
        cidr: 10.10.0.5/24
  egress:
  - to:
    - ipBlock:
        cidr: 10.10.0.7/32
```

設定完成後就有機會於符合規則的 container 內看到下列規則

```bash=
[142:11928] -A INPUT -i net1 -j MULTI-INGRESS
[478:40152] -A OUTPUT -o net1 -j MULTI-EGRESS
[0:0] -A MULTI-0-EGRESS -j MARK --set-xmark 0x0/0x30000
[0:0] -A MULTI-0-EGRESS -j MULTI-0-EGRESS-0-PORTS
[0:0] -A MULTI-0-EGRESS -j MULTI-0-EGRESS-0-TO
[0:0] -A MULTI-0-EGRESS -m mark --mark 0x30000/0x30000 -j RETURN
[0:0] -A MULTI-0-EGRESS -j DROP
[0:0] -A MULTI-0-EGRESS-0-PORTS -m comment --comment "no egress ports, skipped" -j MARK --set-xmark 0x10000/0x10000
[0:0] -A MULTI-0-EGRESS-0-TO -d 10.10.0.7/32 -o net1 -j MARK --set-xmark 0x20000/0x20000
[0:0] -A MULTI-0-INGRESS -j MARK --set-xmark 0x0/0x30000
[0:0] -A MULTI-0-INGRESS -j MULTI-0-INGRESS-0-PORTS
[0:0] -A MULTI-0-INGRESS -j MULTI-0-INGRESS-0-FROM
[0:0] -A MULTI-0-INGRESS -m mark --mark 0x30000/0x30000 -j RETURN
[0:0] -A MULTI-0-INGRESS -j DROP
[0:0] -A MULTI-0-INGRESS-0-FROM -s 10.10.0.0/24 -i net1 -j MARK --set-xmark 0x20000/0x20000
[0:0] -A MULTI-0-INGRESS-0-PORTS -m comment --comment "no ingress ports, skipped" -j MARK --set-xmark 0x10000/0x10000
[0:0] -A MULTI-EGRESS -o net1 -m comment --comment "policy:test-network-policy net-attach-def:default/bridge-network" -j MULTI-0-EGRESS
[0:0] -A MULTI-INGRESS -i net1 -m comment --comment "policy:test-network-policy net-attach-def:default/bridge-network" -j MULTI-0-INGRESS
COMMIT
```

其透過 mark 的方式來標示封包是否需要被 DROP，同時也支援針對 ip & port 的方式去判斷
