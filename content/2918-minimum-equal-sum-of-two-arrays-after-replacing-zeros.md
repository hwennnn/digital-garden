---
title: 2918. Minimum Equal Sum of Two Arrays After Replacing Zeros
draft: false
tags: 
  - leetcode-medium
  - array
  - greedy
date: 2025-05-10
---

[Problem Link](https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/)

## Description

---
<p>You are given two arrays <code>nums1</code> and <code>nums2</code> consisting of positive integers.</p>

<p>You have to replace <strong>all</strong> the <code>0</code>&#39;s in both arrays with <strong>strictly</strong> positive integers such that the sum of elements of both arrays becomes <strong>equal</strong>.</p>

<p>Return <em>the <strong>minimum</strong> equal sum you can obtain, or </em><code>-1</code><em> if it is impossible</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [3,2,0,1,0], nums2 = [6,5,0]
<strong>Output:</strong> 12
<strong>Explanation:</strong> We can replace 0&#39;s in the following way:
- Replace the two 0&#39;s in nums1 with the values 2 and 4. The resulting array is nums1 = [3,2,2,1,4].
- Replace the 0 in nums2 with the value 1. The resulting array is nums2 = [6,5,1].
Both arrays have an equal sum of 12. It can be shown that it is the minimum sum we can obtain.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [2,0,2,0], nums2 = [1,4]
<strong>Output:</strong> -1
<strong>Explanation:</strong> It is impossible to make the sum of both arrays equal.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums1.length, nums2.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= nums1[i], nums2[i] &lt;= 10<sup>6</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-equal-sum-of-two-arrays-after-replacing-zeros'
class Solution:
    def minSum(self, nums1: List[int], nums2: List[int]) -> int:
        N, M = len(nums1), len(nums2)
        zero1 = zero2 = sum1 = sum2 = 0

        for x in nums1:
            if x == 0:
                zero1 += 1
            else:
                sum1 += x
        
        for x in nums2:
            if x == 0:
                zero2 += 1
            else:
                sum2 += x
        
        if zero1 == 0 and zero2 == 0:
            return -1 if sum1 != sum2 else sum1
        
        if zero1 == 0:
            if zero2 + sum2 > sum1: return -1
            return sum1
        
        if zero2 == 0:
            if zero1 + sum1 > sum2: return -1
            return sum2
        
        return max(sum1 + zero1, sum2 + zero2)


```

