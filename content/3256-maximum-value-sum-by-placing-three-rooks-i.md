---
title: 3256. Maximum Value Sum by Placing Three Rooks I
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

[Problem Link](https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-i/)

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
	<li><code>3 &lt;= m == board.length &lt;= 100</code></li>
	<li><code>3 &lt;= n == board[i].length &lt;= 100</code></li>
	<li><code>-10<sup>9</sup> &lt;= board[i][j] &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-value-sum-by-placing-three-rooks-i'
class Solution:
    def maximumValueSum(self, board: List[List[int]]) -> int:
        rows, cols = len(board), len(board[0])
        top3 = []

        for i in range(rows):
            A = []

            for j in range(cols):
                A.append([board[i][j], j])
            
            A.sort(reverse = 1)

            top3.append(A[:3])
        
        @cache
        def go(index, col1, col2, k):
            if k == 0: return 0

            if index == rows: return -inf

            # skip
            res = go(index + 1, col1, col2, k)

            for c in range(len(top3[index])):
                v, j = top3[index][c]

                if k == 3:
                    res = max(res, v + go(index + 1, j, col2, k - 1))
                elif k == 2 and j != col1:
                    res = max(res, v + go(index + 1, col1, j, k - 1))
                elif k == 1 and j != col1 and j != col2:
                    res = max(res, v + go(index + 1, col1, col2, k - 1))
            
            return res
        
        return go(0, None, None, 3)
```

