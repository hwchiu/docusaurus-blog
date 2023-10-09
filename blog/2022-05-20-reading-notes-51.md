---
title: '閱讀筆記: 「Datree, Kubernetes Configuration 檢查工具」'
authors: hwchiu
tags:
  - Reading
  - Kubernetes
description: '「Datree, Kubernetes Configuration 檢查工具」'
date: 2022-05-20 00:05:08
---

標題: 「Datree, Kubernetes Configuration 檢查工具」
類別: tools
連結: https://opensource.com/article/22/4/kubernetes-policies-config-datree

如同各類程式語言的測試框架， Kubernetes 的部署文件(YAML)實際上也是可以導入 CI 的概念，那到底 YAML 檔案有什麼東西需要檢驗？
最基本的概念大致上可以分成三種
1. YAML 語法的檢查
2. Kubernetes YAML 的語意檢查
3. Kubernetes YAML 的設定規範檢查

除了基本的 YAML 部署外，還要考慮一下團隊是採用何種方式來管理 Kubernetes App，譬如原生 YAML, Helm, Kustomize 等各種不同方法。

(1) 的話其實最基本的方式就是使用 yq 指令，其本身就可以檢查基本的 YAML 語法，如果是 Helm 的使用者也可以透過 Helm template 的方式來嘗試渲染，渲染的過程也會幫忙檢查 YAML 的合法性。
(2) 的話其實也有其他如 kubeval 等類型的工具去幫忙檢驗 YAML 內容是否符合 Kubernees Scheme，這邊要特別注意的還有版本問題，畢竟每次升級都會有很多 API Version 被調整
(3) 的話講究的是規範，譬如要求所有 workload 都必須要描述 CPU/Memory 的Request/Limit，或是要求所有容器都要以 non-root 的身份運行，
這部分有如 kube-score，或是基於 REGO 的 conftest 等工具可以檢測。

而今天分享的這個工具 datree 基本上就是一個人包辦上述三個工具，該工具基本上有兩種模式使用
1. local 使用，就如同上述所有工具一樣，你可以把所有策略與規則都放到本地環境，搭配 git hook, CI pipeline 等概念去執行
2. datree 還提供了一個中央管理 Policy 的伺服器，每個運行 datree 的環境都可以與該團隊維護的 server 連動，讓你透過網頁的方式去設定想要驗證的 k8s 版本以及想要檢測的規範有哪些。

基本上這類型的工具愈來愈多，找到一個適合團隊的工具將其整合到 CI 中，讓團隊的 Kubernetes YAML 都能夠符合團隊規範，同時也透過 CI 的流程盡可能提早地找出問題

