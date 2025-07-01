---
title: 1262. Greatest Sum Divisible by Three
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
  - greedy
  - sorting
  - weekly-contest-163
  - contest-question
date: 2020-08-16
---

[Problem Link](https://leetcode.com/problems/greatest-sum-divisible-by-three/)

## Description

---
<p>Given an integer array <code>nums</code>, return <em>the <strong>maximum possible sum </strong>of elements of the array such that it is divisible by three</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,6,5,1,8]
<strong>Output:</strong> 18
<strong>Explanation:</strong> Pick numbers 3, 6, 1 and 8 their sum is 18 (maximum sum divisible by 3).</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [4]
<strong>Output:</strong> 0
<strong>Explanation:</strong> Since 4 is not divisible by 3, do not pick any number.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4,4]
<strong>Output:</strong> 12
<strong>Explanation:</strong> Pick numbers 1, 3, 4 and 4 their sum is 12 (maximum sum divisible by 3).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 4 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='greatest-sum-divisible-by-three'
class Solution:
    def maxSumDivThree(self, nums: List[int]) -> int:
        n = len(nums)
        dp = [0, 0, 0]
        
        for num in nums:
            
            for i in dp[:]:
                dp[(i+num)%3] = max(dp[(i+num)%3], num + i)
            
        
        return dp[0]
    
```
### C++
``` cpp title='greatest-sum-divisible-by-three'
class Solution {
public:
    int maxSumDivThree(vector<int>& nums) {
        vector<int> dp {0,0,0}, dp2;
        
        for (int num : nums){
            dp2 = dp;
            
            for (int i : dp2){
                dp[(num+i)%3] = max(dp[(num+i)%3], num+i);
            }
        }
        
        return dp[0];
    }
};
```

