---
title: 2603. Collect Coins in a Tree
draft: false
tags: 
  - leetcode-hard
  - array
  - tree
  - graph
  - topological-sort
date: 2023-04-10
---

[Problem Link](https://leetcode.com/problems/collect-coins-in-a-tree/)

## Description

---
<p>There exists an undirected and unrooted tree with <code>n</code> nodes indexed from <code>0</code> to <code>n - 1</code>. You are given an integer <code>n</code> and a 2D integer array edges of length <code>n - 1</code>, where <code>edges[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> indicates that there is an edge between nodes <code>a<sub>i</sub></code> and <code>b<sub>i</sub></code> in the tree. You are also given&nbsp;an array <code>coins</code> of size <code>n</code> where <code>coins[i]</code> can be either <code>0</code> or <code>1</code>, where <code>1</code> indicates the presence of a coin in the vertex <code>i</code>.</p>

<p>Initially, you choose to start at any vertex in&nbsp;the tree.&nbsp;Then, you can perform&nbsp;the following operations any number of times:&nbsp;</p>

<ul>
	<li>Collect all the coins that are at a distance of at most <code>2</code> from the current vertex, or</li>
	<li>Move to any adjacent vertex in the tree.</li>
</ul>

<p>Find <em>the minimum number of edges you need to go through to collect all the coins and go back to the initial vertex</em>.</p>

<p>Note that if you pass an edge several times, you need to count it into the answer several times.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2023/03/01/graph-2.png" style="width: 522px; height: 522px;" />
<pre>
<strong>Input:</strong> coins = [1,0,0,0,0,1], edges = [[0,1],[1,2],[2,3],[3,4],[4,5]]
<strong>Output:</strong> 2
<strong>Explanation:</strong> Start at vertex 2, collect the coin at vertex 0, move to vertex 3, collect the coin at vertex 5 then move back to vertex 2.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2023/03/02/graph-4.png" style="width: 522px; height: 522px;" />
<pre>
<strong>Input:</strong> coins = [0,0,0,1,1,0,0,1], edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[5,6],[5,7]]
<strong>Output:</strong> 2
<strong>Explanation:</strong> Start at vertex 0, collect the coins at vertices 4 and 3, move to vertex 2,  collect the coin at vertex 7, then move back to vertex 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == coins.length</code></li>
	<li><code>1 &lt;= n &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>0 &lt;= coins[i] &lt;= 1</code></li>
	<li><code>edges.length == n - 1</code></li>
	<li><code>edges[i].length == 2</code></li>
	<li><code>0 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt; n</code></li>
	<li><code>a<sub>i</sub> != b<sub>i</sub></code></li>
	<li><code>edges</code> represents a valid tree.</li>
</ul>


## Solution

---
### Python3
``` py title='collect-coins-in-a-tree'
class Solution:
    def collectTheCoins(self, coins: List[int], edges: List[List[int]]) -> int:
        N = len(coins)
        graph = [set() for _ in range(N)]
        leaf = deque()

        for a, b in edges:
            graph[a].add(b)
            graph[b].add(a)
        
        for node in range(N):
            while len(graph[node]) == 1 and coins[node] == 0:
                adj = graph[node].pop()
                graph[adj].remove(node)
                node = adj
            
            if len(graph[node]) == 1:
                leaf.append(node)
        
        for _ in range(2):
            for _ in range(len(leaf)):
                node = leaf.popleft()

                if len(graph[node]) > 0:
                    adj = graph[node].pop()
                    graph[adj].remove(node)

                    if len(graph[adj]) == 1:
                        leaf.append(adj)

        return sum(len(graph[node]) for node in range(N))
```
