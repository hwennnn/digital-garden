---
title: 2442. Count Number of Distinct Integers After Reverse Operations
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - math
  - counting
  - weekly-contest-315
  - contest-question
date: 2022-10-16
---

[Problem Link](https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/)

## Description

---
<p>You are given an array <code>nums</code> consisting of <strong>positive</strong> integers.</p>

<p>You have to take each integer in the array, <strong>reverse its digits</strong>, and add it to the end of the array. You should apply this operation to the original integers in <code>nums</code>.</p>

<p>Return <em>the number of <strong>distinct</strong> integers in the final array</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,13,10,12,31]
<strong>Output:</strong> 6
<strong>Explanation:</strong> After including the reverse of each number, the resulting array is [1,13,10,12,31,<u>1,31,1,21,13</u>].
The reversed integers that were added to the end of the array are underlined. Note that for the integer 10, after reversing it, it becomes 01 which is just 1.
The number of distinct integers in this array is 6 (The numbers 1, 10, 12, 13, 21, and 31).</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,2,2]
<strong>Output:</strong> 1
<strong>Explanation:</strong> After including the reverse of each number, the resulting array is [2,2,2,<u>2,2,2</u>].
The number of distinct integers in this array is 1 (The number 2).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>6</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='count-number-of-distinct-integers-after-reverse-operations'
class Solution:
    def countDistinctIntegers(self, nums: List[int]) -> int:
        res = set()
        
        for x in nums:
            res.add(x)
            
            r = int(str(x)[::-1])
            
            res.add(r)
        
        return len(res)
```

