---
title: 945. Minimum Increment to Make Array Unique
draft: false
tags: 
  - leetcode-medium
  - array
  - greedy
  - sorting
  - counting
  - weekly-contest-112
  - contest-question
date: 2024-06-14
---

[Problem Link](https://leetcode.com/problems/minimum-increment-to-make-array-unique/)

## Description

---
<p>You are given an integer array <code>nums</code>. In one move, you can pick an index <code>i</code> where <code>0 &lt;= i &lt; nums.length</code> and increment <code>nums[i]</code> by <code>1</code>.</p>

<p>Return <em>the minimum number of moves to make every value in </em><code>nums</code><em> <strong>unique</strong></em>.</p>

<p>The test cases are generated so that the answer fits in a 32-bit integer.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,2]
<strong>Output:</strong> 1
<strong>Explanation:</strong> After 1 move, the array could be [1, 2, 3].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,2,1,2,1,7]
<strong>Output:</strong> 6
<strong>Explanation:</strong> After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
It can be shown that it is impossible for the array to have all unique values with 5 or less moves.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-increment-to-make-array-unique'
class Solution:
    def minIncrementForUnique(self, nums: List[int]) -> int:
        N = len(nums)
        res = 0
        curr = -1
        nums.sort()

        for x in nums:
            if x > curr:
                curr = x
            else: # curr >= x
                res += curr - x + 1
                curr += 1

        return res 

```

