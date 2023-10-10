---
title: Kubernetes 網路除錯之旅
keywords: [Kubernetes,Network]
tags:
  - Kubernetes
  - Network
  - DevOps
description: 淺談如何除錯 Kubernetes 中的各種網路問題
image: https://i.imgur.com/4vCOL5P.png
authors: hwchiu
date: 2023-03-05 15:35:57
---

# 前言
Kubernetes 多節點架構的設計與使用者介面讓使用者可以輕鬆的部屬應用程式到所謂的多節點環境，特別是網路部分則是透過簡易的抽象層來簡化所有底層封包流向與操作，讓使用者可以更簡易快速的去存取部署的 Kubernetes 應用程式。

本篇文章會先快速的簡略一下 Kubernetes 內的網路流量，並且探討當遇到網路問題時應該保有何種思路來面對問題，並且逐一擊破找到問題點

# Kubernetes 網路

Kubernetes 是一個多節點的叢集系統，以叢集為基準去觀看封包流向，大抵上可以分成東西向與南北向。

## 南北向
`南北向` 代表的是流量有進出叢集，封包的來源或是目的有一端是不屬於叢集的一部份。

大抵上可能會有幾種流量方式
1. 外部服務 如和存取 叢集內服務
    - Ingress
    - API-Gateway
    - Load-Balancer
    - ...等
3. 叢集內服務 如何存取 外部網路 
    - NAT (Network Address Translation)
    - Internet Gateway


下圖是一個用來描述南北向流量的簡易畫法

![](./assets/0U11QvC.png)

這種圖只能單純描述封包的流量以及讓大家對於整個叢集封包流向有一點基本的概念，對於除錯整體是不夠的，因此若要針對網路問題除錯必須要能夠更細部的去描述整個參與到的元件，譬如下圖

![](./assets/MPkqvsx.jpg)

舉例來說，該 Kubernetes 叢集外部配置一個 Load-Balancer，而該 Load-Balancer 將封包打到節點上並且透過 Service(Node-Port) 的方式把封包打到目標 Pod.
而目標 Pod 則是依賴 Routing Table 將封包都轉發到 NAT Gateway 讓 NAT GW 來處理 SNAT 並將封包給轉發到外部網路

此外，下圖也是另外一種不同的底層實作

![](./assets/4nydb8X.png)

Load-Balancer 與 Kubernetes Pod 天生就擁有共通的能力(AWS CNI, Azure CNI)
，這種情框下 Load-Balancer 就能夠直通 Pod 而不需要經過任何 Service(LB/NodePort) 來處理。
每個節點都依賴各自的 NAT 服務來直接進行 SNAT 的處理並且直接將網路送到外部網路。

第三種範例如下

![](./assets/HctxXRo.png)

這種架構下可能的情況就是外部使用 L4 LoadBalancer 將流量全部導向 Kubernetes 內的 Ingress Controller，讓 Ingress 來處理 L7 層級的處理與轉發。
同時環境架構中包含了 Internal/Public 兩種網路，節點會根據封包目的地搭配 Routing Table 來決定封包的走向。


以上三種範例都可以達到最初簡易圖示的效果，但是其底層的實作卻是截然不同，因此若要針對網路除錯則第一步驟就是要有能力且系統化的去闡述網路封包中經過的元件，先理解流程與相關元件才有辦法進行後續的除錯

## 東西向

而 `東西向` 代表封包於節點中穿梭，封包的來源與目的兩端都是屬於叢集內的一部分，譬如屬於不同的 Pod 或是節點本身。
1. 存取方向
    - Pod <--> Service
    - Pod <--> Pod
    - Pod <--> Node
2. 存取範圍
    - 兩者屬於同節點
    - 兩者跨節點


東西向來說，最簡單的就是 Pod to Pod 之間的存取

![](./assets/6Sqxou4.png)

然而大部分的應用程式為了搭配 Deployment 對 Pod 生命週期的管理，通常會使用 Service 來處理 Pod 的 IP 與存取，如下圖

![](./assets/TH8cbFw.png)

基於 K8s Service 的概念，所有送到 Service 的封包會依賴 Kube-proxy 的設定來處理負載平衡的抉擇(iptables, ipvs).


從以上的探討可以基本知道網路世界沒有一個萬用架構圖，不同的環境與情境都會有不同的網路流向，因此探討網路問題的基本原則就是
1. 釐清誰是送端，誰是收端
2. 釐清送端與收端與 Kubernetes 的定位
3. 釐清封包流向中經過的所有元件為何

# Kubernetes 的網路元件

K8s 網路架構基本上我認為可以分成四個面向去探討，這四個面向互相整合使得 K8s 提供完善的網路功能，但是只要其中有任何一個地方出錯就會使得整個網路不通不如預期，這個面向分別是
1. 底層基礎建設
2. Kubernetes 內建網路功能
3. CNI
4. 第三方解決方案整合

## 底層基礎建設
對於雲端使用者來說，這部分的設定就是仰賴雲端業者去完成，使用者則是花錢建設，譬如
1. VPC
2. Subnet
3. Firewall
4. Routing
5. NAT/Internet GW

