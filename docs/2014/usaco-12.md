---
title: USACO 1.2
date: '2014-08-13 09:10'
tags:
  - coding
---
Brief
-----
本章節的題目也是沒有什麼特定演算法，有些可以使用DP來處理，有些則是根據題目敘述來解即可



[Milking Cows](http://cerberus.delos.com:790/usacoprob2?a=Gss1EzStiBH&S=milk2)
--------------
此提使用DP來解，思考過程如下
- 將所有farmers的工作時間依據其起點由早到晚排序

``` c++
      for(int i=0;i<n;i++){
          farmers* f = new farmers();
          fin >> f->low >> f->high;
          data.push_back(f);
      }
      sort(data.begin(),data.end(),compare);
```
- 掃過所有farmers的工作時間，判斷當前的farmers是否有跟上一個farmers的時間有重疊，如果有重疊，就更新當前紀錄的工作時間，如果沒有重疊，就代表此時需要閒置，因此就要更新當前閒置時間，每次更新的同時，也順便紀錄最大值

``` c++
      currLow = data[0]->low;
      currHigh= data[0]->high;
      maxMilked = currHigh - currLow;
      maxNotMilked = 0;
      for(int i=1;i<data.size();++i){
          if(data[i]->low > currHigh){ //沒有重疊
              maxNotMilked = max(maxNotMilked,data[i]->low - currHigh);
              currLow = data[i]->low;
              currHigh = data[i]->high;
              maxMilked = max(maxMilked,currHigh-currLow);
          }
          else if (data[i]->high > currHigh){ //有重疊
              currHigh = data[i]->high;
              maxMilked = max(maxMilked,(currHigh - currLow));
          }
      }

```
- 全部掃過一遍及可找到答案

[Transformations](http://cerberus.delos.com:790/usacoprob2?a=Gss1EzStiBH&S=transform)
------------------
- 此題不難，只要想好如何將一個矩陣給順時針旋轉90即可

``` cpp
void turn90(char* data,int n){
    char *tmp = new char[n*n];
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            tmp[j*n+(n-i-1)] =  data[i*n + j];
        }
    }
    memcpy(data,tmp,n*n);
    delete tmp;
    return ;
}
```
- 根據題目所規定的順序，每種都去嘗試，若符合就印出答案，不合就繼續嘗試下一種即可。

``` cpp
    //#1
    turn90(src,n);
    if( 0 == memcmp(src,dst,n*n)){
        fout <<"1"<<endl;
        return 0;
    }
    //#2
    turn90(src,n);
    if( 0 == memcmp(src,dst,n*n)){
        fout <<"2"<<endl;
        return 0;
    }
    //#3
    turn90(src,n);
    if( 0 == memcmp(src,dst,n*n)){
        fout <<"3"<<endl;
        return 0;
    }
    //#4
    turn90(src,n);
    reflect(src,n);
    if( 0 == memcmp(src,dst,n*n)){
        fout <<"4"<<endl;
        return 0;
    }
    //#5
    for(int i=0;i<3;i++){
        turn90(src,n);
        if( 0 == memcmp(src,dst,n*n)){
            fout <<5<<endl;
            return 0;
        }
    }
    //#6
    turn90(src,n);
    reflect(src,n);
    if( 0 == memcmp(src,dst,n*n)){
        fout <<"6"<<endl;
        return 0;
    }
    //#7
    fout<<"7"<<endl;

```
[Name That Number](http://cerberus.delos.com:790/usacoprob2?a=Gss1EzStiBH&S=namenum)
------------------
- 一開始先讀取`dict.txt`，只將長度符合題目要求的單字給存起來

``` cpp
while(din >> tmp){
  if(tmp.size() == input.size())
  data.push_back(tmp);
}
```
- 接下來依據位數來一個一個檢查。先針對單字內所有的第一位進行檢查是否符合規則，若不合就將其從字典內刪除，以此往下即可找到所有符合的答案
``` cpp
    for(int i=0;i<input.size();++i){
          for(list<string>::iterator itr = data.begin(); itr != data.end() ; ){
              if(check(input[i]-'0',(*itr)[i])){
                  ++itr;
              }
              else{
                  itr = data.erase(itr);
              }

          }
      }
```

[Palindromic Squares](http://cerberus.delos.com:790/usacoprob2?a=Gss1EzStiBH&S=palsquare)
---------------------
- 對於1~300之間的每個數字都去進行驗證
- 首先將先該數字給平方，接者去判斷是否迴文，若是就印出答案即可

```cpp
 void PalindromesSquare(int n,int base){
      string baseString;
      string squareString;
      int tmp = n;
      n = n *n;
      while(n){ //計算平方後的字串
          squareString.push_back(getBaseChar(n%base));
          n/=base;
      }
      while(tmp){ //計算當前的字串
          baseString.push_back(getBaseChar(tmp%base));
          tmp/=base;
      }
      if ( checkPalin(squareString) ){
          n = baseString.size();
          for(int i=0;i<baseString.size();++i)
              fout<<baseString[n-i-1];
          fout<<" "<<squareString<<endl;
      }

  }

```

[Dual Palindromes](http://cerberus.delos.com:790/usacoprob2?a=Gss1EzStiBH&S=dualpal)
-------------------
- 這題跟 *Dual Palindromes*非常類似，先根據題目的需求對每個數字去做處理
- 每次處理都以2~10進位去試試看有沒有迴文，若能夠產生迴文的base數量超過兩個就直接印出結果，直接測是下一個數字即可

``` cpp
  int main() {
      ifstream fin ("dualpal.in");
      int limit;
      int start;
      int count;
      fin >> limit >> start;
      while(limit){
          ++start;
          count =0;
          for(int i=2;i<=10;++i){
              if( PalindromesSquare(start,i)){
                  ++count;
                  if( 2 == count){
                      fout<<start<<endl;
                      --limit;
                      break;
                  }
              }
          }
      }
      return 0;
  }

```
