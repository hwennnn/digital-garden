---
title: 3040. Maximum Number of Operations With the Same Score II
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
  - memoization
  - biweekly-contest-124
  - contest-question
date: 2024-02-18
---

[Problem Link](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-ii/)

## Description

---
<p>Given an array of integers called <code>nums</code>, you can perform <strong>any</strong> of the following operation while <code>nums</code> contains <strong>at least</strong> <code>2</code> elements:</p>

<ul>
	<li>Choose the first two elements of <code>nums</code> and delete them.</li>
	<li>Choose the last two elements of <code>nums</code> and delete them.</li>
	<li>Choose the first and the last elements of <code>nums</code> and delete them.</li>
</ul>

<p>The<strong> score</strong> of the operation is the sum of the deleted elements.</p>

<p>Your task is to find the <strong>maximum</strong> number of operations that can be performed, such that <strong>all operations have the same score</strong>.</p>

<p>Return <em>the <strong>maximum</strong> number of operations possible that satisfy the condition mentioned above</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,2,1,2,3,4]
<strong>Output:</strong> 3
<strong>Explanation:</strong> We perform the following operations:
- Delete the first two elements, with score 3 + 2 = 5, nums = [1,2,3,4].
- Delete the first and the last elements, with score 1 + 4 = 5, nums = [2,3].
- Delete the first and the last elements, with score 2 + 3 = 5, nums = [].
We are unable to perform any more operations as nums is empty.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,2,6,1,4]
<strong>Output:</strong> 2
<strong>Explanation:</strong> We perform the following operations:
- Delete the first two elements, with score 3 + 2 = 5, nums = [6,1,4].
- Delete the last two elements, with score 1 + 4 = 5, nums = [6].
It can be proven that we can perform at most 2 operations.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 2000</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 1000</code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-number-of-operations-with-the-same-score-ii'
class Solution:
    def maxOperations(self, nums: List[int]) -> int:
        N = len(nums)
        
        @cache
        def go(score, i, j):
            if i >= j: return 0
            
            res = 0
            # remove first two
            if i + 1 <= j and nums[i] + nums[i + 1] == score:
                res = max(res, 1 + go(score, i + 2, j))
            
            # remove last two
            if j - 1 >= i and nums[j] + nums[j - 1] == score:
                res = max(res, 1 + go(score, i, j - 2))
            
            # remove first and last
            if nums[i] + nums[j] == score:
                res = max(res, 1 + go(score, i + 1, j - 1))
                
            return res
        
        o1 = go(nums[0] + nums[1], 0, N - 1)
        o2 = go(nums[N - 1] + nums[N - 2], 0, N - 1)
        o3 = go(nums[0] + nums[N - 1], 0, N - 1)
        
        return max(o1, o2, o3)
```

