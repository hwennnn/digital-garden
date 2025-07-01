---
title: 1315. Sum of Nodes with Even-Valued Grandparent
draft: false
tags: 
  - leetcode-medium
  - tree
  - depth-first-search
  - breadth-first-search
  - binary-tree
  - biweekly-contest-17
  - contest-question
date: 2020-12-28
---

[Problem Link](https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/)

## Description

---
<p>Given the <code>root</code> of a binary tree, return <em>the sum of values of nodes with an <strong>even-valued grandparent</strong></em>. If there are no nodes with an <strong>even-valued grandparent</strong>, return <code>0</code>.</p>

<p>A <strong>grandparent</strong> of a node is the parent of its parent if it exists.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/08/10/even1-tree.jpg" style="width: 504px; height: 302px;" />
<pre>
<strong>Input:</strong> root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
<strong>Output:</strong> 18
<strong>Explanation:</strong> The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/08/10/even2-tree.jpg" style="width: 64px; height: 65px;" />
<pre>
<strong>Input:</strong> root = [1]
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[1, 10<sup>4</sup>]</code>.</li>
	<li><code>1 &lt;= Node.val &lt;= 100</code></li>
</ul>


## Solution

---
### Python3
``` py title='sum-of-nodes-with-even-valued-grandparent'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def dfs(self, current, parent, grandparent):
        if not current: return 0
        res = 0
        if grandparent and grandparent.val % 2 == 0:
            res += current.val
        
        return res + self.dfs(current.left, current, parent) + self.dfs(current.right, current, parent)
        
    def sumEvenGrandparent(self, root: TreeNode) -> int:
        return self.dfs(root, None, None)
```

