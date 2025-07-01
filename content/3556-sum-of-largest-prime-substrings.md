---
title: 3556. Sum of Largest Prime Substrings
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - math
  - string
  - sorting
  - number-theory
  - biweekly-contest-157
  - contest-question
date: 2025-05-25
---

[Problem Link](https://leetcode.com/problems/sum-of-largest-prime-substrings/)

## Description

---
<p data-end="157" data-start="30">Given a string <code>s</code>, find the sum of the <strong>3 largest unique <span data-keyword="prime-number">prime numbers</span></strong> that can be formed using any of its<strong> <span data-keyword="substring">substrings</span></strong>.</p>

<p data-end="269" data-start="166">Return the <strong>sum</strong> of the three largest unique prime numbers that can be formed. If fewer than three exist, return the sum of <strong>all</strong> available primes. If no prime numbers can be formed, return 0.</p>

<p data-end="370" data-is-last-node="" data-is-only-node="" data-start="271"><strong data-end="280" data-start="271">Note:</strong> Each prime number should be counted only <strong>once</strong>, even if it appears in <strong>multiple</strong> substrings. Additionally, when converting a substring to an integer, any leading zeros are ignored.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;12234&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">1469</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li data-end="136" data-start="16">The unique prime numbers formed from the substrings of <code>&quot;12234&quot;</code> are 2, 3, 23, 223, and 1223.</li>
	<li data-end="226" data-start="137">The 3 largest primes are 1223, 223, and 23. Their sum is 1469.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;111&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">11</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li data-end="339" data-start="244">The unique prime number formed from the substrings of <code>&quot;111&quot;</code> is 11.</li>
	<li data-end="412" data-is-last-node="" data-start="340">Since there is only one prime number, the sum is 11.</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li data-end="39" data-start="18"><code>1 &lt;= s.length &lt;= 10</code></li>
	<li data-end="68" data-is-last-node="" data-start="40"><code>s</code> consists of only digits.</li>
</ul>


## Solution

---
### Python3
``` py title='sum-of-largest-prime-substrings'
def is_prime(n: int) -> bool:
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False

    # check for factors from 5 to sqrt(n), skipping even multiples
    for i in range(5, int(math.isqrt(n)) + 1, 6):
        if n % i == 0 or n % (i + 2) == 0:
            return False

    return True

class Solution:
    def sumOfLargestPrimes(self, s: str) -> int:
        digits = list(map(int, s))
        N = len(digits)
        pq = []
        
        for i in range(N):
            curr = 0
            for j in range(i, N):
                curr = curr * 10 + digits[j]
                if is_prime(curr):
                    if curr in pq: continue
                        
                    if len(pq) == 3:
                        heappushpop(pq, curr)
                    else:
                        heappush(pq, curr)

        return sum(pq)
```

