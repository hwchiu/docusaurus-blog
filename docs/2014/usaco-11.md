---
title: USACO 1.1
date: '2014-07-23 03:26'
tags:
  - coding
---
Brief
-----
本章節的題目比較沒有什麼特定演算法，根據題目敘述去解即可



[Your Ride Is Here](http://cerberus.delos.com:790/usacoprob2?a=23kbfvJXJab&S=ride)
-----------------
將兩個input都分別轉換成數字，最後再用mod去比較看看是否相等即可

[Greedy Gift Givers](http://cerberus.delos.com:790/usacoprob2?a=23kbfvJXJab&S=gift1)
------------------
將所有人的金錢按照規則分配下去，即可得到答案

[Friday the Thirteenth](http://cerberus.delos.com:790/usacoprob2?a=23kbfvJXJab&S=friday)
---------------------
題目規定輸出的時候，必須要按照`"Saturday, Sunday, Monday, Tuesday, ..., Friday,"`這邊是有涵義的，
因為 1900/01/13 第一個十三號就是星期六，以此為條件在計算上會更方便。

使用一個陣列，先記住每個月份的天數
``` c
int days[12]={31,28,31,30,31,30,31,31,30,31,30,31};
```
接者根據題目要求的年數來迴圈計算，每次計算時要先判斷該年是不是閏年
``` c
if( ( 0 == i%4 && 0 !=i%100) || (i+1900)%1000==0)
		leap = 1;
```
接下來則是計算每個月份的天數，使用day這個變數紀錄十三號是星期幾，使用ans這個array來紀錄每個星期出現多少次十三號，如果是閏年的二月份，則記得要再多加一天，
``` c
for(int j=0; j<12;++j){
	ans[day]++;
	addDays(day,days[j]);
	if(j==1 && leap)
		addDays(day,1);
	}
}
```

最後就按照順序把結果輸出即可



[Broken Necklace](http://cerberus.delos.com:790/usacoprob2?a=23kbfvJXJab&S=beads)
---------------
這題可以使用暴力法，每個點都往左右兩邊去試試看，此方法就很直覺，不再多說。
若為了效率，我們可以採用DP的方法來計算答案，
首先，為了計算方便，先將input給複製一份並串起來
我們的DP的概念是紀錄第`I`點能夠往左與往右的最大可能性，紅珠跟藍珠要分開來計算
左邊部分，我們計算不包含I以前的往左最大值
``` c
r_left[i] =  r_left[i-1]+1 if input[i-1] == 'red' or input[i-1] == 'white'
             0             if input[i-1] == 'blue'
b_left[i] =  b_left[i-1]+1 if input[i-1] == 'blue' or input[i-1] == 'white'
             0             if input[i-1] == 'red'
```
右邊部分則是計算包含I後往右的最大值。
``` c
r_right[i] = r_right[i+1]+1 if input[i] =='red' or input[i] =='white'
             0              if input[i] =='blue'
b_right[i] = b_right[i+1]+1 if input[i] =='blue' or input[i] =='white'
             0              if input[i] =='red'
```
當全部都計算完畢後，就取最大值，每個點的最大值就是左邊最大加上右邊最大。
``` c
for(int i=0;i<num*2;i++){
    max_ans = max(max_ans,max(r_left[i],b_left[i])+max(r_right[i],b_right[i]));
}

```
