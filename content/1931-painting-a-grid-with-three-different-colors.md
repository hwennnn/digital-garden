---
title: 1931. Painting a Grid With Three Different Colors
draft: false
tags: 
  - leetcode-hard
  - dynamic-programming
date: 2025-05-18
---

[Problem Link](https://leetcode.com/problems/painting-a-grid-with-three-different-colors/)

## Description

---
<p>You are given two integers <code>m</code> and <code>n</code>. Consider an <code>m x n</code> grid where each cell is initially white. You can paint each cell <strong>red</strong>, <strong>green</strong>, or <strong>blue</strong>. All cells <strong>must</strong> be painted.</p>

<p>Return<em> the number of ways to color the grid with <strong>no two adjacent cells having the same color</strong></em>. Since the answer can be very large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/06/22/colorthegrid.png" style="width: 200px; height: 50px;" />
<pre>
<strong>Input:</strong> m = 1, n = 1
<strong>Output:</strong> 3
<strong>Explanation:</strong> The three possible colorings are shown in the image above.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/06/22/copy-of-colorthegrid.png" style="width: 321px; height: 121px;" />
<pre>
<strong>Input:</strong> m = 1, n = 2
<strong>Output:</strong> 6
<strong>Explanation:</strong> The six possible colorings are shown in the image above.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> m = 5, n = 5
<strong>Output:</strong> 580986
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= m &lt;= 5</code></li>
	<li><code>1 &lt;= n &lt;= 1000</code></li>
</ul>


## Solution

---
### Python3
``` py title='painting-a-grid-with-three-different-colors'
class Solution:
    def colorTheGrid(self, m: int, n: int) -> int:
        MOD = 10 ** 9 + 7

        adj = defaultdict(list)
        cols = []
        for mask in range(3 ** m):
            col = [0] * m
            for i in range(m):
                col[i] = mask % 3
                if i > 0 and col[i] == col[i -1]:
                    break
                mask //= 3
            else:
                cols.append(tuple(col))

        start = tuple([-1] * m) # sentinel
        for i in range(len(cols)):
            adj[start].append(cols[i])
            for j in range(i + 1, len(cols)):
                if not any(cols[i][k] == cols[j][k] for k in range(m)): # valid edge
                    adj[cols[i]].append(cols[j])
                    adj[cols[j]].append(cols[i])

        @cache
        def dp(col, pos):
            if pos == n:
                return 1
            count = 0
            for nei in adj[col]:
                count = (count + dp(nei, pos + 1)) % MOD
            return count
        
        return dp(start, 0)

```

