---
title: 2862. Maximum Element-Sum of a Complete Subset of Indices
draft: false
tags: 
  - leetcode-hard
  - array
  - math
  - number-theory
  - weekly-contest-363
  - contest-question
date: 2023-09-27
---

[Problem Link](https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/)

## Description

---
<p>You are given a <strong>1</strong><strong>-indexed</strong> array <code>nums</code>. Your task is to select a <strong>complete subset</strong> from <code>nums</code> where every pair of selected indices multiplied is a <span data-keyword="perfect-square">perfect square,</span>. i. e. if you select <code>a<sub>i</sub></code> and <code>a<sub>j</sub></code>, <code>i * j</code> must be a perfect square.</p>

<p>Return the <em>sum</em> of the complete subset with the <em>maximum sum</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [8,7,3,5,7,2,4,9]</span></p>

<p><strong>Output:</strong> <span class="example-io">16</span></p>

<p><strong>Explanation:</strong></p>

<p>We select elements at indices 2 and 8 and <code>2 * 8</code> is a perfect square.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [8,10,3,8,1,13,7,9,4]</span></p>

<p><strong>Output:</strong> <span class="example-io">20</span></p>

<p><strong>Explanation:</strong></p>

<p>We select elements at indices 1, 4, and 9. <code>1 * 4</code>, <code>1 * 9</code>, <code>4 * 9</code> are perfect squares.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n == nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-element-sum-of-a-complete-subset-of-indices'
class Solution:
   def maximumSum(self, nums: List[int]) -> int:
        N = len(nums)
        res = 0
        squares = []
        i = 1
        
        while i <= N:
            squares.append(i * i)
            i += 1

        # 1) perfect sqaure * perfect square = perfect square -> a^2 * b^2 = a^2b^2
        # 2) since i is constant, pair1 = i^1 * a^2, pair2 = i^1 * b^2
        # 3) their product is i^2 * (ab) ^ 2 which warrants a perfect square

        for i, x in enumerate(nums, start = 1):
            curr = 0

            for sq in squares:
                if i * sq - 1 >= N: break
                
                curr += nums[i * sq - 1]

            res = max(res, curr)

        return res

```

