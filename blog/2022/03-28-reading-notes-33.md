---
title: '閱讀筆記: 「如何於 Docker 環境中運行 rootless 模式」'
authors: hwchiu
tags:
  - Reading
  - Security
description: 「如何於 Docker 環境中運行 rootless 模式」
date: 2022-03-28 00:05:08
---

標題: 「如何於 Docker 環境中運行 rootless 模式」
類別: container
連結: https://thenewstack.io/how-to-run-docker-in-rootless-mode/

雖然可以使用非 root 的方式去安裝 Docker 服務，但是 Docker 本身服務中還有其他各種元件需要透過 root 身份去運行，譬如 dockerd, containerd, runc 等元件，
而本篇文章則是探討要如何以真正 rootless 的方式來運行一個 docker container 。

使用 rootless container 有一些要注意的事情，譬如 port number 沒有辦法使用 1024 以下，所以如果你的服務有需要被外界存取時要使用大於 1024 的 port number。
此外 AppArmor, host network mode 這些都不支援，因此使用上會有一些情境要注意。

安裝其實滿簡單的， Docker 官網有提供 rootless 的安裝檔案，安裝後需要針對一個使用者 ID 進行處理，這個處理主要是因為要將 container 內的 root 使用者給轉換到系統上的非 root 使用者，所以才會有相關的 userID 要設定。
當然如果真的要完全追求 rootless 的容器解決方案可以考慮使用 Podman 來使用，其本身的設定就是針對 rootless 去開發的，使用上會相對於 docker 來說更為簡單。

