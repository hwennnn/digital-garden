---
title: 3149. Find the Minimum Cost Array Permutation
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - bit-manipulation
  - bitmask
  - weekly-contest-397
  - contest-question
date: 2024-05-12
---

[Problem Link](https://leetcode.com/problems/find-the-minimum-cost-array-permutation/)

## Description

---
<p>You are given an array <code>nums</code> which is a <span data-keyword="permutation">permutation</span> of <code>[0, 1, 2, ..., n - 1]</code>. The <strong>score</strong> of any permutation of <code>[0, 1, 2, ..., n - 1]</code> named <code>perm</code> is defined as:</p>

<p><code>score(perm) = |perm[0] - nums[perm[1]]| + |perm[1] - nums[perm[2]]| + ... + |perm[n - 1] - nums[perm[0]]|</code></p>

<p>Return the permutation <code>perm</code> which has the <strong>minimum</strong> possible score. If <em>multiple</em> permutations exist with this score, return the one that is <span data-keyword="lexicographically-smaller-array">lexicographically smallest</span> among them.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,0,2]</span></p>

<p><strong>Output:</strong> <span class="example-io">[0,1,2]</span></p>

<p><strong>Explanation:</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2024/04/04/example0gif.gif" style="width: 235px; height: 235px;" /></strong></p>

<p>The lexicographically smallest permutation with minimum cost is <code>[0,1,2]</code>. The cost of this permutation is <code>|0 - 0| + |1 - 2| + |2 - 1| = 2</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [0,2,1]</span></p>

<p><strong>Output:</strong> <span class="example-io">[0,2,1]</span></p>

<p><strong>Explanation:</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2024/04/04/example1gif.gif" style="width: 235px; height: 235px;" /></strong></p>

<p>The lexicographically smallest permutation with minimum cost is <code>[0,2,1]</code>. The cost of this permutation is <code>|0 - 1| + |2 - 2| + |1 - 0| = 2</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= n == nums.length &lt;= 14</code></li>
	<li><code>nums</code> is a permutation of <code>[0, 1, 2, ..., n - 1]</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='find-the-minimum-cost-array-permutation'
class Solution:
    def findPermutation(self, nums: List[int]) -> List[int]:
        N = len(nums)
        full_mask = (1 << N) - 1
        nxt = {}

        # The score function is cyclic, so we can always set perm[0] = 0 for the smallest lexical order.

        @cache
        def go(mask, last):
            if mask == full_mask:
                nxt[(mask, last)] = (mask, last)
                return abs(last - nums[0])
            
            res = inf

            for i in range(N):
                if mask & (1 << i): continue

                score = go(mask | (1 << i), i) + abs(last - nums[i])

                if score < res:
                    res = score
                    nxt[(mask, last)] = (mask | (1 << i), i)
            
            return res
        
        go(1, 0)
        res = []
        curr = (1, 0)
        for _ in range(N):
            res.append(curr[1])
            curr = nxt[curr]
        
        return res


```

