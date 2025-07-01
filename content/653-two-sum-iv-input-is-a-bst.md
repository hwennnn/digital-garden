---
title: 653. Two Sum IV - Input is a BST
draft: false
tags: 
  - leetcode-easy
  - hash-table
  - two-pointers
  - tree
  - depth-first-search
  - breadth-first-search
  - binary-search-tree
  - binary-tree
  - weekly-contest-44
  - contest-question
date: 2022-10-09
---

[Problem Link](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/)

## Description

---
<p>Given the <code>root</code> of a binary search tree and an integer <code>k</code>, return <code>true</code> <em>if there exist two elements in the BST such that their sum is equal to</em> <code>k</code>, <em>or</em> <code>false</code> <em>otherwise</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/21/sum_tree_1.jpg" style="width: 400px; height: 229px;" />
<pre>
<strong>Input:</strong> root = [5,3,6,2,4,null,7], k = 9
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/21/sum_tree_2.jpg" style="width: 400px; height: 229px;" />
<pre>
<strong>Input:</strong> root = [5,3,6,2,4,null,7], k = 28
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[1, 10<sup>4</sup>]</code>.</li>
	<li><code>-10<sup>4</sup> &lt;= Node.val &lt;= 10<sup>4</sup></code></li>
	<li><code>root</code> is guaranteed to be a <strong>valid</strong> binary search tree.</li>
	<li><code>-10<sup>5</sup> &lt;= k &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='two-sum-iv-input-is-a-bst'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:
        
        def dfs(root, curr):
            if not curr: return False
            
            return search(root, curr, k - curr.val) or dfs(root, curr.left) or dfs(root, curr.right)
        
        def search(root, curr, t):
            if not root: return False
            
            return (root.val == t and root.val != curr.val) or (root.val > t and search(root.left, curr, t)) or (root.val < t and search(root.right, curr, t))
        
        return dfs(root, root)
```

