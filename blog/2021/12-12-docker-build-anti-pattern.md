---
title: 建置 Container Image 中的 Anti-Patterns
authors: hwchiu
tags:
  - Container
  - Docker
description: 建置 Container Image 的錯誤方式。
date: 2021-12-12 00:25:23
---

ref: https://jpetazzo.github.io/2021/11/30/docker-build-container-images-antipatterns/

本篇文章分享的是建置 Container 中的 Anti-Patterns，不講哪些好反而探討哪些不好。

文內列舉了不同的主題，包含
1. Big images
    - All-in-one mega images
    - Data sets
2. Small images
3. Rebuilding common bases
4. Building from the root of a giant monorepo
5. Not using BuildKit
6. Requiring rebuilds for every single change
7. Using custom scripts instead of existing tools
8. Forcing things to run in containers
9. Using overly complex tools
10. Conflicting names for scripts and images

以下針對內文幾個部分摘錄一下為什麼作者認為是個不好的模式

# Small Images
Image 小本身不是什麼問題，但是有時候過度追求容量會使得一些常用有幫助的工具沒有辦法於容器內執行，這可能會導致未來要除錯時要花費更多的時間去處理，可能要研究如何重新安裝該工具等。

作者有強調這個議題是非常看環境與需求的，有些情況可能團隊根本不需要進入到容器內去執行 shell 來處理，有些可能會需要到容器內執行 ps, netstat, ss 等指令來觀察不同狀態。
作者推薦可以使用 gcr.io/distroless/static-debian11 這個 image 做為基礎然後將其之間的 busybox 給複製環境中，至少確保有基本工具可以使用

# Not using BuildKit
BuildKit 是 docker build 的新版建置方式，相對於舊版方式來說 Buildkit 提供了更多功能，譬如平行建置，跨平台建置甚至效能上也會比過往的更好。
為了讓舊有使用者可以無痛轉移，所以 BuildKit 完全相容既有的 Dockerfile 的語法，所以切換方面是完全無腦的。
目前新版的 Docker Desktop 基本上已經預設採用 BuildKit 來進行建置，不過某些系統譬如 Linux 的環境下，還是需要透過設定環境變數來啟用這個功能，譬如 DOCKER_BUILDKIT=1 docker build . 等方式來建置。

此外透過 BuildKit 建置的產生結果跟過往不同，所以只要看建置結果的輸出就可以判別自己是否使用 BuildKit。

剩下的8個項目就留給有興趣的讀者自行閱讀


