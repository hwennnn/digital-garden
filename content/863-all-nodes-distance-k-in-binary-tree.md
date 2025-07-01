---
title: 863. All Nodes Distance K in Binary Tree
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - tree
  - depth-first-search
  - breadth-first-search
  - binary-tree
  - weekly-contest-91
  - contest-question
date: 2023-07-11
---

[Problem Link](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/)

## Description

---
<p>Given the <code>root</code> of a binary tree, the value of a target node <code>target</code>, and an integer <code>k</code>, return <em>an array of the values of all nodes that have a distance </em><code>k</code><em> from the target node.</em></p>

<p>You can return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/06/28/sketch0.png" style="width: 500px; height: 429px;" />
<pre>
<strong>Input:</strong> root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
<strong>Output:</strong> [7,4,1]
Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> root = [1], target = 1, k = 3
<strong>Output:</strong> []
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[1, 500]</code>.</li>
	<li><code>0 &lt;= Node.val &lt;= 500</code></li>
	<li>All the values <code>Node.val</code> are <strong>unique</strong>.</li>
	<li><code>target</code> is the value of one of the nodes in the tree.</li>
	<li><code>0 &lt;= k &lt;= 1000</code></li>
</ul>


## Solution

---
### Python3
``` py title='all-nodes-distance-k-in-binary-tree'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def distanceK(self, root: TreeNode, target: TreeNode, k: int) -> List[int]:
        res = []
        mp = {}

        def dfs1(node):
            if not node: return -1

            if node == target:
                mp[node] = 0
                return 0
            
            if (left := dfs1(node.left)) != -1:
                mp[node] = left + 1
                return left + 1
            
            if (right := dfs1(node.right)) != -1:
                mp[node] = right + 1
                return right + 1
            
            return -1
        
        def dfs2(node, length):
            if not node: return

            if node in mp:
                length = mp[node]
            
            if length == k:
                res.append(node.val)
            
            dfs2(node.left, length + 1)
            dfs2(node.right, length + 1)

        dfs1(root)
        dfs2(root, mp[root])

        return res
```

