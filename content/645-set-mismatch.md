---
title: 645. Set Mismatch
draft: false
tags: 
  - leetcode-easy
  - array
  - hash-table
  - bit-manipulation
  - sorting
  - weekly-contest-42
  - contest-question
date: 2024-01-22
---

[Problem Link](https://leetcode.com/problems/set-mismatch/)

## Description

---
<p>You have a set of integers <code>s</code>, which originally contains all the numbers from <code>1</code> to <code>n</code>. Unfortunately, due to some error, one of the numbers in <code>s</code> got duplicated to another number in the set, which results in <strong>repetition of one</strong> number and <strong>loss of another</strong> number.</p>

<p>You are given an integer array <code>nums</code> representing the data status of this set after the error.</p>

<p>Find the number that occurs twice and the number that is missing and return <em>them in the form of an array</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,2,4]
<strong>Output:</strong> [2,3]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,1]
<strong>Output:</strong> [1,2]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='set-mismatch'
class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        N = len(nums)
        count = [0] * (N + 1)
        res = [None, None]

        for x in nums:
            count[x] += 1
        
        for x in range(1, N + 1):
            if count[x] == 2:
                res[0] = x
            elif count[x] == 0:
                res[1] = x
            
            if res[0] is not None and res[1] is not None:
                return res
        
        return res
```

