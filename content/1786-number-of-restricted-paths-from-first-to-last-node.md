---
title: 1786. Number of Restricted Paths From First to Last Node
draft: false
tags: 
  - leetcode-medium
  - dynamic-programming
  - graph
  - topological-sort
  - heap-priority-queue
  - shortest-path
  - weekly-contest-231
  - contest-question
date: 2021-12-31
---

[Problem Link](https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/)

## Description

---
<p>There is an undirected weighted connected graph. You are given a positive integer <code>n</code> which denotes that the graph has <code>n</code> nodes labeled from <code>1</code> to <code>n</code>, and an array <code>edges</code> where each <code>edges[i] = [u<sub>i</sub>, v<sub>i</sub>, weight<sub>i</sub>]</code> denotes that there is an edge between nodes <code>u<sub>i</sub></code> and <code>v<sub>i</sub></code> with weight equal to <code>weight<sub>i</sub></code>.</p>

<p>A path from node <code>start</code> to node <code>end</code> is a sequence of nodes <code>[z<sub>0</sub>, z<sub>1</sub>,<sub> </sub>z<sub>2</sub>, ..., z<sub>k</sub>]</code> such that <code>z<sub>0 </sub>= start</code> and <code>z<sub>k</sub> = end</code> and there is an edge between <code>z<sub>i</sub></code> and <code>z<sub>i+1</sub></code> where <code>0 &lt;= i &lt;= k-1</code>.</p>

<p>The distance of a path is the sum of the weights on the edges of the path. Let <code>distanceToLastNode(x)</code> denote the shortest distance of a path between node <code>n</code> and node <code>x</code>. A <strong>restricted path</strong> is a path that also satisfies that <code>distanceToLastNode(z<sub>i</sub>) &gt; distanceToLastNode(z<sub>i+1</sub>)</code> where <code>0 &lt;= i &lt;= k-1</code>.</p>

<p>Return <em>the number of restricted paths from node</em> <code>1</code> <em>to node</em> <code>n</code>. Since that number may be too large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/17/restricted_paths_ex1.png" style="width: 351px; height: 341px;" />
<pre>
<strong>Input:</strong> n = 5, edges = [[1,2,3],[1,3,3],[2,3,1],[1,4,2],[5,2,2],[3,5,1],[5,4,10]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Each circle contains the node number in black and its <code>distanceToLastNode value in blue. </code>The three restricted paths are:
1) 1 --&gt; 2 --&gt; 5
2) 1 --&gt; 2 --&gt; 3 --&gt; 5
3) 1 --&gt; 3 --&gt; 5
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/17/restricted_paths_ex22.png" style="width: 356px; height: 401px;" />
<pre>
<strong>Input:</strong> n = 7, edges = [[1,3,1],[4,1,2],[7,3,4],[2,5,3],[5,6,1],[6,7,2],[7,5,3],[2,6,4]]
<strong>Output:</strong> 1
<strong>Explanation:</strong> Each circle contains the node number in black and its <code>distanceToLastNode value in blue. </code>The only restricted path is 1 --&gt; 3 --&gt; 7.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>n - 1 &lt;= edges.length &lt;= 4 * 10<sup>4</sup></code></li>
	<li><code>edges[i].length == 3</code></li>
	<li><code>1 &lt;= u<sub>i</sub>, v<sub>i</sub> &lt;= n</code></li>
	<li><code>u<sub>i </sub>!= v<sub>i</sub></code></li>
	<li><code>1 &lt;= weight<sub>i</sub> &lt;= 10<sup>5</sup></code></li>
	<li>There is at most one edge between any two nodes.</li>
	<li>There is at least one path between any two nodes.</li>
</ul>


## Solution

---
### Python3
``` py title='number-of-restricted-paths-from-first-to-last-node'
class Solution:
    def countRestrictedPaths(self, n: int, edges: List[List[int]]) -> int:
        M = 10 ** 9 + 7
        graph = collections.defaultdict(list)
        dist = [float('inf')] * n
        dist[n - 1] = 0
        
        for u, v, w in edges:
            u -= 1
            v -= 1
            
            graph[u].append((w, v))
            graph[v].append((w, u))
        
        pq = [(0, n - 1)]
        
        while pq:
            d, src = heapq.heappop(pq)
            
            if dist[src] != d: continue
            
            for weight, nei in graph[src]:
                old = dist[nei]
                new = dist[src] + weight
                
                if new < old:
                    dist[nei] = new
                    heapq.heappush(pq, (new, nei))
        
        @cache
        def dfs(x):
            if x == n - 1: return 1
            
            res = 0
            for _, nei in graph[x]:
                if dist[x] > dist[nei]:
                    res = (res + dfs(nei)) % M
            
            return res
        
        return dfs(0)
```

