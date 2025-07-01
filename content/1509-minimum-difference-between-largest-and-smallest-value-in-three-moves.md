---
title: 1509. Minimum Difference Between Largest and Smallest Value in Three Moves
draft: false
tags: 
  - leetcode-medium
  - array
  - greedy
  - sorting
  - biweekly-contest-30
  - contest-question
date: 2020-07-19
---

[Problem Link](https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/)

## Description

---
<p>You are given an integer array <code>nums</code>.</p>

<p>In one move, you can choose one element of <code>nums</code> and change it to <strong>any value</strong>.</p>

<p>Return <em>the minimum difference between the largest and smallest value of <code>nums</code> <strong>after performing at most three moves</strong></em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [5,3,2,4]
<strong>Output:</strong> 0
<strong>Explanation:</strong> We can make at most 3 moves.
In the first move, change 2 to 3. nums becomes [5,3,3,4].
In the second move, change 4 to 3. nums becomes [5,3,3,3].
In the third move, change 5 to 3. nums becomes [3,3,3,3].
After performing 3 moves, the difference between the minimum and maximum is 3 - 3 = 0.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,5,0,10,14]
<strong>Output:</strong> 1
<strong>Explanation:</strong> We can make at most 3 moves.
In the first move, change 5 to 0. nums becomes [1,0,0,10,14].
In the second move, change 10 to 0. nums becomes [1,0,0,0,14].
In the third move, change 14 to 1. nums becomes [1,0,0,0,1].
After performing 3 moves, the difference between the minimum and maximum is 1 - 0 = 1.
It can be shown that there is no way to make the difference 0 in 3 moves.</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,100,20]
<strong>Output:</strong> 0
<strong>Explanation:</strong> We can make at most 3 moves.
In the first move, change 100 to 7. nums becomes [3,7,20].
In the second move, change 20 to 7. nums becomes [3,7,7].
In the third move, change 3 to 7. nums becomes [7,7,7].
After performing 3 moves, the difference between the minimum and maximum is 7 - 7 = 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-difference-between-largest-and-smallest-value-in-three-moves'
class Solution:
    def minDifference(self, nums: List[int]) -> int:
        N = len(nums)
        if N < 5: return 0

        nums.sort()
        res = inf

        for i in range(4):
            res = min(res, nums[N - 4 + i] - nums[i])

        return res
```
### C++
``` cpp title='minimum-difference-between-largest-and-smallest-value-in-three-moves'
class Solution {
public:
    int minDifference(vector<int>& nums) {
        int n = nums.size();
        if (n < 5) return 0;
        
        sort(nums.begin(), nums.end());
        
        return min({nums[n-4]-nums[0], nums[n-3]-nums[1], nums[n-2]-nums[2], nums[n-1]-nums[3]});
        
        
    }
};
```

