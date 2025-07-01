---
title: 2641. Cousins in Binary Tree II
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - tree
  - depth-first-search
  - breadth-first-search
  - binary-tree
  - biweekly-contest-102
  - contest-question
date: 2025-01-05
---

[Problem Link](https://leetcode.com/problems/cousins-in-binary-tree-ii/)

## Description

---
<p>Given the <code>root</code> of a binary tree, replace the value of each node in the tree with the <strong>sum of all its cousins&#39; values</strong>.</p>

<p>Two nodes of a binary tree are <strong>cousins</strong> if they have the same depth with different parents.</p>

<p>Return <em>the </em><code>root</code><em> of the modified tree</em>.</p>

<p><strong>Note</strong> that the depth of a node is the number of edges in the path from the root node to it.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2023/01/11/example11.png" style="width: 571px; height: 151px;" />
<pre>
<strong>Input:</strong> root = [5,4,9,1,10,null,7]
<strong>Output:</strong> [0,0,0,7,7,null,11]
<strong>Explanation:</strong> The diagram above shows the initial binary tree and the binary tree after changing the value of each node.
- Node with value 5 does not have any cousins so its sum is 0.
- Node with value 4 does not have any cousins so its sum is 0.
- Node with value 9 does not have any cousins so its sum is 0.
- Node with value 1 has a cousin with value 7 so its sum is 7.
- Node with value 10 has a cousin with value 7 so its sum is 7.
- Node with value 7 has cousins with values 1 and 10 so its sum is 11.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2023/01/11/diagram33.png" style="width: 481px; height: 91px;" />
<pre>
<strong>Input:</strong> root = [3,1,2]
<strong>Output:</strong> [0,0,0]
<strong>Explanation:</strong> The diagram above shows the initial binary tree and the binary tree after changing the value of each node.
- Node with value 3 does not have any cousins so its sum is 0.
- Node with value 1 does not have any cousins so its sum is 0.
- Node with value 2 does not have any cousins so its sum is 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[1, 10<sup>5</sup>]</code>.</li>
	<li><code>1 &lt;= Node.val &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='cousins-in-binary-tree-ii'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def replaceValueInTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        # total[level] = sum
        total = defaultdict(int)
        # parents[parent] = sum
        parents = defaultdict(int)
        
        def dfs1(node, level, parent):
            if not node: return

            parents[parent] += node.val
            total[level] += node.val

            dfs1(node.left, level + 1, node)
            dfs1(node.right, level + 1, node)
        
        dfs1(root, 0, -1)

        def dfs2(node, level, parent):
            if not node: return None

            node.left = dfs2(node.left, level + 1, node)
            node.right = dfs2(node.right, level + 1, node)

            node.val = total[level] - parents[parent]

            return node
        
        return dfs2(root, 0, -1)
```

