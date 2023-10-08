---
title: '閱讀筆記: 「一個用來管理 Kubernetes 開源工具的開源工具」'
tags:
  - Reading
  - Kubernetes
description: 「一個用來管理 Kubernetes 開源工具的開源工具」
date: 2022-03-25 00:05:08
---

標題: 「一個用來管理 Kubernetes 開源工具的開源工具」
類別: tools
連結: https://github.com/alexellis/arkade

作者因應過去於 Kubernetes 的教學與開源過程中，必須要一直不停地去安裝各式各樣必備的工具而感到厭煩，譬如每次都要安裝 kubectl, kind, kubectx 等各種常見工具
而每個工具又會有不同的版本，每次都要專寫相關的安裝流程都很麻煩，因此作者萌生出開發一個能夠安裝這些工具的開源工具, arakde.

該工具用起來非常簡單，同時也支援不同版本的工具，除了基本 CLI 工具外也支援 Helm App 的安裝，我個人認為光工具本身就非常好用了，譬如可以透過該指令輕鬆的安裝不同版本的下列工具
1. dive
2. helm
3. gh
4. jq
5. k3d
6. kind
7. kubectl
8. k9s
9. kail
10. opa
11. terraform
...

如果你常常需要撰寫文件去分享安裝各種文件的需求，也許可以考慮使用看看此工具來簡化流程

