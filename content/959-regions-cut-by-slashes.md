---
title: 959. Regions Cut By Slashes
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - depth-first-search
  - breadth-first-search
  - union-find
  - matrix
  - weekly-contest-115
  - contest-question
date: 2024-08-10
---

[Problem Link](https://leetcode.com/problems/regions-cut-by-slashes/)

## Description

---
<p>An <code>n x n</code> grid is composed of <code>1 x 1</code> squares where each <code>1 x 1</code> square consists of a <code>&#39;/&#39;</code>, <code>&#39;\&#39;</code>, or blank space <code>&#39; &#39;</code>. These characters divide the square into contiguous regions.</p>

<p>Given the grid <code>grid</code> represented as a string array, return <em>the number of regions</em>.</p>

<p>Note that backslash characters are escaped, so a <code>&#39;\&#39;</code> is represented as <code>&#39;\\&#39;</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/15/1.png" style="width: 200px; height: 200px;" />
<pre>
<strong>Input:</strong> grid = [&quot; /&quot;,&quot;/ &quot;]
<strong>Output:</strong> 2
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/15/2.png" style="width: 200px; height: 198px;" />
<pre>
<strong>Input:</strong> grid = [&quot; /&quot;,&quot;  &quot;]
<strong>Output:</strong> 1
</pre>

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/15/4.png" style="width: 200px; height: 200px;" />
<pre>
<strong>Input:</strong> grid = [&quot;/\\&quot;,&quot;\\/&quot;]
<strong>Output:</strong> 5
<strong>Explanation: </strong>Recall that because \ characters are escaped, &quot;\\/&quot; refers to \/, and &quot;/\\&quot; refers to /\.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == grid.length == grid[i].length</code></li>
	<li><code>1 &lt;= n &lt;= 30</code></li>
	<li><code>grid[i][j]</code> is either <code>&#39;/&#39;</code>, <code>&#39;\&#39;</code>, or <code>&#39; &#39;</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='regions-cut-by-slashes'
class Solution:
    def regionsBySlashes(self, grid: List[str]) -> int:
        n = len(grid)
        res = 0
        A = [[0] * (n * 3) for _ in range(n * 3)]
        
        for i in range(n):
            for j in range(n):
                if grid[i][j] == "/":
                    A[i * 3][j * 3 + 2] = A[i * 3 + 1][j * 3 + 1] = A[i * 3 + 2][j * 3] = 1
                elif grid[i][j] == "\\":
                    A[i * 3][j * 3] = A[i * 3 + 1][j * 3 + 1] = A[i * 3 + 2][j * 3 + 2] = 1
                    
        def dfs(x, y):
            A[x][y] = 1
            
            for dx, dy in [(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)]:
                if 0 <= dx < n * 3 and 0 <= dy < n * 3 and A[dx][dy] == 0:
                    dfs(dx, dy)
        
        for x in range(n * 3):
            for y in range(n * 3):
                if A[x][y] == 0:
                    dfs(x, y)
                    res += 1
        
        return res
```

