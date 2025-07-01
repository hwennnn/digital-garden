---
title: 1292. Maximum Side Length of a Square with Sum Less than or Equal to Threshold
draft: false
tags: 
  - leetcode-medium
  - array
  - binary-search
  - matrix
  - prefix-sum
  - weekly-contest-167
  - contest-question
date: 2020-12-30
---

[Problem Link](https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/)

## Description

---
<p>Given a <code>m x n</code> matrix <code>mat</code> and an integer <code>threshold</code>, return <em>the maximum side-length of a square with a sum less than or equal to </em><code>threshold</code><em> or return </em><code>0</code><em> if there is no such square</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/12/05/e1.png" style="width: 335px; height: 186px;" />
<pre>
<strong>Input:</strong> mat = [[1,1,3,2,4,3,2],[1,1,3,2,4,3,2],[1,1,3,2,4,3,2]], threshold = 4
<strong>Output:</strong> 2
<strong>Explanation:</strong> The maximum side length of square with sum less than 4 is 2 as shown.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> mat = [[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2]], threshold = 1
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == mat.length</code></li>
	<li><code>n == mat[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 300</code></li>
	<li><code>0 &lt;= mat[i][j] &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= threshold &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold'
class Solution:
    def maxSideLength(self, mat: List[List[int]], threshold: int) -> int:
        rows, cols = len(mat), len(mat[0])
        prefix = [[0] * (cols+1) for _ in range(rows+1)]
        
        for i in range(1, rows+1):
            c = 0
            for j in range(1, cols + 1):
                c += mat[i-1][j-1]
                prefix[i][j] = prefix[i-1][j] + c
        
        for k in range(min(rows,cols)-1, -1, -1):
            for i in range(1, rows - k + 1):
                for j in range(1, cols - k + 1):
                    if prefix[i+k][j+k] - prefix[i-1][j+k] - prefix[i+k][j-1] + prefix[i-1][j-1] <= threshold:
                        return k+1;

        return 0
```
### Java
``` java title='maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold'
class Solution {
    public int maxSideLength(int[][] mat, int threshold) {
        int m = mat.length, n = mat[0].length;
        // Find prefix sum
        int[][] prefixSum = new int[m+1][n+1];
        for (int i = 1; i <= m; i++) {
            int sum = 0;
            for (int j = 1; j <= n; j++) {
                sum += mat[i-1][j-1];
                prefixSum[i][j] = prefixSum[i-1][j] + sum;
            }
        }
        // Start from the largest side length
        for(int k = Math.min(m, n)-1; k > 0; k--) {
            for(int i = 1; i+k <= m; i++) {
                for(int j = 1; j+k <= n; j++) {
                    if(prefixSum[i+k][j+k] - prefixSum[i-1][j+k] - prefixSum[i+k][j-1] + prefixSum[i-1][j-1] <= threshold) {
                        return k+1;
                    }
                }
            }
        }
        return 0;
    }
}
```

