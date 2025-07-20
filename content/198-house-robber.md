---
title: 198. House Robber
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
date: 2020-08-15
---

[Problem Link](https://leetcode.com/problems/house-robber/)

## Description

---
<p>You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and <b>it will automatically contact the police if two adjacent houses were broken into on the same night</b>.</p>

<p>Given an integer array <code>nums</code> representing the amount of money of each house, return <em>the maximum amount of money you can rob tonight <b>without alerting the police</b></em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,1]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,7,9,3,1]
<strong>Output:</strong> 12
<strong>Explanation:</strong> Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 100</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 400</code></li>
</ul>


## Solution

---
### Python3
``` py title='house-robber'
class Solution:
    def rob(self, nums: List[int]) -> int:
        rob, not_rob = 0, 0

        for x in nums:
            rob, not_rob = not_rob + x, max(rob, not_rob)
        
        return max(rob, not_rob)
```
### Python
``` py title='house-robber'
class Solution(object):
    def rob(self, nums):
        
        # if not nums:
        #     return 0
        # if len(nums) < 2:
        #     return nums[0]
        # nums[1] = max(nums[0], nums[1])
        # for i in range(2, len(nums)):
        #     nums[i] = max((nums[i-2]+nums[i]), nums[i-1])
        # return nums[-1]

        
        n = len(nums)
        ifRobbed = ifNotRobbed = 0
        
        for i in range(n):
            rob_this = ifNotRobbed + nums[i]
            
            no_rob_this = max(ifRobbed, ifNotRobbed)
            
            ifRobbed = rob_this
            
            ifNotRobbed = no_rob_this
        
        return max(ifRobbed, ifNotRobbed)
            
        
```

