---
title: 629. K Inverse Pairs Array
draft: false
tags: 
  - leetcode-hard
  - dynamic-programming
  - weekly-contest-38
  - contest-question
date: 2024-01-27
---

[Problem Link](https://leetcode.com/problems/k-inverse-pairs-array/)

## Description

---
<p>For an integer array <code>nums</code>, an <strong>inverse pair</strong> is a pair of integers <code>[i, j]</code> where <code>0 &lt;= i &lt; j &lt; nums.length</code> and <code>nums[i] &gt; nums[j]</code>.</p>

<p>Given two integers n and k, return the number of different arrays consisting of numbers from <code>1</code> to <code>n</code> such that there are exactly <code>k</code> <strong>inverse pairs</strong>. Since the answer can be huge, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 3, k = 0
<strong>Output:</strong> 1
<strong>Explanation:</strong> Only the array [1,2,3] which consists of numbers from 1 to 3 has exactly 0 inverse pairs.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 3, k = 1
<strong>Output:</strong> 2
<strong>Explanation:</strong> The array [1,3,2] and [2,1,3] have exactly 1 inverse pair.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 1000</code></li>
	<li><code>0 &lt;= k &lt;= 1000</code></li>
</ul>


## Solution

---
### Python3
``` py title='k-inverse-pairs-array'
class Solution:
    def kInversePairs(self, n: int, k: int) -> int:
        
        max_possible_inversions = (n * (n-1)//2)
        if k > max_possible_inversions:
            return 0
        if k == 0 or k == max_possible_inversions:
            return 1
        
        MOD = 10 ** 9 + 7
        
        dp = [[0]*(k+1) for _ in range(n+1)]
        
        for i in range(1, n+1):
            dp[i][0] = 1

        dp[2][1] = 1
        
        for i in range(3,n+1):
            max_possible_inversions = min(k, i*(i-1)//2)
            for j in range(1,  max_possible_inversions + 1):
                dp[i][j] = dp[i][j-1] + dp[i-1][j] 
                if j>=i:
                    dp[i][j] -= dp[i-1][j - i]
                dp[i][j] = (dp[i][j] + MOD) % MOD
            
        return dp[n][k]
```

