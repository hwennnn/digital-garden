---
title: 2035. Partition Array Into Two Arrays to Minimize Sum Difference
draft: false
tags: 
  - leetcode-hard
  - array
  - two-pointers
  - binary-search
  - dynamic-programming
  - bit-manipulation
  - ordered-set
  - bitmask
  - weekly-contest-262
  - contest-question
date: 2022-10-03
---

[Problem Link](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/)

## Description

---
<p>You are given an integer array <code>nums</code> of <code>2 * n</code> integers. You need to partition <code>nums</code> into <strong>two</strong> arrays of length <code>n</code> to <strong>minimize the absolute difference</strong> of the <strong>sums</strong> of the arrays. To partition <code>nums</code>, put each element of <code>nums</code> into <strong>one</strong> of the two arrays.</p>

<p>Return <em>the <strong>minimum</strong> possible absolute difference</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="example-1" src="https://assets.leetcode.com/uploads/2021/10/02/ex1.png" style="width: 240px; height: 106px;" />
<pre>
<strong>Input:</strong> nums = [3,9,7,3]
<strong>Output:</strong> 2
<strong>Explanation:</strong> One optimal partition is: [3,9] and [7,3].
The absolute difference between the sums of the arrays is abs((3 + 9) - (7 + 3)) = 2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [-36,36]
<strong>Output:</strong> 72
<strong>Explanation:</strong> One optimal partition is: [-36] and [36].
The absolute difference between the sums of the arrays is abs((-36) - (36)) = 72.
</pre>

<p><strong class="example">Example 3:</strong></p>
<img alt="example-3" src="https://assets.leetcode.com/uploads/2021/10/02/ex3.png" style="width: 316px; height: 106px;" />
<pre>
<strong>Input:</strong> nums = [2,-1,0,4,-2,-9]
<strong>Output:</strong> 0
<strong>Explanation:</strong> One optimal partition is: [2,4,-9] and [-1,0,-2].
The absolute difference between the sums of the arrays is abs((2 + 4 + -9) - (-1 + 0 + -2)) = 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 15</code></li>
	<li><code>nums.length == 2 * n</code></li>
	<li><code>-10<sup>7</sup> &lt;= nums[i] &lt;= 10<sup>7</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='partition-array-into-two-arrays-to-minimize-sum-difference'
class Solution:
    def minimumDifference(self, nums: List[int]) -> int:
        
        def construct(A):
            n = len(A)
            mp = {}
            
            for k in range(1, n + 1):
                sums = []
                for comb in combinations(A, k):
                    sums.append(sum(comb))
                mp[k] = sums
            
            return mp
        
        n = len(nums) // 2
        left, right = nums[:n], nums[n:]
        left_part, right_part = construct(left), construct(right)
        res = abs(sum(left) - sum(right))
        total = sum(nums)
        half = total // 2
        
        for k in range(1, n - 1):
            l, r = left_part[k], right_part[n - k]
            r.sort()
            
            for x in l:
                target = half - x
                index = bisect.bisect_left(r, target)
                
                for p in (index - 1, index):
                    if 0 <= p < len(r):
                        leftSum = x + r[p]
                        rightSum = total - leftSum
                        res = min(res, abs(leftSum - rightSum))
            
        return res
```

