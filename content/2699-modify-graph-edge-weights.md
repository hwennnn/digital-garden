---
title: 2699. Modify Graph Edge Weights
draft: false
tags: 
  - leetcode-hard
  - graph
  - heap-priority-queue
  - shortest-path
  - weekly-contest-346
  - contest-question
date: 2024-12-26
---

[Problem Link](https://leetcode.com/problems/modify-graph-edge-weights/)

## Description

---
<p>You are given an <strong>undirected weighted</strong> <strong>connected</strong> graph containing <code>n</code> nodes labeled from <code>0</code> to <code>n - 1</code>, and an integer array <code>edges</code> where <code>edges[i] = [a<sub>i</sub>, b<sub>i</sub>, w<sub>i</sub>]</code> indicates that there is an edge between nodes <code>a<sub>i</sub></code> and <code>b<sub>i</sub></code> with weight <code>w<sub>i</sub></code>.</p>

<p>Some edges have a weight of <code>-1</code> (<code>w<sub>i</sub> = -1</code>), while others have a <strong>positive</strong> weight (<code>w<sub>i</sub> &gt; 0</code>).</p>

<p>Your task is to modify <strong>all edges</strong> with a weight of <code>-1</code> by assigning them <strong>positive integer values </strong>in the range <code>[1, 2 * 10<sup>9</sup>]</code> so that the <strong>shortest distance</strong> between the nodes <code>source</code> and <code>destination</code> becomes equal to an integer <code>target</code>. If there are <strong>multiple</strong> <strong>modifications</strong> that make the shortest distance between <code>source</code> and <code>destination</code> equal to <code>target</code>, any of them will be considered correct.</p>

<p>Return <em>an array containing all edges (even unmodified ones) in any order if it is possible to make the shortest distance from </em><code>source</code><em> to </em><code>destination</code><em> equal to </em><code>target</code><em>, or an <strong>empty array</strong> if it&#39;s impossible.</em></p>

<p><strong>Note:</strong> You are not allowed to modify the weights of edges with initial positive weights.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<p><strong class="example"><img alt="" src="https://assets.leetcode.com/uploads/2023/04/18/graph.png" style="width: 300px; height: 300px;" /></strong></p>

<pre>
<strong>Input:</strong> n = 5, edges = [[4,1,-1],[2,0,-1],[0,3,-1],[4,3,-1]], source = 0, destination = 1, target = 5
<strong>Output:</strong> [[4,1,1],[2,0,1],[0,3,3],[4,3,1]]
<strong>Explanation:</strong> The graph above shows a possible modification to the edges, making the distance from 0 to 1 equal to 5.
</pre>

<p><strong class="example">Example 2:</strong></p>

<p><strong class="example"><img alt="" src="https://assets.leetcode.com/uploads/2023/04/18/graph-2.png" style="width: 300px; height: 300px;" /></strong></p>

<pre>
<strong>Input:</strong> n = 3, edges = [[0,1,-1],[0,2,5]], source = 0, destination = 2, target = 6
<strong>Output:</strong> []
<strong>Explanation:</strong> The graph above contains the initial edges. It is not possible to make the distance from 0 to 2 equal to 6 by modifying the edge with weight -1. So, an empty array is returned.
</pre>

<p><strong class="example">Example 3:</strong></p>

<p><strong class="example"><img alt="" src="https://assets.leetcode.com/uploads/2023/04/19/graph-3.png" style="width: 300px; height: 300px;" /></strong></p>

<pre>
<strong>Input:</strong> n = 4, edges = [[1,0,4],[1,2,3],[2,3,5],[0,3,-1]], source = 0, destination = 2, target = 6
<strong>Output:</strong> [[1,0,4],[1,2,3],[2,3,5],[0,3,1]]
<strong>Explanation:</strong> The graph above shows a modified graph having the shortest distance from 0 to 2 as 6.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 100</code></li>
	<li><code><font face="monospace">1 &lt;= edges.length &lt;= n * (n - 1) / 2</font></code></li>
	<li><code>edges[i].length == 3</code></li>
	<li><code>0 &lt;= a<sub>i</sub>, b<sub>i&nbsp;</sub>&lt;&nbsp;n</code></li>
	<li><code><font face="monospace">w<sub>i</sub>&nbsp;= -1&nbsp;</font></code>or <code><font face="monospace">1 &lt;= w<sub>i&nbsp;</sub>&lt;= 10<sup><span style="font-size: 10.8333px;">7</span></sup></font></code></li>
	<li><code>a<sub>i&nbsp;</sub>!=&nbsp;b<sub>i</sub></code></li>
	<li><code>0 &lt;= source, destination &lt; n</code></li>
	<li><code>source != destination</code></li>
	<li><code><font face="monospace">1 &lt;= target &lt;= 10<sup>9</sup></font></code></li>
	<li>The graph is connected, and there are no self-loops or repeated edges</li>
</ul>


## Solution

---
### Python3
``` py title='modify-graph-edge-weights'
class Solution:
    def modifiedGraphEdges(self, n: int, edges: List[List[int]], source: int, destination: int, target: int) -> List[List[int]]:
        graph = defaultdict(list)

        for a, b, w in edges:
            if w == -1: continue

            graph[a].append((b, w))
            graph[b].append((a, w))
        
        def dijkstra():
            dist = [inf] * n
            dist[source] = 0
            pq = [(0, source)]

            while pq:
                w, node = heappop(pq)

                if w != dist[node]:
                    continue
                
                for adj, w2 in graph[node]:
                    newWeight = w + w2
                    if newWeight < dist[adj]:
                        dist[adj] = newWeight
                        heappush(pq, (newWeight, adj))

            return dist

        dist = dijkstra()
        if dist[destination] < target:
            return []
        
        if dist[destination] == target:
            for i, (a, b, w) in enumerate(edges):
                if w == -1:
                    edges[i][2] = 10 ** 9 + 1
            
            return edges
        
        for i, (a, b, w) in enumerate(edges):
            if w != -1: continue

            edges[i][2] = 1
            graph[a].append((b, 1))
            graph[b].append((a, 1))

            dist = dijkstra()
            if dist[destination] <= target:
                edges[i][2] += target - dist[destination]

                for i, (a, b, w) in enumerate(edges):
                    if w == -1:
                        edges[i][2] = 10 ** 9 + 1
                
                return edges
        
        return []
```

