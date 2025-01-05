---
title: 2902. Count of Sub-Multisets With Bounded Sum
draft: false
tags: 
  - leetcode-hard
  - array
  - hash-table
  - dynamic-programming
  - sliding-window
date: 2023-10-20
---

[Problem Link](https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/)

## Description

---
<p>You are given a <strong>0-indexed</strong> array <code>nums</code> of non-negative integers, and two integers <code>l</code> and <code>r</code>.</p>

<p>Return <em>the <strong>count of sub-multisets</strong> within</em> <code>nums</code> <em>where the sum of elements in each subset falls within the inclusive range of</em> <code>[l, r]</code>.</p>

<p>Since the answer may be large, return it modulo <code>10<sup>9 </sup>+ 7</code>.</p>

<p>A <strong>sub-multiset</strong> is an <strong>unordered</strong> collection of elements of the array in which a given value <code>x</code> can occur <code>0, 1, ..., occ[x]</code> times, where <code>occ[x]</code> is the number of occurrences of <code>x</code> in the array.</p>

<p><strong>Note</strong> that:</p>

<ul>
	<li>Two <strong>sub-multisets</strong> are the same if sorting both sub-multisets results in identical multisets.</li>
	<li>The sum of an <strong>empty</strong> multiset is <code>0</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,2,3], l = 6, r = 6
<strong>Output:</strong> 1
<strong>Explanation:</strong> The only subset of nums that has a sum of 6 is {1, 2, 3}.
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,1,4,2,7], l = 1, r = 5
<strong>Output:</strong> 7
<strong>Explanation:</strong> The subsets of nums that have a sum within the range [1, 5] are {1}, {2}, {4}, {2, 2}, {1, 2}, {1, 4}, and {1, 2, 2}.
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,1,3,5,2], l = 3, r = 5
<strong>Output:</strong> 9
<strong>Explanation:</strong> The subsets of nums that have a sum within the range [3, 5] are {3}, {5}, {1, 2}, {1, 3}, {2, 2}, {2, 3}, {1, 1, 2}, {1, 1, 3}, and {1, 2, 2}.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>0 &lt;= nums[i] &lt;= 2 * 10<sup>4</sup></code></li>
	<li>Sum of <code>nums</code> does not exceed <code>2 * 10<sup>4</sup></code>.</li>
	<li><code>0 &lt;= l &lt;= r &lt;= 2 * 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='count-of-sub-multisets-with-bounded-sum'
class Solution:
    def countSubMultisets(self, nums: List[int], l: int, r: int) -> int:
        MOD = 10 ** 9 + 7
        freq = Counter(nums)
        dp = [0] * (r + 1)
        dp[0] = 1

        zeroes = freq[0]
        del freq[0]

        # n * (n + 1) <= 20000
        # maxN ~= 200

        # ndp[i + k] = dp[i] + dp[i - k] + dp[i - 2 * k] ... + dp[i - (v - 1) * k]
        # ndp[i] = dp[i - k] + dp[i - 2 * k] + dp[i - 3 * k] ... + dp[i - v * k]
        # ndp[i + k] = dp[i] + ndp[i] - dp[i - v * k]
        # ndp[i] = dp[i - k] + ndp[i - k] - dp[i - v * k - k]
        
        for k, v in freq.items():
            ndp = [0] * (r + 1)

            mxDelta = (v + 1) * k
            for i in range(k, r + 1):
                ndp[i] = dp[i - k] + ndp[i - k]
                if i >= mxDelta:
                    ndp[i] -= dp[i - mxDelta]
                
                ndp[i] %= MOD
            
            for i in range(r + 1):
                ndp[i] += dp[i]
                ndp[i] %= MOD
            
            dp = ndp
            
        res = 0
        for i in range(l, r + 1):
            res += dp[i]
            res %= MOD
        
        return ((zeroes + 1) * res) % MOD
```
