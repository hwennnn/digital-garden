---
title: 440. K-th Smallest in Lexicographical Order
draft: false
tags: 
  - leetcode-hard
  - trie
date: 2025-06-09
---

[Problem Link](https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/)

## Description

---
<p>Given two integers <code>n</code> and <code>k</code>, return <em>the</em> <code>k<sup>th</sup></code> <em>lexicographically smallest integer in the range</em> <code>[1, n]</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 13, k = 2
<strong>Output:</strong> 10
<strong>Explanation:</strong> The lexicographical order is [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9], so the second smallest number is 10.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 1, k = 1
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= n &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='k-th-smallest-in-lexicographical-order'
class Solution:
    def findKthNumber(self, n: int, k: int) -> int:
                
        def fn(x): 
            """Return node counts in denary trie."""
            ans, diff = 0, 1
            while x <= n: 
                ans += min(n - x + 1, diff)
                x *= 10 
                diff *= 10 
            return ans 
        
        x = 1
        while k > 1: 
            cnt = fn(x)
            if k > cnt: k -= cnt; x += 1
            else: k -= 1; x *= 10 
        return x
```

