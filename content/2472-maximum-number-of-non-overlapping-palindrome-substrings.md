---
title: 2472. Maximum Number of Non-overlapping Palindrome Substrings
draft: false
tags: 
  - leetcode-hard
  - two-pointers
  - string
  - dynamic-programming
  - greedy
  - weekly-contest-319
  - contest-question
date: 2022-11-13
---

[Problem Link](https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/)

## Description

---
<p>You are given a string <code>s</code> and a <strong>positive</strong> integer <code>k</code>.</p>

<p>Select a set of <strong>non-overlapping</strong> substrings from the string <code>s</code> that satisfy the following conditions:</p>

<ul>
	<li>The <strong>length</strong> of each substring is <strong>at least</strong> <code>k</code>.</li>
	<li>Each substring is a <strong>palindrome</strong>.</li>
</ul>

<p>Return <em>the <strong>maximum</strong> number of substrings in an optimal selection</em>.</p>

<p>A <strong>substring</strong> is a contiguous sequence of characters within a string.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abaccdbbd&quot;, k = 3
<strong>Output:</strong> 2
<strong>Explanation:</strong> We can select the substrings underlined in s = &quot;<u><strong>aba</strong></u>cc<u><strong>dbbd</strong></u>&quot;. Both &quot;aba&quot; and &quot;dbbd&quot; are palindromes and have a length of at least k = 3.
It can be shown that we cannot find a selection with more than two valid substrings.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;adbcda&quot;, k = 2
<strong>Output:</strong> 0
<strong>Explanation:</strong> There is no palindrome substring of length at least 2 in the string.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= s.length &lt;= 2000</code></li>
	<li><code>s</code> consists of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='maximum-number-of-non-overlapping-palindrome-substrings'
class Solution:
    def maxPalindromes(self, s: str, k: int) -> int:
        N = len(s)
        pal = [[False] * N for _ in range(N)]
        
        for i in range(N - 1, -1, -1):
            for j in range(i, N):
                pal[i][j] = s[i] == s[j] and (j - i + 1 < 3 or pal[i + 1][j - 1])
        
        dp = [0] * (N + 1)

        for i in range(N - 1, -1, -1):
            dp[i] = dp[i + 1]
            for j in range(i + k - 1, N):
                if pal[i][j]:
                    dp[i] = max(dp[i], 1 + dp[j + 1])
        
        return dp[0]
```

