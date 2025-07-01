---
title: 2493. Divide Nodes Into the Maximum Number of Groups
draft: false
tags: 
  - leetcode-hard
  - depth-first-search
  - breadth-first-search
  - union-find
  - graph
  - weekly-contest-322
  - contest-question
date: 2025-01-30
---

[Problem Link](https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/)

## Description

---
<p>You are given a positive integer <code>n</code> representing the number of nodes in an <strong>undirected</strong> graph. The nodes are labeled from <code>1</code> to <code>n</code>.</p>

<p>You are also given a 2D integer array <code>edges</code>, where <code>edges[i] = [a<sub>i, </sub>b<sub>i</sub>]</code> indicates that there is a <strong>bidirectional</strong> edge between nodes <code>a<sub>i</sub></code> and <code>b<sub>i</sub></code>. <strong>Notice</strong> that the given graph may be disconnected.</p>

<p>Divide the nodes of the graph into <code>m</code> groups (<strong>1-indexed</strong>) such that:</p>

<ul>
	<li>Each node in the graph belongs to exactly one group.</li>
	<li>For every pair of nodes in the graph that are connected by an edge <code>[a<sub>i, </sub>b<sub>i</sub>]</code>, if <code>a<sub>i</sub></code> belongs to the group with index <code>x</code>, and <code>b<sub>i</sub></code> belongs to the group with index <code>y</code>, then <code>|y - x| = 1</code>.</li>
</ul>

<p>Return <em>the maximum number of groups (i.e., maximum </em><code>m</code><em>) into which you can divide the nodes</em>. Return <code>-1</code> <em>if it is impossible to group the nodes with the given conditions</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/10/13/example1.png" style="width: 352px; height: 201px;" />
<pre>
<strong>Input:</strong> n = 6, edges = [[1,2],[1,4],[1,5],[2,6],[2,3],[4,6]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> As shown in the image we:
- Add node 5 to the first group.
- Add node 1 to the second group.
- Add nodes 2 and 4 to the third group.
- Add nodes 3 and 6 to the fourth group.
We can see that every edge is satisfied.
It can be shown that that if we create a fifth group and move any node from the third or fourth group to it, at least on of the edges will not be satisfied.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 3, edges = [[1,2],[2,3],[3,1]]
<strong>Output:</strong> -1
<strong>Explanation:</strong> If we add node 1 to the first group, node 2 to the second group, and node 3 to the third group to satisfy the first two edges, we can see that the third edge will not be satisfied.
It can be shown that no grouping is possible.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 500</code></li>
	<li><code>1 &lt;= edges.length &lt;= 10<sup>4</sup></code></li>
	<li><code>edges[i].length == 2</code></li>
	<li><code>1 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt;= n</code></li>
	<li><code>a<sub>i</sub> != b<sub>i</sub></code></li>
	<li>There is at most one edge between any pair of vertices.</li>
</ul>


## Solution

---
### Python3
``` py title='divide-nodes-into-the-maximum-number-of-groups'
def is_bipartite(graph, n):
    color = defaultdict(int)

    def go(x):
        for node in graph[x]:
            if node not in color:
                color[node] = -color[x]
                if not go(node):
                    return False
            else:
                if color[x] == color[node]:
                    return False

        return True

    for i in range(n):
        if i not in color:
            color[i] = 1
            if not go(i):
                return False

    return True
                

class Solution:
    def magnificentSets(self, N: int, edges: List[List[int]]) -> int:
        graph = defaultdict(list)
        
        for a, b in edges:
            a -= 1
            b -= 1
            graph[a].append(b)
            graph[b].append(a)
        
        if not is_bipartite(graph, N): return -1
        
        groups = []
        grouped = set()
        
        for node in range(N):
            if node in grouped: continue
            
            group = set([node])
            stack = [node]
            
            while stack:
                curr = stack.pop()
                
                for nei in graph[curr]:
                    if nei in group: continue
                    group.add(nei)
                    stack.append(nei)
            
            groups.append(group)
            grouped |= group
        
        res = 0
        for group in groups:
            maxDepth = 0
            
            for start in group:
                depth = {}
                depth[start] = 0
                queue = deque([start])
                
                while queue:
                    node = queue.popleft()
                    
                    for nei in graph[node]:
                        if nei in depth: continue
                        
                        depth[nei] = depth[node] + 1
                        queue.append(nei)
                
                maxDepth = max(maxDepth, max(depth.values()))
                
            res += maxDepth + 1
        
        return res
        
```

