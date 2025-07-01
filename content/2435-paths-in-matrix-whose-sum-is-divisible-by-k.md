---
title: 2435. Paths in Matrix Whose Sum Is Divisible by K
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - matrix
  - weekly-contest-314
  - contest-question
date: 2022-10-09
---

[Problem Link](https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/)

## Description

---
<p>You are given a <strong>0-indexed</strong> <code>m x n</code> integer matrix <code>grid</code> and an integer <code>k</code>. You are currently at position <code>(0, 0)</code> and you want to reach position <code>(m - 1, n - 1)</code> moving only <strong>down</strong> or <strong>right</strong>.</p>

<p>Return<em> the number of paths where the sum of the elements on the path is divisible by </em><code>k</code>. Since the answer may be very large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img src="https://assets.leetcode.com/uploads/2022/08/13/image-20220813183124-1.png" style="width: 437px; height: 200px;" />
<pre>
<strong>Input:</strong> grid = [[5,2,4],[3,0,5],[0,7,2]], k = 3
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are two paths where the sum of the elements on the path is divisible by k.
The first path highlighted in red has a sum of 5 + 2 + 4 + 5 + 2 = 18 which is divisible by 3.
The second path highlighted in blue has a sum of 5 + 3 + 0 + 5 + 2 = 15 which is divisible by 3.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img src="https://assets.leetcode.com/uploads/2022/08/17/image-20220817112930-3.png" style="height: 85px; width: 132px;" />
<pre>
<strong>Input:</strong> grid = [[0,0]], k = 5
<strong>Output:</strong> 1
<strong>Explanation:</strong> The path highlighted in red has a sum of 0 + 0 = 0 which is divisible by 5.
</pre>

<p><strong class="example">Example 3:</strong></p>
<img src="https://assets.leetcode.com/uploads/2022/08/12/image-20220812224605-3.png" style="width: 257px; height: 200px;" />
<pre>
<strong>Input:</strong> grid = [[7,3,4,9],[2,3,6,2],[2,3,7,0]], k = 1
<strong>Output:</strong> 10
<strong>Explanation:</strong> Every integer is divisible by 1 so the sum of the elements on every possible path is divisible by k.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= m * n &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>0 &lt;= grid[i][j] &lt;= 100</code></li>
	<li><code>1 &lt;= k &lt;= 50</code></li>
</ul>


## Solution

---
### C++
``` cpp title='paths-in-matrix-whose-sum-is-divisible-by-k'
class Solution {
public:
    const long long M = 1e9 + 7;
    
    int numberOfPaths(vector<vector<int>>& grid, int k) {
        int rows = grid.size(), cols = grid[0].size();
        long long cache[rows][cols][k];
        memset(cache, -1, sizeof(cache));
        
        function<long long(int, int, int)> go = [&](int i, int j, int curr) {
            if (cache[i][j][curr] != -1) return cache[i][j][curr];
            
            if (i == rows - 1 && j == cols - 1) return (long long)(curr == 0);

            long long count = 0;

            if (i + 1 < rows) {
                count += go(i + 1, j, (curr + grid[i + 1][j]) % k);
                count %= M;
            }

            if (j + 1 < cols) {
                count += go(i, j + 1, (curr + grid[i][j + 1]) % k);
                count %= M;
            }

            return cache[i][j][curr] = count;
        };
        
        return go(0, 0, grid[0][0] % k);
    }
};
```
### Python3
``` py title='paths-in-matrix-whose-sum-is-divisible-by-k'
M = 10 ** 9 + 7

class Solution:
    def numberOfPaths(self, grid: List[List[int]], k: int) -> int:
        rows, cols = len(grid), len(grid[0])
        dp = [[[0] * k for _ in range(cols)] for _ in range(rows)]
        dp[0][0][grid[0][0] % k] = 1
        
        for i in range(rows):
            for j in range(cols):
                for kk in range(k):
                    dp[i][j][kk] %= M
                    if i + 1 < rows:
                        dp[i + 1][j][(grid[i + 1][j] + kk) % k] += dp[i][j][kk]
                    if j + 1 < cols:
                        dp[i][j + 1][(grid[i][j + 1] + kk) % k] += dp[i][j][kk]
        
        return dp[rows - 1][cols - 1][0]
```

