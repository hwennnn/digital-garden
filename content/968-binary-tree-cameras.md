---
title: 968. Binary Tree Cameras
draft: false
tags: 
  - leetcode-hard
  - dynamic-programming
  - tree
  - depth-first-search
  - binary-tree
  - weekly-contest-117
  - contest-question
date: 2022-06-17
---

[Problem Link](https://leetcode.com/problems/binary-tree-cameras/)

## Description

---
<p>You are given the <code>root</code> of a binary tree. We install cameras on the tree nodes where each camera at a node can monitor its parent, itself, and its immediate children.</p>

<p>Return <em>the minimum number of cameras needed to monitor all nodes of the tree</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/29/bst_cameras_01.png" style="width: 138px; height: 163px;" />
<pre>
<strong>Input:</strong> root = [0,0,null,0,0]
<strong>Output:</strong> 1
<strong>Explanation:</strong> One camera is enough to monitor all nodes if placed as shown.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/29/bst_cameras_02.png" style="width: 139px; height: 312px;" />
<pre>
<strong>Input:</strong> root = [0,0,null,0,null,0,null,null,0]
<strong>Output:</strong> 2
<strong>Explanation:</strong> At least two cameras are needed to monitor all nodes of the tree. The above image shows one of the valid configurations of camera placement.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[1, 1000]</code>.</li>
	<li><code>Node.val == 0</code></li>
</ul>


## Solution

---
### Python3
``` py title='binary-tree-cameras'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minCameraCover(self, root: Optional[TreeNode]) -> int:
        NO_CAMERA, HAS_CAMERA, NOT_NEEDED = 0, 1, 2
        res = 0
        
        def go(node):
            nonlocal res
            
            if not node: return NOT_NEEDED
            
            l, r = go(node.left), go(node.right)
            
            if l == NO_CAMERA or r == NO_CAMERA:
                res += 1
                return HAS_CAMERA
            elif l == HAS_CAMERA or r == HAS_CAMERA:
                return NOT_NEEDED
            else:
                return NO_CAMERA
        
        if go(root) == NO_CAMERA:
            res += 1
        
        return res
```

