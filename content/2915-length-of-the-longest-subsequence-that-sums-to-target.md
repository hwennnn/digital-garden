---
title: 2915. Length of the Longest Subsequence That Sums to Target
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
  - biweekly-contest-116
  - contest-question
date: 2023-10-28
---

[Problem Link](https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/)

## Description

---
<p>You are given a <strong>0-indexed</strong> array of integers <code>nums</code>, and an integer <code>target</code>.</p>

<p>Return <em>the <strong>length of the longest subsequence</strong> of</em> <code>nums</code> <em>that sums up to</em> <code>target</code>. <em>If no such subsequence exists, return</em> <code>-1</code>.</p>

<p>A <strong>subsequence</strong> is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4,5], target = 9
<strong>Output:</strong> 3
<strong>Explanation:</strong> There are 3 subsequences with a sum equal to 9: [4,5], [1,3,5], and [2,3,4]. The longest subsequences are [1,3,5], and [2,3,4]. Hence, the answer is 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [4,1,3,2,1,5], target = 7
<strong>Output:</strong> 4
<strong>Explanation:</strong> There are 5 subsequences with a sum equal to 7: [4,3], [4,1,2], [4,2,1], [1,1,5], and [1,3,2,1]. The longest subsequence is [1,3,2,1]. Hence, the answer is 4.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,1,5,4,5], target = 3
<strong>Output:</strong> -1
<strong>Explanation:</strong> It can be shown that nums has no subsequence that sums up to 3.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 1000</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 1000</code></li>
	<li><code>1 &lt;= target &lt;= 1000</code></li>
</ul>


## Solution

---
### Python3
``` py title='length-of-the-longest-subsequence-that-sums-to-target'
class Solution:
    def lengthOfLongestSubsequence(self, nums: List[int], target: int) -> int:
        N = len(nums)
        dp = [-inf] * (target + 1)
        dp[0] = 0
        
        for x in nums:
            for k in range(target, -1, -1):
                if k - x >= 0:
                    dp[k] = max(dp[k], 1 + dp[k - x])
        
        return dp[target] if dp[target] != -inf else -1
```
### C++
``` cpp title='length-of-the-longest-subsequence-that-sums-to-target'
int memo[1001][1001];

class Solution {
public:
    int go(int index, int curr, int target, vector<int>& nums) {
        if (memo[index][curr] != -1) return memo[index][curr];
        if (curr == target) return 0;
        if (index >= nums.size()) return -1001;
        
        int res = go(index + 1, curr, target, nums);
        
        if (curr + nums[index] <= target) {
            res = max(res, 1 + go(index + 1, curr + nums[index], target, nums));
        }
        
        return memo[index][curr] = res;
    }
    
    int lengthOfLongestSubsequence(vector<int>& nums, int target) {
        memset(memo, -1, sizeof(memo));
        
        int ans = go(0, 0, target, nums);
        
        if (ans < 0) return -1;
        
        return ans;
    }
};
```

