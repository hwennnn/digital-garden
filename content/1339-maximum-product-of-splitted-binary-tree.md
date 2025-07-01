---
title: 1339. Maximum Product of Splitted Binary Tree
draft: false
tags: 
  - leetcode-medium
  - tree
  - depth-first-search
  - binary-tree
  - weekly-contest-174
  - contest-question
date: 2022-12-10
---

[Problem Link](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/)

## Description

---
<p>Given the <code>root</code> of a binary tree, split the binary tree into two subtrees by removing one edge such that the product of the sums of the subtrees is maximized.</p>

<p>Return <em>the maximum product of the sums of the two subtrees</em>. Since the answer may be too large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p><strong>Note</strong> that you need to maximize the answer before taking the mod and not after taking it.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/01/21/sample_1_1699.png" style="width: 500px; height: 167px;" />
<pre>
<strong>Input:</strong> root = [1,2,3,4,5,6]
<strong>Output:</strong> 110
<strong>Explanation:</strong> Remove the red edge and get 2 binary trees with sum 11 and 10. Their product is 110 (11*10)
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/01/21/sample_2_1699.png" style="width: 500px; height: 211px;" />
<pre>
<strong>Input:</strong> root = [1,null,2,3,4,null,null,5,6]
<strong>Output:</strong> 90
<strong>Explanation:</strong> Remove the red edge and get 2 binary trees with sum 15 and 6.Their product is 90 (15*6)
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[2, 5 * 10<sup>4</sup>]</code>.</li>
	<li><code>1 &lt;= Node.val &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-product-of-splitted-binary-tree'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxProduct(self, root: Optional[TreeNode]) -> int:
        M = 10 ** 9 + 7
        res = 0

        def dfs(node):
            if not node: return 0
            return node.val + dfs(node.left) + dfs(node.right)

        total = dfs(root)
        
        def dfs2(node):
            nonlocal res

            if not node: return 0

            curr = node.val + dfs2(node.left) + dfs2(node.right)
            remaining = total - curr

            res = max(res, (curr * remaining))

            return curr
        
        dfs2(root)
        return res % M
```

