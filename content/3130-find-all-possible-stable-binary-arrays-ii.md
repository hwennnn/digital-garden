---
title: 3130. Find All Possible Stable Binary Arrays II
draft: false
tags: 
  - leetcode-hard
  - dynamic-programming
  - prefix-sum
  - biweekly-contest-129
  - contest-question
date: 2024-04-30
---

[Problem Link](https://leetcode.com/problems/find-all-possible-stable-binary-arrays-ii/)

## Description

---
<p>You are given 3 positive integers <code>zero</code>, <code>one</code>, and <code>limit</code>.</p>

<p>A <span data-keyword="binary-array">binary array</span> <code>arr</code> is called <strong>stable</strong> if:</p>

<ul>
	<li>The number of occurrences of 0 in <code>arr</code> is <strong>exactly </strong><code>zero</code>.</li>
	<li>The number of occurrences of 1 in <code>arr</code> is <strong>exactly</strong> <code>one</code>.</li>
	<li>Each <span data-keyword="subarray-nonempty">subarray</span> of <code>arr</code> with a size greater than <code>limit</code> must contain <strong>both </strong>0 and 1.</li>
</ul>

<p>Return the <em>total</em> number of <strong>stable</strong> binary arrays.</p>

<p>Since the answer may be very large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">zero = 1, one = 1, limit = 2</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<p>The two possible stable binary arrays are <code>[1,0]</code> and <code>[0,1]</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">zero = 1, one = 2, limit = 1</span></p>

<p><strong>Output:</strong> <span class="example-io">1</span></p>

<p><strong>Explanation:</strong></p>

<p>The only possible stable binary array is <code>[1,0,1]</code>.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">zero = 3, one = 3, limit = 2</span></p>

<p><strong>Output:</strong> <span class="example-io">14</span></p>

<p><strong>Explanation:</strong></p>

<p>All the possible stable binary arrays are <code>[0,0,1,0,1,1]</code>, <code>[0,0,1,1,0,1]</code>, <code>[0,1,0,0,1,1]</code>, <code>[0,1,0,1,0,1]</code>, <code>[0,1,0,1,1,0]</code>, <code>[0,1,1,0,0,1]</code>, <code>[0,1,1,0,1,0]</code>, <code>[1,0,0,1,0,1]</code>, <code>[1,0,0,1,1,0]</code>, <code>[1,0,1,0,0,1]</code>, <code>[1,0,1,0,1,0]</code>, <code>[1,0,1,1,0,0]</code>, <code>[1,1,0,0,1,0]</code>, and <code>[1,1,0,1,0,0]</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= zero, one, limit &lt;= 1000</code></li>
</ul>


## Solution

---
### Python3
``` py title='find-all-possible-stable-binary-arrays-ii'
class Solution:
    def numberOfStableArrays(self, zero: int, one: int, limit: int) -> int:
        MOD = 10 ** 9 + 7

        # dp[zeroes][ones][last]
        dp = [[[0, 0] for _ in range(one + 1)] for _ in range(zero + 1)]
        
        for i in range(min(zero, limit) + 1):
            dp[i][0][0] = 1
        
        for j in range(min(one, limit) + 1):
            dp[0][j][1] = 1
        
        # dp[i][j][0] = dp[i - 1][j]
        # dp[i][j][0] = dp[i - 1][j][0] + dp[i - 1[j][1]
        # same goes for dp[i][j][1] = dp[i][j - 1][0] + dp[i][j - 1][1]
        # for dp[i][j] we want to substract dp[i - limit - 1][j]
        # however, in dp[i - 1][j], it already substracts dp[i - limit - 2][j]
        # therefore, the count that need to be substracted is only dp[i - limit - 1][j] - dp[i - limit - 2][j]
        # since dp[i - limit - 2][j] == dp[i - limit - 1][j][0],
        # ans = dp[i - limit - 1][j] - dp[i - limit - 1][j][0]
        # ans = dp[i - limit - 1][j][1]

        for i in range(1, zero + 1):
            for j in range(1, one + 1):
                dp[i][j][0] = sum(dp[i - 1][j])
                dp[i][j][1] = sum(dp[i][j - 1])

                if i > limit:
                    dp[i][j][0] -= dp[i - limit - 1][j][1]
                
                if j > limit:
                    dp[i][j][1] -= dp[i][j - limit - 1][0]
                
                for t in range(2):
                    dp[i][j][t] %= MOD

        return sum(dp[-1][-1]) % MOD
```

