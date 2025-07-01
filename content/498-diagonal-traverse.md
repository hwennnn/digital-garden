---
title: 498. Diagonal Traverse
draft: false
tags: 
  - leetcode-medium
  - array
  - matrix
  - simulation
  - weekly-contest-18b
  - contest-question
date: 2020-12-25
---

[Problem Link](https://leetcode.com/problems/diagonal-traverse/)

## Description

---
<p>Given an <code>m x n</code> matrix <code>mat</code>, return <em>an array of all the elements of the array in a diagonal order</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/10/diag1-grid.jpg" style="width: 334px; height: 334px;" />
<pre>
<strong>Input:</strong> mat = [[1,2,3],[4,5,6],[7,8,9]]
<strong>Output:</strong> [1,2,4,7,5,3,6,8,9]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> mat = [[1,2],[3,4]]
<strong>Output:</strong> [1,2,3,4]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == mat.length</code></li>
	<li><code>n == mat[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= m * n &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>5</sup> &lt;= mat[i][j] &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='diagonal-traverse'
class Solution:
    def findDiagonalOrder(self, matrix: List[List[int]]) -> List[int]:
        if not matrix: return []
        
        R,C = len(matrix), len(matrix[0])
        mp = collections.defaultdict(collections.deque)
        
        for i in range(R):
            for j in range(C):
                if (i + j) % 2 == 0:
                    mp[i+j].appendleft(matrix[i][j])
                else:
                    mp[i+j].append(matrix[i][j])
        
        return [c for key in mp for c in mp[key]]
        
```

