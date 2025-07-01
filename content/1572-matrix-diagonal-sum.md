---
title: 1572. Matrix Diagonal Sum
draft: false
tags: 
  - leetcode-easy
  - array
  - matrix
  - biweekly-contest-34
  - contest-question
date: 2020-09-06
---

[Problem Link](https://leetcode.com/problems/matrix-diagonal-sum/)

## Description

---
<p>Given a&nbsp;square&nbsp;matrix&nbsp;<code>mat</code>, return the sum of the matrix diagonals.</p>

<p>Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/14/sample_1911.png" style="width: 336px; height: 174px;" />
<pre>
<strong>Input:</strong> mat = [[<strong>1</strong>,2,<strong>3</strong>],
&nbsp;             [4,<strong>5</strong>,6],
&nbsp;             [<strong>7</strong>,8,<strong>9</strong>]]
<strong>Output:</strong> 25
<strong>Explanation: </strong>Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> mat = [[<strong>1</strong>,1,1,<strong>1</strong>],
&nbsp;             [1,<strong>1</strong>,<strong>1</strong>,1],
&nbsp;             [1,<strong>1</strong>,<strong>1</strong>,1],
&nbsp;             [<strong>1</strong>,1,1,<strong>1</strong>]]
<strong>Output:</strong> 8
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> mat = [[<strong>5</strong>]]
<strong>Output:</strong> 5
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == mat.length == mat[i].length</code></li>
	<li><code>1 &lt;= n &lt;= 100</code></li>
	<li><code>1 &lt;= mat[i][j] &lt;= 100</code></li>
</ul>


## Solution

---
### Python3
``` py title='matrix-diagonal-sum'
class Solution:
    def diagonalSum(self, mat: List[List[int]]) -> int:
        rows, cols = len(mat), len(mat[0])
        res = 0
        
        for i in range(rows):
            res += mat[i][i] + mat[i][-i-1]
        
        if rows & 1:
            res -= mat[rows // 2][rows // 2]
                
        return res
```
### C++
``` cpp title='matrix-diagonal-sum'
class Solution {
public:
    int diagonalSum(vector<vector<int>>& mat) {
        int res = 0;
        int N = mat.size();
        
        for (int i = 0, j = N-1; i < N; i++, j--){
            if (i == j){
                res += mat[i][i];
            }else{
                res += mat[i][j] + mat[i][i];
            }
        }
        
        return res;
    }
};
```

