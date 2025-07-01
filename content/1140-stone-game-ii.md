---
title: 1140. Stone Game II
draft: false
tags: 
  - leetcode-medium
  - array
  - math
  - dynamic-programming
  - prefix-sum
  - game-theory
  - weekly-contest-147
  - contest-question
date: 2024-08-20
---

[Problem Link](https://leetcode.com/problems/stone-game-ii/)

## Description

---
<p>Alice and Bob continue their games with piles of stones. There are a number of piles <strong>arranged in a row</strong>, and each pile has a positive integer number of stones <code>piles[i]</code>. The objective of the game is to end with the most stones.</p>

<p>Alice and Bob take turns, with Alice starting first.</p>

<p>On each player&#39;s turn, that player can take <strong>all the stones</strong> in the <strong>first</strong> <code>X</code> remaining piles, where <code>1 &lt;= X &lt;= 2M</code>. Then, we set <code>M = max(M, X)</code>. Initially, M = 1.</p>

<p>The game continues until all the stones have been taken.</p>

<p>Assuming Alice and Bob play optimally, return the maximum number of stones Alice can get.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">piles = [2,7,9,4,4]</span></p>

<p><strong>Output:</strong> <span class="example-io">10</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>If Alice takes one pile at the beginning, Bob takes two piles, then Alice takes 2 piles again. Alice can get <code>2 + 4 + 4 = 10</code> stones in total.</li>
	<li>If Alice takes two piles at the beginning, then Bob can take all three piles left. In this case, Alice get <code>2 + 7 = 9</code> stones in total.</li>
</ul>

<p>So we return 10 since it&#39;s larger.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">piles = [1,2,3,4,5,100]</span></p>

<p><strong>Output:</strong> <span class="example-io">104</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= piles.length &lt;= 100</code></li>
	<li><code>1 &lt;= piles[i]&nbsp;&lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='stone-game-ii'
class Solution:
    def stoneGameII(self, piles: List[int]) -> int:
        N = len(piles)

        @cache
        def go(index, m):
            if index >= N: return 0

            res = -inf
            count = 0
            
            for x in range(1, 2 * m + 1):
                if index + x - 1 == N: break

                count += piles[index + x - 1]
                res = max(res, count - go(index + x, max(m, x)))
            
            return res
        
        return (sum(piles) + go(0, 1)) // 2
```

