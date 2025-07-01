---
title: 1793. Maximum Score of a Good Subarray
draft: false
tags: 
  - leetcode-hard
  - array
  - two-pointers
  - binary-search
  - stack
  - monotonic-stack
  - weekly-contest-232
  - contest-question
date: 2023-10-22
---

[Problem Link](https://leetcode.com/problems/maximum-score-of-a-good-subarray/)

## Description

---
<p>You are given an array of integers <code>nums</code> <strong>(0-indexed)</strong> and an integer <code>k</code>.</p>

<p>The <strong>score</strong> of a subarray <code>(i, j)</code> is defined as <code>min(nums[i], nums[i+1], ..., nums[j]) * (j - i + 1)</code>. A <strong>good</strong> subarray is a subarray where <code>i &lt;= k &lt;= j</code>.</p>

<p>Return <em>the maximum possible <strong>score</strong> of a <strong>good</strong> subarray.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,4,3,7,4,5], k = 3
<strong>Output:</strong> 15
<strong>Explanation:</strong> The optimal subarray is (1, 5) with a score of min(4,3,7,4,5) * (5-1+1) = 3 * 5 = 15. 
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [5,5,4,5,4,1,1,1], k = 0
<strong>Output:</strong> 20
<strong>Explanation:</strong> The optimal subarray is (0, 4) with a score of min(5,5,4,5,4) * (4-0+1) = 4 * 5 = 20.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>0 &lt;= k &lt; nums.length</code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-score-of-a-good-subarray'
class Solution:
    def maximumScore(self, nums: List[int], k: int) -> int:
        N = len(nums)
        i, j = k - 1, k + 1
        res = min_num = nums[k]
        
        while i >= 0 or j < N:
            left = nums[i] if i >= 0 else 0
            right = nums[j] if j < N else 0

            if left < right:
                min_num = min(min_num, right)
                j += 1
            else:
                min_num = min(min_num, left)
                i -= 1
            
            res = max(res, (j - i - 1) * min_num)

        return res
```

