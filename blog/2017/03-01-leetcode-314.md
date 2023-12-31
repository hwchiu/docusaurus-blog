---
title: 'LeetCode - 314'
date: '2017-03-01 05:04'
authors: hwchiu
tags:
  - coding
---

314 Binary Tree Vertical Order Traversal
----------------------------------------
原題目是付費題目，有興趣看到完整的請自行付費觀賞，在此就不提供超連結了。

Introduction
------------
- 給定一個 binary tree，將此 tree 以 vertical 的方式走過，
- 輸出時，從最左邊開始輸出
- 相同 colume 的算同一個 group，若屬於同 row 且同 colume，則從左邊開始算起

Example
-------
```
        0
   / \
  1   4
 / \ / \
2   35  6
           / \
          7   8
```
輸出為
[2]
[1]
[0,3,5]
[4,7]
[6]
[8]

Solution
--------
這題不太困難，基本上可以採用 BFS 來搜尋整個 tree，然後加入一個 index 的欄位，root 的 index 是 0，往左遞減，往右遞增，在 BFS 的過程中，就把相同 index 都收集起來，最後再一口氣輸出即可。

pseudo code 如下
```cpp
queue.push(pair(0, root));
while (!queue.empty()) {
      index = queue.front().first;
      node = queue.front().second;

      ans[index].push(node->val)

      if (node->left)
          queue.push(pair(index-1, node->left);
      if (node->right)
          queue.push(pair(index+1, node->right);
}

return ans;
```
