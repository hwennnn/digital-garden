---
title: 1425. Constrained Subsequence Sum
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - queue
  - sliding-window
  - heap-priority-queue
  - monotonic-queue
  - weekly-contest-186
  - contest-question
date: 2023-10-21
---

[Problem Link](https://leetcode.com/problems/constrained-subsequence-sum/)

## Description

---
<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return the maximum sum of a <strong>non-empty</strong> subsequence of that array such that for every two <strong>consecutive</strong> integers in the subsequence, <code>nums[i]</code> and <code>nums[j]</code>, where <code>i &lt; j</code>, the condition <code>j - i &lt;= k</code> is satisfied.</p>

<p>A <em>subsequence</em> of an array is obtained by deleting some number of elements (can be zero) from the array, leaving the remaining elements in their original order.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [10,2,-10,5,20], k = 2
<strong>Output:</strong> 37
<b>Explanation:</b> The subsequence is [10, 2, 5, 20].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [-1,-2,-3], k = 1
<strong>Output:</strong> -1
<b>Explanation:</b> The subsequence must be non-empty, so we choose the largest number.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [10,-2,-10,-5,20], k = 2
<strong>Output:</strong> 23
<b>Explanation:</b> The subsequence is [10, -2, -5, 20].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='constrained-subsequence-sum'
class Solution:
    def constrainedSubsetSum(self, nums: List[int], k: int) -> int:
        N = len(nums)
        queue = deque()
        res = -inf

        # dp[i] = nums[i] + max(0, dp[i - 1], dp[i - 2], ..., dp[i - k])
        # O(N) solution: keep a decreasing monotonic queue

        for i, x in enumerate(nums):
            curr = x
            if queue:
                curr += max(0, queue[0][0])

            while queue and curr > queue[-1][0]:
                queue.pop()
            
            if curr > 0:
                queue.append((curr, i))

            if queue and i - queue[0][1] == k:
                queue.popleft()

            res = max(res, curr)

        return res
```

