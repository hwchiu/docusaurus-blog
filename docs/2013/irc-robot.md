---
title: Python-Robot(1) IRC
date: '2013-06-04 16:00'
comments: true
tags:
  - Python
---

要撰寫IRC 機器人其實不難，網路上到處都有範例，其實就是簡單的NP，字串來回處理而以。

1. Connect To IRC SERVER
2. Send User Infomation
3. Join a channel
4. Read data from irc channel and do response
5. Send something to irc channel
6. looping (4~5)



第一步:
我們使用TCP建立連線

``` python
self.sock = socket.socket( socket.AF_INET, socket.SOCK_STREAM )
self.sock.connect( (self.config['HOST'],int(self.config['PORT'])))
```

HOST:"HOST":"irc.freenode.org",
PORT:6667


第二步:
發送機器人的資訊給IRC 頻道
``` python

 self.sock.send ( 'NICK '+self.config['NICK']+'\r\n' )
 self.sock.send ( 'USER '+self.config['IDENT']+' '+self.config['HOST']+' bla :'+self.config['REALNAME']+'\r\n')

```

第三步:
加入某個頻道，做為該頻道的機器人

``` python

self.sock.send ( 'JOIN '+self.config['CHANNELINIT']+'\r\n')

```

第四步+第五步:

``` python
while True:
	data = self.sock.recv(4096)
	if(data.find('PING'))!=-1:  ##response to server avoid be kicked
		self.sock.send('PONG ' + data.split()[1]+'\r\n')
	elif(data.find('PRIVMSG'))!=-1:
		for module in self.modules:
			 response = module.run(data)
		  	 self.sock.send(" PRIVMSG "+channel + " :"+response+"\r\n")
	.....

```

接下來就是一個無窮的從channel讀取資訊然後處理後再送回

這邊要注意的是IRC會定期送一個PING的資訊過來，必須要回一個PONG回去，否則該機器人不久後就會被踢下線

得到的data格式大概是如這種

###:hwchiu!hwchiu@bsd4.cs.nctu.edu.tw PRIVMSG #hwchiu_test :hi

分別是使用者名稱、所在的機器位置、訊息類型、頻道(私人訊息的話就會是機器人本身)、以及說話內容

所以只要針對這些格式去處理，得到想要的資訊，就可以進行各種想要的功能了

這邊因為我有很多個功能module,所以每次收到訊息的時候，就把這些資料都送給所有的module

讓每個module自己去處理並且回應。
