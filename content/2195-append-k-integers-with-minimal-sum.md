---
title: 2195. Append K Integers With Minimal Sum
draft: false
tags: 
  - leetcode-medium
  - array
  - math
  - greedy
  - sorting
  - weekly-contest-283
  - contest-question
date: 2022-03-06
---

[Problem Link](https://leetcode.com/problems/append-k-integers-with-minimal-sum/)

## Description

---
<p>You are given an integer array <code>nums</code> and an integer <code>k</code>. Append <code>k</code> <strong>unique positive</strong> integers that do <strong>not</strong> appear in <code>nums</code> to <code>nums</code> such that the resulting total sum is <strong>minimum</strong>.</p>

<p>Return<em> the sum of the</em> <code>k</code> <em>integers appended to</em> <code>nums</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,4,25,10,25], k = 2
<strong>Output:</strong> 5
<strong>Explanation:</strong> The two unique positive integers that do not appear in nums which we append are 2 and 3.
The resulting sum of nums is 1 + 4 + 25 + 10 + 25 + 2 + 3 = 70, which is the minimum.
The sum of the two integers appended is 2 + 3 = 5, so we return 5.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [5,6], k = 6
<strong>Output:</strong> 25
<strong>Explanation:</strong> The six unique positive integers that do not appear in nums which we append are 1, 2, 3, 4, 7, and 8.
The resulting sum of nums is 5 + 6 + 1 + 2 + 3 + 4 + 7 + 8 = 36, which is the minimum. 
The sum of the six integers appended is 1 + 2 + 3 + 4 + 7 + 8 = 25, so we return 25.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>1 &lt;= k &lt;= 10<sup>8</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='append-k-integers-with-minimal-sum'
class Solution:
    def minimalKSum(self, nums: List[int], k: int) -> int:
        nums = sorted(list(set(nums)))
        n = len(nums)
        
        if nums[-1] <= k + n:
            return (k + n) * (k + n + 1) // 2 - sum(nums)
        
        left, right = 0, n - 1
        
        while left < right:
            mid = left + (right - left) // 2
            
            if nums[mid] - mid > k:
                right = mid
            else:
                left = mid + 1
        
        return (left + k) * (left + k + 1) // 2 - sum(nums[:left])
```

