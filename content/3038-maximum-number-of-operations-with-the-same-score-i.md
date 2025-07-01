---
title: 3038. Maximum Number of Operations With the Same Score I
draft: false
tags: 
  - leetcode-easy
  - array
  - simulation
  - biweekly-contest-124
  - contest-question
date: 2024-02-18
---

[Problem Link](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/)

## Description

---
<p>You are given an array of integers <code>nums</code>. Consider the following operation:</p>

<ul>
	<li>Delete the first two elements <code>nums</code> and define the <em>score</em> of the operation as the sum of these two elements.</li>
</ul>

<p>You can perform this operation until <code>nums</code> contains fewer than two elements. Additionally, the <strong>same</strong> <em>score</em> must be achieved in <strong>all</strong> operations.</p>

<p>Return the <strong>maximum</strong> number of operations you can perform.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [3,2,1,4,5]</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>We can perform the first operation with the score <code>3 + 2 = 5</code>. After this operation, <code>nums = [1,4,5]</code>.</li>
	<li>We can perform the second operation as its score is <code>4 + 1 = 5</code>, the same as the previous operation. After this operation, <code>nums = [5]</code>.</li>
	<li>As there are fewer than two elements, we can&#39;t perform more operations.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,5,3,3,4,1,3,2,2,3]</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>We can perform the first operation with the score <code>1 + 5 = 6</code>. After this operation, <code>nums = [3,3,4,1,3,2,2,3]</code>.</li>
	<li>We can perform the second operation as its score is <code>3 + 3 = 6</code>, the same as the previous operation. After this operation, <code>nums = [4,1,3,2,2,3]</code>.</li>
	<li>We cannot perform the next operation as its score is <code>4 + 1 = 5</code>, which is different from the previous scores.</li>
</ul>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [5,3]</span></p>

<p><strong>Output:</strong> <span class="example-io">1</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 100</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 1000</code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-number-of-operations-with-the-same-score-i'
class Solution:
    def maxOperations(self, nums: List[int]) -> int:
        N = len(nums)
        twos = nums[0] + nums[1]
        res = 1
        
        for i in range(2, N, 2):
            if i + 1 < N and nums[i] + nums[i + 1] == twos:
                res += 1
            else:
                break
        
        return res
```

