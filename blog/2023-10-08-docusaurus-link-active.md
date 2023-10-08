---
title: Docusaurus 使用 blog mode 後連結一直反白的問題
authors: hwchiu
tags: [docusaurus]
---

根據文件將 ladning page 移除並且使用 blog 做為首頁後，發現上方的連結永遠都會顯示反白，仔細檢查後發現連結被加上一個 `navbar__link--active` 的屬性。
仔細研究後發現官方有相關 [Issue](https://github.com/facebook/docusaurus/discussions/5810)，根據 issue 所述針對 items 內補上 `activeBaseRegex: '^/$',` 即可。

最後呈現
```
	  {
	    to: '/', 
	    label: '短篇筆記',
	    position: 'left',
	    activeBaseRegex: '^/$',
	    },
```
