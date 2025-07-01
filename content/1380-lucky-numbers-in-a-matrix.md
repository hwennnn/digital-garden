---
title: 1380. Lucky Numbers in a Matrix
draft: false
tags: 
  - leetcode-easy
  - array
  - matrix
  - weekly-contest-180
  - contest-question
date: 2020-10-15
---

[Problem Link](https://leetcode.com/problems/lucky-numbers-in-a-matrix/)

## Description

---
<p>Given an <code>m x n</code> matrix of <strong>distinct </strong>numbers, return <em>all <strong>lucky numbers</strong> in the matrix in <strong>any </strong>order</em>.</p>

<p>A <strong>lucky number</strong> is an element of the matrix such that it is the minimum element in its row and maximum in its column.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> matrix = [[3,7,8],[9,11,13],[15,16,17]]
<strong>Output:</strong> [15]
<strong>Explanation:</strong> 15 is the only lucky number since it is the minimum in its row and the maximum in its column.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
<strong>Output:</strong> [12]
<strong>Explanation:</strong> 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> matrix = [[7,8],[1,2]]
<strong>Output:</strong> [7]
<strong>Explanation:</strong> 7 is the only lucky number since it is the minimum in its row and the maximum in its column.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == mat.length</code></li>
	<li><code>n == mat[i].length</code></li>
	<li><code>1 &lt;= n, m &lt;= 50</code></li>
	<li><code>1 &lt;= matrix[i][j] &lt;= 10<sup>5</sup></code>.</li>
	<li>All elements in the matrix are distinct.</li>
</ul>


## Solution

---
### C++
``` cpp title='lucky-numbers-in-a-matrix'
class Solution {
public:
    vector<int> luckyNumbers (vector<vector<int>>& matrix) {
        int rows = matrix.size(), cols = matrix[0].size();
        vector<int> rowMin(rows, INT_MAX), colMax(cols, INT_MIN);
        vector<int> res;

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                rowMin[i] = min(rowMin[i], matrix[i][j]);
                colMax[j] = max(colMax[j], matrix[i][j]);
            }
        }

        for (int i = 0; i < rows; i++)
            for (int j = 0; j < cols; j++)
                if (matrix[i][j] == rowMin[i] && matrix[i][j] == colMax[j]) {
                    res.push_back(matrix[i][j]);
                    break;
                }


        return res;
    }
};
```
### Python3
``` py title='lucky-numbers-in-a-matrix'
class Solution:
    def luckyNumbers (self, matrix: List[List[int]]) -> List[int]:
        r,c = len(matrix), len(matrix[0])
        col = [0] * c
        # calculate max col
        for i in range(c):
            col[i] = max([matrix[j][i] for j in range(r)])
        
        res = []
        for i in range(r):
            for j in range(c):
                if min(matrix[i]) == matrix[i][j] and col[j] == matrix[i][j]:
                    res.append(matrix[i][j])
                
        return res
```

