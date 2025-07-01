---
title: 652. Find Duplicate Subtrees
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - tree
  - depth-first-search
  - binary-tree
  - weekly-contest-43
  - contest-question
date: 2023-02-28
---

[Problem Link](https://leetcode.com/problems/find-duplicate-subtrees/)

## Description

---
<p>Given the <code>root</code>&nbsp;of a binary tree, return all <strong>duplicate subtrees</strong>.</p>

<p>For each kind of duplicate subtrees, you only need to return the root node of any <b>one</b> of them.</p>

<p>Two trees are <strong>duplicate</strong> if they have the <strong>same structure</strong> with the <strong>same node values</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/16/e1.jpg" style="width: 450px; height: 354px;" />
<pre>
<strong>Input:</strong> root = [1,2,3,4,null,2,4,null,null,4]
<strong>Output:</strong> [[2,4],[4]]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/16/e2.jpg" style="width: 321px; height: 201px;" />
<pre>
<strong>Input:</strong> root = [2,1,1]
<strong>Output:</strong> [[1]]
</pre>

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/16/e33.jpg" style="width: 450px; height: 303px;" />
<pre>
<strong>Input:</strong> root = [2,2,2,3,null,3,null]
<strong>Output:</strong> [[2,3],[3]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of the nodes in the tree will be in the range <code>[1, 5000]</code></li>
	<li><code>-200 &lt;= Node.val &lt;= 200</code></li>
</ul>


## Solution

---
### Python3
``` py title='find-duplicate-subtrees'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findDuplicateSubtrees(self, root: Optional[TreeNode]) -> List[Optional[TreeNode]]:
        mp = defaultdict(int)
        res = []

        def go(node):
            if not node: return ''

            left, right = go(node.left), go(node.right)
            x = f'l{left}{node.val}r{right}'
            mp[x] += 1

            if mp[x] == 2:
                res.append(node)
            
            return x

        go(root)
        return res
```

