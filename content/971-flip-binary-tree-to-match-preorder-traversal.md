---
title: 971. Flip Binary Tree To Match Preorder Traversal
draft: false
tags: 
  - leetcode-medium
  - tree
  - depth-first-search
  - binary-tree
  - weekly-contest-118
  - contest-question
date: 2022-02-22
---

[Problem Link](https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/)

## Description

---
<p>You are given the <code>root</code> of a binary tree with <code>n</code> nodes, where each node is uniquely assigned a value from <code>1</code> to <code>n</code>. You are also given a sequence of <code>n</code> values <code>voyage</code>, which is the <strong>desired</strong> <a href="https://en.wikipedia.org/wiki/Tree_traversal#Pre-order" target="_blank"><strong>pre-order traversal</strong></a> of the binary tree.</p>

<p>Any node in the binary tree can be <strong>flipped</strong> by swapping its left and right subtrees. For example, flipping node 1 will have the following effect:</p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/15/fliptree.jpg" style="width: 400px; height: 187px;" />
<p>Flip the <strong>smallest</strong> number of nodes so that the <strong>pre-order traversal</strong> of the tree <strong>matches</strong> <code>voyage</code>.</p>

<p>Return <em>a list of the values of all <strong>flipped</strong> nodes. You may return the answer in <strong>any order</strong>. If it is <strong>impossible</strong> to flip the nodes in the tree to make the pre-order traversal match </em><code>voyage</code><em>, return the list </em><code>[-1]</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/01/02/1219-01.png" style="width: 150px; height: 205px;" />
<pre>
<strong>Input:</strong> root = [1,2], voyage = [2,1]
<strong>Output:</strong> [-1]
<strong>Explanation:</strong> It is impossible to flip the nodes such that the pre-order traversal matches voyage.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/01/02/1219-02.png" style="width: 150px; height: 142px;" />
<pre>
<strong>Input:</strong> root = [1,2,3], voyage = [1,3,2]
<strong>Output:</strong> [1]
<strong>Explanation:</strong> Flipping node 1 swaps nodes 2 and 3, so the pre-order traversal matches voyage.</pre>

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/01/02/1219-02.png" style="width: 150px; height: 142px;" />
<pre>
<strong>Input:</strong> root = [1,2,3], voyage = [1,2,3]
<strong>Output:</strong> []
<strong>Explanation:</strong> The tree&#39;s pre-order traversal already matches voyage, so no nodes need to be flipped.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is <code>n</code>.</li>
	<li><code>n == voyage.length</code></li>
	<li><code>1 &lt;= n &lt;= 100</code></li>
	<li><code>1 &lt;= Node.val, voyage[i] &lt;= n</code></li>
	<li>All the values in the tree are <strong>unique</strong>.</li>
	<li>All the values in <code>voyage</code> are <strong>unique</strong>.</li>
</ul>


## Solution

---
### Python3
``` py title='flip-binary-tree-to-match-preorder-traversal'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def flipMatchVoyage(self, root: Optional[TreeNode], voyage: List[int]) -> List[int]:
        index = 0
        res = []
        
        def go(node):
            nonlocal index, res
            
            if not node: return True
            
            if node.val != voyage[index]: return False
            
            index += 1
            
            if node.left and node.right and node.left.val != voyage[index] and node.right.val == voyage[index]:
                res.append(node.val)
                
                node.left, node.right = node.right, node.left
            
            return go(node.left) and go(node.right)
        
        return res if go(root) else [-1]
            
            
```

