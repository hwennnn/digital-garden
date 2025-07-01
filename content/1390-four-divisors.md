---
title: 1390. Four Divisors
draft: false
tags: 
  - leetcode-medium
  - array
  - math
  - weekly-contest-181
  - contest-question
date: 2020-10-15
---

[Problem Link](https://leetcode.com/problems/four-divisors/)

## Description

---
<p>Given an integer array <code>nums</code>, return <em>the sum of divisors of the integers in that array that have exactly four divisors</em>. If there is no such integer in the array, return <code>0</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [21,4,7]
<strong>Output:</strong> 32
<strong>Explanation:</strong> 
21 has 4 divisors: 1, 3, 7, 21
4 has 3 divisors: 1, 2, 4
7 has 2 divisors: 1, 7
The answer is the sum of divisors of 21 only.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [21,21]
<strong>Output:</strong> 64
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4,5]
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='four-divisors'
class Solution:
    def sumFourDivisors(self, nums: List[int]) -> int:
        res = 0
        
        for num in nums:
            s = set()
            for i in range(1, floor(sqrt(num)) + 1):
                
                if num % i == 0:
                    s.add(num//i)
                    s.add(i)
                
                if len(s) > 4:
                    break
            
            if len(s) == 4:
                res += sum(s)
        
        return res
```

