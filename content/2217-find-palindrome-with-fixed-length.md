---
title: 2217. Find Palindrome With Fixed Length
draft: false
tags: 
  - leetcode-medium
  - array
  - math
date: 2022-03-27
---

[Problem Link](https://leetcode.com/problems/find-palindrome-with-fixed-length/)

## Description

---
<p>Given an integer array <code>queries</code> and a <strong>positive</strong> integer <code>intLength</code>, return <em>an array</em> <code>answer</code> <em>where</em> <code>answer[i]</code> <em>is either the </em><code>queries[i]<sup>th</sup></code> <em>smallest <strong>positive palindrome</strong> of length</em> <code>intLength</code> <em>or</em> <code>-1</code><em> if no such palindrome exists</em>.</p>

<p>A <strong>palindrome</strong> is a number that reads the same backwards and forwards. Palindromes cannot have leading zeros.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> queries = [1,2,3,4,5,90], intLength = 3
<strong>Output:</strong> [101,111,121,131,141,999]
<strong>Explanation:</strong>
The first few palindromes of length 3 are:
101, 111, 121, 131, 141, 151, 161, 171, 181, 191, 202, ...
The 90<sup>th</sup> palindrome of length 3 is 999.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> queries = [2,4,6], intLength = 4
<strong>Output:</strong> [1111,1331,1551]
<strong>Explanation:</strong>
The first six palindromes of length 4 are:
1001, 1111, 1221, 1331, 1441, and 1551.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= queries.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= queries[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>1 &lt;= intLength&nbsp;&lt;= 15</code></li>
</ul>


## Solution

---
### Python
``` py title='find-palindrome-with-fixed-length'
class Solution:
    def kthPalindrome(self, queries: List[int], intLength: int) -> List[int]:
        A = []
        inter = 2 if intLength % 2 == 0 else 1
        outer = (intLength - inter) // 2
        A = []
        
        if intLength <= 4:
            for x in range(10 ** (intLength - 1), 10 ** (intLength)):
                if str(x) == str(x)[::-1]:
                    A.append(str(x))
        
        def solve(x):
            if intLength <= 4:
                if x >= len(A): return -1
                return A[x]
            
            outIndex = x // 10
            out = 10 ** (outer - 1) + outIndex
            
            modIndex = x % 10
            
            res = str(out) + str(modIndex) * inter + str(out)[::-1]

            if len(res) != intLength: return -1
            
            return res

        res = []
        for q in queries:
            q -= 1
            res.append(solve(q))
        
        return res
```
