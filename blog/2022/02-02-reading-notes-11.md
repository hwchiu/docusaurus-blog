---
title: '閱讀筆記: 「如何使用 jq 讓你的 kubectl更為強大」'
authors: hwchiu
tags:
  - Reading
  - Kubernetes
description: 「如何使用 jq 讓你的 kubectl更為強大」
date: 2022-02-02 18:05:07
---

標題: 「如何使用 jq 讓你的 kubectl更為強大」
類別: tools
連結: https://medium.com/geekculture/my-jq-cheatsheet-34054df5b650

作者認為 kubectl 本身提供的 label-selector, go-templates, jsonpath, custom-colume 等各式各樣功能使這個工具變得強大，能夠找到符合自己需求的各式各樣資源
然而上述的這些指令使用起來還是會覺得卡卡的，並沒有辦法滿足所有條件，而且不同選項的語法也完全不同，所以對於操作者來說其實不太便利。

順利的是 kubectl 可以透過 -o json 以 json 的格式輸出結果，這時候就可以搭配 jq 這個指令來使用，相對於前述的各種用法，作者更加推薦使用 jq 來處理，因為 jq 是一個更為廣泛的工具，
除了 kubectl 可以搭配外，很多時候都可以搭配 jq 來處理其他情況，因此掌握 jq 的語法實務上會有更多用途。

文章幾乎都是以 kubectl 為範例來介紹 jq 內的各種用法，除了基本的 read/write/filter 之外，還有各式各樣 jq 的內建函式，
有興趣的都可以使用看看

