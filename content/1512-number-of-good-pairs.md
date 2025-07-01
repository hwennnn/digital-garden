---
title: 1512. Number of Good Pairs
draft: false
tags: 
  - leetcode-easy
  - array
  - hash-table
  - math
  - counting
  - weekly-contest-197
  - contest-question
date: 2023-10-03
---

[Problem Link](https://leetcode.com/problems/number-of-good-pairs/)

## Description

---
<p>Given an array of integers <code>nums</code>, return <em>the number of <strong>good pairs</strong></em>.</p>

<p>A pair <code>(i, j)</code> is called <em>good</em> if <code>nums[i] == nums[j]</code> and <code>i</code> &lt; <code>j</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,1,1,3]
<strong>Output:</strong> 4
<strong>Explanation:</strong> There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,1,1,1]
<strong>Output:</strong> 6
<strong>Explanation:</strong> Each pair in the array are <em>good</em>.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 100</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>
</ul>


## Solution

---
### Python3
``` py title='number-of-good-pairs'
class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        count = Counter()
        res = 0

        for x in nums:
            res += count[x]
            count[x] += 1

        return res
```

