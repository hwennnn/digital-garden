---
title: 2945. Find Maximum Non-decreasing Array Length
draft: false
tags: 
  - leetcode-hard
  - array
  - binary-search
  - dynamic-programming
  - stack
  - queue
  - monotonic-stack
  - monotonic-queue
  - biweekly-contest-118
  - contest-question
date: 2023-11-29
---

[Problem Link](https://leetcode.com/problems/find-maximum-non-decreasing-array-length/)

## Description

---
<p>You are given a <strong>0-indexed</strong> integer array <code>nums</code>.</p>

<p>You can perform any number of operations, where each operation involves selecting a <strong>subarray</strong> of the array and replacing it with the <strong>sum</strong> of its elements. For example, if the given array is <code>[1,3,5,6]</code> and you select subarray <code>[3,5]</code> the array will convert to <code>[1,8,6]</code>.</p>

<p>Return <em>the </em><strong><em>maximum</em></strong><em> length of a </em><strong><em>non-decreasing</em></strong><em> array that can be made after applying operations.</em></p>

<p>A <strong>subarray</strong> is a contiguous <strong>non-empty</strong> sequence of elements within an array.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [5,2,2]
<strong>Output:</strong> 1
<strong>Explanation:</strong> This array with length 3 is not non-decreasing.
We have two ways to make the array length two.
First, choosing subarray [2,2] converts the array to [5,4].
Second, choosing subarray [5,2] converts the array to [7,2].
In these two ways the array is not non-decreasing.
And if we choose subarray [5,2,2] and replace it with [9] it becomes non-decreasing. 
So the answer is 1.
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The array is non-decreasing. So the answer is 4.
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [4,3,2,6]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Replacing [3,2] with [5] converts the given array to [4,5,6] that is non-decreasing.
Because the given array is not non-decreasing, the maximum<!-- notionvc: 3447a505-d1ee-4411-8cae-e52162f53a55 --> possible answer is 3.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='find-maximum-non-decreasing-array-length'
class Solution:
    def findMaximumLength(self, nums: List[int]) -> int:
        N = len(nums)
        prefix = list(accumulate(nums, initial = 0))
        dp = [0] * (N + 1)
        pre = [0] * (N + 2)

        # lastSum = prefix[j] - prefix[i]
        # to find the next accumulate sum that is greater than the lastSum, let's say at index k
        # prefix[k] - prefix[j]
        # the condition will be prefix[k] - prefix[j] <= prefix[j] - prefix[i]
        # 2 * prefix[j] - prefix[i] <= prefix[k]
        # hence, binary search the SUM, so we will able to know at index k, we will able to split from the index (pre[k])
        # push forward DP

        i = 0
        for j in range(1, N + 1):
            i = max(i, pre[j]) # update if there is any optimal split
            dp[j] = dp[i] + 1 # since we know the last split index is at i, we can update the dp array
            k = bisect_left(prefix, 2 * prefix[j] - prefix[i])
            pre[k] = j

        return max(dp)
```

