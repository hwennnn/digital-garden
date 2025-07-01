---
title: 782. Transform to Chessboard
draft: false
tags: 
  - leetcode-hard
  - array
  - math
  - bit-manipulation
  - matrix
  - weekly-contest-71
  - contest-question
date: 2021-09-26
---

[Problem Link](https://leetcode.com/problems/transform-to-chessboard/)

## Description

---
<p>You are given an <code>n x n</code> binary grid <code>board</code>. In each move, you can swap any two rows with each other, or any two columns with each other.</p>

<p>Return <em>the minimum number of moves to transform the board into a <strong>chessboard board</strong></em>. If the task is impossible, return <code>-1</code>.</p>

<p>A <strong>chessboard board</strong> is a board where no <code>0</code>&#39;s and no <code>1</code>&#39;s are 4-directionally adjacent.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/06/29/chessboard1-grid.jpg" style="width: 500px; height: 145px;" />
<pre>
<strong>Input:</strong> board = [[0,1,1,0],[0,1,1,0],[1,0,0,1],[1,0,0,1]]
<strong>Output:</strong> 2
<strong>Explanation:</strong> One potential sequence of moves is shown.
The first move swaps the first and second column.
The second move swaps the second and third row.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/06/29/chessboard2-grid.jpg" style="width: 164px; height: 165px;" />
<pre>
<strong>Input:</strong> board = [[0,1],[1,0]]
<strong>Output:</strong> 0
<strong>Explanation:</strong> Also note that the board with 0 in the top left corner, is also a valid chessboard.
</pre>

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/06/29/chessboard3-grid.jpg" style="width: 164px; height: 165px;" />
<pre>
<strong>Input:</strong> board = [[1,0],[1,0]]
<strong>Output:</strong> -1
<strong>Explanation:</strong> No matter what sequence of moves you make, you cannot end with a valid chessboard.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == board.length</code></li>
	<li><code>n == board[i].length</code></li>
	<li><code>2 &lt;= n &lt;= 30</code></li>
	<li><code>board[i][j]</code> is either&nbsp;<code>0</code> or <code>1</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='transform-to-chessboard'
class Solution:
    def movesToChessboard(self, board: List[List[int]]) -> int:
        n = len(board)
        if n <= 1: return 0
        
        rows = [''.join(str(c) for c in r) for r in board]
        counter = collections.Counter(rows)
        keys = list(counter.keys())

        if len(keys) != 2 or abs(counter[keys[0]] - counter[keys[1]]) > 1 \
            or abs(keys[0].count('1') - keys[0].count('0')) > 1 \
            or any(a == b for a, b in zip(*keys)):
            return -1
        
        rowdiff = sum(board[0][i] != (i % 2) for i in range(n))
        coldiff = sum(board[i][0] != (i % 2) for i in range(n))
        rowdiff = n - rowdiff if rowdiff % 2 != 0 or (n % 2 == 0 and (n - rowdiff) < rowdiff) else rowdiff
        coldiff= n - coldiff if coldiff % 2 != 0 or (n % 2 == 0 and (n - coldiff) < coldiff) else coldiff
        
        return (rowdiff + coldiff) // 2
```

