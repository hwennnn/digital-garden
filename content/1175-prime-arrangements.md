---
title: 1175. Prime Arrangements
draft: false
tags: 
  - leetcode-easy
  - math
  - weekly-contest-152
  - contest-question
date: 2021-05-03
---

[Problem Link](https://leetcode.com/problems/prime-arrangements/)

## Description

---
<p>Return the number of permutations of 1 to <code>n</code> so that prime numbers are at prime indices (1-indexed.)</p>

<p><em>(Recall that an integer&nbsp;is prime if and only if it is greater than 1, and cannot be written as a product of two positive integers&nbsp;both smaller than it.)</em></p>

<p>Since the answer may be large, return the answer <strong>modulo <code>10^9 + 7</code></strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 5
<strong>Output:</strong> 12
<strong>Explanation:</strong> For example [1,2,5,4,3] is a valid permutation, but [5,2,3,4,1] is not because the prime number 5 is at index 1.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 100
<strong>Output:</strong> 682289015
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 100</code></li>
</ul>


## Solution

---
### Python3
``` py title='prime-arrangements'
class Solution:
    def numPrimeArrangements(self, n: int) -> int:
        primes = [True] * (n + 1)
        
        for prime in range(2, int(math.sqrt(n)) + 1):
            if primes[prime]:
                for composite in range(prime * prime, n + 1, prime):
                    primes[composite] = False
                    
        cnt = sum(primes[2:])

        return math.factorial(cnt) * math.factorial(n - cnt) % (10**9 + 7)
        
```

