---
title: 3559. Number of Ways to Assign Edge Weights II
draft: false
tags: 
  - leetcode-hard
  - array
  - math
  - dynamic-programming
  - tree
  - depth-first-search
  - biweekly-contest-157
  - contest-question
date: 2025-05-25
---

[Problem Link](https://leetcode.com/problems/number-of-ways-to-assign-edge-weights-ii/)

## Description

---
<p>There is an undirected tree with <code>n</code> nodes labeled from 1 to <code>n</code>, rooted at node 1. The tree is represented by a 2D integer array <code>edges</code> of length <code>n - 1</code>, where <code>edges[i] = [u<sub>i</sub>, v<sub>i</sub>]</code> indicates that there is an edge between nodes <code>u<sub>i</sub></code> and <code>v<sub>i</sub></code>.</p>

<p>Initially, all edges have a weight of 0. You must assign each edge a weight of either <strong>1</strong> or <strong>2</strong>.</p>

<p>The <strong>cost</strong> of a path between any two nodes <code>u</code> and <code>v</code> is the total weight of all edges in the path connecting them.</p>

<p>You are given a 2D integer array <code>queries</code>. For each <code>queries[i] = [u<sub>i</sub>, v<sub>i</sub>]</code>, determine the number of ways to assign weights to edges <strong>in the path</strong> such that the cost of the path between <code>u<sub>i</sub></code> and <code>v<sub>i</sub></code> is <strong>odd</strong>.</p>

<p>Return an array <code>answer</code>, where <code>answer[i]</code> is the number of valid assignments for <code>queries[i]</code>.</p>

<p>Since the answer may be large, apply <strong>modulo</strong> <code>10<sup>9</sup> + 7</code> to each <code>answer[i]</code>.</p>

<p><strong>Note:</strong> For each query, disregard all edges <strong>not</strong> in the path between node <code>u<sub>i</sub></code> and <code>v<sub>i</sub></code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><img src="https://assets.leetcode.com/uploads/2025/03/23/screenshot-2025-03-24-at-060006.png" style="height: 72px; width: 200px;" /></p>

<p><strong>Input:</strong> <span class="example-io">edges = [[1,2]], queries = [[1,1],[1,2]]</span></p>

<p><strong>Output:</strong> <span class="example-io">[0,1]</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>Query <code>[1,1]</code>: The path from Node 1 to itself consists of no edges, so the cost is 0. Thus, the number of valid assignments is 0.</li>
	<li>Query <code>[1,2]</code>: The path from Node 1 to Node 2 consists of one edge (<code>1 &rarr; 2</code>). Assigning weight 1 makes the cost odd, while 2 makes it even. Thus, the number of valid assignments is 1.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<p><img src="https://assets.leetcode.com/uploads/2025/03/23/screenshot-2025-03-24-at-055820.png" style="height: 207px; width: 220px;" /></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">edges = [[1,2],[1,3],[3,4],[3,5]], queries = [[1,4],[3,4],[2,5]]</span></p>

<p><strong>Output:</strong> <span class="example-io">[2,1,4]</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>Query <code>[1,4]</code>: The path from Node 1 to Node 4 consists of two edges (<code>1 &rarr; 3</code> and <code>3 &rarr; 4</code>). Assigning weights (1,2) or (2,1) results in an odd cost. Thus, the number of valid assignments is 2.</li>
	<li>Query <code>[3,4]</code>: The path from Node 3 to Node 4 consists of one edge (<code>3 &rarr; 4</code>). Assigning weight 1 makes the cost odd, while 2 makes it even. Thus, the number of valid assignments is 1.</li>
	<li>Query <code>[2,5]</code>: The path from Node 2 to Node 5 consists of three edges (<code>2 &rarr; 1, 1 &rarr; 3</code>, and <code>3 &rarr; 5</code>). Assigning (1,2,2), (2,1,2), (2,2,1), or (1,1,1) makes the cost odd. Thus, the number of valid assignments is 4.</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>edges.length == n - 1</code></li>
	<li><code>edges[i] == [u<sub>i</sub>, v<sub>i</sub>]</code></li>
	<li><code>1 &lt;= queries.length &lt;= 10<sup>5</sup></code></li>
	<li><code>queries[i] == [u<sub>i</sub>, v<sub>i</sub>]</code></li>
	<li><code>1 &lt;= u<sub>i</sub>, v<sub>i</sub> &lt;= n</code></li>
	<li><code>edges</code> represents a valid tree.</li>
</ul>


## Solution

---
### Python3
``` py title='number-of-ways-to-assign-edge-weights-ii'
class Solution:
    def assignEdgeWeights(self, edges: List[List[int]], queries: List[List[int]]) -> List[int]:
        MOD = 10 ** 9 + 7
        N = len(edges) + 1
        M = N.bit_length() + 1
        graph = defaultdict(list)
         
        for a, b in edges:
            a -= 1
            b -= 1
            graph[a].append(b)
            graph[b].append(a)
         
        parent = [[0] * M for _ in range(N)]
        d = [0] * N
         
        def dfs(node, prev, depth):
            parent[node][0] = prev
            d[node] = depth
         
            for adj in graph[node]:
                if adj != prev:
                    dfs(adj, node, depth + 1)
         
        dfs(0, -1, 0)
         
        # binary lifting
        for power in range(1, M):
            for node in range(N):
        	    parent[node][power] = parent[parent[node][power - 1]][power - 1]
         
        def lca(a, b):
            if d[a] > d[b]:
                a, b = b, a
         
            # let a and b jump to the same depth
            diff = d[b] - d[a]
            for p in range(M):
                if diff & (1 << p):
                    b = parent[b][p]
         
            if a == b: return a
         
            for p in range(M - 1, -1, -1):
                if parent[a][p] != parent[b][p]:
                    a = parent[a][p]
                    b = parent[b][p]
         
            return parent[a][0]

        res = []
        for u, v in queries:
            u -= 1
            v -= 1
            if u == v:
                res.append(0)
                continue

            ancestor = lca(u, v)
            k = d[u] + d[v] - 2 * d[ancestor]
            res.append(pow(2, k - 1, MOD))

        return res
```

