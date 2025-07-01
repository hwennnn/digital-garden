---
title: 1579. Remove Max Number of Edges to Keep Graph Fully Traversable
draft: false
tags: 
  - leetcode-hard
  - union-find
  - graph
  - weekly-contest-205
  - contest-question
date: 2024-06-30
---

[Problem Link](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/)

## Description

---
<p>Alice and Bob have an undirected graph of <code>n</code> nodes and three types of edges:</p>

<ul>
	<li>Type 1: Can be traversed by Alice only.</li>
	<li>Type 2: Can be traversed by Bob only.</li>
	<li>Type 3: Can be traversed by both Alice and Bob.</li>
</ul>

<p>Given an array <code>edges</code> where <code>edges[i] = [type<sub>i</sub>, u<sub>i</sub>, v<sub>i</sub>]</code> represents a bidirectional edge of type <code>type<sub>i</sub></code> between nodes <code>u<sub>i</sub></code> and <code>v<sub>i</sub></code>, find the maximum number of edges you can remove so that after removing the edges, the graph can still be fully traversed by both Alice and Bob. The graph is fully traversed by Alice and Bob if starting from any node, they can reach all other nodes.</p>

<p>Return <em>the maximum number of edges you can remove, or return</em> <code>-1</code> <em>if Alice and Bob cannot fully traverse the graph.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2020/08/19/ex1.png" style="width: 179px; height: 191px;" /></strong></p>

<pre>
<strong>Input:</strong> n = 4, edges = [[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]]
<strong>Output:</strong> 2
<strong>Explanation: </strong>If we remove the 2 edges [1,1,2] and [1,1,3]. The graph will still be fully traversable by Alice and Bob. Removing any additional edge will not make it so. So the maximum number of edges we can remove is 2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2020/08/19/ex2.png" style="width: 178px; height: 190px;" /></strong></p>

<pre>
<strong>Input:</strong> n = 4, edges = [[3,1,2],[3,2,3],[1,1,4],[2,1,4]]
<strong>Output:</strong> 0
<strong>Explanation: </strong>Notice that removing any edge will not make the graph fully traversable by Alice and Bob.
</pre>

<p><strong class="example">Example 3:</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2020/08/19/ex3.png" style="width: 178px; height: 190px;" /></strong></p>

<pre>
<strong>Input:</strong> n = 4, edges = [[3,2,3],[1,1,2],[2,3,4]]
<strong>Output:</strong> -1
<b>Explanation: </b>In the current graph, Alice cannot reach node 4 from the other nodes. Likewise, Bob cannot reach 1. Therefore it&#39;s impossible to make the graph fully traversable.</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= edges.length &lt;= min(10<sup>5</sup>, 3 * n * (n - 1) / 2)</code></li>
	<li><code>edges[i].length == 3</code></li>
	<li><code>1 &lt;= type<sub>i</sub> &lt;= 3</code></li>
	<li><code>1 &lt;= u<sub>i</sub> &lt; v<sub>i</sub> &lt;= n</code></li>
	<li>All tuples <code>(type<sub>i</sub>, u<sub>i</sub>, v<sub>i</sub>)</code> are distinct.</li>
</ul>


## Solution

---
### Python3
``` py title='remove-max-number-of-edges-to-keep-graph-fully-traversable'
class DSU:
    def __init__(self, n):
        self.parent = [i for i in range(n)]
        self.rank = [0 for i in range(n)]

    def find(self, x):
        if self.parent[x] == x:
            return self.parent[x]
        self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, u, v):
        pu = self.find(u)
        pv = self.find(v)

        if self.rank[pu] < self.rank[v]:
            pu, pv = pv, pu

        self.parent[pv] = pu
        self.rank[pu] += self.rank[pv]
    
    def count(self):
        par_set = set()
        for parent in self.parent:
            par_set.add(self.find(parent))
        return len(par_set)

class Solution:
    def maxNumEdgesToRemove(self, n: int, edges: List[List[int]]) -> int:
        edges.sort(key = lambda x : -x[0])
        alice = DSU(n)
        bob = DSU(n)
        res = 0

        for t, x, y in edges:
            x -= 1
            y -= 1

            if t == 3:
                shouldAdd = alice.find(x) != alice.find(y) or bob.find(x) != bob.find(y)

                if shouldAdd:
                    alice.union(x, y)
                    bob.union(x, y)
                else:
                    res += 1
            elif t == 2:
                if bob.find(x) != bob.find(y):
                    bob.union(x, y)
                else:
                    res += 1
            else:
                if alice.find(x) != alice.find(y):
                    alice.union(x, y)
                else:
                    res += 1

        if alice.count() != 1 or bob.count() != 1: return -1

        return res
```

