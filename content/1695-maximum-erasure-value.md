---
title: 1695. Maximum Erasure Value
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - sliding-window
  - weekly-contest-220
  - contest-question
date: 2022-06-12
---

[Problem Link](https://leetcode.com/problems/maximum-erasure-value/)

## Description

---
<p>You are given an array of positive integers <code>nums</code> and want to erase a subarray containing&nbsp;<strong>unique elements</strong>. The <strong>score</strong> you get by erasing the subarray is equal to the <strong>sum</strong> of its elements.</p>

<p>Return <em>the <strong>maximum score</strong> you can get by erasing <strong>exactly one</strong> subarray.</em></p>

<p>An array <code>b</code> is called to be a <span class="tex-font-style-it">subarray</span> of <code>a</code> if it forms a contiguous subsequence of <code>a</code>, that is, if it is equal to <code>a[l],a[l+1],...,a[r]</code> for some <code>(l,r)</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [4,2,4,5,6]
<strong>Output:</strong> 17
<strong>Explanation:</strong> The optimal subarray here is [2,4,5,6].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [5,2,1,2,5,2,1,2,5]
<strong>Output:</strong> 8
<strong>Explanation:</strong> The optimal subarray here is [5,2,1] or [1,2,5].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-erasure-value'
class Solution:
    def maximumUniqueSubarray(self, nums: List[int]) -> int:
        s = set()
        i = total = res = 0
        
        for j, x in enumerate(nums):
            while x in s:
                total -= nums[i]
                s.remove(nums[i])
                i += 1
                
            total += x
            s.add(x)
            res = max(res, total)
        
        return res
```

