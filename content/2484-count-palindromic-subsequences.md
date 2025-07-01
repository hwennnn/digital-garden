---
title: 2484. Count Palindromic Subsequences
draft: false
tags: 
  - leetcode-hard
  - string
  - dynamic-programming
  - biweekly-contest-92
  - contest-question
date: 2022-11-27
---

[Problem Link](https://leetcode.com/problems/count-palindromic-subsequences/)

## Description

---
<p>Given a string of digits <code>s</code>, return <em>the number of <strong>palindromic subsequences</strong> of</em> <code>s</code><em> having length </em><code>5</code>. Since the answer may be very large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p><strong>Note:</strong></p>

<ul>
	<li>A string is <strong>palindromic</strong> if it reads the same forward and backward.</li>
	<li>A <strong>subsequence</strong> is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;103301&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> 
There are 6 possible subsequences of length 5: &quot;10330&quot;,&quot;10331&quot;,&quot;10301&quot;,&quot;10301&quot;,&quot;13301&quot;,&quot;03301&quot;. 
Two of them (both equal to &quot;10301&quot;) are palindromic.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;0000000&quot;
<strong>Output:</strong> 21
<strong>Explanation:</strong> All 21 subsequences are &quot;00000&quot;, which is palindromic.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;9999900000&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> The only two palindromic subsequences are &quot;99999&quot; and &quot;00000&quot;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
	<li><code>s</code> consists of digits.</li>
</ul>


## Solution

---
### Python3
``` py title='count-palindromic-subsequences'
class Solution:
    def countPalindromes(self, s: str) -> int:
        M = 10 ** 9 + 7
        N = len(s)
        res = 0

        def build(words):
            dp = [[[0] * 10 for _ in range(10)] for _ in range(N)]
            cnt = [0] * 10

            for i in range(N):
                c = ord(words[i]) - ord("0")

                if i > 0:
                    for j in range(10):
                        for k in range(10):
                            dp[i][j][k] = dp[i - 1][j][k]
                            if k == c:
                                dp[i][j][k] += cnt[j]
                
                cnt[c] += 1

            return dp
        
        prefix, suffix = build(s), build(s[::-1])[::-1]

        for i in range(2, N - 2):
            for j in range(10):
                for k in range(10):
                    res += prefix[i - 1][j][k] * suffix[i + 1][j][k]
                    res %= M
        
        return res

                
```

