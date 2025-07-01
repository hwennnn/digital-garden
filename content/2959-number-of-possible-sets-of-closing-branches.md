---
title: 2959. Number of Possible Sets of Closing Branches
draft: false
tags: 
  - leetcode-hard
  - bit-manipulation
  - graph
  - heap-priority-queue
  - enumeration
  - shortest-path
  - biweekly-contest-119
  - contest-question
date: 2023-12-09
---

[Problem Link](https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/)

## Description

---
<p>There is a company with <code>n</code> branches across the country, some of which are connected by roads. Initially, all branches are reachable from each other by traveling some roads.</p>

<p>The company has realized that they are spending an excessive amount of time traveling between their branches. As a result, they have decided to close down some of these branches (<strong>possibly none</strong>). However, they want to ensure that the remaining branches have a distance of at most <code>maxDistance</code> from each other.</p>

<p>The <strong>distance</strong> between two branches is the <strong>minimum</strong> total traveled length needed to reach one branch from another.</p>

<p>You are given integers <code>n</code>, <code>maxDistance</code>, and a <strong>0-indexed</strong> 2D array <code>roads</code>, where <code>roads[i] = [u<sub>i</sub>, v<sub>i</sub>, w<sub>i</sub>]</code> represents the <strong>undirected</strong> road between branches <code>u<sub>i</sub></code> and <code>v<sub>i</sub></code> with length <code>w<sub>i</sub></code>.</p>

<p>Return <em>the number of possible sets of closing branches, so that any branch has a distance of at most </em><code>maxDistance</code><em> from any other</em>.</p>

<p><strong>Note</strong> that, after closing a branch, the company will no longer have access to any roads connected to it.</p>

<p><strong>Note</strong> that, multiple roads are allowed.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2023/11/08/example11.png" style="width: 221px; height: 191px;" />
<pre>
<strong>Input:</strong> n = 3, maxDistance = 5, roads = [[0,1,2],[1,2,10],[0,2,10]]
<strong>Output:</strong> 5
<strong>Explanation:</strong> The possible sets of closing branches are:
- The set [2], after closing, active branches are [0,1] and they are reachable to each other within distance 2.
- The set [0,1], after closing, the active branch is [2].
- The set [1,2], after closing, the active branch is [0].
- The set [0,2], after closing, the active branch is [1].
- The set [0,1,2], after closing, there are no active branches.
It can be proven, that there are only 5 possible sets of closing branches.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2023/11/08/example22.png" style="width: 221px; height: 241px;" />
<pre>
<strong>Input:</strong> n = 3, maxDistance = 5, roads = [[0,1,20],[0,1,10],[1,2,2],[0,2,2]]
<strong>Output:</strong> 7
<strong>Explanation:</strong> The possible sets of closing branches are:
- The set [], after closing, active branches are [0,1,2] and they are reachable to each other within distance 4.
- The set [0], after closing, active branches are [1,2] and they are reachable to each other within distance 2.
- The set [1], after closing, active branches are [0,2] and they are reachable to each other within distance 2.
- The set [0,1], after closing, the active branch is [2].
- The set [1,2], after closing, the active branch is [0].
- The set [0,2], after closing, the active branch is [1].
- The set [0,1,2], after closing, there are no active branches.
It can be proven, that there are only 7 possible sets of closing branches.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 1, maxDistance = 10, roads = []
<strong>Output:</strong> 2
<strong>Explanation:</strong> The possible sets of closing branches are:
- The set [], after closing, the active branch is [0].
- The set [0], after closing, there are no active branches.
It can be proven, that there are only 2 possible sets of closing branches.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10</code></li>
	<li><code>1 &lt;= maxDistance &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= roads.length &lt;= 1000</code></li>
	<li><code>roads[i].length == 3</code></li>
	<li><code>0 &lt;= u<sub>i</sub>, v<sub>i</sub> &lt;= n - 1</code></li>
	<li><code>u<sub>i</sub> != v<sub>i</sub></code></li>
	<li><code>1 &lt;= w<sub>i</sub> &lt;= 1000</code></li>
	<li>All branches are reachable from each other by traveling some roads.</li>
</ul>


## Solution

---
### Python3
``` py title='number-of-possible-sets-of-closing-branches'
class Solution:
    def numberOfSets(self, n: int, maxDistance: int, roads: List[List[int]]) -> int:
        graph = defaultdict(list)
        res = 0
        INF = inf
        adj = [[INF] * n for _ in range(n)]
        
        for a, b, w in roads:
            adj[a][b] = min(adj[a][b], w)
            adj[b][a] = min(adj[b][a], w)
        
        for mask in range(1 << n):
            closed = [mask & (1 << j) > 0 for j in range(n)]
            dist = [[inf] * n for _ in range(n)]
            
            for i in range(n):
                for j in range(n):
                    if i == j:
                        dist[i][j] = 0
                    elif not closed[i] and not closed[j] and adj[i][j] != INF:
                        dist[i][j] = adj[i][j]
            
            for k in range(n):
                for i in range(n):
                    for j in range(n):
                        dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
            
            ok = True
            for i in range(n):
                if closed[i]: continue
                for j in range(n):
                    if closed[j]: continue
                    if dist[i][j] > maxDistance:
                        ok = False
                        break
                
                if not ok: break

            if ok:
                res += 1
                    
        return res
                
```

