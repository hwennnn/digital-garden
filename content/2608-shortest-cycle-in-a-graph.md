---
title: 2608. Shortest Cycle in a Graph
draft: false
tags: 
  - leetcode-hard
  - breadth-first-search
  - graph
  - biweekly-contest-101
  - contest-question
date: 2023-04-02
---

[Problem Link](https://leetcode.com/problems/shortest-cycle-in-a-graph/)

## Description

---
<p>There is a <strong>bi-directional </strong>graph with <code>n</code> vertices, where each vertex is labeled from <code>0</code> to <code>n - 1</code>. The edges in the graph are represented by a given 2D integer array <code>edges</code>, where <code>edges[i] = [u<sub>i</sub>, v<sub>i</sub>]</code> denotes an edge between vertex <code>u<sub>i</sub></code> and vertex <code>v<sub>i</sub></code>. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.</p>

<p>Return <em>the length of the <strong>shortest </strong>cycle in the graph</em>. If no cycle exists, return <code>-1</code>.</p>

<p>A cycle is a path that starts and ends at the same node, and each edge in the path is used only once.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2023/01/04/cropped.png" style="width: 387px; height: 331px;" />
<pre>
<strong>Input:</strong> n = 7, edges = [[0,1],[1,2],[2,0],[3,4],[4,5],[5,6],[6,3]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> The cycle with the smallest length is : 0 -&gt; 1 -&gt; 2 -&gt; 0 
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2023/01/04/croppedagin.png" style="width: 307px; height: 307px;" />
<pre>
<strong>Input:</strong> n = 4, edges = [[0,1],[0,2]]
<strong>Output:</strong> -1
<strong>Explanation:</strong> There are no cycles in this graph.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= n &lt;= 1000</code></li>
	<li><code>1 &lt;= edges.length &lt;= 1000</code></li>
	<li><code>edges[i].length == 2</code></li>
	<li><code>0 &lt;= u<sub>i</sub>, v<sub>i</sub> &lt; n</code></li>
	<li><code>u<sub>i</sub> != v<sub>i</sub></code></li>
	<li>There are no repeated edges.</li>
</ul>


## Solution

---
### Python3
``` py title='shortest-cycle-in-a-graph'
class Solution:
    def findShortestCycle(self, n: int, edges: List[List[int]]) -> int:
        graph = defaultdict(list)
        
        for a, b in edges:
            graph[a].append(b)
            graph[b].append(a)
        
        res = inf
        
        for node in range(n):
            dist = [-1] * n
            dist[node] = 0
            queue = deque([node])
            
            while queue:
                curr = queue.popleft()
                
                for adj in graph[curr]:
                    if dist[adj] == -1:
                        dist[adj] = dist[curr] + 1
                        queue.append(adj)
                    elif dist[adj] >= dist[curr]:
                        res = min(res, dist[curr] + dist[adj] + 1)
        
        return -1 if res == inf else res
```

