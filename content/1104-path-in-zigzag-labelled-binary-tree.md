---
title: 1104. Path In Zigzag Labelled Binary Tree
draft: false
tags: 
  - leetcode-medium
  - math
  - tree
  - binary-tree
  - weekly-contest-143
  - contest-question
date: 2021-05-23
---

[Problem Link](https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/)

## Description

---
<p>In an infinite binary tree where every node has two children, the nodes are labelled in row order.</p>

<p>In the odd numbered rows (ie., the first, third, fifth,...), the labelling is left to right, while in the even numbered rows (second, fourth, sixth,...), the labelling is right to left.</p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2019/06/24/tree.png" style="width: 300px; height: 138px;" /></p>

<p>Given the <code>label</code> of a node in this tree, return the labels in the path from the root of the tree to the&nbsp;node with that <code>label</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> label = 14
<strong>Output:</strong> [1,3,4,14]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> label = 26
<strong>Output:</strong> [1,2,6,10,26]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= label &lt;= 10^6</code></li>
</ul>


## Solution

---
### Python3
``` py title='path-in-zigzag-labelled-binary-tree'
class Solution:
    def pathInZigZagTree(self, label: int) -> List[int]:
        res = []
        level = nodes = 1
        
        while label >= nodes * 2:
            nodes *= 2
            level += 1
        
        while label != 0:
            res.append(label)
            mmax = (2 ** level) - 1
            mmin = 2 ** (level - 1)
            label = (mmax + mmin - label) // 2
            level -= 1
        
        return res[::-1]
```

