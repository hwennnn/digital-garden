---
title: 2567. Minimum Score by Changing Two Elements
draft: false
tags: 
  - leetcode-medium
  - array
  - greedy
  - sorting
  - biweekly-contest-98
  - contest-question
date: 2023-02-26
---

[Problem Link](https://leetcode.com/problems/minimum-score-by-changing-two-elements/)

## Description

---
<p>You are given an integer array <code>nums</code>.</p>

<ul>
	<li>The <strong>low</strong> score of <code>nums</code> is the <strong>minimum</strong> absolute difference between any two integers.</li>
	<li>The <strong>high</strong> score of <code>nums</code> is the <strong>maximum</strong> absolute difference between any two integers.</li>
	<li>The <strong>score</strong> of <code>nums</code> is the sum of the <strong>high</strong> and <strong>low</strong> scores.</li>
</ul>

<p>Return the <strong>minimum score</strong> after <strong>changing two elements</strong> of <code>nums</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,4,7,8,5]</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>Change <code>nums[0]</code> and <code>nums[1]</code> to be 6 so that <code>nums</code> becomes [6,6,7,8,5].</li>
	<li>The low score is the minimum absolute difference: |6 - 6| = 0.</li>
	<li>The high score is the maximum absolute difference: |8 - 5| = 3.</li>
	<li>The sum of high and low score is 3.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,4,3]</span></p>

<p><strong>Output:</strong> <span class="example-io">0</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>Change <code>nums[1]</code> and <code>nums[2]</code> to 1 so that <code>nums</code> becomes [1,1,1].</li>
	<li>The sum of maximum absolute difference and minimum absolute difference is 0.</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-score-by-changing-two-elements'
class Solution:
    def minimizeSum(self, nums: List[int]) -> int:
        nums.sort()
        A = nums[-1] - nums[2]
        B = nums[-3] - nums[0]
        C = nums[-2] - nums[1]
        
        return min(A, B, C)
```

