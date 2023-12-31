---
title: Python -- split()
date: '2013-04-22 00:47'
comments: true
tags:
  - Python
---

在python中也可以利用split的方式把字串按照特定的字元切開

	str.split([sep[, maxsplit]])

sep代表用來切割的符號，而maxsplit代表最多切多少個字串。

值得注意的是，sep可以吃多個字元，但是必須是連續字元，如下舉例

``` python
	a = 'a,b,!c,!d e f :g'
	a.split(',')
	a.split(',!')
	a.split(',! :')

```



輸出
	['a', 'b', '!c', '!d e f :g']
	['a,b', 'c', 'd e f :g']
	['a,b,!c,!d e f :g']

第一組以','作為分割符號，結果很明顯

第二組以',!'作為連續分割符號，所以a,b就切出來，c再切出來

第三組以',! :'作為連續分割符號，但是因為字串中沒有符合的，所以就根本沒有切到

但是這樣的功能，對於我上列的字串，假如我想要以',! :'這四個作為分割符號，希望可以切割成

'a','b','c','d','e','f','g'

這種格式，那要如何辦到?

- 把所有的符號都替換成單一符號
	a.replace('!',',').replace(' ',',').replace(':',',')
- 用re提供的split來達成
	import re
	re.split(',|!| |:',a)

這兩種方法都可以達成一樣的效果，個人覺得第二種比較直覺，也比較容易一眼就懂

以上述範例來看，使用這兩種方法後，會得到如下

['a', 'b', '', 'c', '', 'd', 'e', 'f', '', 'g']
假設該字串存在變數needRemoveEmpty中

可以發現會有empty的值存在，這時候如果要去除這些值可以採用這些做法

- 採用remove的方式，逐一把empty給清除
``` python
	while True:
	  try:
	    needRemoveEmpty.remove("")
	  except ValueError:
	    break
```
- 採用重新創立的方式
``` python
	 for entry in needRemoveEmpty:
     	if entry:
            newList.append(str(entry))
```
- 採用filter的方式
``` python
	newList=filter(lambda x: len(x)>0, needRemoveEmpty)
```
