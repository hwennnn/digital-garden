---
title: 1305. All Elements in Two Binary Search Trees
draft: false
tags: 
  - leetcode-medium
  - tree
  - depth-first-search
  - binary-search-tree
  - sorting
  - binary-tree
  - weekly-contest-169
  - contest-question
date: 2022-01-26
---

[Problem Link](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/)

## Description

---
<p>Given two binary search trees <code>root1</code> and <code>root2</code>, return <em>a list containing all the integers from both trees sorted in <strong>ascending</strong> order</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/12/18/q2-e1.png" style="width: 457px; height: 207px;" />
<pre>
<strong>Input:</strong> root1 = [2,1,4], root2 = [1,0,3]
<strong>Output:</strong> [0,1,1,2,3,4]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/12/18/q2-e5-.png" style="width: 352px; height: 197px;" />
<pre>
<strong>Input:</strong> root1 = [1,null,8], root2 = [8,1]
<strong>Output:</strong> [1,1,8,8]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in each tree is in the range <code>[0, 5000]</code>.</li>
	<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='all-elements-in-two-binary-search-trees'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getAllElements(self, root1: TreeNode, root2: TreeNode) -> List[int]:
        res = []
        self.helperR(root1, res)
        self.helperR(root2, res)
        
        return sorted(res)
    
    def helperR(self, root, res):
        if not root: return
        
        res.append(root.val)
        self.helperR(root.left, res)
        self.helperR(root.right, res)
        
```

