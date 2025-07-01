---
title: 2501. Longest Square Streak in an Array
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - binary-search
  - dynamic-programming
  - sorting
  - weekly-contest-323
  - contest-question
date: 2025-01-05
---

[Problem Link](https://leetcode.com/problems/longest-square-streak-in-an-array/)

## Description

---
<p>You are given an integer array <code>nums</code>. A subsequence of <code>nums</code> is called a <strong>square streak</strong> if:</p>

<ul>
	<li>The length of the subsequence is at least <code>2</code>, and</li>
	<li><strong>after</strong> sorting the subsequence, each element (except the first element) is the <strong>square</strong> of the previous number.</li>
</ul>

<p>Return<em> the length of the <strong>longest square streak</strong> in </em><code>nums</code><em>, or return </em><code>-1</code><em> if there is no <strong>square streak</strong>.</em></p>

<p>A <strong>subsequence</strong> is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [4,3,6,16,8,2]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Choose the subsequence [4,16,2]. After sorting it, it becomes [2,4,16].
- 4 = 2 * 2.
- 16 = 4 * 4.
Therefore, [4,16,2] is a square streak.
It can be shown that every subsequence of length 4 is not a square streak.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,3,5,6,7]
<strong>Output:</strong> -1
<strong>Explanation:</strong> There is no square streak in nums so return -1.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>2 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='longest-square-streak-in-an-array'
class Solution:
    def longestSquareStreak(self, nums: List[int]) -> int:
        nums.sort(reverse = 1)
        mp = defaultdict(int)
        res = -1

        for x in nums:
            nxt = x * x
            mp[x] = max(1, mp[nxt] + 1)

            if mp[x] > 1:
                res = max(res, mp[x])
        
        return res
```

