---
title: 437. Path Sum III
draft: false
tags: 
  - leetcode-medium
  - tree
  - depth-first-search
  - binary-tree
  - smarking-algorithm-contest
  - contest-question
date: 2022-06-24
---

[Problem Link](https://leetcode.com/problems/path-sum-iii/)

## Description

---
<p>Given the <code>root</code> of a binary tree and an integer <code>targetSum</code>, return <em>the number of paths where the sum of the values&nbsp;along the path equals</em>&nbsp;<code>targetSum</code>.</p>

<p>The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/09/pathsum3-1-tree.jpg" style="width: 450px; height: 386px;" />
<pre>
<strong>Input:</strong> root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
<strong>Output:</strong> 3
<strong>Explanation:</strong> The paths that sum to 8 are shown.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
<strong>Output:</strong> 3
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[0, 1000]</code>.</li>
	<li><code>-10<sup>9</sup> &lt;= Node.val &lt;= 10<sup>9</sup></code></li>
	<li><code>-1000 &lt;= targetSum &lt;= 1000</code></li>
</ul>


## Solution

---
### Python3
``` py title='path-sum-iii'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        mp = defaultdict(int)
        mp[0] = 1
        res = 0
        
        def go(node, s):
            nonlocal res
            
            if not node: return
            
            s += node.val
            res += mp[s - targetSum]
            
            mp[s] += 1
            go(node.left, s)
            go(node.right, s)
            mp[s] -= 1
            
        go(root, 0)
        
        return res
```

