---
title: Dockerfile 內 Shell/Exec 的用法差異
authors: hwchiu
tags:
  - Docker
  - Linux
description: Docker 基本介紹文，不知道常寫 Dockerfile 的讀者能不能分清楚 Dockerfile 內 Shell 與 Exec 兩種格式的差異
date: 2021-12-21 17:18:28
---

連結: https://emmer.dev/blog/docker-shell-vs.-exec-form/

Docker 基本介紹文，不知道常寫 Dockerfile 的讀者能不能分清楚 Dockerfile 內 Shell 與 Exec 兩種格式的差異
RUN, CMD, ENTRYPOINT 等指令都同時支援這兩種格式
Shell 格式就是 RUN command arg1 arg2 arg3 這種直接描述的格式，而 Exec 則是用 [] 包起來，每個參數單獨敘述，譬如
RUN ["command", "arg1", "arg2", "arg3"] 等。
本篇文章推薦 RUN 指令採取 Shell 格式而 CMD/ENTRYPOINT 都應該採用 EXEC 格式。
如果自己不清楚差異以及沒有想法為什麼平常自己這麽寫的話可以參考全文


