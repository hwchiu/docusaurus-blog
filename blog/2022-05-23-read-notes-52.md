---
title: '閱讀筆記: 「Tetragon, 基於 eBPF 的 Kubernetes 資安管理工具」'
tags:
  - Reading
  - ePBF
  - Security
description: '「Tetragon, 基於 eBPF 的 Kubernetes 資安管理工具」'
date: 2022-05-23 00:05:08
---

標題: 「Tetragon, 基於 eBPF 的 Kubernetes 資安管理工具」
類別: others
連結: https://isovalent.com/blog/post/2022-05-16-tetragon

Cillium 的開發團隊 isovalent 最近公布其內部一直使用的資安相關專案， Teragon (可愛的蜜蜂戰士)。

Teragon 底層是基於 eBPF 的技術，其目的就是讓你的 Kubernetes 於資安方面可以獲得超級強大的能力，包含
1. 詳細的視覺化功能，讓你可以一目瞭然到底系統中各項資源的發生過程
2. 動態強化，可以讓你透過 Kubernetes CRD, OPA, Json 等各種格式來描述相關規範，然後動態無縫的套入到你的 Kubernetes 叢集中

探討 Teragon 前，要先理解以前目前已知的相關解決方案有哪些，而這些解決方案又有什麼樣的優缺點，包含
1. App Instrumentation
2. LD_PRELOAD
3. ptrace
4. seccomp
5. SELinux/LSM
6. Kernel Module

上述六個方式都有各自的特點，這邊簡單敘述

App Instrumentation
O 效率高，可以看到非常細部的資訊
X 程式碼需要修改，不夠透明
X 單純的視覺化，不能套入資安規則來防護應用程式
X 應用程式為主，不能理解整個系統的狀況

LD_PRELOAD (動態切換載入的 Library )
O 效率高
O 應用程式不需要修改
X 如果是 Static Llinking 的應用程式那就沒有用了
X 幾乎沒有什麼觀察性可言

ptrace (透過 kernel 提供的功能來檢視使用的 syscall)
O 透明，應用程式不用修改
X 效能負擔比較高
X 應用程式有辦法偵測到自己目前被 ptrace 給監控
X 整體範圍只能針對 syscall(系統呼叫)

seccomp (可以過濾應用程式呼叫的 syscall)
O 有效率，應用程式不需要修改
X 規則只能針對 syscall 去阻擋
X 沒有很好的視覺化方式

SELinux/LSM (Kernel 內建的 security 框架，可以針對存取去控制)
O 有效率，應用程式不需要修改
O 可防 TOCTTOU 攻擊
X 針對 Contaienr/Kubernetes 的整合很有限
X 不容易擴充
X 要針對攻擊類型去設定

Kernel Module
O 有效率，應用程式不需要修改
O 不用修改 Kernel 就可以擴充功能
X 不是每個環境都允許使用者去載入 kenrel Module
X Module 有問題會打爆你的 Kernel
X 沒辦法無縫升級，意味你升級功能的過程中必須要將kernel module給 uninstall ，然後重新安裝

上列六個解決方案有的只能檢視相關流程，有的只能設定規則去防護，但是就是沒有一個工具可以全面處理，而基於 eBPF 實作的 Tetragon 則是一個
能夠提供兩項功能的全新解決方案。

首先資安防護方面， Tetragon 採取的是更底層的概念，不去探討特定的 CVE 操作手法，取而代之的是從幾個常見的攻擊方式來防禦。
假如有任何應用程式有不預期的下列行為，就可以直接將該 Process 移除
1. 使用到不該使用的 capability
2. 使用到不該使用的 linux namespace
3. 使用到不該使用的 binary
4. 看到不該出現的 Pid 
5. ...

這些規則都可以透過 Kubernetes CRD 來描述，當這些規則被送到 Kubernetes 後，相關的 Controller 就會將規則給轉換後續讓 eBPF 來處理
此外因為 eBPF 以及 kprobe 的架構，Tetragon 能夠看到非常多 kernel 的資源存取與操作，譬如
1. syscall(系統呼叫)
2. Virtual FS
3. TCP/IP
4. namespace
5. Storage
6. Network

Tetragon 收集上列不同資訊的資料後進行二次處理，透過精美的網頁來顯示系統中的各種資訊，這些資訊可以提供包含
1. 哪些 Pod 一直存取 /etc/passwd, 採用何種方式存取 /etc/passwd
2. 特定 Pod 中對外的網路流量資訊，從封包內容到用什麼指令去存取都可以看光光
3. ...

eBPF 的應用愈來愈多，而目前看起來 isovalent 更是 Kubernetes 生態系中的領頭羊，雖然不確定未來是否能夠被廣泛採用，但是至少這方面還沒有看到其他解決方案有這麼積極的基於 eBPF 來開發
有餘力的話花點時間學習一下 eBPF 的概念可以加強自己對於這類型文章的速度與理解度

