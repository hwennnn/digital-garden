---
title: 1269. Number of Ways to Stay in the Same Place After Some Steps
draft: false
tags: 
  - leetcode-hard
  - dynamic-programming
  - weekly-contest-164
  - contest-question
date: 2023-10-17
---

[Problem Link](https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/)

## Description

---
<p>You have a pointer at index <code>0</code> in an array of size <code>arrLen</code>. At each step, you can move 1 position to the left, 1 position to the right in the array, or stay in the same place (The pointer should not be placed outside the array at any time).</p>

<p>Given two integers <code>steps</code> and <code>arrLen</code>, return the number of ways such that your pointer is still at index <code>0</code> after <strong>exactly</strong> <code>steps</code> steps. Since the answer may be too large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> steps = 3, arrLen = 2
<strong>Output:</strong> 4
<strong>Explanation: </strong>There are 4 differents ways to stay at index 0 after 3 steps.
Right, Left, Stay
Stay, Right, Left
Right, Stay, Left
Stay, Stay, Stay
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> steps = 2, arrLen = 4
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are 2 differents ways to stay at index 0 after 2 steps
Right, Left
Stay, Stay
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> steps = 4, arrLen = 2
<strong>Output:</strong> 8
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= steps &lt;= 500</code></li>
	<li><code>1 &lt;= arrLen &lt;= 10<sup>6</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='number-of-ways-to-stay-in-the-same-place-after-some-steps'
class Solution:
    def numWays(self, steps: int, arrLen: int) -> int:
        MOD = 10 ** 9 + 7
        MAX_POS = min(steps // 2 + 1, arrLen)
        dp = [[0] * (MAX_POS + 1) for _ in range(steps + 1)]
        dp[0][0] = 1

        for i in range(1, steps + 1):
            for j in range(MAX_POS):
                stay = dp[i - 1][j]
                left = dp[i - 1][j - 1] if j > 0 else 0
                right = dp[i - 1][j + 1]

                dp[i][j] = (stay + left + right) % MOD
        
        return dp[steps][0]
```

