---
title: 2809. Minimum Time to Make Array Sum At Most x
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - sorting
  - biweekly-contest-110
  - contest-question
date: 2023-08-28
---

[Problem Link](https://leetcode.com/problems/minimum-time-to-make-array-sum-at-most-x/)

## Description

---
<p>You are given two <strong>0-indexed</strong> integer arrays <code>nums1</code> and <code>nums2</code> of equal length. Every second, for all indices <code>0 &lt;= i &lt; nums1.length</code>, value of <code>nums1[i]</code> is incremented by <code>nums2[i]</code>. <strong>After</strong> this is done, you can do the following operation:</p>

<ul>
	<li>Choose an index <code>0 &lt;= i &lt; nums1.length</code> and make <code>nums1[i] = 0</code>.</li>
</ul>

<p>You are also given an integer <code>x</code>.</p>

<p>Return <em>the <strong>minimum</strong> time in which you can make the sum of all elements of </em><code>nums1</code><em> to be<strong> less than or equal</strong> to </em><code>x</code>, <em>or </em><code>-1</code><em> if this is not possible.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [1,2,3], nums2 = [1,2,3], x = 4
<strong>Output:</strong> 3
<strong>Explanation:</strong> 
For the 1st second, we apply the operation on i = 0. Therefore nums1 = [0,2+2,3+3] = [0,4,6]. 
For the 2nd second, we apply the operation on i = 1. Therefore nums1 = [0+1,0,6+3] = [1,0,9]. 
For the 3rd second, we apply the operation on i = 2. Therefore nums1 = [1+1,0+2,0] = [2,2,0]. 
Now sum of nums1 = 4. It can be shown that these operations are optimal, so we return 3.

</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [1,2,3], nums2 = [3,3,3], x = 4
<strong>Output:</strong> -1
<strong>Explanation:</strong> It can be shown that the sum of nums1 will always be greater than x, no matter which operations are performed.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code><font face="monospace">1 &lt;= nums1.length &lt;= 10<sup>3</sup></font></code></li>
	<li><code>1 &lt;= nums1[i] &lt;= 10<sup>3</sup></code></li>
	<li><code>0 &lt;= nums2[i] &lt;= 10<sup>3</sup></code></li>
	<li><code>nums1.length == nums2.length</code></li>
	<li><code>0 &lt;= x &lt;= 10<sup>6</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-time-to-make-array-sum-at-most-x'
class Solution:
    def minimumTime(self, nums1: List[int], nums2: List[int], x: int) -> int:
        N = len(nums1)
        total1 = sum(nums1)
        total2 = sum(nums2)

        if total1 <= x: return 0

        A = sorted(zip(nums1, nums2), key = lambda x : x[1])
        # dp[i][t] -> t <= i
        dp = [[0] * (N + 1) for _ in range(N + 1)]

        for t in range(1, N + 1):
            for i in range(1, N + 1):
                if i < t: continue

                dp[i][t] = max(dp[i - 1][t], dp[i - 1][t - 1] + A[i - 1][1] * t + A[i - 1][0])
        
        for t in range(1, N + 1):
            total = total2 * t + total1

            if total - dp[N][t] <= x:
                return t

        return -1
```

