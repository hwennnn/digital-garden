---
title: 2831. Find the Longest Equal Subarray
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - binary-search
  - sliding-window
  - weekly-contest-359
  - contest-question
date: 2023-08-20
---

[Problem Link](https://leetcode.com/problems/find-the-longest-equal-subarray/)

## Description

---
<p>You are given a <strong>0-indexed</strong> integer array <code>nums</code> and an integer <code>k</code>.</p>

<p>A subarray is called <strong>equal</strong> if all of its elements are equal. Note that the empty subarray is an <strong>equal</strong> subarray.</p>

<p>Return <em>the length of the <strong>longest</strong> possible equal subarray after deleting <strong>at most</strong> </em><code>k</code><em> elements from </em><code>nums</code>.</p>

<p>A <b>subarray</b> is a contiguous, possibly empty sequence of elements within an array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,3,2,3,1,3], k = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> It&#39;s optimal to delete the elements at index 2 and index 4.
After deleting them, nums becomes equal to [1, 3, 3, 3].
The longest equal subarray starts at i = 1 and ends at j = 3 with length equal to 3.
It can be proven that no longer equal subarrays can be created.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,1,2,2,1,1], k = 2
<strong>Output:</strong> 4
<strong>Explanation:</strong> It&#39;s optimal to delete the elements at index 2 and index 3.
After deleting them, nums becomes equal to [1, 1, 1, 1].
The array itself is an equal subarray, so the answer is 4.
It can be proven that no longer equal subarrays can be created.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= nums.length</code></li>
	<li><code>0 &lt;= k &lt;= nums.length</code></li>
</ul>


## Solution

---
### Python3
``` py title='find-the-longest-equal-subarray'
class Solution:
    def longestEqualSubarray(self, nums: List[int], k: int) -> int:
        N = len(nums)
        res = 1
        locs = defaultdict(list)

        for i, x in enumerate(nums):
            locs[x].append(i)
        
        for values in locs.values():
            i = 0
            used = 0

            for j in range(1, len(values)):
                used += values[j] - values[j - 1] - 1

                if used > k:
                    used -= values[i + 1] - values[i] - 1
                    i += 1
                
                res = max(res, j - i + 1)
        
        return res
```

