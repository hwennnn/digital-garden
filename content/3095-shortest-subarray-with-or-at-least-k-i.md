---
title: 3095. Shortest Subarray With OR at Least K I
draft: false
tags: 
  - leetcode-easy
  - array
  - bit-manipulation
  - sliding-window
  - biweekly-contest-127
  - contest-question
date: 2024-03-30
---

[Problem Link](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/)

## Description

---
<p>You are given an array <code>nums</code> of <strong>non-negative</strong> integers and an integer <code>k</code>.</p>

<p>An array is called <strong>special</strong> if the bitwise <code>OR</code> of all of its elements is <strong>at least</strong> <code>k</code>.</p>

<p>Return <em>the length of the <strong>shortest</strong> <strong>special</strong> <strong>non-empty</strong> <span data-keyword="subarray-nonempty">subarray</span> of</em> <code>nums</code>, <em>or return</em> <code>-1</code> <em>if no special subarray exists</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,2,3], k = 2</span></p>

<p><strong>Output:</strong> <span class="example-io">1</span></p>

<p><strong>Explanation:</strong></p>

<p>The subarray <code>[3]</code> has <code>OR</code> value of <code>3</code>. Hence, we return <code>1</code>.</p>

<p>Note that <code>[2]</code> is also a special subarray.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [2,1,8], k = 10</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p>The subarray <code>[2,1,8]</code> has <code>OR</code> value of <code>11</code>. Hence, we return <code>3</code>.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,2], k = 0</span></p>

<p><strong>Output:</strong> <span class="example-io">1</span></p>

<p><strong>Explanation:</strong></p>

<p>The subarray <code>[1]</code> has <code>OR</code> value of <code>1</code>. Hence, we return <code>1</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 50</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 50</code></li>
	<li><code>0 &lt;= k &lt; 64</code></li>
</ul>


## Solution

---
### Python3
``` py title='shortest-subarray-with-or-at-least-k-i'
class Solution:
    def minimumSubarrayLength(self, nums, k) -> int:
        N = len(nums)
        curr = 0
        res = inf
        i = 0
        A = [0] * 32

        def inc(x):
            nonlocal curr, A

            for k in range(32):
                if x & (1 << k):
                    if A[k] == 0:
                        curr |= (1 << k)
                    A[k] += 1

        def dec(x):
            nonlocal curr, A

            for k in range(32):
                if x & (1 << k):
                    A[k] -= 1
                    if A[k] == 0:
                        curr ^= (1 << k)

        for j, x in enumerate(nums):
            if x >= k: return 1

            inc(x)

            while curr >= k:
                res = min(res, j - i + 1)
                dec(nums[i])
                i += 1

        if res == inf:
            return -1

        return res

```

