---
title: 740. Delete and Earn
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - dynamic-programming
  - weekly-contest-61
  - contest-question
date: 2020-08-14
---

[Problem Link](https://leetcode.com/problems/delete-and-earn/)

## Description

---
<p>You are given an integer array <code>nums</code>. You want to maximize the number of points you get by performing the following operation any number of times:</p>

<ul>
	<li>Pick any <code>nums[i]</code> and delete it to earn <code>nums[i]</code> points. Afterwards, you must delete <b>every</b> element equal to <code>nums[i] - 1</code> and <strong>every</strong> element equal to <code>nums[i] + 1</code>.</li>
</ul>

<p>Return <em>the <strong>maximum number of points</strong> you can earn by applying the above operation some number of times</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,4,2]
<strong>Output:</strong> 6
<strong>Explanation:</strong> You can perform the following operations:
- Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2].
- Delete 2 to earn 2 points. nums = [].
You earn a total of 6 points.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,2,3,3,3,4]
<strong>Output:</strong> 9
<strong>Explanation:</strong> You can perform the following operations:
- Delete a 3 to earn 3 points. All 2&#39;s and 4&#39;s are also deleted. nums = [3,3].
- Delete a 3 again to earn 3 points. nums = [3].
- Delete a 3 once more to earn 3 points. nums = [].
You earn a total of 9 points.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='delete-and-earn'
class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        buckets = [0] * 10001
        
        for x in nums:
            buckets[x] += x
        
        dp = [0] * 10001
        dp[0] = buckets[0]
        dp[1] = buckets[1]
        
        for i in range(2, 10001):
            dp[i] = max(dp[i - 1], dp[i - 2] + buckets[i])

        return dp[-1]
```
### C++
``` cpp title='delete-and-earn'
class Solution {
public:
    int deleteAndEarn(vector<int>& nums) {
        vector<int> buckets(10001,0);
        
        for (int i = 0; i < nums.size(); i++){
            buckets[nums[i]] += nums[i];
        }
        
        vector<int> dp(10001,0);
        dp[0] = buckets[0];
        dp[1] = buckets[1];
        
        for (int i = 2; i < buckets.size(); i++){
            dp[i] = max(dp[i-1], buckets[i]+dp[i-2]);
        }
        
        return dp[10000];
    }
};
```

