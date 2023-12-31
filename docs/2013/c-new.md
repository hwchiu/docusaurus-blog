---
title: 'C++ 語言中的 new'
date: '2013-06-30 16:32'
comments: true
tags:
  - C
---
這次想要研究一下C++中new這個關鍵字，在c++中new總共扮演了三種角色

- new operator
- operator new
- placement new


## new operator ##
平常最熟悉的new 就是屬於這種角色
```
string* myStr = new string("haha");
int* myInt = new int(123);
```
這種new就是所謂的new operator,是C++語言內建的，類似sizeof
沒有辦法overriding或是改變其行為。
每次呼叫new operator實際上會有三件事情在背後運作。

1. Allocate Memory for Object
2. Call Constructor to init that memory
3. return a pointer which point to this Object

所以今天呼叫`string* myStr = new string("aa155495");`會做下列事情
```
1. void* memory = operator new (sizeof(string));
2. call string::string() on memory;
3. string* ptr = static_cast<string*>(memory);
4. return ptr
```

第一步就是要先去memory中要空間，這部分就是透過 ***operator new*** 來完成。
第二部就是在要到的空間上，呼叫對應物件的建構式，這部分就是透過 ***placement new*** 來完成。
接者就是取得一個該型態的指標，並且回傳。

## operator new ##
不同於 ***new operator*** ,operator new 是一個運算符號，就類似`+-*/[]<>`這種，所以可以overridding.

當呼叫operator new時，會嘗試從heap中去取得對應大小的空間，如果成功則返回，否則會去呼叫new_handler來處理
並且繼續重覆該事情直到得到exception為止。

所以有operator new 呼叫完畢只會有兩種情況
- 申請空間成功
- 截取到bad_alloc exception

如果要overridding 的話，可以採下列方式
```
class A
{
	A();
	~A();
  void* operator new(size_t size){
  	cout<<"hello";
    return ::operator new(size);
  }
};
```
這邊我們重載operator new，讓他會先輸出hello，之後就呼叫最原本的operator new來幫忙操作。
此外，也有對應的***operator delete***與之呼應。

## placement new ##
第三個new是用來定位用的，在特定的位置上去呼叫特定物件的建構式
```
int main()
{
	void* S = operator new(sizeof(A));
	A* p = (A*)s;
	A* ptr = new(p) A(1234);
)
```
這邊先透過operator new來取得一塊空地，然後取得一個該房子的控制權(指標)
然後要在這塊空地上蓋房屋，因此就在new(p) 這個空地上，蓋上了 A這個房屋，然後以1234去呼叫建構式。
蓋完房子後會在回傳一個指標指向該地區。
