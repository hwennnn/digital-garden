---
title: 2518. Number of Great Partitions
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - weekly-contest-325
  - contest-question
date: 2022-12-25
---

[Problem Link](https://leetcode.com/problems/number-of-great-partitions/)

## Description

---
<p>You are given an array <code>nums</code> consisting of <strong>positive</strong> integers and an integer <code>k</code>.</p>

<p><strong>Partition</strong> the array into two ordered <strong>groups</strong> such that each element is in exactly <strong>one</strong> group. A partition is called great if the <strong>sum</strong> of elements of each group is greater than or equal to <code>k</code>.</p>

<p>Return <em>the number of <strong>distinct</strong> great partitions</em>. Since the answer may be too large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>Two partitions are considered distinct if some element <code>nums[i]</code> is in different groups in the two partitions.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4], k = 4
<strong>Output:</strong> 6
<strong>Explanation:</strong> The great partitions are: ([1,2,3], [4]), ([1,3], [2,4]), ([1,4], [2,3]), ([2,3], [1,4]), ([2,4], [1,3]) and ([4], [1,2,3]).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,3,3], k = 4
<strong>Output:</strong> 0
<strong>Explanation:</strong> There are no great partitions for this array.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [6,6], k = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> We can either put nums[0] in the first partition or in the second partition.
The great partitions will be ([6], [6]) and ([6], [6]).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length, k &lt;= 1000</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='number-of-great-partitions'
class Solution:
    def countPartitions(self, nums: List[int], k: int) -> int:
        N = len(nums)
        M = 10 ** 9 + 7

        if sum(nums) < 2 * k: return 0

        @cache
        def dp(index, s):
            if index >= N: return 1

            skip = dp(index + 1, s)
            take = 0 if s + nums[index] >= k else dp(index + 1, s + nums[index])

            return (skip + take) % M
        
        return (pow(2, N, M) - 2 * dp(0, 0) + M) % M
```
### C++
``` cpp title='number-of-great-partitions'
class Solution {
public:
    int N, K;
    int MOD = 1e9 + 7;
    int cache[1001][1001];

    int powmod (int a, int b, int k) {
        int result = 1 ;
        while (b--) {
            result *= a ;
            result %= k ;
        }
        return result ;
    }

    int dp(vector<int>& nums, int index, int s) {
        if (cache[index][s] != -1) {
            return cache[index][s];
        }

        if (s >= K) return 0;
        if (index >= N) return 1;

        int skip = dp(nums, index + 1, s);
        int take = s + nums[index] <= 1000 ? dp(nums, index + 1, s + nums[index]) : 0;

        return cache[index][s] = (skip + take) % MOD;
    }

    int countPartitions(vector<int>& nums, int k) {
        long long total = accumulate(nums.begin(), nums.end(), 0LL);
        if (total < 2 * k) return 0;

        memset(cache, -1, sizeof(cache));
        N = nums.size();
        K = k;
        
        int all = powmod(2, N, MOD);
        int invalid = 2 * dp(nums, 0, 0);

        return (all - invalid + MOD) % MOD;
    }
};
```

