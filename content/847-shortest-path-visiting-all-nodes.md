---
title: 847. Shortest Path Visiting All Nodes
draft: false
tags: 
  - leetcode-hard
  - dynamic-programming
  - bit-manipulation
  - breadth-first-search
  - graph
  - bitmask
date: 2023-09-17
---

[Problem Link](https://leetcode.com/problems/shortest-path-visiting-all-nodes/)

## Description

---
<p>You have an undirected, connected graph of <code>n</code> nodes labeled from <code>0</code> to <code>n - 1</code>. You are given an array <code>graph</code> where <code>graph[i]</code> is a list of all the nodes connected with node <code>i</code> by an edge.</p>

<p>Return <em>the length of the shortest path that visits every node</em>. You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/05/12/shortest1-graph.jpg" style="width: 222px; height: 183px;" />
<pre>
<strong>Input:</strong> graph = [[1,2,3],[0],[0],[0]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> One possible path is [1,0,2,0,3]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/05/12/shortest2-graph.jpg" style="width: 382px; height: 222px;" />
<pre>
<strong>Input:</strong> graph = [[1],[0,2,4],[1,3,4],[2],[1,2]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> One possible path is [0,1,4,2,3]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == graph.length</code></li>
	<li><code>1 &lt;= n &lt;= 12</code></li>
	<li><code>0 &lt;= graph[i].length &lt;&nbsp;n</code></li>
	<li><code>graph[i]</code> does not contain <code>i</code>.</li>
	<li>If <code>graph[a]</code> contains <code>b</code>, then <code>graph[b]</code> contains <code>a</code>.</li>
	<li>The input graph is always connected.</li>
</ul>


## Solution

---
### Python3
``` py title='shortest-path-visiting-all-nodes'
class Solution:
    def shortestPathLength(self, graph: List[List[int]]) -> int:
        N = len(graph)
        full_mask = (1 << N) - 1
        visited = set()
        queue = deque()

        for node in range(N):
            queue.append((node, 1 << node, 0))
            visited.add((node, 1 << node))
        
        while queue:
            node, mask, edges = queue.popleft()

            if mask == full_mask: return edges

            for adj in graph[node]:
                if (adj, mask | 1 << adj) not in visited:
                    visited.add((adj, mask | 1 << adj))
                    queue.append((adj, mask | 1 << adj, edges + 1))
        
        return -1
```

