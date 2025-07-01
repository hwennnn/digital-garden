---
title: 2049. Count Nodes With the Highest Score
draft: false
tags: 
  - leetcode-medium
  - array
  - tree
  - depth-first-search
  - binary-tree
  - weekly-contest-264
  - contest-question
date: 2021-10-24
---

[Problem Link](https://leetcode.com/problems/count-nodes-with-the-highest-score/)

## Description

---
<p>There is a <strong>binary</strong> tree rooted at <code>0</code> consisting of <code>n</code> nodes. The nodes are labeled from <code>0</code> to <code>n - 1</code>. You are given a <strong>0-indexed</strong> integer array <code>parents</code> representing the tree, where <code>parents[i]</code> is the parent of node <code>i</code>. Since node <code>0</code> is the root, <code>parents[0] == -1</code>.</p>

<p>Each node has a <strong>score</strong>. To find the score of a node, consider if the node and the edges connected to it were <strong>removed</strong>. The tree would become one or more <strong>non-empty</strong> subtrees. The <strong>size</strong> of a subtree is the number of the nodes in it. The <strong>score</strong> of the node is the <strong>product of the sizes</strong> of all those subtrees.</p>

<p>Return <em>the <strong>number</strong> of nodes that have the <strong>highest score</strong></em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="example-1" src="https://assets.leetcode.com/uploads/2021/10/03/example-1.png" style="width: 604px; height: 266px;" />
<pre>
<strong>Input:</strong> parents = [-1,2,0,2,0]
<strong>Output:</strong> 3
<strong>Explanation:</strong>
- The score of node 0 is: 3 * 1 = 3
- The score of node 1 is: 4 = 4
- The score of node 2 is: 1 * 1 * 2 = 2
- The score of node 3 is: 4 = 4
- The score of node 4 is: 4 = 4
The highest score is 4, and three nodes (node 1, node 3, and node 4) have the highest score.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="example-2" src="https://assets.leetcode.com/uploads/2021/10/03/example-2.png" style="width: 95px; height: 143px;" />
<pre>
<strong>Input:</strong> parents = [-1,2,0]
<strong>Output:</strong> 2
<strong>Explanation:</strong>
- The score of node 0 is: 2 = 2
- The score of node 1 is: 2 = 2
- The score of node 2 is: 1 * 1 = 1
The highest score is 2, and two nodes (node 0 and node 1) have the highest score.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == parents.length</code></li>
	<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>parents[0] == -1</code></li>
	<li><code>0 &lt;= parents[i] &lt;= n - 1</code> for <code>i != 0</code></li>
	<li><code>parents</code> represents a valid binary tree.</li>
</ul>


## Solution

---
### Python3
``` py title='count-nodes-with-the-highest-score'
class Solution:
    def countHighestScoreNodes(self, parents: List[int]) -> int:
        nodes = collections.defaultdict(list)
        freq = collections.defaultdict(int)
        
        for i, parent in enumerate(parents):
            if parent >= 0:
                nodes[parent].append(i)
        
        def go(x):
            left = right = 0
            
            if len(nodes[x]) >= 1:
                left = go(nodes[x][0])
            if len(nodes[x]) > 1:
                right = go(nodes[x][1])
            
            f = (left or 1) * (right or 1) * (len(parents) - 1 - left - right or 1)
            freq[f] += 1
            
            return 1 + left + right
        
        go(0)
        return freq[max(freq)]
        
        
```

