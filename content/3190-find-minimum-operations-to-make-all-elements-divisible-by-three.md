---
title: 3190. Find Minimum Operations to Make All Elements Divisible by Three
draft: false
tags: 
  - leetcode-easy
  - array
  - math
date: 2024-06-23
---

[Problem Link](https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/)

## Description

---
<p>You are given an integer array <code>nums</code>. In one operation, you can add or subtract 1 from <strong>any</strong> element of <code>nums</code>.</p>

<p>Return the <strong>minimum</strong> number of operations to make all elements of <code>nums</code> divisible by 3.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,2,3,4]</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p>All array elements can be made divisible by 3 using 3 operations:</p>

<ul>
	<li>Subtract 1 from 1.</li>
	<li>Add 1 to 2.</li>
	<li>Subtract 1 from 4.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [3,6,9]</span></p>

<p><strong>Output:</strong> <span class="example-io">0</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 50</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 50</code></li>
</ul>


## Solution

---
### Python3
``` py title='find-minimum-operations-to-make-all-elements-divisible-by-three'
class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        res = 0
        
        for x in nums:
            m = x % 3
            
            if m != 0:
                res += min(m, 3 - m)
        
        return res
```

