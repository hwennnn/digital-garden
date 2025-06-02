---
title: 152. Maximum Product Subarray
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
date: 2020-09-11
---

[Problem Link](https://leetcode.com/problems/maximum-product-subarray/)

## Description

---
<p>Given an integer array <code>nums</code>, find a <span data-keyword="subarray-nonempty">subarray</span> that has the largest product, and return <em>the product</em>.</p>

<p>The test cases are generated so that the answer will fit in a <strong>32-bit</strong> integer.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,3,-2,4]
<strong>Output:</strong> 6
<strong>Explanation:</strong> [2,3] has the largest product 6.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [-2,0,-1]
<strong>Output:</strong> 0
<strong>Explanation:</strong> The result cannot be 2, because [-2,-1] is not a subarray.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>-10 &lt;= nums[i] &lt;= 10</code></li>
	<li>The product of any subarray of <code>nums</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.</li>
</ul>


## Solution

---
### Python3
``` py title='maximum-product-subarray'
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        N = len(nums)
        pos = neg = res = nums[0]

        for i in range(1, N):
            if nums[i] < 0:
                pos, neg = neg, pos
            
            pos = max(nums[i], pos * nums[i])
            neg = min(nums[i], neg * nums[i])
            res = max(res, pos)

        return res
```
### C++
``` cpp title='maximum-product-subarray'
class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int localMax = nums[0]; 
        int localMin = nums[0]; 
        int maxProd = nums[0]; 
        for(int i = 1; i < nums.size(); i ++){ 
            if(nums[i] > 0){ 
                localMax = max(localMax * nums[i], nums[i]); 
                localMin = min(localMin * nums[i], nums[i]); 
            } else{ 
                int localMaxNeg = max(localMin * nums[i], nums[i]); 
                localMin = min(localMax * nums[i], nums[i]); 
                localMax = localMaxNeg; 
            } 
            maxProd = max(maxProd, localMax); 
        } 
        return maxProd; 
    }
};
```

