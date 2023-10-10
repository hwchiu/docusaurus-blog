---
title: '閱讀筆記: 「DevOps 的 2022 學習之路」'
authors: hwchiu
tags:
  - Reading
  - DevOps
description: 「DevOps 的 2022 學習之路」
date: 2022-04-20 00:05:08
---

標題: 「新一代 Helm Chart 的管理套件 helmwave」
類別: tools
連結: https://medium.com/wriketechclub/new-wave-for-helm-b9800733587f

Helm 作為現在包裝與安裝 Kubernetes 應用服務的主流方式，單單使用 Helm 很多時候不能滿足部署需求，譬如公司的業務是由多套 Helm Chart 同時組成的，這時候可能會有幾種做法
1. 使用 Helm Dependency 的方式來產生一個 Umbrella charts 讓你可以安裝一個 Helm 實際上會把相關的服務一起搞定
2. 透過 Helmfile 等相關工具以更上層的概念來管理你的應用，用多套 Helm Chart 來管理與部屬你的應用程式

而作者長期使用 Helmfile 來管理各種 Helm 的安裝方式，而今天作者終於發現一個相對於 Helmfile 來說更容易使用，而且整體使用方式更為簡潔的解決方案，helmwave.

Helmwave 的官方介紹很簡單， Helmwave is like docker-compoose for helm.

其本身的實作更為簡潔，直接使用 Helm Library 於整個實作中，所以下載單獨的 binary 即可，不需要如同 helmfile 一樣還要於系統中先安裝 helm 等相關工具。
文章中透過範例來示範如何滿足
1. 服務需要安裝多套 Helm chart
2. 有兩個不同環境， prod 與 stage 有不同的 values 要使用

整個使用的方式跟 docker-compose 有點類似，可以透過 helmwave up, helmwave down 的概念來啟動與停止服務，只不過所有的服務都是基於 k8s + helm-charts 來完成。

有使用 helmfile 的人可能會對這類型的工具比較有感覺，也許可以看看其差異性是否真的有如作者所提這麼好

---

標題: 「DevOps 的 2022 學習之路」
類別: others    
連結: https://medium.com/faun/devops-roadmap-2022-340934d360f9

本篇文章是作者根據自己的觀察與經驗，列出 2022 需要繼續學習與觀察的 13 項技能與概念，希望讓每個 DevOps(SRE) 相關領域的人有一個方向去精進自己。
1. Network Technologies
網路的概念短時間內很難被顛覆，所以掌握基本的 L4/L7, HTTP2/, HTTP3/(QUIC), DNS, BGP, Load-Balancing 等基本網路概念絕對不吃虧，作為一個熟悉架構的專家，能夠描述環境中的封包流向是不可缺少的能力。

2. OS, particularly Linux 
Linux 很重要，請學習系統上的各種基本概念， CPU/Memory 基本概念, Init, cgroup 等

3. CI/CD
Jenkins 作為老牌的解決方案，能夠使用其實也很好，不過要注意的是現在有愈來愈多的環境嘗試使用其他的 pipeline 來搭建，所以有時間的話也可以學習一下其他的解決方式，讓自己能夠有能力去面對各種需求

4. Containerlization/Virtualization
除了最知名的 Docker 環境外，也嘗試看看 containerd, podman 等不同專案，同時也考慮如何將 container security 的概念給導入到日常生活中

5. Container Orchestration
K8s 幾乎變成容器管理維運的 de facto 標準，單純的 k8s 叢集還不足以面對所有正式環境的問題，所以還需要搭配各個面向的概念將其整合才可以打造出一個適合團隊的 k8s 叢集。

6. Observability at Scale
除了最基本常見的 Prometheus 之外，也看一下其他基於 Prometheus 所打造更適合大規模的架構，如 Thanos, Cortex, VictoriaMetrics 等
此外可以試試看 Continuous Profiling 等持續觀察系統效能的工具，如 Parca, Pyroscope, hypertrace 以及順便試試看導入 Open Telemetry。

7. Platform team as a Product team
稍微有規模的團隊可能會慢慢的感覺到 Platform 逐漸轉型成為一個 Product 的概念，只不過該 Product 的面向對象是內部開發與測試人員而並非外部使用者。
整體目標就是打造一個更好的協同平臺，讓開發與測試人員能夠更有效地去滿足日常工作需求，同時 Platform team 除了維護產品之外也要教授使用人員讓他們有能力去使用該平台來滿足需求
而不是所有問題都要一直讓 Platform 的人來幫忙處理，這種模式小團隊可行，但是當團隊過大時就沒有辦法處理。

8. Security
9. Programming
10. Infrastructure as Code
11. Cloud
12. Technical Writing
13. Site Reliability Engineering

剩下的內容就留給有興趣的人自行到文章去觀看，每個類別都有舉出幾個趨勢與值得關注的專案，其中特別注意的是 Technical Writing 這項技能非常重要
遠端工作的趨勢使得透過文字交流的機會比過往多很多，所以如何寫出一個有效不會浪費彼此時間的設計文件，架構，開發文件等則是一個很重要的技能，所以即使是個開發人員也要努力練習
將腦中的想法有系統地呈現出來