但是對於地端人員來說，這些東西就不是用滑鼠或是 Terraform 寫寫就會產生的資源，而是需要實際上架機器佈線與機房管理，譬如
1. 節點與節點之間的網路連線，透過 L2 Switch, VLAN... 等串接
2. 基本的節點 IP 發放，是靜態 IP 還是動態 IP 取得
3. DNS Server 的建置與管理
4. 跨機櫃的 Switch/Router 等

可能架構如下

![](./assets/munPePk.png)


## Kubernetes 內建網路功能
Kubernetes 內建多種網路相關資源，包含
1. Kubernetes Service
這部分主要是取決於 kube-proxy 的實作，預設的 iptables 或是修改為 ipvs，除了基本規則匹配方式外還有負載平衡演算法的實作不同。

3. Kubernetes Ingress
Kubernetes 只提供單純的介面，實作則是根據安裝哪套 Ingress Controller，不同套的實作細節則不同，譬如 Nginx, Kong, Tarefik...等

5. CoreDNS
用來處理基本的 DNS 請求，所有內部 k8s service 的 DNS 都會由 CoreDNS 來解析處理，特別是有些網路環境還想要與外部 External DNS 進行整合。

6. Network Policy
針對 Pod 進行些許的防火牆規則，這部分也是單純的介面，實作都是由底層的 CNI 去完成。

將上述的概念給整合到前述圖片後，可能的架構如下
![](./assets/88hCder.jpg)

## CNI

Contaienr Network Interface(CNI) 主要用來幫忙處理
1. Pod 的 IP 分配 (IPAM)
    - 節點上分配私有 IP
    - 節點上分配一個 "基礎底層架構" 可以直接存取的 IP，譬如 EKS/AKS 上的 IP 就來自 VPC 內的可用 IP
3. 跨節點之間 Pod 的封包處理

一個簡易的概念就是，每個節點上的私有IP (Pod) 要如何與其他節點上的私有 IP (Pod) 進行處理？
不同 CNI 都採取不同的網路技術處理
    - Calico (BGP/IPIP)
    - Flannel (VXLAN)
    - Cilium (eBPF)
    - OVS (OpenFlow)
    - Cloud-Provider specified (AWS/Azure)


一切堆疊起來後的架構圖大致上如下

![](./assets/JRlBmpi.jpg)


## 第三方解決方案整合
剩下的額外功能我都歸類於第三方功能，譬如
1. Service Mesh
2. Cluster Federation
3. ... 等


這些功能都要建立於一個 "可正常運作" 的 Kubernetes 上，同時疊加更多功能來提供更進階的網路處理，然而一體兩面，進階的網路功能也意味著整個架構更為複雜，如果沒有辦法掌握這些概念與原理，基本上就是一個按照 README.MD 來操作的 YAML 工程師。
YAML 工程師可用，環境可通，功能可行，困擾就在於如何客製化，如何除錯，如何根據需求調整架構

舉例來說，假設 Cluster Federation 建立後，有可能會變成如下
![](./assets/PpgV90m.jpg)


# Kubernetes 的除錯思路

用上述的基本概念敘述可得知，網路用起來非常簡單但是實際上背後牽扯的元件非常多，特別是當環境安裝愈來愈多的網路功能時，愈來愈多的元件牽扯其中，因此遇到網路問題的思路我推薦是

1. 釐清方向性，到底問題是南北向還是東西向?
2. 問題發生點，到底問題是屬於哪個層級？
是基礎建設出問題? K8s 內建功能沒設定好？ CNI 出問題還是第三方整合的服務有 Bug?

特別特別重要的事情是，網路問題千萬千萬不要用嘴除錯，每個人對網路的概念與背景知識不同，單純靠嘴巴用談有時候很難有一個相同的理解與共識，最好的做法就是畫圖，將圖畫出來逐一釐清縮小問題發生點。

為了有效的實作上述思路，可以採用一種方式來處理
1. 畫出整個系統架構圖
2. 標示出你的網路情境，誰是發送端，誰是收端？
3. 將自己想像成一個封包，於整個架構圖上逐一解釋這個封包會怎麼流動
    - 如果有一個部分沒有辦法解釋，就代表你對這個網路架構還是不夠熟悉，繼續念書學習
4. 以上述過程為基礎開始除錯，縮小問題的可能範圍，針對範圍內可能是問題的元件進行除錯，不停循環整個流程最後定位整個問題發生點


以下是一個 "我的 Pod 透過 Service 沒有辦法存取目標 Pod" 的範例

簡單架構圖畫起來就會是
![](./assets/4unDnS4.png)


但是這張圖只能基本描述封包流向，對於除錯還是有些許的地方不夠清楚，這時候如果可以將這張圖用更為技術的細節去展開，可以得到下列這張圖

![](./assets/ldaPp7j.png)
1. Pod 欲透過 Service DNS 存取服務
2. Pod 內檢察系統的 /etc/resolve 找到 DNS 的 IP
3. 該 DNS 實際上會是 CoreDNS 的 Cluster SerivceIP
4. DNS 請求打到 CoreDNS 去解析到後面的 Service ClusterIP
5. Pod 將請求送到 ClusterIP 並讓 k8s 將其轉發到後續的 Pod


