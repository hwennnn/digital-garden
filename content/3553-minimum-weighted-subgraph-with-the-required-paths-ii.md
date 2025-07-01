---
title: 3553. Minimum Weighted Subgraph With the Required Paths II
draft: false
tags: 
  - leetcode-hard
  - array
  - tree
  - depth-first-search
  - weekly-contest-450
  - contest-question
date: 2025-05-22
---

[Problem Link](https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths-ii/)

## Description

---
<p>You are given an <strong>undirected weighted</strong> tree with <code data-end="51" data-start="48">n</code> nodes, numbered from <code data-end="75" data-start="72">0</code> to <code data-end="86" data-start="79">n - 1</code>. It is represented by a 2D integer array <code data-end="129" data-start="122">edges</code> of length <code data-end="147" data-start="140">n - 1</code>, where <code data-end="185" data-start="160">edges[i] = [u<sub>i</sub>, v<sub>i</sub>, w<sub>i</sub>]</code> indicates that there is an edge between nodes <code data-end="236" data-start="232">u<sub>i</sub></code> and <code data-end="245" data-start="241">v<sub>i</sub></code> with weight <code data-end="262" data-start="258">w<sub>i</sub></code>.​</p>

<p>Additionally, you are given a 2D integer array <code data-end="56" data-start="47">queries</code>, where <code data-end="105" data-start="69">queries[j] = [src1<sub>j</sub>, src2<sub>j</sub>, dest<sub>j</sub>]</code>.</p>

<p>Return an array <code data-end="24" data-start="16">answer</code> of length equal to <code data-end="60" data-start="44">queries.length</code>, where <code data-end="79" data-start="68">answer[j]</code> is the <strong>minimum total weight</strong> of a subtree such that it is possible to reach <code data-end="174" data-start="167">dest<sub>j</sub></code> from both <code data-end="192" data-start="185">src1<sub>j</sub></code> and <code data-end="204" data-start="197">src2<sub>j</sub></code> using edges in this subtree.</p>

<p>A <strong data-end="2287" data-start="2276">subtree</strong> here is any connected subset of nodes and edges of the original tree forming a valid tree.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">edges = [[0,1,2],[1,2,3],[1,3,5],[1,4,4],[2,5,6]], queries = [[2,3,4],[0,2,5]]</span></p>

<p><strong>Output:</strong> <span class="example-io">[12,11]</span></p>

<p><strong>Explanation:</strong></p>

<p>The blue edges represent one of the subtrees that yield the optimal answer.</p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2025/04/02/tree1-4.jpg" style="width: 531px; height: 322px;" /></p>

<ul>
	<li data-end="118" data-start="0">
	<p data-end="118" data-start="2"><code>answer[0]</code>: The total weight of the selected subtree that ensures a path from <code>src1 = 2</code> and <code>src2 = 3</code> to <code>dest = 4</code> is <code>3 + 5 + 4 = 12</code>.</p>
	</li>
	<li data-end="235" data-start="119">
	<p data-end="235" data-start="121"><code>answer[1]</code>: The total weight of the selected subtree that ensures a path from <code>src1 = 0</code> and <code>src2 = 2</code> to <code>dest = 5</code> is <code>2 + 3 + 6 = 11</code>.</p>
	</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">edges = [[1,0,8],[0,2,7]], queries = [[0,1,2]]</span></p>

<p><strong>Output:</strong> <span class="example-io">[15]</span></p>

<p><strong>Explanation:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2025/04/02/tree1-5.jpg" style="width: 270px; height: 80px;" /></p>

<ul>
	<li><code>answer[0]</code>: The total weight of the selected subtree that ensures a path from <code>src1 = 0</code> and <code>src2 = 1</code> to <code>dest = 2</code> is <code>8 + 7 = 15</code>.</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li data-end="36" data-start="20"><code>3 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li data-end="62" data-start="39"><code>edges.length == n - 1</code></li>
	<li data-end="87" data-start="65"><code>edges[i].length == 3</code></li>
	<li data-end="107" data-start="90"><code>0 &lt;= u<sub>i</sub>, v<sub>i</sub> &lt; n</code></li>
	<li data-end="127" data-start="110"><code>1 &lt;= w<sub>i</sub> &lt;= 10<sup>4</sup></code></li>
	<li data-end="159" data-start="130"><code>1 &lt;= queries.length &lt;= 10<sup>5</sup></code></li>
	<li data-end="186" data-start="162"><code>queries[j].length == 3</code></li>
	<li data-end="219" data-start="189"><code>0 &lt;= src1<sub>j</sub>, src2<sub>j</sub>, dest<sub>j</sub> &lt; n</code></li>
	<li><code>src1<sub>j</sub></code>, <code>src2<sub>j</sub></code>, and <code>dest<sub>j</sub></code> are pairwise distinct.</li>
	<li>The input is generated such that <code>edges</code> represents a valid tree.</li>
</ul>


## Solution

---
### Python3
``` py title='minimum-weighted-subgraph-with-the-required-paths-ii'
class Solution:
    def minimumWeight(self, edges: List[List[int]], queries: List[List[int]]) -> List[int]:
        N = len(edges) + 1
        M = N.bit_length() + 1
        graph = defaultdict(list)
        dist = [0] * N
         
        for a, b, w in edges:
            graph[a].append((b, w))
            graph[b].append((a, w))
         
        parent = [[0] * M for _ in range(N)]
        d = [0] * N
         
        def dfs(node, prev, depth):
            parent[node][0] = prev
            d[node] = depth
         
            for adj, w in graph[node]:
                if adj != prev:
                    dist[adj] = dist[node] + w
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

        def path_weight(a, b):
            return dist[a] + dist[b] - 2 * dist[lca(a, b)]

        res = []
        for src1, src2, dest in queries:
            a = path_weight(src1, dest)
            b = path_weight(src2, dest)
            c = path_weight(src1, src2)
            # divide by 2 here as every path crossed is counted twice
            res.append((a + b + c) // 2)

        return res
```

