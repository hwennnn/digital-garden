---
title: 1161. Maximum Level Sum of a Binary Tree
draft: false
tags: 
  - leetcode-medium
  - tree
  - depth-first-search
  - breadth-first-search
  - binary-tree
  - weekly-contest-150
  - contest-question
date: 2023-06-15
---

[Problem Link](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/)

## Description

---
<p>Given the <code>root</code> of a binary tree, the level of its root is <code>1</code>, the level of its children is <code>2</code>, and so on.</p>

<p>Return the <strong>smallest</strong> level <code>x</code> such that the sum of all the values of nodes at level <code>x</code> is <strong>maximal</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/05/03/capture.JPG" style="width: 200px; height: 175px;" />
<pre>
<strong>Input:</strong> root = [1,7,0,7,-8,null,null]
<strong>Output:</strong> 2
<strong>Explanation: </strong>
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> root = [989,null,10250,98693,-89388,null,null,null,-32127]
<strong>Output:</strong> 2
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[1, 10<sup>4</sup>]</code>.</li>
	<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-level-sum-of-a-binary-tree'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        res, level = root.val, 1
        queue = deque([root])
        currLevel = 1

        while queue:
            N = len(queue)
            curr = 0

            for _ in range(N):
                node = queue.popleft()
                curr += node.val

                for leaf in (node.left, node.right):
                    if leaf:
                        queue.append(leaf)

            if curr > res:
                res = curr
                level = currLevel
            
            currLevel += 1

        return level
```

