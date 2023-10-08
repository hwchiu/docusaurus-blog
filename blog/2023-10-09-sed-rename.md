---
title: 隨手筆記 Sed 與 Rename 的使用
authors: hwchiu
tags:
  - Linux
---

刪除特定一行
```
sed '/^keywords:/d' input > output
```

刪除符合字串後的所有行數
```
sed '/^keywords/,$d' input > output
```

假設環境中有大量檔案需要改名稱，透過 rename 這個工具可以快速達成
譬如以下範例會先用正規表達式找尋所有符合的檔案名稱，接者將所有 read-notes 都改名為 reading-notes
```
rename 's/read-notes/reading-notes/' *read-notes-*
```
