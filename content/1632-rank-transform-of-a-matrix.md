---
title: 1632. Rank Transform of a Matrix
draft: false
tags: 
  - leetcode-hard
  - array
  - union-find
  - graph
  - topological-sort
  - sorting
  - matrix
  - weekly-contest-212
  - contest-question
date: 2021-08-08
---

[Problem Link](https://leetcode.com/problems/rank-transform-of-a-matrix/)

## Description

---
<p>Given an <code>m x n</code> <code>matrix</code>, return <em>a new matrix </em><code>answer</code><em> where </em><code>answer[row][col]</code><em> is the </em><em><strong>rank</strong> of </em><code>matrix[row][col]</code>.</p>

<p>The <strong>rank</strong> is an <strong>integer</strong> that represents how large an element is compared to other elements. It is calculated using the following rules:</p>

<ul>
	<li>The rank is an integer starting from <code>1</code>.</li>
	<li>If two elements <code>p</code> and <code>q</code> are in the <strong>same row or column</strong>, then:
	<ul>
		<li>If <code>p &lt; q</code> then <code>rank(p) &lt; rank(q)</code></li>
		<li>If <code>p == q</code> then <code>rank(p) == rank(q)</code></li>
		<li>If <code>p &gt; q</code> then <code>rank(p) &gt; rank(q)</code></li>
	</ul>
	</li>
	<li>The <strong>rank</strong> should be as <strong>small</strong> as possible.</li>
</ul>

<p>The test cases are generated so that <code>answer</code> is unique under the given rules.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/18/rank1.jpg" style="width: 442px; height: 162px;" />
<pre>
<strong>Input:</strong> matrix = [[1,2],[3,4]]
<strong>Output:</strong> [[1,2],[2,3]]
<strong>Explanation:</strong>
The rank of matrix[0][0] is 1 because it is the smallest integer in its row and column.
The rank of matrix[0][1] is 2 because matrix[0][1] &gt; matrix[0][0] and matrix[0][0] is rank 1.
The rank of matrix[1][0] is 2 because matrix[1][0] &gt; matrix[0][0] and matrix[0][0] is rank 1.
The rank of matrix[1][1] is 3 because matrix[1][1] &gt; matrix[0][1], matrix[1][1] &gt; matrix[1][0], and both matrix[0][1] and matrix[1][0] are rank 2.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/18/rank2.jpg" style="width: 442px; height: 162px;" />
<pre>
<strong>Input:</strong> matrix = [[7,7],[7,7]]
<strong>Output:</strong> [[1,1],[1,1]]
</pre>

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/18/rank3.jpg" style="width: 601px; height: 322px;" />
<pre>
<strong>Input:</strong> matrix = [[20,-21,14],[-19,4,19],[22,-47,24],[-19,4,19]]
<strong>Output:</strong> [[4,2,3],[1,3,4],[5,1,6],[1,3,4]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == matrix.length</code></li>
	<li><code>n == matrix[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 500</code></li>
	<li><code>-10<sup>9</sup> &lt;= matrix[row][col] &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='rank-transform-of-a-matrix'
class DSU:
    def __init__(self, graph):
        self.p = {i:i for i in graph}

    def find(self, x):
        if self.p[x] != x:
            self.p[x] = self.find(self.p[x])
        return self.p[x]

    def union(self, x, y):
        self.p[self.find(x)] = self.find(y)
        
    def groups(self):
        ans = defaultdict(list)
        for el in self.p.keys():
            ans[self.find(el)].append(el)
        return ans
        
class Solution:
    def matrixRankTransform(self, M):
        n, m = len(M), len(M[0])
        rank = [0] * (m + n)
        d = defaultdict(list)
        
        for i, j in product(range(n), range(m)):
            d[M[i][j]].append([i, j])

        for a in sorted(d):
            graph = [i for i, j in d[a]] + [j + n for i, j in d[a]]
            dsu = DSU(graph)
            for i, j in d[a]: dsu.union(i, j + n)

            for group in dsu.groups().values():
                mx = max(rank[i] for i in group)
                for i in group: rank[i] = mx + 1
                    
            for i, j in d[a]: M[i][j] = rank[i]
            
        return M
```

