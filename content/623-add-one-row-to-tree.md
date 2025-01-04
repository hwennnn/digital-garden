---
title: 623. Add One Row to Tree
draft: false
tags: 
  - leetcode-medium
  - tree
  - depth-first-search
  - breadth-first-search
  - binary-tree
date: 2024-04-16
---

[Problem Link](https://leetcode.com/problems/add-one-row-to-tree/)

## Description

---
<p>Given the <code>root</code> of a binary tree and two integers <code>val</code> and <code>depth</code>, add a row of nodes with value <code>val</code> at the given depth <code>depth</code>.</p>

<p>Note that the <code>root</code> node is at depth <code>1</code>.</p>

<p>The adding rule is:</p>

<ul>
	<li>Given the integer <code>depth</code>, for each not null tree node <code>cur</code> at the depth <code>depth - 1</code>, create two tree nodes with value <code>val</code> as <code>cur</code>&#39;s left subtree root and right subtree root.</li>
	<li><code>cur</code>&#39;s original left subtree should be the left subtree of the new left subtree root.</li>
	<li><code>cur</code>&#39;s original right subtree should be the right subtree of the new right subtree root.</li>
	<li>If <code>depth == 1</code> that means there is no depth <code>depth - 1</code> at all, then create a tree node with value <code>val</code> as the new root of the whole original tree, and the original tree is the new root&#39;s left subtree.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/15/addrow-tree.jpg" style="width: 500px; height: 231px;" />
<pre>
<strong>Input:</strong> root = [4,2,6,3,1,5], val = 1, depth = 2
<strong>Output:</strong> [4,1,1,2,null,null,6,3,1,5]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/11/add2-tree.jpg" style="width: 500px; height: 277px;" />
<pre>
<strong>Input:</strong> root = [4,2,null,3,1], val = 1, depth = 3
<strong>Output:</strong> [4,2,null,1,1,3,null,null,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[1, 10<sup>4</sup>]</code>.</li>
	<li>The depth of the tree is in the range <code>[1, 10<sup>4</sup>]</code>.</li>
	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
	<li><code>-10<sup>5</sup> &lt;= val &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= depth &lt;= the depth of tree + 1</code></li>
</ul>


## Solution

---
### Python3
``` py title='add-one-row-to-tree'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def addOneRow(self, root: Optional[TreeNode], val: int, depth: int) -> Optional[TreeNode]:
        
        def go(node, d, isLeft):

            if d == depth:
                curr = TreeNode(val)

                if not node: return curr

                if isLeft:
                    curr.left = node
                else:
                    curr.right = node

                return curr
                
            if not node: return node

            node.left = go(node.left, d + 1, True)
            node.right = go(node.right, d + 1, False)

            return node
        
        return go(root, 1, True)
```

