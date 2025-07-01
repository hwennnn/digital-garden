---
title: 2002. Maximum Product of the Length of Two Palindromic Subsequences
draft: false
tags: 
  - leetcode-medium
  - string
  - dynamic-programming
  - backtracking
  - bit-manipulation
  - bitmask
  - weekly-contest-258
  - contest-question
date: 2021-09-14
---

[Problem Link](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/)

## Description

---
<p>Given a string <code>s</code>, find two <strong>disjoint palindromic subsequences</strong> of <code>s</code> such that the <strong>product</strong> of their lengths is <strong>maximized</strong>. The two subsequences are <strong>disjoint</strong> if they do not both pick a character at the same index.</p>

<p>Return <em>the <strong>maximum</strong> possible <strong>product</strong> of the lengths of the two palindromic subsequences</em>.</p>

<p>A <strong>subsequence</strong> is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters. A string is <strong>palindromic</strong> if it reads the same forward and backward.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="example-1" src="https://assets.leetcode.com/uploads/2021/08/24/two-palindromic-subsequences.png" style="width: 550px; height: 124px;" />
<pre>
<strong>Input:</strong> s = &quot;leetcodecom&quot;
<strong>Output:</strong> 9
<strong>Explanation</strong>: An optimal solution is to choose &quot;ete&quot; for the 1<sup>st</sup> subsequence and &quot;cdc&quot; for the 2<sup>nd</sup> subsequence.
The product of their lengths is: 3 * 3 = 9.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;bb&quot;
<strong>Output:</strong> 1
<strong>Explanation</strong>: An optimal solution is to choose &quot;b&quot; (the first character) for the 1<sup>st</sup> subsequence and &quot;b&quot; (the second character) for the 2<sup>nd</sup> subsequence.
The product of their lengths is: 1 * 1 = 1.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;accbcaxxcxx&quot;
<strong>Output:</strong> 25
<strong>Explanation</strong>: An optimal solution is to choose &quot;accca&quot; for the 1<sup>st</sup> subsequence and &quot;xxcxx&quot; for the 2<sup>nd</sup> subsequence.
The product of their lengths is: 5 * 5 = 25.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= s.length &lt;= 12</code></li>
	<li><code>s</code> consists of lowercase English letters only.</li>
</ul>


## Solution

---
### Python3
``` py title='maximum-product-of-the-length-of-two-palindromic-subsequences'
class Solution:
    def maxProduct(self, s: str) -> int:
        n = len(s)
        N = 1 << n
        A = []
        
        for mask in range(1, N):
            subseq = ''
            for i in range(n):
                if (mask >> i) & 1:
                    subseq += s[i]
            
            if subseq == subseq[::-1]:
                A.append((mask, len(subseq)))
        
        A.sort(key = lambda x:-x[1])
        res = 1
        for i in range(len(A)):
            mask1, len1 = A[i]
            if len1 ** 2 < res: break
            
            for j in range(i + 1, len(A)):
                mask2, len2 = A[j]
                if mask1 & mask2 == 0 and len1 * len2 > res:
                    res = len1 * len2
                    break
        
        return res
```

