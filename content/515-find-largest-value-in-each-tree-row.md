---
title: 515. Find Largest Value in Each Tree Row
draft: false
tags: 
  - leetcode-medium
  - tree
  - depth-first-search
  - breadth-first-search
  - binary-tree
  - weekly-contest-19
  - contest-question
date: 2024-12-25
---

[Problem Link](https://leetcode.com/problems/find-largest-value-in-each-tree-row/)

## Description

---
<p>Given the <code>root</code> of a binary tree, return <em>an array of the largest value in each row</em> of the tree <strong>(0-indexed)</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/21/largest_e1.jpg" style="width: 300px; height: 172px;" />
<pre>
<strong>Input:</strong> root = [1,3,2,5,3,null,9]
<strong>Output:</strong> [1,3,9]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> root = [1,2,3]
<strong>Output:</strong> [1,3]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree will be in the range <code>[0, 10<sup>4</sup>]</code>.</li>
	<li><code>-2<sup>31</sup> &lt;= Node.val &lt;= 2<sup>31</sup> - 1</code></li>
</ul>


## Solution

---
### Python3
``` py title='find-largest-value-in-each-tree-row'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def largestValues(self, root: Optional[TreeNode]) -> List[int]:
        res = []

        def go(node, level):
            nonlocal res
            if not node: return

            if level == len(res):
                res.append(node.val)
            elif node.val > res[level]:
                res[level] = node.val
            
            go(node.left, level + 1)
            go(node.right, level + 1)
        
        go(root, 0)
        
        return res
```

