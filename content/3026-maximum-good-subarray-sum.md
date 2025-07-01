---
title: 3026. Maximum Good Subarray Sum
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - prefix-sum
  - biweekly-contest-123
  - contest-question
date: 2024-02-04
---

[Problem Link](https://leetcode.com/problems/maximum-good-subarray-sum/)

## Description

---
<p>You are given an array <code>nums</code> of length <code>n</code> and a <strong>positive</strong> integer <code>k</code>.</p>

<p>A <span data-keyword="subarray-nonempty">subarray</span> of <code>nums</code> is called <strong>good</strong> if the <strong>absolute difference</strong> between its first and last element is <strong>exactly</strong> <code>k</code>, in other words, the subarray <code>nums[i..j]</code> is good if <code>|nums[i] - nums[j]| == k</code>.</p>

<p>Return <em>the <strong>maximum</strong> sum of a <strong>good</strong> subarray of </em><code>nums</code>. <em>If there are no good subarrays</em><em>, return </em><code>0</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4,5,6], k = 1
<strong>Output:</strong> 11
<strong>Explanation:</strong> The absolute difference between the first and last element<!-- notionvc: 2a6d66c9-0149-4294-b267-8be9fe252de9 --> must be 1 for a good subarray. All the good subarrays are: [1,2], [2,3], [3,4], [4,5], and [5,6]. The maximum subarray sum is 11 for the subarray [5,6].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [-1,3,2,4,5], k = 3
<strong>Output:</strong> 11
<strong>Explanation:</strong> The absolute difference between the first and last element<!-- notionvc: 2a6d66c9-0149-4294-b267-8be9fe252de9 --> must be 3 for a good subarray. All the good subarrays are: [-1,3,2], and [2,4,5]. The maximum subarray sum is 11 for the subarray [2,4,5].
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [-1,-2,-3,-4], k = 2
<strong>Output:</strong> -6
<strong>Explanation:</strong> The absolute difference between the first and last element<!-- notionvc: 2a6d66c9-0149-4294-b267-8be9fe252de9 --> must be 2 for a good subarray. All the good subarrays are: [-1,-2,-3], and [-2,-3,-4]. The maximum subarray sum is -6 for the subarray [-1,-2,-3].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>1 &lt;= k &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-good-subarray-sum'
class Solution:
    def maximumSubarraySum(self, nums: List[int], k: int) -> int:
        N = len(nums)
        prefix = list(accumulate(nums, initial = 0))
        res = -inf
        pos = {}

        for i, x in enumerate(nums):
            if x + k in pos:
                res = max(res, prefix[i + 1] - prefix[pos[x + k]])
            
            if x - k in pos:
                res = max(res, prefix[i + 1] - prefix[pos[x - k]])
            
            if x not in pos or prefix[i] < prefix[pos[x]]:
                pos[x] = i
        
        return res if res != -inf else 0
```

