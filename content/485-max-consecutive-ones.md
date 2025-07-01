---
title: 485. Max Consecutive Ones
draft: false
tags: 
  - leetcode-easy
  - array
  - weekly-contest-15
  - contest-question
date: 2021-09-21
---

[Problem Link](https://leetcode.com/problems/max-consecutive-ones/)

## Description

---
<p>Given a binary array <code>nums</code>, return <em>the maximum number of consecutive </em><code>1</code><em>&#39;s in the array</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,1,0,1,1,1]
<strong>Output:</strong> 3
<strong>Explanation:</strong> The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,0,1,1,0,1]
<strong>Output:</strong> 2
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>nums[i]</code> is either <code>0</code> or <code>1</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='max-consecutive-ones'
class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        res = ones = 0
        
        for x in nums:
            if x == 0:
                ones = 0
            else:
                ones += 1
        
            res = max(res, ones)
        
        return res
```

