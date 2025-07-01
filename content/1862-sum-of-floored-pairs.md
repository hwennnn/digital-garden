---
title: 1862. Sum of Floored Pairs
draft: false
tags: 
  - leetcode-hard
  - array
  - math
  - binary-search
  - prefix-sum
  - biweekly-contest-52
  - contest-question
date: 2021-05-16
---

[Problem Link](https://leetcode.com/problems/sum-of-floored-pairs/)

## Description

---
<p>Given an integer array <code>nums</code>, return the sum of <code>floor(nums[i] / nums[j])</code> for all pairs of indices <code>0 &lt;= i, j &lt; nums.length</code> in the array. Since the answer may be too large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>The <code>floor()</code> function returns the integer part of the division.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,5,9]
<strong>Output:</strong> 10
<strong>Explanation:</strong>
floor(2 / 5) = floor(2 / 9) = floor(5 / 9) = 0
floor(2 / 2) = floor(5 / 5) = floor(9 / 9) = 1
floor(5 / 2) = 2
floor(9 / 2) = 4
floor(9 / 5) = 1
We calculate the floor of the division for every pair of indices in the array then sum them up.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [7,7,7,7,7,7,7]
<strong>Output:</strong> 49
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='sum-of-floored-pairs'
class Solution:
    def sumOfFlooredPairs(self, nums: List[int]) -> int:
        M = 10 ** 9 + 7
        
        prefix = [0] * (max(nums) + 1)
        counter = collections.Counter(nums)
        
        for num, count in counter.items():
            for j in range(num, len(prefix), num):
                prefix[j] += count
        
        for i in range(1, len(prefix)):
            prefix[i] += prefix[i - 1]
        
        return sum(prefix[num] for num in nums) % M
```
### C++
``` cpp title='sum-of-floored-pairs'
class Solution {
public:
    const int MAXN = 1e5 + 1, MOD = 1e9 + 7;
    int sumOfFlooredPairs(vector<int>& nums) {
        vector<long> freq(2*MAXN+1);        
        long mx = 0, sum = 0;
        for(auto num : nums) ++freq[num], mx = max((int)mx, num);  // counting frequency of each element in nums
        for(int i = 1; i <= 2*MAXN; ++i) freq[i] += freq[i - 1];   // building prefix sum array of freq. Now freq[i] will hold the frequency of numbers less than or equal to i
        // Each num will be assumed in the denominator as floor(nums[i] / num) and 
        // using freq array, we can calculate the number of terms contributing 1, 2, 3... to the sum each.
        for(auto num : nums) { 
            long l = num, r = 2 * num - 1, divResult = 1;
            while(l <= mx) {                
                sum = (sum + divResult * (freq[r] - freq[l - 1])) % MOD;
                l += num, r += num;
                ++divResult;
            }
        }
        return sum;
    }
};
```

