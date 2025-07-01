---
title: 3591. Check if Any Element Has Prime Frequency
draft: false
tags: 
  - leetcode-easy
  - array
  - hash-table
  - math
  - counting
  - number-theory
  - weekly-contest-455
  - contest-question
date: 2025-06-22
---

[Problem Link](https://leetcode.com/problems/check-if-any-element-has-prime-frequency/)

## Description

---
<p>You are given an integer array <code>nums</code>.</p>

<p>Return <code>true</code> if the frequency of any element of the array is <strong>prime</strong>, otherwise, return <code>false</code>.</p>

<p>The <strong>frequency</strong> of an element <code>x</code> is the number of times it occurs in the array.</p>

<p>A prime number is a natural number greater than 1 with only two factors, 1 and itself.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,2,3,4,5,4]</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>

<p><strong>Explanation:</strong></p>

<p>4 has a frequency of two, which is a prime number.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,2,3,4,5]</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>

<p><strong>Explanation:</strong></p>

<p>All elements have a frequency of one.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [2,2,2,4,4]</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>

<p><strong>Explanation:</strong></p>

<p>Both 2 and 4 have a prime frequency.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 100</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 100</code></li>
</ul>


## Solution

---
### Python3
``` py title='check-if-any-element-has-prime-frequency'
def generate_primes(n):
    isPrime = [True] * (n + 1)
    isPrime[0] = isPrime[1] = False
 
    for i in range(2, n + 1):
        if isPrime[i]:
            for j in range(i * i, n + 1, i):
                isPrime[j] = False
 
    return isPrime

isPrime = generate_primes(101)

class Solution:
    def checkPrimeFrequency(self, nums: List[int]) -> bool:
        N = len(nums)
        counter = Counter(nums)

        for v in counter.values():
            if isPrime[v]:
                return True

        return False
```

