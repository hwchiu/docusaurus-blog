---
title: Bash output 討論 >file 2>&1 與 2>&1 > file 的差異
keywords: [Bash, Redirect, STDERR]
authors: hwchiu
tags:
  - Linux
  - DevOps
description: 簡述一下 Bash 中檔案導入的一些概念
---

本篇文章用來記錄 Bash 常見幾個關於輸出導向的幾種用法，包含
1. "> file"
2. ">file 2>&1 v.s 2>&1 >file"
3. "| (pipe)"


# 基本概念

對於系統操作者來說，STDIN, STDOUT 以及 STDERR 這三個專有名詞想必都不陌生，這些對於普通的程序來說都對應到其內部的三個 file descriptor，分別是 0,1,2

實務上於程序內去對本地開啟檔案等操作，都會產生新的 file descriptor，沒有意外的話就會是以 3,4,5....一路遞增的方式來處理。
而內建的 0,1,2 預設情況下並非指向任何檔案，反而是 /dev/tty，這意味你的應用程式可以從 tty 透過 stdin 將資料送給程序，反之其可以透過 stdout, STDERR 將輸出按照不同類型透過 /dev/tty 給輸出。

這邊先行準備一個腳本，該腳本內容如下
```bash=
#!/bin/bash
echo "Hello stdout"
echo "Hello stderr" 1>&2
```

其會將 "Hello stdout" 輸出到 STDOUT，並且將 "Hello stderr" 給輸出到 STDERR
接下來的範例都會以該檔案為示範使用
執行範例如下
```bash=
bash-3.2$ bash test.sh
Hello stdout
Hello stderr
```

因此以預設的情況下，關係圖如下
![image](./assets/rJ_vdHwLa.png)



# 探討

## Case 1

所有學習 Linux 指令操作的一定都會學習到若要將檔案輸出給導向檔案，就可以透過 ">" 來指定檔案名稱，譬如 "pwd > my_test"，實際上就是執行 pwd 這個指令，並且將 "STDOUT" 的內容給導向 "my_test"。

前面有提到 STDOUT 與 STDERR 分別對應的是數字是 1 與 2，因此使用時若加上數字 "2> my_test"，代表的就是將 STDERR 的內容導向檔案


接下來 test.sh 來練習看看
```bash=
bash-3.2$ bash test.sh > haha
Hello stderr
bash-3.2$ cat haha
Hello stdout
```

上述範例將 "STDOUT" 給導向 "haha" 這個檔案，所以可以看到執行完畢後， "Hello stderr" 的部分依然透過 "stderr" 輸出到 /dev/tty ，而 "Hello stdout" 則被寫到檔案內。
整個概念圖如下

![image](./assets/BJCPOBD8p.png)


此時若嘗試使用 "2>" 的格式的話，結果剛好反過來

```bash=
bash-3.2$ bash test.sh 2> haha2
Hello stdout
bash-3.2$ cat haha2
Hello stderr
```

![image](./assets/r1V_dBDIT.png)


檔案的輸出本身是可以一起使用的，譬如下列範例

```bash=
bash-3.2$ bash test.sh > haha 2> haha2
bash-3.2$ cat haha
Hello stdout
bash-3.2$ cat haha2
Hello stderr
```

![image](./assets/ryFudBDLp.png)

除了各別輸出到檔案之外，也可以參照別的 file descriptor 的目標
舉例來說，可以透過 "2>&1" 讓 STDERR 的輸出送往 stdout 的輸出
由於 "2>1" 的意思是將 "STDERR 給輸出到檔案 1"，因此這邊要特別加上 "&1"
代表是參照 "STDOUT"，而非檔案

整個概念如下，但是由於當前輸出都是 `/dev/tty`，因此使用上可能沒有特別感覺
![image](./assets/SkFPYBDUT.png)

```bash=
bash-3.2$ bash test.sh 1>&2
Hello stdout
Hello stderr
```

# Case2

對於 STDOUT, STDERR 有基本理解後，接下來一個很常見的需求就是將 STDOUT 與 STDERR 寫入同一個檔案，其邏輯就是
1. 將 stdout 與 stderr 的輸出集中
2. 將集中後的結果輸出到檔案中

因此常見的解法就是 "> file 2>&1" 以及不正確的用法 "2>&1 > file"
兩者看起來非常相似，但是背後的運作邏輯不同，接下來就來看看為什麼前者正確而後者失敗

首先以前者 "> file 2>&1" 來看，這個邏輯可以拆成兩個部分
1. > file => 將 STDOUT 的輸出寫到檔案
2. 2>&1 => 將 STDERR 的輸出寫到 STDOUT 的輸入

流程如下
![image](./assets/BkrYbvwU6.png)
所以最終就可以將 STDOUT 與 STDERR 一起寫入到檔案中

那如果改成下列流程 "2 >&1 > file"，則邏輯可以拆分成
1. 2>&1 => 將 STDERR 的輸出寫到 STDOUT 的輸出點
2. > file => 將 STDOUT 的輸出寫道 檔案

整個流程如下，因此最後只有 STDOUT 的內容被寫到檔案中
![image](./assets/ByjYbvDU6.png)

另外一個比較簡單的寫法 "&> file" 則可以達到一樣的效果，將 STDOUT 與 STDERR 一起寫入到檔案中

```bash=
bash-3.2$ bash test.sh &> qq
bash-3.2$ cat qq
Hello stdout
Hello stderr
```

# Case3

使用指令時非常容易搭配 |(pipe) 的概念將指令給串連起來，而 | 的基本概念就是將 "當前指令的 STDOUT" 給導向下一個指令的 "STDIN"，如下列流程

![image](./assets/Hy0qsKOUT.png)


以下範例就是單純將 STDOUT 給導向 grep 指令，然而 STDERR 還是輸出到 /dev/tty
```bash=
bash-3.2$ bash test.sh | grep haha
Hello stderr
```

如果需要將 STDERR 的內容也透過 pipe 轉送的話，其概念與寫入檔案類似，需要
1. 將 STDERR 送往 STDOUT
2. 將下個指令的 STDIN 與當前指令的 STDOUT 串起來

```bash=
bash-3.2$ bash test.sh 2>&1 | grep xxx
bash-3.2$ bash test.sh 2>&1 | grep err
Hello stderr
```

![image](./assets/H1D8r9uLp.png)

# Summary

本篇文章稍微記錄一下 bash 中常見的導向功能，只要熟悉原理後就不需要去死背要如何將 STDERR 與 STDOUT 給導向同一個檔案的用法，同時對於各種需求都比較有辦法仔細思考達成的方式。
