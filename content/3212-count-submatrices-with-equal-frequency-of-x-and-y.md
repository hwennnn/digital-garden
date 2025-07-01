---
title: 3212. Count Submatrices With Equal Frequency of X and Y
draft: false
tags: 
  - leetcode-medium
  - array
  - matrix
  - prefix-sum
  - weekly-contest-405
  - contest-question
date: 2024-07-12
---

[Problem Link](https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/)

## Description

---
<p>Given a 2D character matrix <code>grid</code>, where <code>grid[i][j]</code> is either <code>&#39;X&#39;</code>, <code>&#39;Y&#39;</code>, or <code>&#39;.&#39;</code>, return the number of <span data-keyword="submatrix">submatrices</span> that contain:</p>

<ul>
	<li><code>grid[0][0]</code></li>
	<li>an <strong>equal</strong> frequency of <code>&#39;X&#39;</code> and <code>&#39;Y&#39;</code>.</li>
	<li><strong>at least</strong> one <code>&#39;X&#39;</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">grid = [[&quot;X&quot;,&quot;Y&quot;,&quot;.&quot;],[&quot;Y&quot;,&quot;.&quot;,&quot;.&quot;]]</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2024/06/07/examplems.png" style="padding: 10px; background: rgb(255, 255, 255); border-radius: 0.5rem; width: 175px; height: 350px;" /></strong></p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">grid = [[&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;Y&quot;]]</span></p>

<p><strong>Output:</strong> <span class="example-io">0</span></p>

<p><strong>Explanation:</strong></p>

<p>No submatrix has an equal frequency of <code>&#39;X&#39;</code> and <code>&#39;Y&#39;</code>.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">grid = [[&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;]]</span></p>

<p><strong>Output:</strong> <span class="example-io">0</span></p>

<p><strong>Explanation:</strong></p>

<p>No submatrix has at least one <code>&#39;X&#39;</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= grid.length, grid[i].length &lt;= 1000</code></li>
	<li><code>grid[i][j]</code> is either <code>&#39;X&#39;</code>, <code>&#39;Y&#39;</code>, or <code>&#39;.&#39;</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='count-submatrices-with-equal-frequency-of-x-and-y'
class Solution:
    def numberOfSubmatrices(self, grid: List[List[str]]) -> int:
        rows, cols = len(grid), len(grid[0])
        X = [[0] * (cols + 1) for _ in range(rows + 1)]
        Y = [[0] * (cols + 1) for _ in range(rows + 1)]
        res = 0
        
        for i in range(1, rows + 1):
            for j in range(1, cols + 1):
                X[i][j] = int(grid[i - 1][j - 1] == "X") + X[i - 1][j] + X[i][j - 1] - X[i - 1][j - 1]
                Y[i][j] = int(grid[i - 1][j - 1] == "Y") + Y[i - 1][j] + Y[i][j - 1] - Y[i - 1][j - 1]

                if X[i][j] > 0 and X[i][j] == Y[i][j]:
                    res += 1
        
        return res
```

