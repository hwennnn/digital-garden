---
title: 689. Maximum Sum of 3 Non-Overlapping Subarrays
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - sliding-window
  - prefix-sum
  - weekly-contest-52
  - contest-question
date: 2024-12-30
---

[Problem Link](https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/)

## Description

---
<p>Given an integer array <code>nums</code> and an integer <code>k</code>, find three non-overlapping subarrays of length <code>k</code> with maximum sum and return them.</p>

<p>Return the result as a list of indices representing the starting position of each interval (<strong>0-indexed</strong>). If there are multiple answers, return the lexicographically smallest one.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,1,2,6,7,5,1], k = 2
<strong>Output:</strong> [0,3,5]
<strong>Explanation:</strong> Subarrays [1, 2], [2, 6], [7, 5] correspond to the starting indices [0, 3, 5].
We could have also taken [2, 1], but an answer of [1, 3, 5] would be lexicographically larger.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,1,2,1,2,1,2,1], k = 2
<strong>Output:</strong> [0,2,4]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;&nbsp;2<sup>16</sup></code></li>
	<li><code>1 &lt;= k &lt;= floor(nums.length / 3)</code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-sum-of-3-non-overlapping-subarrays'
class Solution:
    def maxSumOfThreeSubarrays(self, nums: List[int], k: int) -> List[int]:
        N = len(nums)
        bestSeq = [0]
        bestTwoSeq = [0, k]
        bestThreeSeq = [0, k, k * 2]

        seqSum = sum(nums[:k])
        seqTwoSum = sum(nums[k : k * 2])
        seqThreeSum = sum(nums[k * 2 : k * 3])

        bestSeqSum = seqSum
        bestTwoSum = seqSum + seqTwoSum
        bestThreeSum = seqSum + seqTwoSum + seqThreeSum

        seqIndex = 1
        seqTwoIndex = k + 1
        seqThreeIndex = 2 * k + 1

        while seqThreeIndex <= N - k:
            seqSum = seqSum - nums[seqIndex - 1] + nums[seqIndex + k - 1]
            seqTwoSum = seqTwoSum - nums[seqTwoIndex - 1] + nums[seqTwoIndex + k - 1]
            seqThreeSum = seqThreeSum - nums[seqThreeIndex - 1] + nums[seqThreeIndex + k - 1]

            if seqSum > bestSeqSum:
                bestSeqSum = seqSum
                bestSeq = [seqIndex]
            
            if bestSeqSum + seqTwoSum > bestTwoSum:
                bestTwoSum = bestSeqSum + seqTwoSum
                bestTwoSeq = bestSeq + [seqTwoIndex]
            
            if bestTwoSum + seqThreeSum > bestThreeSum:
                bestThreeSum = bestTwoSum + seqThreeSum
                bestThreeSeq = bestTwoSeq + [seqThreeIndex]
            
            seqIndex += 1
            seqTwoIndex += 1
            seqThreeIndex += 1

        return bestThreeSeq
```

