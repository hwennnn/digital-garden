---
title: 105. Construct Binary Tree from Preorder and Inorder Traversal
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - divide-and-conquer
  - tree
  - binary-tree
date: 2025-06-13
---

[Problem Link](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

## Description

---
<p>Given two integer arrays <code>preorder</code> and <code>inorder</code> where <code>preorder</code> is the preorder traversal of a binary tree and <code>inorder</code> is the inorder traversal of the same tree, construct and return <em>the binary tree</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/tree.jpg" style="width: 277px; height: 302px;" />
<pre>
<strong>Input:</strong> preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
<strong>Output:</strong> [3,9,20,null,null,15,7]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> preorder = [-1], inorder = [-1]
<strong>Output:</strong> [-1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= preorder.length &lt;= 3000</code></li>
	<li><code>inorder.length == preorder.length</code></li>
	<li><code>-3000 &lt;= preorder[i], inorder[i] &lt;= 3000</code></li>
	<li><code>preorder</code> and <code>inorder</code> consist of <strong>unique</strong> values.</li>
	<li>Each value of <code>inorder</code> also appears in <code>preorder</code>.</li>
	<li><code>preorder</code> is <strong>guaranteed</strong> to be the preorder traversal of the tree.</li>
	<li><code>inorder</code> is <strong>guaranteed</strong> to be the inorder traversal of the tree.</li>
</ul>


## Solution

---
### Python3
``` py title='construct-binary-tree-from-preorder-and-inorder-traversal'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        N = len(preorder)
        mp = {}

        for i, x in enumerate(inorder):
            mp[x] = i

        # preorder -> node, left, right
        # inorder -> left, node, right

        def go(preIndex, inLeft, inRight):
            if preIndex >= N or inLeft > inRight: return None

            node = TreeNode(preorder[preIndex])
            rootIndex = mp[node.val]

            node.left = go(preIndex + 1, inLeft, rootIndex - 1)
            node.right = go(preIndex + rootIndex - inLeft + 1, rootIndex + 1, inRight)

            return node
        
        return go(0, 0, N - 1)
```

