---
title: 3116. Kth Smallest Amount With Single Denomination Combination
draft: false
tags: 
  - leetcode-hard
  - array
  - math
  - binary-search
  - bit-manipulation
  - combinatorics
  - number-theory
  - weekly-contest-393
  - contest-question
date: 2024-04-14
---

[Problem Link](https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/)

## Description

---
<p>You are given an integer array <code>coins</code> representing coins of different denominations and an integer <code>k</code>.</p>

<p>You have an infinite number of coins of each denomination. However, you are <strong>not allowed</strong> to combine coins of different denominations.</p>

<p>Return the <code>k<sup>th</sup></code> <strong>smallest</strong> amount that can be made using these coins.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block" style="
    border-color: var(--border-tertiary);
    border-left-width: 2px;
    color: var(--text-secondary);
    font-size: .875rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    overflow: visible;
    padding-left: 1rem;
">
<p><strong>Input:</strong> <span class="example-io" style="
    font-family: Menlo,sans-serif;
    font-size: 0.85rem;
">coins = [3,6,9], k = 3</span></p>

<p><strong>Output:</strong> <span class="example-io" style="
    font-family: Menlo,sans-serif;
    font-size: 0.85rem;
"> 9</span></p>

<p><strong>Explanation:</strong> The given coins can make the following amounts:<br />
Coin 3 produces multiples of 3: 3, 6, 9, 12, 15, etc.<br />
Coin 6 produces multiples of 6: 6, 12, 18, 24, etc.<br />
Coin 9 produces multiples of 9: 9, 18, 27, 36, etc.<br />
All of the coins combined produce: 3, 6, <u><strong>9</strong></u>, 12, 15, etc.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block" style="
    border-color: var(--border-tertiary);
    border-left-width: 2px;
    color: var(--text-secondary);
    font-size: .875rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    overflow: visible;
    padding-left: 1rem;
">
<p><strong>Input:</strong><span class="example-io" style="
    font-family: Menlo,sans-serif;
    font-size: 0.85rem;
"> coins = [5,2], k = 7</span></p>

<p><strong>Output:</strong><span class="example-io" style="
    font-family: Menlo,sans-serif;
    font-size: 0.85rem;
"> 12 </span></p>

<p><strong>Explanation:</strong> The given coins can make the following amounts:<br />
Coin 5 produces multiples of 5: 5, 10, 15, 20, etc.<br />
Coin 2 produces multiples of 2: 2, 4, 6, 8, 10, 12, etc.<br />
All of the coins combined produce: 2, 4, 5, 6, 8, 10, <u><strong>12</strong></u>, 14, 15, etc.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= coins.length &lt;= 15</code></li>
	<li><code>1 &lt;= coins[i] &lt;= 25</code></li>
	<li><code>1 &lt;= k &lt;= 2 * 10<sup>9</sup></code></li>
	<li><code>coins</code> contains pairwise distinct integers.</li>
</ul>


## Solution

---
### Python3
``` py title='kth-smallest-amount-with-single-denomination-combination'
class Solution:
    def findKthSmallest(self, coins: List[int], k: int) -> int:
        N = len(coins)

        # PIE
        # https://i.imgur.com/PqCQ7zK.png to understand why add/substract depends on the odd/even identity of the sets

        def good(mid):
            count = 0

            for mask in range(1, 1 << N):
                b = 0
                curr = 1
                
                for j in range(N):
                    if mask & (1 << j):
                        curr = lcm(curr, coins[j])
                        b ^= 1
                
                if b & 1:
                    count += mid // curr
                else:
                    count -= mid // curr

            return count >= k

        left, right = 0, 10 ** 20
        
        while left < right:
            mid = left + (right - left) // 2
            
            if good(mid):
                right = mid
            else:
                left = mid + 1
        
        return left
```

