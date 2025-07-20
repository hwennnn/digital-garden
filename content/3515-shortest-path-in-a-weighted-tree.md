---
title: 3515. Shortest Path in a Weighted Tree
draft: false
tags: 
  - leetcode-hard
  - array
  - tree
  - depth-first-search
  - binary-indexed-tree
  - segment-tree
  - biweekly-contest-154
  - contest-question
date: 2025-07-19
---

[Problem Link](https://leetcode.com/problems/shortest-path-in-a-weighted-tree/)

## Description

---
<p>You are given an integer <code>n</code> and an undirected, weighted tree rooted at node 1 with <code>n</code> nodes numbered from 1 to <code>n</code>. This is represented by a 2D array <code>edges</code> of length <code>n - 1</code>, where <code>edges[i] = [u<sub>i</sub>, v<sub>i</sub>, w<sub>i</sub>]</code> indicates an undirected edge from node <code>u<sub>i</sub></code> to <code>v<sub>i</sub></code> with weight <code>w<sub>i</sub></code>.</p>

<p>You are also given a 2D integer array <code>queries</code> of length <code>q</code>, where each <code>queries[i]</code> is either:</p>

<ul>
	<li><code>[1, u, v, w&#39;]</code> &ndash; <strong>Update</strong> the weight of the edge between nodes <code>u</code> and <code>v</code> to <code>w&#39;</code>, where <code>(u, v)</code> is guaranteed to be an edge present in <code>edges</code>.</li>
	<li><code>[2, x]</code> &ndash; <strong>Compute</strong> the <strong>shortest</strong> path distance from the root node 1 to node <code>x</code>.</li>
</ul>

<p>Return an integer array <code>answer</code>, where <code>answer[i]</code> is the <strong>shortest</strong> path distance from node 1 to <code>x</code> for the <code>i<sup>th</sup></code> query of <code>[2, x]</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 2, edges = [[1,2,7]], queries = [[2,2],[1,1,2,4],[2,2]]</span></p>

<p><strong>Output:</strong> <span class="example-io">[7,4]</span></p>

<p><strong>Explanation:</strong></p>

<p><img src="https://assets.leetcode.com/uploads/2025/03/13/screenshot-2025-03-13-at-133524.png" style="width: 200px; height: 75px;" /></p>

<ul>
	<li>Query <code>[2,2]</code>: The shortest path from root node 1 to node 2 is 7.</li>
	<li>Query <code>[1,1,2,4]</code>: The weight of edge <code>(1,2)</code> changes from 7 to 4.</li>
	<li>Query <code>[2,2]</code>: The shortest path from root node 1 to node 2 is 4.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 3, edges = [[1,2,2],[1,3,4]], queries = [[2,1],[2,3],[1,1,3,7],[2,2],[2,3]]</span></p>

<p><strong>Output:</strong> <span class="example-io">[0,4,2,7]</span></p>

<p><strong>Explanation:</strong></p>

<p><img src="https://assets.leetcode.com/uploads/2025/03/13/screenshot-2025-03-13-at-132247.png" style="width: 180px; height: 141px;" /></p>

<ul>
	<li>Query <code>[2,1]</code>: The shortest path from root node 1 to node 1 is 0.</li>
	<li>Query <code>[2,3]</code>: The shortest path from root node 1 to node 3 is 4.</li>
	<li>Query <code>[1,1,3,7]</code>: The weight of edge <code>(1,3)</code> changes from 4 to 7.</li>
	<li>Query <code>[2,2]</code>: The shortest path from root node 1 to node 2 is 2.</li>
	<li>Query <code>[2,3]</code>: The shortest path from root node 1 to node 3 is 7.</li>
</ul>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 4, edges = [[1,2,2],[2,3,1],[3,4,5]], queries = [[2,4],[2,3],[1,2,3,3],[2,2],[2,3]]</span></p>

<p><strong>Output:</strong> [8,3,2,5]</p>

<p><strong>Explanation:</strong></p>

<p><img src="https://assets.leetcode.com/uploads/2025/03/13/screenshot-2025-03-13-at-133306.png" style="width: 400px; height: 85px;" /></p>

<ul>
	<li>Query <code>[2,4]</code>: The shortest path from root node 1 to node 4 consists of edges <code>(1,2)</code>, <code>(2,3)</code>, and <code>(3,4)</code> with weights <code>2 + 1 + 5 = 8</code>.</li>
	<li>Query <code>[2,3]</code>: The shortest path from root node 1 to node 3 consists of edges <code>(1,2)</code> and <code>(2,3)</code> with weights <code>2 + 1 = 3</code>.</li>
	<li>Query <code>[1,2,3,3]</code>: The weight of edge <code>(2,3)</code> changes from 1 to 3.</li>
	<li>Query <code>[2,2]</code>: The shortest path from root node 1 to node 2 is 2.</li>
	<li>Query <code>[2,3]</code>: The shortest path from root node 1 to node 3 consists of edges <code>(1,2)</code> and <code>(2,3)</code> with updated weights <code>2 + 3 = 5</code>.</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>edges.length == n - 1</code></li>
	<li><code>edges[i] == [u<sub>i</sub>, v<sub>i</sub>, w<sub>i</sub>]</code></li>
	<li><code>1 &lt;= u<sub>i</sub>, v<sub>i</sub> &lt;= n</code></li>
	<li><code>1 &lt;= w<sub>i</sub> &lt;= 10<sup>4</sup></code></li>
	<li>The input is generated such that <code>edges</code> represents a valid tree.</li>
	<li><code>1 &lt;= queries.length == q &lt;= 10<sup>5</sup></code></li>
	<li><code>queries[i].length == 2</code> or <code>4</code>
	<ul>
		<li><code>queries[i] == [1, u, v, w&#39;]</code> or,</li>
		<li><code>queries[i] == [2, x]</code></li>
		<li><code>1 &lt;= u, v, x &lt;= n</code></li>
		<li><code data-end="37" data-start="29">(u, v)</code> is always an edge from <code data-end="74" data-start="67">edges</code>.</li>
		<li><code>1 &lt;= w&#39; &lt;= 10<sup>4</sup></code></li>
	</ul>
	</li>
</ul>


## Solution

---
### Python3
``` py title='shortest-path-in-a-weighted-tree'
class SegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self.build(1, 0, self.n - 1, arr)
 
    def build(self, v, tl, tr, arr):
        if tl == tr:
            self.tree[v] = arr[tl]
        else:
            tm = tl + (tr - tl) // 2
            self.build(v * 2, tl, tm, arr)
            self.build(v * 2 + 1, tm + 1, tr, arr)
            self.tree[v] = self.tree[v * 2] + self.tree[v * 2 + 1]
 
    def queryHelper(self, l, r):
        return self.query(1, 0, self.n - 1, l, r)

    def query(self, v, tl, tr, l, r):
        if l > r: return 0
 
        if tl == l and tr == r:
            return self.tree[v]
        else:
            tm = tl + (tr - tl) // 2
 
        return self.query(v * 2, tl, tm, l, min(tm, r)) + self.query(v * 2 + 1, tm + 1, tr, max(tm + 1, l), r)
    
    def updateHelper(self, pos, value):
        self.update(1, 0, self.n - 1, pos, value)
 
    def update(self, v, tl, tr, pos, value):
        if tl == tr:
            self.tree[v] = value
        else:
            tm = tl + (tr - tl) // 2
 
            if pos <= tm:
                self.update(v * 2, tl, tm, pos, value)
            else:
                self.update(v * 2 + 1, tm + 1, tr, pos, value)
 
            self.tree[v] = self.tree[v * 2] + self.tree[v * 2 + 1]

class Solution:
    def treeQueries(self, n: int, edges: List[List[int]], queries: List[List[int]]) -> List[int]:
        graph = defaultdict(list)
        for a, b, w in edges:
            graph[a].append((b, w))
            graph[b].append((a, w))
        
        flat_tree = []
        tin = [0] * (n + 1)
        tout = [0] * (n + 1)

        def dfs(node, prev, weight):
            flat_tree.append(weight)
            tin[node] = len(flat_tree) - 1

            for adj, w2 in graph[node]:
                if adj != prev:
                    dfs(adj, node, w2)
            
            flat_tree.append(-weight)
            tout[node] = len(flat_tree) - 1
        
        dfs(1, -1, 0)

        res = []
        st = SegmentTree(flat_tree)

        for q in queries:
            if q[0] == 1:
                _, a, b, w = q
                if a > b:
                    a, b = b, a
                node_in, node_out = tin[b], tout[b]
                st.updateHelper(node_in, w)
                st.updateHelper(node_out, -w)
            else:
                node = q[1]
                node_out = tin[node]
                res.append(st.queryHelper(0, node_out))

        return res
```

