---
title: 'ruamel.yaml 小筆記'
keywords: [python, yaml]
tags:
  - Python
description: 本篇文章記錄一下使用 Python 去操作 YAML 遇到的小問題與解法
date: 2023-06-22 15:09:15

---


使用 Python 管理最簡易的方式就是透過 pyyaml 這個套件來處理，其安裝也非常簡單
```bash=
pip3 install pyyaml
```

安裝完畢後就可以透過下列一個簡單的範例來讀取檔案並且重新修改回去
```python
import yaml

with open('data1.yaml', 'r') as file:
    data = yaml.safe_load(file)

with open('output_file.yaml', 'w') as file:
    yaml.dump(data, file)
```


假設今天 `data1.yaml` 的內容如下
```yaml=
# resources
resources:
  requests:
    cpu: "50m"
    memory: "256Mi"
  limits:
    cpu: "2000m"
    memory: "4096Mi"

# config
config:
  enabled: false
  internal:
    - name: test
      data:
        port: 8080
        size: 123
      hosts:
        - a.b.com
        - c.b.com
```    

執行上述的範例就會讀取該檔案並且重新輸出到一個名為 output_file.yaml 的檔案，這時後去檢視其內容會得到下列範例
```yaml=
config:
  enabled: false
  internal:
  - data:
      port: 8080
      size: 123
    hosts:
    - a.b.com
    - c.b.com
    name: test
resources:
  limits:
    cpu: 2000m
    memory: 4096Mi
  requests:
    cpu: 50m
    memory: 256Mi
```

仔細觀察這個輸出，可以觀察到其與最原始的檔案有諸多差異
1. 註解不見了
2. 內容順序調動
3. list 底下的 indent 不一致，兩邊的 config.internal.data 順序不同
4. 字串的 quota 都被移除，如 "2000m"

如果今天的需求是動態產生全新 YAML 檔案，那上述這些問題就不復存在，但是當今天的需求是修改已經存在的 YAML 同時又希望盡量可能保持原樣，那原生的 Pyyaml 並沒有非常好的解法去處理這些問題。

譬如註解的問題已經存在很久目前也沒有正式解法
- https://github.com/yaml/pyyaml/issues/90

因此如果有上述需求的寫法，會更推薦改用 [ruamel.yaml
](https://yaml.readthedocs.io/en/latest/) 來進行處理

安裝部分也非常簡單，可以透過 pip3 安裝
```bash=
pip3 install ruamel.yaml
```

以下是一個完全非常簡易的讀取並且輸出範例
```python=

from ruamel.yaml import YAML

yaml = YAML()
yaml.indent(mapping=2, sequence=4, offset=2)
yaml.preserve_quotes = True

with open('data1.yaml', 'r') as file:
    data = yaml.load(file)

with open('output_file2.yaml', 'w') as file:
    yaml.dump(data, file)
```

該範例中會先初始化 YAML 的物件，並且設定幾個屬性
1. 保留字串中的 quotes
2. 設定 indent 相關參數
3. 註解預設會被保留

因此執行上述範例得到的 output_file2.yaml 內容如下
```yaml=
# resources
resources:
  requests:
    cpu: "50m"
    memory: "256Mi"
  limits:
    cpu: "2000m"
    memory: "4096Mi"

# config
config:
  enabled: false
  internal:
    - name: test
      data:
        port: 8080
        size: 123
      hosts:
        - a.b.com
        - c.b.com
```

可以觀察到此範例與原始內容完全一致，沒有任何字串或是任何欄位被自動處理，因此如果對於修改 YAML 又同時不希望改動既有檔案內容格式的都推薦改用 ruamel.yaml 來處理


