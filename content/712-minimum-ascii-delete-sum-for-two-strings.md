---
title: 712. Minimum ASCII Delete Sum for Two Strings
draft: false
tags: 
  - leetcode-medium
  - string
  - dynamic-programming
  - weekly-contest-55
  - contest-question
date: 2024-08-14
---

[Problem Link](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/)

## Description

---
<p>Given two strings <code>s1</code> and&nbsp;<code>s2</code>, return <em>the lowest <strong>ASCII</strong> sum of deleted characters to make two strings equal</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;sea&quot;, s2 = &quot;eat&quot;
<strong>Output:</strong> 231
<strong>Explanation:</strong> Deleting &quot;s&quot; from &quot;sea&quot; adds the ASCII value of &quot;s&quot; (115) to the sum.
Deleting &quot;t&quot; from &quot;eat&quot; adds 116 to the sum.
At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;delete&quot;, s2 = &quot;leet&quot;
<strong>Output:</strong> 403
<strong>Explanation:</strong> Deleting &quot;dee&quot; from &quot;delete&quot; to turn the string into &quot;let&quot;,
adds 100[d] + 101[e] + 101[e] to the sum.
Deleting &quot;e&quot; from &quot;leet&quot; adds 101[e] to the sum.
At the end, both strings are equal to &quot;let&quot;, and the answer is 100+101+101+101 = 403.
If instead we turned both strings into &quot;lee&quot; or &quot;eet&quot;, we would get answers of 433 or 417, which are higher.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s1.length, s2.length &lt;= 1000</code></li>
	<li><code>s1</code> and <code>s2</code> consist of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='minimum-ascii-delete-sum-for-two-strings'
class Solution:
    def minimumDeleteSum(self, s1: str, s2: str) -> int:
        M, N = len(s1), len(s2)

        dp = [[0] * (N + 1) for _ in range(M + 1)]

        for i in range(M):
            dp[i + 1][0] = dp[i][0] + ord(s1[i])
        
        for j in range(N):
            dp[0][j + 1] = dp[0][j] + ord(s2[j])
        
        for i in range(M):
            for j in range(N):
                if s1[i] == s2[j]:
                    dp[i + 1][j + 1] = dp[i][j]
                else:
                    dp[i + 1][j + 1] = min(dp[i][j + 1] + ord(s1[i]), dp[i + 1][j] + ord(s2[j]))
        
        return dp[M][N]

```

