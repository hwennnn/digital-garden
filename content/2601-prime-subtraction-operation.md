---
title: 2601. Prime Subtraction Operation
draft: false
tags: 
  - leetcode-medium
  - array
  - math
  - binary-search
  - greedy
  - number-theory
  - weekly-contest-338
  - contest-question
date: 2025-01-13
---

[Problem Link](https://leetcode.com/problems/prime-subtraction-operation/)

## Description

---
<p>You are given a <strong>0-indexed</strong> integer array <code>nums</code> of length <code>n</code>.</p>

<p>You can perform the following operation as many times as you want:</p>

<ul>
	<li>Pick an index <code>i</code> that you haven&rsquo;t picked before, and pick a prime <code>p</code> <strong>strictly less than</strong> <code>nums[i]</code>, then subtract <code>p</code> from <code>nums[i]</code>.</li>
</ul>

<p>Return <em>true if you can make <code>nums</code> a strictly increasing array using the above operation and false otherwise.</em></p>

<p>A <strong>strictly increasing array</strong> is an array whose each element is strictly greater than its preceding element.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [4,9,6,10]
<strong>Output:</strong> true
<strong>Explanation:</strong> In the first operation: Pick i = 0 and p = 3, and then subtract 3 from nums[0], so that nums becomes [1,9,6,10].
In the second operation: i = 1, p = 7, subtract 7 from nums[1], so nums becomes equal to [1,2,6,10].
After the second operation, nums is sorted in strictly increasing order, so the answer is true.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [6,8,11,12]
<strong>Output:</strong> true
<strong>Explanation: </strong>Initially nums is sorted in strictly increasing order, so we don&#39;t need to make any operations.</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [5,8,3]
<strong>Output:</strong> false
<strong>Explanation:</strong> It can be proven that there is no way to perform operations to make nums sorted in strictly increasing order, so the answer is false.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 1000</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 1000</code></li>
	<li><code><font face="monospace">nums.length == n</font></code></li>
</ul>


## Solution

---
### Python3
``` py title='prime-subtraction-operation'
def generate_primes(n):
    """
    Returns a list of all prime numbers less than n
    """
    primes = [True] * n
    primes[0] = primes[1] = False
    
    for i in range(2, int(math.sqrt(n)) + 1):
        if primes[i]:
            for j in range(i * i, n, i):
                primes[j] = False
    
    return [i for i in range(n) if primes[i]]

PRIMES = generate_primes(1000)

class Solution:
    def primeSubOperation(self, nums: List[int]) -> bool:
        N = len(nums)
        prev = 0

        for x in nums:
            if x <= prev: return False

            i = bisect_left(PRIMES, x - prev) - 1
            if i != -1:
                x -= PRIMES[i]
            
            prev = x
        
        return True
```

