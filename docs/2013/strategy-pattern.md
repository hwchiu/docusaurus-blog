---
title: Strategy Pattern
date: '2013-11-29 13:15'
tags:
  - DesignPattern
description: Strategy Pattern 定義一系列的演算法，ㄧ個個封裝起來，根據使用要求不同而採用不同的演算法。最基本且直觀的方式就是採用程式語言本身提供的多型來完成。一個簡單的範例就是假設有一個壓縮軟體，其提供各種不同的壓縮演算法，在這個範例中，壓縮程式本身只會有一個對應的壓縮函式呼叫，我們將不同的演算法都採取不同的實現，這樣可以避免在壓縮的函式中，要大量的透過 if/else 的方式來判斷要怎麼執行

---

舉個例子，今天我寫了一個壓縮軟體，這個軟體會針對不同的輸入來採用不同的壓縮方法處理。

最基本的架構就是

![test.png](http://user-image.logdown.io/user/415/blog/415/post/164808/EvZSJm01SUaRoF83qu9z_test.png)

然後該 compress function 可能長這樣


``` java
public Object compress(Object input){

  //Part 1
  if(input.type == TYPE1){
			// do something
	}
    else if (input.type == TYPE2){
			// do something
	}
    else if (input.type == TYPE3){
    	// do something
    }
  //Part 2
  if(input.getEncoding() == TYPEA){
    	// do something
  }
  else if(input.getEncoding() ==TYPEB){
    	// do something
  }
  else if(input.getEncoding() ==TYPEC || input.getEncoding() ==TYPED){
     // do something
  }
}
```

這種程式架構再維護上過於麻煩，會有下列問題

- 程式碼冗長
- 演算法邏輯部分難懂
- 維護困難

如果今天選項夠多(part更多)的話，整個程式會變得很難處理，每次要增加一個新的算法，就要到很多地方去增加對應的code，
在處理上容易出錯且維護也不易。

使用 **Stragegy pattern**的話，架構如下

![test.png](http://user-image.logdown.io/user/415/blog/415/post/164808/HKjsXtjmRiOexmpHHndH_test.png)


設計ㄧ個介面Algorithm, 然後每個算法都實現這個介面，自己去完成自己的算法邏輯

當程式要處理壓縮的時候，就根據輸入物件來產生與之對應的演算法物件，然後去處理。

這樣每個算法都獨立來看，邏輯清楚明瞭，而且要新增加ㄧ個算法的話，只要再寫一個新的物件實現自共同的介面即可。


``` java
public class CompressProgram{
	public void process(){
  	//do something
		Algorithm algorithm = getAlgorithmByType(input);
    	Compressor compressor = new COmpressor();
		Object result = compressor.doCompress(input,algorithm);
	}
	private Algorithm getAlgorithmByType(Object input){
   	 if(input.type ==TYPEA){
    	  return new AlgorithmA();
    	}
      else if(input.type ==TYPEB){
        return new AlgorithmB();
      }
      else if(input.type ==TYPEC){
        return new AlgorithmC();
      }
	}
}


public class Compressor{
	public Object doCompress(Object input,Algorithm algorithm){
  	//do something
  	return algorithm.compress(input);
	}
}

public abstrace class Algorithm{
	abstract public Object compress(Object input);
}

public class AlgorithmA extends Algorithm{
	public Object compress(Object input){
		// do something for TypeA
	}
}

public class AlgorithmB extends Algorithm{
	public Object compress(Object input){
		// do something for TypeB
	}
}

public class AlgorithmC extends Algorithm{
	public Object compress(Object input){
		// do something for TypeC
	}
}

```

