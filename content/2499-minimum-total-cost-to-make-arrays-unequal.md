---
title: 2499. Minimum Total Cost to Make Arrays Unequal
draft: false
tags: 
  - leetcode-hard
  - array
  - hash-table
  - greedy
  - counting
  - biweekly-contest-93
  - contest-question
date: 2022-12-11
---

[Problem Link](https://leetcode.com/problems/minimum-total-cost-to-make-arrays-unequal/)

## Description

---
<p>You are given two <strong>0-indexed</strong> integer arrays <code>nums1</code> and <code>nums2</code>, of equal length <code>n</code>.</p>

<p>In one operation, you can swap the values of any two indices of <code>nums1</code>. The <strong>cost</strong> of this operation is the <strong>sum</strong> of the indices.</p>

<p>Find the <strong>minimum</strong> total cost of performing the given operation <strong>any</strong> number of times such that <code>nums1[i] != nums2[i]</code> for all <code>0 &lt;= i &lt;= n - 1</code> after performing all the operations.</p>

<p>Return <em>the <strong>minimum total cost</strong> such that </em><code>nums1</code> and <code>nums2</code><em> satisfy the above condition</em>. In case it is not possible, return <code>-1</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [1,2,3,4,5], nums2 = [1,2,3,4,5]
<strong>Output:</strong> 10
<strong>Explanation:</strong> 
One of the ways we can perform the operations is:
- Swap values at indices 0 and 3, incurring cost = 0 + 3 = 3. Now, nums1 = [4,2,3,1,5]
- Swap values at indices 1 and 2, incurring cost = 1 + 2 = 3. Now, nums1 = [4,3,2,1,5].
- Swap values at indices 0 and 4, incurring cost = 0 + 4 = 4. Now, nums1 =[5,3,2,1,4].
We can see that for each index i, nums1[i] != nums2[i]. The cost required here is 10.
Note that there are other ways to swap values, but it can be proven that it is not possible to obtain a cost less than 10.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [2,2,2,1,3], nums2 = [1,2,2,3,3]
<strong>Output:</strong> 10
<strong>Explanation:</strong> 
One of the ways we can perform the operations is:
- Swap values at indices 2 and 3, incurring cost = 2 + 3 = 5. Now, nums1 = [2,2,1,2,3].
- Swap values at indices 1 and 4, incurring cost = 1 + 4 = 5. Now, nums1 = [2,3,1,2,2].
The total cost needed here is 10, which is the minimum possible.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [1,2,2], nums2 = [1,2,2]
<strong>Output:</strong> -1
<strong>Explanation:</strong> 
It can be shown that it is not possible to satisfy the given conditions irrespective of the number of operations we perform.
Hence, we return -1.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums1.length == nums2.length</code></li>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums1[i], nums2[i] &lt;= n</code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-total-cost-to-make-arrays-unequal'
class Solution:
    def minimumTotalCost(self, nums1: List[int], nums2: List[int]) -> int:
        N = len(nums1)
        counter = defaultdict(int)
        dominant = -1
        dominantFreq = 0
        res = 0
        swaps = 0

        for i, (a, b) in enumerate(zip(nums1, nums2)):
            if a == b:
                counter[a] += 1
                if counter[a] > dominantFreq:
                    dominantFreq = counter[a]
                    dominant = a
                res += i
                swaps += 1
        
        for i in range(N):
            if dominantFreq > swaps // 2 and nums1[i] != nums2[i] and nums1[i] != dominant and nums2[i] != dominant:
                swaps += 1
                res += i
        
        if dominantFreq > swaps // 2:
            return -1
        
        return res

```

