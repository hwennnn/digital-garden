---
title: 713. Subarray Product Less Than K
draft: false
tags: 
  - leetcode-medium
  - array
  - binary-search
  - sliding-window
  - prefix-sum
  - weekly-contest-55
  - contest-question
date: 2020-09-28
---

[Problem Link](https://leetcode.com/problems/subarray-product-less-than-k/)

## Description

---
<p>Given an array of integers <code>nums</code> and an integer <code>k</code>, return <em>the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than </em><code>k</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [10,5,2,6], k = 100
<strong>Output:</strong> 8
<strong>Explanation:</strong> The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3], k = 0
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 1000</code></li>
	<li><code>0 &lt;= k &lt;= 10<sup>6</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='subarray-product-less-than-k'
class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        N = len(nums)
        res = 0
        curr = 1
        i = 0

        for j, x in enumerate(nums):
            curr *= x

            while i <= j and curr >= k:
                curr //= nums[i]
                i += 1
            
            res += j - i + 1

        return res
```
### C++
``` cpp title='subarray-product-less-than-k'
class Solution {
public:
    int numSubarrayProductLessThanK(vector<int>& nums, int k) {
        int c = 1, res = 0;
        
        for (int i = 0,j = 0; j < nums.size(); j++){
            c *= nums[j];
            while (i <= j && c >= k)
                c /= nums[i++];
            res += (j - i + 1);
        }
        
        return res;
    }
};
```

