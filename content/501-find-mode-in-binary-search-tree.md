---
title: 501. Find Mode in Binary Search Tree
draft: false
tags: 
  - leetcode-easy
  - tree
  - depth-first-search
  - binary-search-tree
  - binary-tree
  - weekly-contest-17
  - contest-question
date: 2023-11-01
---

[Problem Link](https://leetcode.com/problems/find-mode-in-binary-search-tree/)

## Description

---
<p>Given the <code>root</code> of a binary search tree (BST) with duplicates, return <em>all the <a href="https://en.wikipedia.org/wiki/Mode_(statistics)" target="_blank">mode(s)</a> (i.e., the most frequently occurred element) in it</em>.</p>

<p>If the tree has more than one mode, return them in <strong>any order</strong>.</p>

<p>Assume a BST is defined as follows:</p>

<ul>
	<li>The left subtree of a node contains only nodes with keys <strong>less than or equal to</strong> the node&#39;s key.</li>
	<li>The right subtree of a node contains only nodes with keys <strong>greater than or equal to</strong> the node&#39;s key.</li>
	<li>Both the left and right subtrees must also be binary search trees.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/11/mode-tree.jpg" style="width: 142px; height: 222px;" />
<pre>
<strong>Input:</strong> root = [1,null,2,2]
<strong>Output:</strong> [2]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> root = [0]
<strong>Output:</strong> [0]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[1, 10<sup>4</sup>]</code>.</li>
	<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).

## Solution

---
### Python3
``` py title='find-mode-in-binary-search-tree'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findMode(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        curr, count = None, 0
        maxCount = 0

        def dfs(node):
            nonlocal res, curr, count, maxCount
            if not node: return 

            dfs(node.left)
            if node.val == curr:
                count += 1
            else:
                curr, count = node.val, 1
            
            if count > maxCount:
                res = [curr]
                maxCount = count
            elif count == maxCount:
                res.append(curr)

            dfs(node.right)

        dfs(root)
        return res
        
```

