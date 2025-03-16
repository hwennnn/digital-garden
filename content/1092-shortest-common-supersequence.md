---
title: 1092. Shortest Common Supersequence 
draft: false
tags: 
  - leetcode-hard
  - string
  - dynamic-programming
date: 2025-03-01
---

[Problem Link](https://leetcode.com/problems/shortest-common-supersequence/)

## Description

---
<p>Given two strings <code>str1</code> and <code>str2</code>, return <em>the shortest string that has both </em><code>str1</code><em> and </em><code>str2</code><em> as <strong>subsequences</strong></em>. If there are multiple valid strings, return <strong>any</strong> of them.</p>

<p>A string <code>s</code> is a <strong>subsequence</strong> of string <code>t</code> if deleting some number of characters from <code>t</code> (possibly <code>0</code>) results in the string <code>s</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> str1 = &quot;abac&quot;, str2 = &quot;cab&quot;
<strong>Output:</strong> &quot;cabac&quot;
<strong>Explanation:</strong> 
str1 = &quot;abac&quot; is a subsequence of &quot;cabac&quot; because we can delete the first &quot;c&quot;.
str2 = &quot;cab&quot; is a subsequence of &quot;cabac&quot; because we can delete the last &quot;ac&quot;.
The answer provided is the shortest such string that satisfies these properties.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> str1 = &quot;aaaaaaaa&quot;, str2 = &quot;aaaaaaaa&quot;
<strong>Output:</strong> &quot;aaaaaaaa&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= str1.length, str2.length &lt;= 1000</code></li>
	<li><code>str1</code> and <code>str2</code> consist of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='shortest-common-supersequence'
class Solution:
    def shortestCommonSupersequence(self, A: str, B: str) -> str:
        def lcs():
            m, n = len(A), len(B)
            dp = [[""] * (n + 1) for _ in range(m + 1)]
            
            for i in range(m):
                for j in range(n):
                    if A[i] == B[j]:
                        dp[i + 1][j + 1] = dp[i][j] + A[i]
                    else:
                        dp[i + 1][j + 1] += max(dp[i + 1][j], dp[i][j + 1], key = len)
            
            return dp[-1][-1]
        
        res, i, j = '', 0, 0
        
        for c in lcs():
            while A[i] != c:
                res += A[i]
                i += 1
            
            while B[j] != c:
                res += B[j]
                j += 1
            
            res += c
            i, j = i + 1, j + 1
        
        return res + A[i:] + B[j:]
```

