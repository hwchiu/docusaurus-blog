---
title: '[MacOS ]隨手筆記 Sed 與 Rename 的使用'
authors: hwchiu
tags:
  - Mac
  - System
  - Tool
---

刪除特定一行
```
sed '/^keywords:/d' input > output
```

刪除符合字串後的所有行數
```
sed '/^keywords/,$d' input > output
```

搭配 Find 達到大量修改所有檔案

統一刪除所有檔案
```
find . -type f -exec sed -i '' '/^authors:/d' {} +
```

Append 一行新的，換行要特別注意處理
```
find . -type f -exec sed -i '' '/^title/a\
authors: hwchiu\
' {} +
```

大量換名稱 **https://hackmd.io/_uploads** 變成 **./assets/**
```
find *.md -type f -exec sed -i '' -e 's/https:\/\/hackmd\.io\/_uploads\//\.\/assets\//g' {} +
```


假設環境中有大量檔案需要改名稱，透過 rename 這個工具可以快速達成
譬如以下範例會先用正規表達式找尋所有符合的檔案名稱，接者將所有 read-notes 都改名為 reading-notes
```
rename 's/read-notes/reading-notes/' *read-notes-*
```
