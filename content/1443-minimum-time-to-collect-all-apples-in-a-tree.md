---
title: 1443. Minimum Time to Collect All Apples in a Tree
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - tree
  - depth-first-search
  - breadth-first-search
date: 2023-01-11
---

[Problem Link](https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/)

## Description

---
<p>Given an undirected tree consisting of <code>n</code> vertices numbered from <code>0</code> to <code>n-1</code>, which has some apples in their vertices. You spend 1 second to walk over one edge of the tree. <em>Return the minimum time in seconds you have to spend to collect all apples in the tree, starting at <strong>vertex 0</strong> and coming back to this vertex.</em></p>

<p>The edges of the undirected tree are given in the array <code>edges</code>, where <code>edges[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> means that exists an edge connecting the vertices <code>a<sub>i</sub></code> and <code>b<sub>i</sub></code>. Additionally, there is a boolean array <code>hasApple</code>, where <code>hasApple[i] = true</code> means that vertex <code>i</code> has an apple; otherwise, it does not have any apple.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/04/23/min_time_collect_apple_1.png" style="width: 300px; height: 212px;" />
<pre>
<strong>Input:</strong> n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false]
<strong>Output:</strong> 8 
<strong>Explanation:</strong> The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.  
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/04/23/min_time_collect_apple_2.png" style="width: 300px; height: 212px;" />
<pre>
<strong>Input:</strong> n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,false,true,false]
<strong>Output:</strong> 6
<strong>Explanation:</strong> The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.  
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,false,false,false,false,false]
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>edges.length == n - 1</code></li>
	<li><code>edges[i].length == 2</code></li>
	<li><code>0 &lt;= a<sub>i</sub> &lt; b<sub>i</sub> &lt;= n - 1</code></li>
	<li><code>hasApple.length == n</code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-time-to-collect-all-apples-in-a-tree'
class Solution:
    def minTime(self, n: int, edges: List[List[int]], hasApple: List[bool]) -> int:
        graph = defaultdict(list)

        for a, b in edges:
            graph[a].append(b)
            graph[b].append(a)
        
        def go(node, prev):
            val = 2 if hasApple[node] else 0

            for nei in graph[node]:
                if prev != nei:
                    val += go(nei, node)

            return 2 + val if not hasApple[node] and val > 0 else val

        return max(0, go(0, -1) - 2)
```
