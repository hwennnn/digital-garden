---
title: 1658. Minimum Operations to Reduce X to Zero
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - binary-search
  - sliding-window
  - prefix-sum
  - weekly-contest-215
  - contest-question
date: 2023-09-20
---

[Problem Link](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/)

## Description

---
<p>You are given an integer array <code>nums</code> and an integer <code>x</code>. In one operation, you can either remove the leftmost or the rightmost element from the array <code>nums</code> and subtract its value from <code>x</code>. Note that this <strong>modifies</strong> the array for future operations.</p>

<p>Return <em>the <strong>minimum number</strong> of operations to reduce </em><code>x</code> <em>to <strong>exactly</strong></em> <code>0</code> <em>if it is possible</em><em>, otherwise, return </em><code>-1</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,1,4,2,3], x = 5
<strong>Output:</strong> 2
<strong>Explanation:</strong> The optimal solution is to remove the last two elements to reduce x to zero.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [5,6,7,8,9], x = 4
<strong>Output:</strong> -1
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,2,20,1,1,3], x = 10
<strong>Output:</strong> 5
<strong>Explanation:</strong> The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= x &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-operations-to-reduce-x-to-zero'
class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        N = len(nums)
        total = sum(nums)
        target = total - k
        res = -1
        i = curr = 0

        for j, x in enumerate(nums):
            curr += x

            while i <= j and curr > target:
                curr -= nums[i]
                i += 1
            
            if curr == target:
                res = max(res, j - i + 1)
        
        return -1 if res == -1 else N - res
```

