---
title: 1022. Sum of Root To Leaf Binary Numbers
draft: false
tags: 
  - leetcode-easy
  - tree
  - depth-first-search
  - binary-tree
  - weekly-contest-131
  - contest-question
date: 2022-01-15
---

[Problem Link](https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/)

## Description

---
<p>You are given the <code>root</code> of a binary tree where each node has a value <code>0</code> or <code>1</code>. Each root-to-leaf path represents a binary number starting with the most significant bit.</p>

<ul>
	<li>For example, if the path is <code>0 -&gt; 1 -&gt; 1 -&gt; 0 -&gt; 1</code>, then this could represent <code>01101</code> in binary, which is <code>13</code>.</li>
</ul>

<p>For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. Return <em>the sum of these numbers</em>.</p>

<p>The test cases are generated so that the answer fits in a <strong>32-bits</strong> integer.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/04/04/sum-of-root-to-leaf-binary-numbers.png" style="width: 400px; height: 263px;" />
<pre>
<strong>Input:</strong> root = [1,0,1,0,1,0,1]
<strong>Output:</strong> 22
<strong>Explanation: </strong>(100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> root = [0]
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[1, 1000]</code>.</li>
	<li><code>Node.val</code> is <code>0</code> or <code>1</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='sum-of-root-to-leaf-binary-numbers'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumRootToLeaf(self, root: Optional[TreeNode]) -> int:
        res = 0
        
        def go(node, curr):
            nonlocal res
            
            if not node: return
            
            v = curr * 2 + node.val
            
            if not node.left and not node.right:
                res += v
                return
            
            go(node.left, v)
            go(node.right, v)
        
        go(root, 0)
        
        return res
```

