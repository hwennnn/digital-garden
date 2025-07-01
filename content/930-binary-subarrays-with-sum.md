---
title: 930. Binary Subarrays With Sum
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - sliding-window
  - prefix-sum
  - weekly-contest-108
  - contest-question
date: 2024-03-14
---

[Problem Link](https://leetcode.com/problems/binary-subarrays-with-sum/)

## Description

---
<p>Given a binary array <code>nums</code> and an integer <code>goal</code>, return <em>the number of non-empty <strong>subarrays</strong> with a sum</em> <code>goal</code>.</p>

<p>A <strong>subarray</strong> is a contiguous part of the array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,0,1,0,1], goal = 2
<strong>Output:</strong> 4
<strong>Explanation:</strong> The 4 subarrays are bolded and underlined below:
[<u><strong>1,0,1</strong></u>,0,1]
[<u><strong>1,0,1,0</strong></u>,1]
[1,<u><strong>0,1,0,1</strong></u>]
[1,0,<u><strong>1,0,1</strong></u>]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,0,0,0,0], goal = 0
<strong>Output:</strong> 15
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>nums[i]</code> is either <code>0</code> or <code>1</code>.</li>
	<li><code>0 &lt;= goal &lt;= nums.length</code></li>
</ul>


## Solution

---
### Python3
``` py title='binary-subarrays-with-sum'
class Solution:
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
        N = len(nums)
        
        def atMost(k):
            if k < 0: return 0

            i = curr = res = 0

            for j, x in enumerate(nums):
                curr += x

                while curr > k:
                    curr -= nums[i]
                    i += 1
                
                res += (j - i + 1)
            
            return res
        
        return atMost(goal) - atMost(goal - 1) # to find the number of subarrays with exact "goal"
```

