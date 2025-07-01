---
title: 1302. Deepest Leaves Sum
draft: false
tags: 
  - leetcode-medium
  - tree
  - depth-first-search
  - breadth-first-search
  - binary-tree
  - biweekly-contest-16
  - contest-question
date: 2022-05-15
---

[Problem Link](https://leetcode.com/problems/deepest-leaves-sum/)

## Description

---
Given the <code>root</code> of a binary tree, return <em>the sum of values of its deepest leaves</em>.
<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/07/31/1483_ex1.png" style="width: 273px; height: 265px;" />
<pre>
<strong>Input:</strong> root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
<strong>Output:</strong> 15
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
<strong>Output:</strong> 19
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[1, 10<sup>4</sup>]</code>.</li>
	<li><code>1 &lt;= Node.val &lt;= 100</code></li>
</ul>


## Solution

---
### Python3
``` py title='deepest-leaves-sum'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def deepestLeavesSum(self, root: TreeNode) -> int:
        
        def depth(node):
            if not node: return 0
            
            return 1 + max(depth(node.left), depth(node.right))
        
        d = depth(root)
        res = 0
        q = collections.deque([(root, 1)])
        
        while q:
            node, depth = q.popleft()

            if depth == d: res += node.val
                
            for leaf in (node.left, node.right):
                if leaf:
                    q.append((leaf, depth + 1))
        
        return res
                
        
```

