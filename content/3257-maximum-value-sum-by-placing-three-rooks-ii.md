---
title: 3257. Maximum Value Sum by Placing Three Rooks II
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - matrix
  - enumeration
  - biweekly-contest-137
  - contest-question
date: 2024-08-18
---

[Problem Link](https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-ii/)

## Description

---
<p>You are given a <code>m x n</code> 2D array <code>board</code> representing a chessboard, where <code>board[i][j]</code> represents the <strong>value</strong> of the cell <code>(i, j)</code>.</p>

<p>Rooks in the <strong>same</strong> row or column <strong>attack</strong> each other. You need to place <em>three</em> rooks on the chessboard such that the rooks <strong>do not</strong> <strong>attack</strong> each other.</p>

<p>Return the <strong>maximum</strong> sum of the cell <strong>values</strong> on which the rooks are placed.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">board = </span>[[-3,1,1,1],[-3,1,-3,1],[-3,2,1,1]]</p>

<p><strong>Output:</strong> 4</p>

<p><strong>Explanation:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2024/08/08/rooks2.png" style="width: 294px; height: 450px;" /></p>

<p>We can place the rooks in the cells <code>(0, 2)</code>, <code>(1, 3)</code>, and <code>(2, 1)</code> for a sum of <code>1 + 1 + 2 = 4</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">board = [[1,2,3],[4,5,6],[7,8,9]]</span></p>

<p><strong>Output:</strong> <span class="example-io">15</span></p>

<p><strong>Explanation:</strong></p>

<p>We can place the rooks in the cells <code>(0, 0)</code>, <code>(1, 1)</code>, and <code>(2, 2)</code> for a sum of <code>1 + 5 + 9 = 15</code>.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">board = [[1,1,1],[1,1,1],[1,1,1]]</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p>We can place the rooks in the cells <code>(0, 2)</code>, <code>(1, 1)</code>, and <code>(2, 0)</code> for a sum of <code>1 + 1 + 1 = 3</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= m == board.length &lt;= 500</code></li>
	<li><code>3 &lt;= n == board[i].length &lt;= 500</code></li>
	<li><code>-10<sup>9</sup> &lt;= board[i][j] &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-value-sum-by-placing-three-rooks-ii'
class Solution:
    def maximumValueSum(self, board: List[List[int]]) -> int:
        rows, cols = len(board), len(board[0])
        top3 = [nlargest(3, [(board[r][c], c) for c in range(cols)]) for r in range(rows)]
        
        def process(A):
            ans = [] # ans[r] = top3 choices for A[..r]
            best = []

            for row in A:
                best.extend(row)
                best.sort(reverse = True)
                nbest = []

                for v, c in best:
                    if all(c != c0 for v0, c0 in nbest):
                        nbest.append((v, c))
                    
                    if len(nbest) == 3: break
                
                ans.append(nbest[:3][:])

            return ans

        prefix = process(top3)
        suffix = process(top3[::-1])[::-1]
        res = -inf

        for r in range(1, rows - 1):
            for v1, c1 in prefix[r - 1]:
                for v2, c2 in top3[r]:
                    for v3, c3 in suffix[r + 1]:
                        if c1 != c2 and c1 != c3 and c2 != c3:
                            res = max(res, v1 + v2 + v3)
        
        return res
```

