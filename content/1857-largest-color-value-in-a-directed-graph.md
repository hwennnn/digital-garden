---
title: 1857. Largest Color Value in a Directed Graph
draft: false
tags: 
  - leetcode-hard
  - hash-table
  - dynamic-programming
  - graph
  - topological-sort
  - memoization
  - counting
  - weekly-contest-240
  - contest-question
date: 2025-05-26
---

[Problem Link](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/)

## Description

---
<p>There is a <strong>directed graph</strong> of <code>n</code> colored nodes and <code>m</code> edges. The nodes are numbered from <code>0</code> to <code>n - 1</code>.</p>

<p>You are given a string <code>colors</code> where <code>colors[i]</code> is a lowercase English letter representing the <strong>color</strong> of the <code>i<sup>th</sup></code> node in this graph (<strong>0-indexed</strong>). You are also given a 2D array <code>edges</code> where <code>edges[j] = [a<sub>j</sub>, b<sub>j</sub>]</code> indicates that there is a <strong>directed edge</strong> from node <code>a<sub>j</sub></code> to node <code>b<sub>j</sub></code>.</p>

<p>A valid <strong>path</strong> in the graph is a sequence of nodes <code>x<sub>1</sub> -&gt; x<sub>2</sub> -&gt; x<sub>3</sub> -&gt; ... -&gt; x<sub>k</sub></code> such that there is a directed edge from <code>x<sub>i</sub></code> to <code>x<sub>i+1</sub></code> for every <code>1 &lt;= i &lt; k</code>. The <strong>color value</strong> of the path is the number of nodes that are colored the <strong>most frequently</strong> occurring color along that path.</p>

<p>Return <em>the <strong>largest color value</strong> of any valid path in the given graph, or </em><code>-1</code><em> if the graph contains a cycle</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2021/04/21/leet1.png" style="width: 400px; height: 182px;" /></p>

<pre>
<strong>Input:</strong> colors = &quot;abaca&quot;, edges = [[0,1],[0,2],[2,3],[3,4]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> The path 0 -&gt; 2 -&gt; 3 -&gt; 4 contains 3 nodes that are colored <code>&quot;a&quot; (red in the above image)</code>.
</pre>

<p><strong class="example">Example 2:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2021/04/21/leet2.png" style="width: 85px; height: 85px;" /></p>

<pre>
<strong>Input:</strong> colors = &quot;a&quot;, edges = [[0,0]]
<strong>Output:</strong> -1
<strong>Explanation:</strong> There is a cycle from 0 to 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == colors.length</code></li>
	<li><code>m == edges.length</code></li>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= m &lt;= 10<sup>5</sup></code></li>
	<li><code>colors</code> consists of lowercase English letters.</li>
	<li><code>0 &lt;= a<sub>j</sub>, b<sub>j</sub>&nbsp;&lt; n</code></li>
</ul>


## Solution

---
### Python3
``` py title='largest-color-value-in-a-directed-graph'
class Solution:
    def largestPathValue(self, colors: str, edges: List[List[int]]) -> int:
        N = len(colors)
        graph = defaultdict(list)
        indegree = [0] * N
        visited = 0

        for a, b in edges:
            indegree[b] += 1
            graph[a].append(b)

        queue = deque()
        dp = [[0] * 26 for _ in range(N)]
        for node in range(N):
            if indegree[node] == 0:
                queue.append(node)
            
            dp[node][ord(colors[node]) - ord('a')] += 1

        ans = 0

        while queue:
            node = queue.popleft()
            visited += 1

            for adj in graph[node]:
                for k in range(26):
                    dp[adj][k] = max(dp[adj][k], dp[node][k] + int(ord(colors[adj]) - ord('a') == k))
            
                indegree[adj] -= 1
                if indegree[adj] == 0:
                    queue.append(adj)
                
            ans = max(ans, max(dp[node]))
        
        if visited != N: return -1

        return ans
```

