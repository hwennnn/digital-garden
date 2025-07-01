---
title: 416. Partition Equal Subset Sum
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
  - weekly-contest-8
  - contest-question
date: 2020-11-27
---

[Problem Link](https://leetcode.com/problems/partition-equal-subset-sum/)

## Description

---
<p>Given an integer array <code>nums</code>, return <code>true</code> <em>if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or </em><code>false</code><em> otherwise</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,5,11,5]
<strong>Output:</strong> true
<strong>Explanation:</strong> The array can be partitioned as [1, 5, 5] and [11].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,5]
<strong>Output:</strong> false
<strong>Explanation:</strong> The array cannot be partitioned into equal sum subsets.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 200</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>
</ul>


## Solution

---
### Python3
``` py title='partition-equal-subset-sum'
class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        n = len(nums)
        total = sum(nums)
        target = total // 2
        if total & 1: return False
        
        bits = 1
        
        for x in nums:
            bits |= (bits << x)
        
        return (bits & (1 << target)) > 0
```
### C++
``` cpp title='partition-equal-subset-sum'
class Solution {
public:
    bool canPartition(vector<int>& nums) {
        bitset<10001> bits(1);
        int total = 0;
        
        for (auto n:nums)
            bits |= bits << n, total += n;
        
        return !(total&1) && bits[total / 2];
    }
};
```

