---
title: 2316. Count Unreachable Pairs of Nodes in an Undirected Graph
draft: false
tags: 
  - leetcode-medium
  - depth-first-search
  - breadth-first-search
  - union-find
  - graph
  - biweekly-contest-81
  - contest-question
date: 2024-08-14
---

[Problem Link](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/)

## Description

---
<p>You are given an integer <code>n</code>. There is an <strong>undirected</strong> graph with <code>n</code> nodes, numbered from <code>0</code> to <code>n - 1</code>. You are given a 2D integer array <code>edges</code> where <code>edges[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> denotes that there exists an <strong>undirected</strong> edge connecting nodes <code>a<sub>i</sub></code> and <code>b<sub>i</sub></code>.</p>

<p>Return <em>the <strong>number of pairs</strong> of different nodes that are <strong>unreachable</strong> from each other</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/05/05/tc-3.png" style="width: 267px; height: 169px;" />
<pre>
<strong>Input:</strong> n = 3, edges = [[0,1],[0,2],[1,2]]
<strong>Output:</strong> 0
<strong>Explanation:</strong> There are no pairs of nodes that are unreachable from each other. Therefore, we return 0.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/05/05/tc-2.png" style="width: 295px; height: 269px;" />
<pre>
<strong>Input:</strong> n = 7, edges = [[0,2],[0,5],[2,4],[1,6],[5,4]]
<strong>Output:</strong> 14
<strong>Explanation:</strong> There are 14 pairs of nodes that are unreachable from each other:
[[0,1],[0,3],[0,6],[1,2],[1,3],[1,4],[1,5],[2,3],[2,6],[3,4],[3,5],[3,6],[4,6],[5,6]].
Therefore, we return 14.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= edges.length &lt;= 2 * 10<sup>5</sup></code></li>
	<li><code>edges[i].length == 2</code></li>
	<li><code>0 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt; n</code></li>
	<li><code>a<sub>i</sub> != b<sub>i</sub></code></li>
	<li>There are no repeated edges.</li>
</ul>


## Solution

---
### Python3
``` py title='count-unreachable-pairs-of-nodes-in-an-undirected-graph'
class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.size = [1] * n
    
    def find(self, x):
        while x != self.parent[x]:
            self.parent[x] = self.parent[self.parent[x]]
            x = self.parent[x]
        
        return x

    def union(self, a, b):
        a, b = self.find(a), self.find(b)
        if a == b: return

        # to mainttain self.size[a] >= self.size[b]
        if self.size[a] < self.size[b]:
            a, b = b, a
        
        self.size[a] += self.size[b]
        self.parent[b] = a

class Solution:
    def countPairs(self, n: int, edges: List[List[int]]) -> int:
        uf = DSU(n)

        for a, b in edges:
            uf.union(a, b)
        
        parentCount = [0] * n
        parent = [-1] * n

        for i in range(n):
            p = uf.find(i)
            parentCount[p] += 1
            parent[i] = p
        
        res = 0
        for i in range(n):
            res += n - parentCount[parent[i]]
        
        return res // 2
        

```

