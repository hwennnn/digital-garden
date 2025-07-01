---
title: 3101. Count Alternating Subarrays
draft: false
tags: 
  - leetcode-medium
  - array
  - math
  - weekly-contest-391
  - contest-question
date: 2024-03-31
---

[Problem Link](https://leetcode.com/problems/count-alternating-subarrays/)

## Description

---
<p>You are given a <span data-keyword="binary-array">binary array</span> <code>nums</code>.</p>

<p>We call a <span data-keyword="subarray-nonempty">subarray</span> <strong>alternating</strong> if <strong>no</strong> two <strong>adjacent</strong> elements in the subarray have the <strong>same</strong> value.</p>

<p>Return <em>the number of alternating subarrays in </em><code>nums</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [0,1,1,1]</span></p>

<p><strong>Output:</strong> <span class="example-io">5</span></p>

<p><strong>Explanation:</strong></p>

<p>The following subarrays are alternating: <code>[0]</code>, <code>[1]</code>, <code>[1]</code>, <code>[1]</code>, and <code>[0,1]</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,0,1,0]</span></p>

<p><strong>Output:</strong> <span class="example-io">10</span></p>

<p><strong>Explanation:</strong></p>

<p>Every subarray of the array is alternating. There are 10 possible subarrays that we can choose.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>nums[i]</code> is either <code>0</code> or <code>1</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='count-alternating-subarrays'
class Solution:
    def countAlternatingSubarrays(self, nums: List[int]) -> int:
        N = len(nums)
        i = 0
        res = 0
        
        for j, x in enumerate(nums):
            if j > 0 and nums[j] == nums[j - 1]:
                i = j
                
            res += j - i + 1
        
        return res
```

