---
title: 3115. Maximum Prime Difference
draft: false
tags: 
  - leetcode-medium
  - array
  - math
  - number-theory
  - weekly-contest-393
  - contest-question
date: 2024-04-14
---

[Problem Link](https://leetcode.com/problems/maximum-prime-difference/)

## Description

---
<p>You are given an integer array <code>nums</code>.</p>

<p>Return an integer that is the <strong>maximum</strong> distance between the <strong>indices</strong> of two (not necessarily different) prime numbers in <code>nums</code><em>.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [4,2,9,5,3]</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong> <code>nums[1]</code>, <code>nums[3]</code>, and <code>nums[4]</code> are prime. So the answer is <code>|4 - 1| = 3</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [4,8,2,8]</span></p>

<p><strong>Output:</strong> <span class="example-io">0</span></p>

<p><strong>Explanation:</strong> <code>nums[2]</code> is prime. Because there is just one prime number, the answer is <code>|2 - 2| = 0</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>
	<li>The input is generated such that the number of prime numbers in the <code>nums</code> is at least one.</li>
</ul>


## Solution

---
### Python3
``` py title='maximum-prime-difference'
def generate_primes(n):
	isPrime = [True] * (n + 1)
	isPrime[0] = isPrime[1] = False

	for i in range(2, n + 1):
		if isPrime[i]:
			for j in range(i * i, n + 1, i):
				isPrime[j] = False

	return isPrime

PRIMES = generate_primes(105)

class Solution:
    def maximumPrimeDifference(self, nums: List[int]) -> int:
        N = len(nums)
        first = last = -1
        
        for i, x in enumerate(nums):
            if PRIMES[x]:
                if first == -1:
                    first = i
                    last = i
                else:
                    last = i
        
        return last - first
```

