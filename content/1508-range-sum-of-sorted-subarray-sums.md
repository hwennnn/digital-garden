---
title: 1508. Range Sum of Sorted Subarray Sums
draft: false
tags: 
  - leetcode-medium
  - array
  - two-pointers
  - binary-search
  - sorting
  - prefix-sum
  - biweekly-contest-30
  - contest-question
date: 2024-08-04
---

[Problem Link](https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/)

## Description

---
<p>You are given the array <code>nums</code> consisting of <code>n</code> positive integers. You computed the sum of all non-empty continuous subarrays from the array and then sorted them in non-decreasing order, creating a new array of <code>n * (n + 1) / 2</code> numbers.</p>

<p><em>Return the sum of the numbers from index </em><code>left</code><em> to index </em><code>right</code> (<strong>indexed from 1</strong>)<em>, inclusive, in the new array. </em>Since the answer can be a huge number return it modulo <code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4], n = 4, left = 1, right = 5
<strong>Output:</strong> 13 
<strong>Explanation:</strong> All subarray sums are 1, 3, 6, 10, 2, 5, 9, 3, 7, 4. After sorting them in non-decreasing order we have the new array [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]. The sum of the numbers from index le = 1 to ri = 5 is 1 + 2 + 3 + 3 + 4 = 13. 
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4], n = 4, left = 3, right = 4
<strong>Output:</strong> 6
<strong>Explanation:</strong> The given array is the same as example 1. We have the new array [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]. The sum of the numbers from index le = 3 to ri = 4 is 3 + 3 = 6.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4], n = 4, left = 1, right = 10
<strong>Output:</strong> 50
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums.length</code></li>
	<li><code>1 &lt;= nums.length &lt;= 1000</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>
	<li><code>1 &lt;= left &lt;= right &lt;= n * (n + 1) / 2</code></li>
</ul>


## Solution

---
### C++
``` cpp title='range-sum-of-sorted-subarray-sums'
class Solution {
public:
    int rangeSum(vector<int>& nums, int n, int left, int right) {
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
        for (int i = 0; i < n; i++) pq.push({nums[i], i + 1});
        
        int ans = 0, MOD = 1e9 + 7;
        for (int i = 1; i <= right; i++) {
            auto p = pq.top(); pq.pop();

            if (i >= left) ans = (ans + p.first) % MOD;

            if (p.second < n) {
                p.first += nums[p.second++];
                pq.push(p);
            }
        }

        return ans;
    }
};
```
### Python3
``` py title='range-sum-of-sorted-subarray-sums'
class Solution:
    def rangeSum(self, nums: List[int], N: int, left: int, right: int) -> int:
        M = 10 ** 9 + 7
        pq = [] # max priority queue
        res = 0

        for i, x in enumerate(nums):
            heappush(pq, (x, i + 1))
        
        for i in range(1, right + 1):
            x, j = heappop(pq)

            if i >= left:
                res += x
                res %= M
            
            if j < N:
                heappush(pq, (x + nums[j], j + 1))
        
        return res
```

