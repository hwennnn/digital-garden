---
title: 1411. Number of Ways to Paint N × 3 Grid
draft: false
tags: 
  - leetcode-hard
  - dynamic-programming
  - weekly-contest-184
  - contest-question
date: 2020-10-14
---

[Problem Link](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/)

## Description

---
<p>You have a <code>grid</code> of size <code>n x 3</code> and you want to paint each cell of the grid with exactly one of the three colors: <strong>Red</strong>, <strong>Yellow,</strong> or <strong>Green</strong> while making sure that no two adjacent cells have the same color (i.e., no two cells that share vertical or horizontal sides have the same color).</p>

<p>Given <code>n</code> the number of rows of the grid, return <em>the number of ways</em> you can paint this <code>grid</code>. As the answer may grow large, the answer <strong>must be</strong> computed modulo <code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/03/26/e1.png" style="width: 400px; height: 257px;" />
<pre>
<strong>Input:</strong> n = 1
<strong>Output:</strong> 12
<strong>Explanation:</strong> There are 12 possible way to paint the grid as shown.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 5000
<strong>Output:</strong> 30228214
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == grid.length</code></li>
	<li><code>1 &lt;= n &lt;= 5000</code></li>
</ul>


## Solution

---
### Python3
``` py title='number-of-ways-to-paint-n-3-grid'
class Solution:
    def numOfWays(self, n: int) -> int:
        a121, a123, mod = 6, 6, 10**9 + 7
        for i in range(n - 1):
            a121, a123 = a121 * 3 + a123 * 2, a121 * 2 + a123 * 2
        return (a121 + a123) % mod

```