然而上述的圖片也不是 100% 精準，有更多些許的網路細節被遺漏，譬如
1. CoreDNS 本身是基於 Hostnetwork 的方式來部署，因此 Pod -> CoreDNS 的部分會變成 Pod -> Node 的存取方式
2. Pod -> Service ClusterIP 這中間牽扯到 iptables/ipvs 的轉發，所以真正的流量並不會有一條 Pod -> Service 的走向，而是節點本身進行 DNAT 找到一個合適的 Pod IP 後就直接打到目標 Pod

光是一個簡簡單單的 Pod->Service 就有非常的多的細節牽扯其中，大部分情況下這些東西都運作得好好的，大家的網路都沒有問提，然而只要有一個小元件出錯整個網路就不通了。

當理解上述的技術細節後，這個 Pod->Service 的問題可以有這樣去看待
1. 跟 DNS 解析有關？ 直接使用 ClusterIP 打看看?
2. 跟 Service 轉換是否有關? 直接打 PodIP 試試看?
3. 跟節點是否有關， 直接打看看同節點上的 Pod 看看？
4. 跟出發者是誰有關？ 嘗試從節點的看看？
5. 是否有 Network Policy 擋住？

一切都嘗試後還是沒有辦法縮小問題，可以嘗試從不同發生點錄製封包來分析
1. Server 沒收到封包
2. Server 有收到封包，但是沒有回
3. Server 有收到封包，也有回覆，但是 Client 沒有收到

此外也要考慮到封包是不是可能被封包給 Kernel 給丟棄導致沒有錄製到封包?
如果封包都錄製不到有沒有可能是底層網路出問題？譬如網路線壞了？

一個一個列出來來排除與確認每個元件的運作狀況。


# 錄製封包的麻煩

當現存工具都沒有辦法釐清為什麼網路不通時，就可以借助抓取封包的方式來判端
但是錄製封包的一個前提是問題有辦法重製，否則事情已經發生錯誤的封包已經消失，這時候錄製封包通常沒有辦法得到什麼有用的情報。

當決定要錄製封包時，有兩個問題要確認
1. 用什麼工具擷取分析
2. 要如何從茫茫大海流量中定位到目標封包

常見的工具如 wireshark/tcpdump/tshark.. 等都可以用來錄製封包，但是有些環境不一定有 GUI 可以運行 wireshark，所以熟悉些 CLI 的工具是不可獲或缺的技能

當有了工具後就要決定要誰去運行這些工具？
1. Pod 本身
Pod 本身是否能夠運行 tcpdump 取決於容器當初的 image，很多時候不一定有 tcpdump 可以用，甚至一些 image 連基本的 sh/ash/busybox 都沒有，就算仰賴 ksniff 來動態安裝 tcpdump 也有可能遇到執行問題
2. 節點
因為所有容器都運行到節點上，所以從節點上去錄製封包可以看到 95% 的容器封包(少部分特殊如 SR-IOV, DPDK...etc等無法)，此外節點通常比較方便去安裝各式各樣的工具來進行除錯。
不過也要注意的是如果這些節點是動態安裝，譬如透過 auto-scaling group 的概念是否就會導致每次除錯都要一直安裝工具？


當可以錄製封包的時候，這時候又必須要將 CNI 與基本架構給整合進來，以 Calico 為範例

![](./assets/4vCOL5P.png)

節點之間透過 IP-IP 的 Tunneling 協定進行封包處理，因此這時候你如果錄製封包你看到的不會是單純的 IP 協定，而是 IP-IP 協定，因此若沒有這些網路知識與理解，你錄製封包也沒有辦法找到你要的資訊。

如果想要從節點上去錄製封包且 CNI 是透過 veth 的方式將封包給轉發到容器內，如果你有能力找到每條 veth 與 Pod 的對應關係，你可以直接針對 veth 去錄製封包找到最直接往返 Pod 的封包，除錯的效率也是最佳的。

# 其餘工具

除了上述提到跟 Kubernetes 有關的範疇外， Linux 本身的網路工具也甚為重要，譬如
1. ip/tcpdump
2. conntrack
3. iptables/ipvs
4. ethtool
5. routing,NAT,rp_filter
6. ...etc

這些工具都有可能會影響節點層級的封包轉發，弄得不好就會使得封包不通。

# 總結

網路部分牽扯元件眾多，單靠嘴巴想要除錯幾乎不可行，而身為一個資深的開發人員/維運人員，遇到網路問題時千萬不要單純只用一句 “我網路不通” 簡單描述問題，能的話則是要詳細描述實際上遇到什麼問題，進行過什麼測試，排除過什麼困難，目前認為的可能問題為何。

除了能夠讓彼此更加清楚當前問題，反覆多次的來回訓練其實也都是淺移默化的加強對底層網路能力的理解，久而久之只會愈來愈熟悉，未來面對各種問題的時候會有各種不同的想法與理解。


