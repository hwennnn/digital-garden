---
title: 2364. Count Number of Bad Pairs
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - math
  - counting
  - biweekly-contest-84
  - contest-question
date: 2025-02-09
---

[Problem Link](https://leetcode.com/problems/count-number-of-bad-pairs/)

## Description

---
<p>You are given a <strong>0-indexed</strong> integer array <code>nums</code>. A pair of indices <code>(i, j)</code> is a <strong>bad pair</strong> if <code>i &lt; j</code> and <code>j - i != nums[j] - nums[i]</code>.</p>

<p>Return<em> the total number of <strong>bad pairs</strong> in </em><code>nums</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [4,1,3,3]
<strong>Output:</strong> 5
<strong>Explanation:</strong> The pair (0, 1) is a bad pair since 1 - 0 != 1 - 4.
The pair (0, 2) is a bad pair since 2 - 0 != 3 - 4, 2 != -1.
The pair (0, 3) is a bad pair since 3 - 0 != 3 - 4, 3 != -1.
The pair (1, 2) is a bad pair since 2 - 1 != 3 - 1, 1 != 2.
The pair (2, 3) is a bad pair since 3 - 2 != 3 - 3, 1 != 0.
There are a total of 5 bad pairs, so we return 5.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4,5]
<strong>Output:</strong> 0
<strong>Explanation:</strong> There are no bad pairs.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='count-number-of-bad-pairs'
class Solution:
    def countBadPairs(self, nums: List[int]) -> int:
        N = len(nums)
        good = 0
        total = N * (N - 1) // 2
        mp = defaultdict(int)

        # Find good pairs
        # j - i == nums[j] - nums[i]
        # j - nums[j] = i - nums[i]

        for i, x in enumerate(nums):
            good += mp[i - x]
            mp[i - x] += 1

        return total - good
```

