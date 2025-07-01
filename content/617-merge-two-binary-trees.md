---
title: 617. Merge Two Binary Trees
draft: false
tags: 
  - leetcode-easy
  - tree
  - depth-first-search
  - breadth-first-search
  - binary-tree
  - weekly-contest-36
  - contest-question
date: 2021-09-25
---

[Problem Link](https://leetcode.com/problems/merge-two-binary-trees/)

## Description

---
<p>You are given two binary trees <code>root1</code> and <code>root2</code>.</p>

<p>Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.</p>

<p>Return <em>the merged tree</em>.</p>

<p><strong>Note:</strong> The merging process must start from the root nodes of both trees.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/05/merge.jpg" style="width: 600px; height: 163px;" />
<pre>
<strong>Input:</strong> root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
<strong>Output:</strong> [3,4,5,5,4,null,7]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> root1 = [1], root2 = [1,2]
<strong>Output:</strong> [2,2]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in both trees is in the range <code>[0, 2000]</code>.</li>
	<li><code>-10<sup>4</sup> &lt;= Node.val &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='merge-two-binary-trees'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def mergeTrees(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root1 and not root2: return None
        
        if root1:
            v1, l1, r1 = root1.val, root1.left, root1.right
        else:
            v1, l1, r1 = 0, None, None
        
        if root2:
            v2, l2, r2 = root2.val, root2.left, root2.right
        else:
            v2, l2, r2 = 0, None, None
        
        node = TreeNode(v1 + v2)
        node.left = self.mergeTrees(l1, l2)
        node.right = self.mergeTrees(r1, r2)
        
        return node
```

