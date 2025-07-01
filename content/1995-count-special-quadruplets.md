---
title: 1995. Count Special Quadruplets
draft: false
tags: 
  - leetcode-easy
  - array
  - hash-table
  - enumeration
  - weekly-contest-257
  - contest-question
date: 2021-09-05
---

[Problem Link](https://leetcode.com/problems/count-special-quadruplets/)

## Description

---
<p>Given a <strong>0-indexed</strong> integer array <code>nums</code>, return <em>the number of <strong>distinct</strong> quadruplets</em> <code>(a, b, c, d)</code> <em>such that:</em></p>

<ul>
	<li><code>nums[a] + nums[b] + nums[c] == nums[d]</code>, and</li>
	<li><code>a &lt; b &lt; c &lt; d</code></li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,6]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The only quadruplet that satisfies the requirement is (0, 1, 2, 3) because 1 + 2 + 3 == 6.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,3,6,4,5]
<strong>Output:</strong> 0
<strong>Explanation:</strong> There are no such quadruplets in [3,3,6,4,5].
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,1,1,3,5]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The 4 quadruplets that satisfy the requirement are:
- (0, 1, 2, 3): 1 + 1 + 1 == 3
- (0, 1, 3, 4): 1 + 1 + 3 == 5
- (0, 2, 3, 4): 1 + 1 + 3 == 5
- (1, 2, 3, 4): 1 + 1 + 3 == 5
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>4 &lt;= nums.length &lt;= 50</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>
</ul>


## Solution

---
### Python3
``` py title='count-special-quadruplets'
class Solution:
    def countQuadruplets(self, nums: List[int]) -> int:
        n = len(nums)
        res = 0
        
        for i in range(n):
            for j in range(i + 1, n):
                for k in range(j + 1, n):
                    for z in range(k + 1, n):
                        if nums[i] + nums[j] + nums[k] == nums[z]:
                            res += 1
        
        return res
```

