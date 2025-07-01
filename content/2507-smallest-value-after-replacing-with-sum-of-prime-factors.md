---
title: 2507. Smallest Value After Replacing With Sum of Prime Factors
draft: false
tags: 
  - leetcode-medium
  - math
  - simulation
  - number-theory
  - weekly-contest-324
  - contest-question
date: 2022-12-18
---

[Problem Link](https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/)

## Description

---
<p>You are given a positive integer <code>n</code>.</p>

<p>Continuously replace <code>n</code> with the sum of its <strong>prime factors</strong>.</p>

<ul>
	<li>Note that if a prime factor divides <code>n</code> multiple times, it should be included in the sum as many times as it divides <code>n</code>.</li>
</ul>

<p>Return <em>the smallest value </em><code>n</code><em> will take on.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 15
<strong>Output:</strong> 5
<strong>Explanation:</strong> Initially, n = 15.
15 = 3 * 5, so replace n with 3 + 5 = 8.
8 = 2 * 2 * 2, so replace n with 2 + 2 + 2 = 6.
6 = 2 * 3, so replace n with 2 + 3 = 5.
5 is the smallest value n will take on.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> Initially, n = 3.
3 is the smallest value n will take on.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='smallest-value-after-replacing-with-sum-of-prime-factors'
class Solution:
    def smallestValue(self, n: int) -> int:
        vis = set()
        
        while n not in vis:
            vis.add(n)
            
            k = 0
            
            for factor in range(2, n + 1):
                while n % factor == 0:
                    k += factor
                    n //= factor
            
            n = k

        return n
```

