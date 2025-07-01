---
title: 3129. Find All Possible Stable Binary Arrays I
draft: false
tags: 
  - leetcode-medium
  - dynamic-programming
  - prefix-sum
  - biweekly-contest-129
  - contest-question
date: 2024-04-28
---

[Problem Link](https://leetcode.com/problems/find-all-possible-stable-binary-arrays-i/)

## Description

---
<p>You are given 3 positive integers <code>zero</code>, <code>one</code>, and <code>limit</code>.</p>

<p>A <span data-keyword="binary-array">binary array</span> <code>arr</code> is called <strong>stable</strong> if:</p>

<ul>
	<li>The number of occurrences of 0 in <code>arr</code> is <strong>exactly </strong><code>zero</code>.</li>
	<li>The number of occurrences of 1 in <code>arr</code> is <strong>exactly</strong> <code>one</code>.</li>
	<li>Each <span data-keyword="subarray-nonempty">subarray</span> of <code>arr</code> with a size greater than <code>limit</code> must contain <strong>both </strong>0 and 1.</li>
</ul>

<p>Return the <em>total</em> number of <strong>stable</strong> binary arrays.</p>

<p>Since the answer may be very large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">zero = 1, one = 1, limit = 2</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<p>The two possible stable binary arrays are <code>[1,0]</code> and <code>[0,1]</code>, as both arrays have a single 0 and a single 1, and no subarray has a length greater than 2.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">zero = 1, one = 2, limit = 1</span></p>

<p><strong>Output:</strong> <span class="example-io">1</span></p>

<p><strong>Explanation:</strong></p>

<p>The only possible stable binary array is <code>[1,0,1]</code>.</p>

<p>Note that the binary arrays <code>[1,1,0]</code> and <code>[0,1,1]</code> have subarrays of length 2 with identical elements, hence, they are not stable.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">zero = 3, one = 3, limit = 2</span></p>

<p><strong>Output:</strong> <span class="example-io">14</span></p>

<p><strong>Explanation:</strong></p>

<p>All the possible stable binary arrays are <code>[0,0,1,0,1,1]</code>, <code>[0,0,1,1,0,1]</code>, <code>[0,1,0,0,1,1]</code>, <code>[0,1,0,1,0,1]</code>, <code>[0,1,0,1,1,0]</code>, <code>[0,1,1,0,0,1]</code>, <code>[0,1,1,0,1,0]</code>, <code>[1,0,0,1,0,1]</code>, <code>[1,0,0,1,1,0]</code>, <code>[1,0,1,0,0,1]</code>, <code>[1,0,1,0,1,0]</code>, <code>[1,0,1,1,0,0]</code>, <code>[1,1,0,0,1,0]</code>, and <code>[1,1,0,1,0,0]</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= zero, one, limit &lt;= 200</code></li>
</ul>


## Solution

---
### Python3
``` py title='find-all-possible-stable-binary-arrays-i'
class Solution:
    def numberOfStableArrays(self, zero: int, one: int, limit: int) -> int:
        MOD = 10 ** 9 + 7

        @cache
        def go(ones, zeroes, prev):
            if ones == 0 and zeroes == 0: return 1
            
            res = 0

            for k in range(1, limit + 1):
                # add one
                if (prev == -1 or prev == 0) and ones >= k:
                    res += go(ones - k, zeroes, 1)
                
                # add zero
                if (prev == -1 or prev == 1) and zeroes >= k:
                    res += go(ones, zeroes - k, 0)

                res %= MOD
                
            return res
        
        return go(zero, one, -1)
                
```
### C++
``` cpp title='find-all-possible-stable-binary-arrays-i'
class Solution {
public:
    const int MOD = 1e9 + 7;
    int dp[201][201][201][2];
    int maxLimit;

    int helper(int ones, int zeroes, int count, int prev) {
        if (ones == 0 && zeroes == 0) return 1;

        if (dp[ones][zeroes][count][prev] != -1) return dp[ones][zeroes][count][prev];

        int res = 0;

        if (count == 0 || prev == 0) {
            if (ones - 1 >= 0) 
                res += helper(ones - 1, zeroes, 1, 1);
        } else {
            if (count + 1 <= maxLimit && ones - 1 >= 0)
                res += helper(ones - 1, zeroes, count + 1, 1);
        }

        if (res >= MOD) res %= MOD;

        if (count == 0 || prev == 1) {
            if (zeroes - 1 >= 0) 
                res += helper(ones, zeroes - 1, 1, 0);
        } else {
            if (count + 1 <= maxLimit && zeroes - 1 >= 0)
                res += helper(ones, zeroes - 1, count + 1, 0);
        }

        if (res >= MOD) res %= MOD;

        return dp[ones][zeroes][count][prev] = res;
    }

    int numberOfStableArrays(int zero, int one, int limit) {
        memset(dp, -1, sizeof(dp));
        maxLimit = limit;
        int res = helper(one, zero, 0, 0);

        return res;
    }
};
```

