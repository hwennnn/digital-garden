---
title: 992. Subarrays with K Different Integers
draft: false
tags: 
  - leetcode-hard
  - array
  - hash-table
  - sliding-window
  - counting
  - weekly-contest-123
  - contest-question
date: 2024-03-30
---

[Problem Link](https://leetcode.com/problems/subarrays-with-k-different-integers/)

## Description

---
<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the number of <strong>good subarrays</strong> of </em><code>nums</code>.</p>

<p>A <strong>good array</strong> is an array where the number of different integers in that array is exactly <code>k</code>.</p>

<ul>
	<li>For example, <code>[1,2,3,1,2]</code> has <code>3</code> different integers: <code>1</code>, <code>2</code>, and <code>3</code>.</li>
</ul>

<p>A <strong>subarray</strong> is a <strong>contiguous</strong> part of an array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,1,2,3], k = 2
<strong>Output:</strong> 7
<strong>Explanation:</strong> Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,1,3,4], k = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= nums[i], k &lt;= nums.length</code></li>
</ul>


## Solution

---
### Python3
``` py title='subarrays-with-k-different-integers'
class Solution:
    def subarraysWithKDistinct(self, nums: List[int], k: int) -> int:
        N = len(nums)

        # exact(k) = atMost(k) - atMost(k - 1)

        def atMost(k):
            counter = Counter()
            res = i = count = 0

            for j, x in enumerate(nums):
                if counter[x] == 0:
                    count += 1

                counter[x] += 1

                while count > k:
                    counter[nums[i]] -= 1
                    if counter[nums[i]] == 0:
                        count -= 1
                    
                    i += 1
                
                res += j - i - 1

            return res
        
        return atMost(k) - atMost(k - 1)
```

