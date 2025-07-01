---
title: 783. Minimum Distance Between BST Nodes
draft: false
tags: 
  - leetcode-easy
  - tree
  - depth-first-search
  - breadth-first-search
  - binary-search-tree
  - binary-tree
  - weekly-contest-71
  - contest-question
date: 2023-02-17
---

[Problem Link](https://leetcode.com/problems/minimum-distance-between-bst-nodes/)

## Description

---
<p>Given the <code>root</code> of a Binary Search Tree (BST), return <em>the minimum difference between the values of any two different nodes in the tree</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/05/bst1.jpg" style="width: 292px; height: 301px;" />
<pre>
<strong>Input:</strong> root = [4,2,6,1,3]
<strong>Output:</strong> 1
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/05/bst2.jpg" style="width: 282px; height: 301px;" />
<pre>
<strong>Input:</strong> root = [1,0,48,null,null,12,49]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[2, 100]</code>.</li>
	<li><code>0 &lt;= Node.val &lt;= 10<sup>5</sup></code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Note:</strong> This question is the same as 530: <a href="https://leetcode.com/problems/minimum-absolute-difference-in-bst/" target="_blank">https://leetcode.com/problems/minimum-absolute-difference-in-bst/</a></p>


## Solution

---
### Python3
``` py title='minimum-distance-between-bst-nodes'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDiffInBST(self, root: Optional[TreeNode]) -> int:
        A = []
        
        def dfs(node):
            if not node: return
            
            dfs(node.left)
            A.append(node.val)
            dfs(node.right)
        
        dfs(root)
        
        return min(b - a for a, b in zip(A, A[1:]))
```

