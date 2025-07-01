---
title: 2846. Minimum Edge Weight Equilibrium Queries in a Tree
draft: false
tags: 
  - leetcode-hard
  - array
  - tree
  - graph
  - strongly-connected-component
  - weekly-contest-361
  - contest-question
date: 2023-09-08
---

[Problem Link](https://leetcode.com/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/)

## Description

---
<p>There is an undirected tree with <code>n</code> nodes labeled from <code>0</code> to <code>n - 1</code>. You are given the integer <code>n</code> and a 2D integer array <code>edges</code> of length <code>n - 1</code>, where <code>edges[i] = [u<sub>i</sub>, v<sub>i</sub>, w<sub>i</sub>]</code> indicates that there is an edge between nodes <code>u<sub>i</sub></code> and <code>v<sub>i</sub></code> with weight <code>w<sub>i</sub></code> in the tree.</p>

<p>You are also given a 2D integer array <code>queries</code> of length <code>m</code>, where <code>queries[i] = [a<sub>i</sub>, b<sub>i</sub>]</code>. For each query, find the <strong>minimum number of operations</strong> required to make the weight of every edge on the path from <code>a<sub>i</sub></code> to <code>b<sub>i</sub></code> equal. In one operation, you can choose any edge of the tree and change its weight to any value.</p>

<p><strong>Note</strong> that:</p>

<ul>
	<li>Queries are <strong>independent</strong> of each other, meaning that the tree returns to its <strong>initial state</strong> on each new query.</li>
	<li>The path from <code>a<sub>i</sub></code> to <code>b<sub>i</sub></code> is a sequence of <strong>distinct</strong> nodes starting with node <code>a<sub>i</sub></code> and ending with node <code>b<sub>i</sub></code> such that every two adjacent nodes in the sequence share an edge in the tree.</li>
</ul>

<p>Return <em>an array </em><code>answer</code><em> of length </em><code>m</code><em> where</em> <code>answer[i]</code> <em>is the answer to the</em> <code>i<sup>th</sup></code> <em>query.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2023/08/11/graph-6-1.png" style="width: 339px; height: 344px;" />
<pre>
<strong>Input:</strong> n = 7, edges = [[0,1,1],[1,2,1],[2,3,1],[3,4,2],[4,5,2],[5,6,2]], queries = [[0,3],[3,6],[2,6],[0,6]]
<strong>Output:</strong> [0,0,1,3]
<strong>Explanation:</strong> In the first query, all the edges in the path from 0 to 3 have a weight of 1. Hence, the answer is 0.
In the second query, all the edges in the path from 3 to 6 have a weight of 2. Hence, the answer is 0.
In the third query, we change the weight of edge [2,3] to 2. After this operation, all the edges in the path from 2 to 6 have a weight of 2. Hence, the answer is 1.
In the fourth query, we change the weights of edges [0,1], [1,2] and [2,3] to 2. After these operations, all the edges in the path from 0 to 6 have a weight of 2. Hence, the answer is 3.
For each queries[i], it can be shown that answer[i] is the minimum number of operations needed to equalize all the edge weights in the path from a<sub>i</sub> to b<sub>i</sub>.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2023/08/11/graph-9-1.png" style="width: 472px; height: 370px;" />
<pre>
<strong>Input:</strong> n = 8, edges = [[1,2,6],[1,3,4],[2,4,6],[2,5,3],[3,6,6],[3,0,8],[7,0,2]], queries = [[4,6],[0,4],[6,5],[7,4]]
<strong>Output:</strong> [1,2,2,3]
<strong>Explanation:</strong> In the first query, we change the weight of edge [1,3] to 6. After this operation, all the edges in the path from 4 to 6 have a weight of 6. Hence, the answer is 1.
In the second query, we change the weight of edges [0,3] and [3,1] to 6. After these operations, all the edges in the path from 0 to 4 have a weight of 6. Hence, the answer is 2.
In the third query, we change the weight of edges [1,3] and [5,2] to 6. After these operations, all the edges in the path from 6 to 5 have a weight of 6. Hence, the answer is 2.
In the fourth query, we change the weights of edges [0,7], [0,3] and [1,3] to 6. After these operations, all the edges in the path from 7 to 4 have a weight of 6. Hence, the answer is 3.
For each queries[i], it can be shown that answer[i] is the minimum number of operations needed to equalize all the edge weights in the path from a<sub>i</sub> to b<sub>i</sub>.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li>
	<li><code>edges.length == n - 1</code></li>
	<li><code>edges[i].length == 3</code></li>
	<li><code>0 &lt;= u<sub>i</sub>, v<sub>i</sub> &lt; n</code></li>
	<li><code>1 &lt;= w<sub>i</sub> &lt;= 26</code></li>
	<li>The input is generated such that <code>edges</code> represents a valid tree.</li>
	<li><code>1 &lt;= queries.length == m &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>queries[i].length == 2</code></li>
	<li><code>0 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt; n</code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-edge-weight-equilibrium-queries-in-a-tree'
class Solution:
    def minOperationsQueries(self, N: int, edges: List[List[int]], queries: List[List[int]]) -> List[int]:
        M = N.bit_length() + 1
        C = 26
        
        graph = defaultdict(list)
        for a, b, w in edges:
            w -= 1
            graph[a].append((b, w))
            graph[b].append((a, w))
        
        fa = [[0] * M for _ in range(N)]
        d = [0] * N
        w = [None for _ in range(N)]
        w[0] = [0] * C
        
        def dfs(node, prev, depth):
            fa[node][0] = prev
            d[node] = depth
            
            for adj, weight in graph[node]:
                if adj != prev:
                    w[adj] = w[node][:]
                    w[adj][weight] += 1
                    dfs(adj, node, depth + 1)
        
        dfs(0, -1, 0)
        
        # binary lifting
        for p in range(1, M):
            for i in range(N):
                fa[i][p] = fa[fa[i][p - 1]][p - 1]
                
        def lca(a, b):
            if d[a] > d[b]:
                a, b = b, a
            
            # let a and b jump to the same depth
            diff = d[b] - d[a]
            for p in range(M):
                if diff & (1 << p):
                    b = fa[b][p]
            
            if a == b: return a
            
            for p in range(M - 1, -1, -1):
                if fa[a][p] != fa[b][p]:
                    a = fa[a][p]
                    b = fa[b][p]
            
            return fa[a][0]
        
        res = []
        
        for a, b in queries:
            l = lca(a, b)
            total = d[a] + d[b] - 2 * d[l]
            most_common = max(w[a][k] + w[b][k] - 2 * w[l][k] for k in range(26))
            
            res.append(total - most_common)
        
        return res
```

