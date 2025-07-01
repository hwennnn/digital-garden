---
title: 1248. Count Number of Nice Subarrays
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - math
  - sliding-window
  - prefix-sum
  - weekly-contest-161
  - contest-question
date: 2024-06-22
---

[Problem Link](https://leetcode.com/problems/count-number-of-nice-subarrays/)

## Description

---
<p>Given an array of integers <code>nums</code> and an integer <code>k</code>. A continuous subarray is called <strong>nice</strong> if there are <code>k</code> odd numbers on it.</p>

<p>Return <em>the number of <strong>nice</strong> sub-arrays</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,1,2,1,1], k = 3
<strong>Output:</strong> 2
<strong>Explanation:</strong> The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,4,6], k = 1
<strong>Output:</strong> 0
<strong>Explanation:</strong> There are no odd numbers in the array.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,2,2,1,2,2,1,2,2,2], k = 2
<strong>Output:</strong> 16
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 50000</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10^5</code></li>
	<li><code>1 &lt;= k &lt;= nums.length</code></li>
</ul>


## Solution

---
### Python3
``` py title='count-number-of-nice-subarrays'
class Solution:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        N = len(nums)
        
        def atMost(k):
            res = odds = i = 0
            
            for j, x in enumerate(nums):
                odds += int(x & 1)

                while odds > k:
                    odds -= int(nums[i] & 1)
                    i += 1
                
                res += (j - i + 1)

            return res
        
        return atMost(k) - atMost(k - 1)

```

