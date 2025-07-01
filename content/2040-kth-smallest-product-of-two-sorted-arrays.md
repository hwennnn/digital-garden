---
title: 2040. Kth Smallest Product of Two Sorted Arrays
draft: false
tags: 
  - leetcode-hard
  - array
  - binary-search
  - biweekly-contest-63
  - contest-question
date: 2025-06-25
---

[Problem Link](https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/)

## Description

---
Given two <strong>sorted 0-indexed</strong> integer arrays <code>nums1</code> and <code>nums2</code> as well as an integer <code>k</code>, return <em>the </em><code>k<sup>th</sup></code><em> (<strong>1-based</strong>) smallest product of </em><code>nums1[i] * nums2[j]</code><em> where </em><code>0 &lt;= i &lt; nums1.length</code><em> and </em><code>0 &lt;= j &lt; nums2.length</code>.
<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [2,5], nums2 = [3,4], k = 2
<strong>Output:</strong> 8
<strong>Explanation:</strong> The 2 smallest products are:
- nums1[0] * nums2[0] = 2 * 3 = 6
- nums1[0] * nums2[1] = 2 * 4 = 8
The 2<sup>nd</sup> smallest product is 8.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [-4,-2,0,3], nums2 = [2,4], k = 6
<strong>Output:</strong> 0
<strong>Explanation:</strong> The 6 smallest products are:
- nums1[0] * nums2[1] = (-4) * 4 = -16
- nums1[0] * nums2[0] = (-4) * 2 = -8
- nums1[1] * nums2[1] = (-2) * 4 = -8
- nums1[1] * nums2[0] = (-2) * 2 = -4
- nums1[2] * nums2[0] = 0 * 2 = 0
- nums1[2] * nums2[1] = 0 * 4 = 0
The 6<sup>th</sup> smallest product is 0.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [-2,-1,0,1,2], nums2 = [-3,-1,2,4,5], k = 3
<strong>Output:</strong> -6
<strong>Explanation:</strong> The 3 smallest products are:
- nums1[0] * nums2[4] = (-2) * 5 = -10
- nums1[0] * nums2[3] = (-2) * 4 = -8
- nums1[4] * nums2[0] = 2 * (-3) = -6
The 3<sup>rd</sup> smallest product is -6.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums1.length, nums2.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>-10<sup>5</sup> &lt;= nums1[i], nums2[j] &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= k &lt;= nums1.length * nums2.length</code></li>
	<li><code>nums1</code> and <code>nums2</code> are sorted.</li>
</ul>


## Solution

---
### Python3
``` py title='kth-smallest-product-of-two-sorted-arrays'
class Solution:
    def kthSmallestProduct(self, nums1: List[int], nums2: List[int], k: int) -> int:
        neg1, pos1 = [-x for x in nums1 if x < 0][::-1], [x for x in nums1 if x >= 0]
        neg2, pos2 = [-x for x in nums2 if x < 0][::-1], [x for x in nums2 if x >= 0]
        
        neg = len(neg1) * len(pos2) + len(neg2) * len(pos1)
        
        if k > neg:
            k -= neg
            s = 1
        else:
            k = neg - k + 1
            neg2, pos2 = pos2, neg2
            s = -1
        
        def count(A, B, t):
            res = 0
            j = len(B) - 1
            
            for x in A:
                while j >= 0 and x * B[j] > t:
                    j -= 1
                
                res += j + 1
            
            return res
            
        left, right = 0, 10 ** 10
        
        while left < right:
            mid = left + (right - left) // 2
            
            if count(neg1, neg2, mid) + count(pos1, pos2, mid) >= k:
                right = mid
            else:
                left = mid + 1
        
        return left * s
        
```

