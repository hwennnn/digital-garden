---
title: 905. Sort Array By Parity
draft: false
tags: 
  - array
  - two-pointers
  - sorting
date: 2023-09-28
---

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-blue.svg)

## Description

---
<p>Given an integer array <code>nums</code>, move all the even integers at the beginning of the array followed by all the odd integers.</p>

<p>Return <em><strong>any array</strong> that satisfies this condition</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,1,2,4]
<strong>Output:</strong> [2,4,3,1]
<strong>Explanation:</strong> The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [0]
<strong>Output:</strong> [0]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 5000</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 5000</code></li>
</ul>


## Solution

---
### Python
``` py title='sort-array-by-parity'
class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        i = 0

        for j, x in enumerate(nums):
            if x % 2 == 0:
                nums[i], nums[j] = nums[j], nums[i]
                i += 1
        
        return nums

```

