---
title: 2440. Create Components With Same Value
draft: false
tags: 
  - leetcode-hard
  - array
  - math
  - tree
  - depth-first-search
  - enumeration
  - biweekly-contest-89
  - contest-question
date: 2022-10-25
---

[Problem Link](https://leetcode.com/problems/create-components-with-same-value/)

## Description

---
<p>There is an undirected tree with <code>n</code> nodes labeled from <code>0</code> to <code>n - 1</code>.</p>

<p>You are given a <strong>0-indexed</strong> integer array <code><font face="monospace">nums</font></code> of length <code>n</code> where <code>nums[i]</code> represents the value of the <code>i<sup>th</sup></code> node. You are also given a 2D integer array <code>edges</code> of length <code>n - 1</code> where <code>edges[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> indicates that there is an edge between nodes <code>a<sub>i</sub></code> and <code>b<sub>i</sub></code> in the tree.</p>

<p>You are allowed to <strong>delete</strong> some edges, splitting the tree into multiple connected components. Let the <strong>value</strong> of a component be the sum of <strong>all</strong> <code>nums[i]</code> for which node <code>i</code> is in the component.</p>

<p>Return<em> the <strong>maximum</strong> number of edges you can delete, such that every connected component in the tree has the same value.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/08/26/diagramdrawio.png" style="width: 441px; height: 351px;" />
<pre>
<strong>Input:</strong> nums = [6,2,2,2,6], edges = [[0,1],[1,2],[1,3],[3,4]] 
<strong>Output:</strong> 2 
<strong>Explanation:</strong> The above figure shows how we can delete the edges [0,1] and [3,4]. The created components are nodes [0], [1,2,3] and [4]. The sum of the values in each component equals 6. It can be proven that no better deletion exists, so the answer is 2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [2], edges = []
<strong>Output:</strong> 0
<strong>Explanation:</strong> There are no edges to be deleted.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>nums.length == n</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 50</code></li>
	<li><code>edges.length == n - 1</code></li>
	<li><code>edges[i].length == 2</code></li>
	<li><code>0 &lt;= edges[i][0], edges[i][1] &lt;= n - 1</code></li>
	<li><code>edges</code> represents a valid tree.</li>
</ul>


## Solution

---
### Python3
``` py title='create-components-with-same-value'
class Solution:
    def componentValue(self, nums: List[int], edges: List[List[int]]) -> int:
        N = len(nums)
        graph = defaultdict(list)
        total = sum(nums)
        
        for a, b in edges:
            graph[a].append(b)
            graph[b].append(a)
        
        def good(divisor):
            if total % divisor != 0: return False
            
            target = total // divisor
            count = 0
            visited = [False] * N
            
            def dfs(node):
                nonlocal count
                
                if visited[node]: return 0    
                visited[node] = True
                
                curr = nums[node]
                
                for nei in graph[node]:
                    curr += dfs(nei)
                
                if curr == target:
                    count += 1
                    curr = 0
                
                return curr
                
            dfs(0)
            return count == divisor
        
        for divisor in range(N, 0, -1):
            if good(divisor):
                return divisor - 1
        
        return 0
```

