---
title: 668. Kth Smallest Number in Multiplication Table
draft: false
tags: 
  - leetcode-hard
  - math
  - binary-search
  - weekly-contest-47
  - contest-question
date: 2021-11-16
---

[Problem Link](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/)

## Description

---
<p>Nearly everyone has used the <a href="https://en.wikipedia.org/wiki/Multiplication_table" target="_blank">Multiplication Table</a>. The multiplication table of size <code>m x n</code> is an integer matrix <code>mat</code> where <code>mat[i][j] == i * j</code> (<strong>1-indexed</strong>).</p>

<p>Given three integers <code>m</code>, <code>n</code>, and <code>k</code>, return <em>the </em><code>k<sup>th</sup></code><em> smallest element in the </em><code>m x n</code><em> multiplication table</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/05/02/multtable1-grid.jpg" style="width: 500px; height: 254px;" />
<pre>
<strong>Input:</strong> m = 3, n = 3, k = 5
<strong>Output:</strong> 3
<strong>Explanation:</strong> The 5<sup>th</sup> smallest number is 3.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/05/02/multtable2-grid.jpg" style="width: 493px; height: 293px;" />
<pre>
<strong>Input:</strong> m = 2, n = 3, k = 6
<strong>Output:</strong> 6
<strong>Explanation:</strong> The 6<sup>th</sup> smallest number is 6.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= m, n &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= k &lt;= m * n</code></li>
</ul>


## Solution

---
### Python3
``` py title='kth-smallest-number-in-multiplication-table'
class Solution:
    def findKthNumber(self, m: int, n: int, k: int) -> int:
        
        def enough(x):
            count = 0
            for r in range(1, m+1):
                count += min(x // r, n)
            
            return count >= k
        
        left, right = 1, m*n
        
        while left < right:
            mid = left + (right - left) // 2
            
            if enough(mid):
                right = mid
            else:
                left = mid + 1
            
        return left
```

