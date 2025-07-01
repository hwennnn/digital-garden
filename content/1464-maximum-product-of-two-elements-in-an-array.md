---
title: 1464. Maximum Product of Two Elements in an Array
draft: false
tags: 
  - leetcode-easy
  - array
  - sorting
  - heap-priority-queue
  - weekly-contest-191
  - contest-question
date: 2023-12-12
---

[Problem Link](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/)

## Description

---
Given the array of integers <code>nums</code>, you will choose two different indices <code>i</code> and <code>j</code> of that array. <em>Return the maximum value of</em> <code>(nums[i]-1)*(nums[j]-1)</code>.
<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,4,5,2]
<strong>Output:</strong> 12 
<strong>Explanation:</strong> If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,5,4,5]
<strong>Output:</strong> 16
<strong>Explanation:</strong> Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,7]
<strong>Output:</strong> 12
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 500</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10^3</code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-product-of-two-elements-in-an-array'
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        N = len(nums)
        largest = secondLargest = 0

        for x in nums:
            if x > largest:
                largest, secondLargest = x, largest
            elif x > secondLargest:
                secondLargest = x

        return (largest - 1) * (secondLargest - 1)

```

