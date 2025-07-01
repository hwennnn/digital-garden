---
title: 3177. Find the Maximum Length of a Good Subsequence II
draft: false
tags: 
  - leetcode-hard
  - array
  - hash-table
  - dynamic-programming
  - biweekly-contest-132
  - contest-question
date: 2024-06-09
---

[Problem Link](https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii/)

## Description

---
<p>You are given an integer array <code>nums</code> and a <strong>non-negative</strong> integer <code>k</code>. A sequence of integers <code>seq</code> is called <strong>good</strong> if there are <strong>at most</strong> <code>k</code> indices <code>i</code> in the range <code>[0, seq.length - 2]</code> such that <code>seq[i] != seq[i + 1]</code>.</p>

<p>Return the <strong>maximum</strong> possible length of a <strong>good</strong> <span data-keyword="subsequence-array">subsequence</span> of <code>nums</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,2,1,1,3], k = 2</span></p>

<p><strong>Output:</strong> <span class="example-io">4</span></p>

<p><strong>Explanation:</strong></p>

<p>The maximum length subsequence is <code>[<u>1</u>,<u>2</u>,<u>1</u>,<u>1</u>,3]</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,2,3,4,5,1], k = 0</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<p>The maximum length subsequence is <code>[<u>1</u>,2,3,4,5,<u>1</u>]</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 5 * 10<sup>3</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>0 &lt;= k &lt;= min(50, nums.length)</code></li>
</ul>


## Solution

---
### Python3
``` py title='find-the-maximum-length-of-a-good-subsequence-ii'
class Solution:
    def maximumLength(self, nums: List[int], k: int) -> int:
        N = len(nums)
        # dp[i][j] -> the length of the longest subseq from index i till N with j indices
        dp = [[0] * (k + 1) for _ in range(N)]
        max_dp = [0] * (k + 1)
        prev = {}
        res = 0

        for i in range(N - 1, -1, -1):
            p = prev[nums[i]] if nums[i] in prev else i

            for j in range(k, -1, -1):
                dp[i][j] = max(1 + (dp[p][j] if i != p else 0), 1 + (max_dp[j - 1] if j > 0 else 0))
                max_dp[j] = max(max_dp[j], dp[i][j])
            
            prev[nums[i]] = i
            res = max(res, dp[i][k])
        
        return res
```

