---
title: 3233. Find the Count of Numbers Which Are Not Special
draft: false
tags: 
  - leetcode-medium
  - array
  - math
  - number-theory
  - weekly-contest-408
  - contest-question
date: 2024-08-03
---

[Problem Link](https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special/)

## Description

---
<p>You are given 2 <strong>positive</strong> integers <code>l</code> and <code>r</code>. For any number <code>x</code>, all positive divisors of <code>x</code> <em>except</em> <code>x</code> are called the <strong>proper divisors</strong> of <code>x</code>.</p>

<p>A number is called <strong>special</strong> if it has exactly 2 <strong>proper divisors</strong>. For example:</p>

<ul>
	<li>The number 4 is <em>special</em> because it has proper divisors 1 and 2.</li>
	<li>The number 6 is <em>not special</em> because it has proper divisors 1, 2, and 3.</li>
</ul>

<p>Return the count of numbers in the range <code>[l, r]</code> that are <strong>not</strong> <strong>special</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">l = 5, r = 7</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p>There are no special numbers in the range <code>[5, 7]</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">l = 4, r = 16</span></p>

<p><strong>Output:</strong> <span class="example-io">11</span></p>

<p><strong>Explanation:</strong></p>

<p>The special numbers in the range <code>[4, 16]</code> are 4 and 9.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= l &lt;= r &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='find-the-count-of-numbers-which-are-not-special'
def generate_primes(n):
	isPrime = [True] * (n + 1)
	isPrime[0] = isPrime[1] = False

	for i in range(2, n + 1):
		if isPrime[i]:
			for j in range(i * i, n + 1, i):
				isPrime[j] = False

	return isPrime

primes = generate_primes(int(math.sqrt(10 ** 9)) + 1)

class Solution:
    def nonSpecialCount(self, l: int, r: int) -> int:
        MAX = int(math.sqrt(r)) + 1
        res = 0
        
        for i in range(2, MAX):
            if primes[i]:
                x = i * i
                if l <= x <= r:
                    res += 1

        return (r - l + 1) - res
```

