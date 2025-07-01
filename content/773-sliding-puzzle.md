---
title: 773. Sliding Puzzle
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - backtracking
  - breadth-first-search
  - memoization
  - matrix
  - weekly-contest-69
  - contest-question
date: 2024-11-25
---

[Problem Link](https://leetcode.com/problems/sliding-puzzle/)

## Description

---
<p>On an <code>2 x 3</code> board, there are five tiles labeled from <code>1</code> to <code>5</code>, and an empty square represented by <code>0</code>. A <strong>move</strong> consists of choosing <code>0</code> and a 4-directionally adjacent number and swapping it.</p>

<p>The state of the board is solved if and only if the board is <code>[[1,2,3],[4,5,0]]</code>.</p>

<p>Given the puzzle board <code>board</code>, return <em>the least number of moves required so that the state of the board is solved</em>. If it is impossible for the state of the board to be solved, return <code>-1</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/06/29/slide1-grid.jpg" style="width: 244px; height: 165px;" />
<pre>
<strong>Input:</strong> board = [[1,2,3],[4,0,5]]
<strong>Output:</strong> 1
<strong>Explanation:</strong> Swap the 0 and the 5 in one move.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/06/29/slide2-grid.jpg" style="width: 244px; height: 165px;" />
<pre>
<strong>Input:</strong> board = [[1,2,3],[5,4,0]]
<strong>Output:</strong> -1
<strong>Explanation:</strong> No number of moves will make the board solved.
</pre>

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/06/29/slide3-grid.jpg" style="width: 244px; height: 165px;" />
<pre>
<strong>Input:</strong> board = [[4,1,2],[5,0,3]]
<strong>Output:</strong> 5
<strong>Explanation:</strong> 5 is the smallest number of moves that solves the board.
An example path:
After move 0: [[4,1,2],[5,0,3]]
After move 1: [[4,1,2],[0,5,3]]
After move 2: [[0,1,2],[4,5,3]]
After move 3: [[1,0,2],[4,5,3]]
After move 4: [[1,2,0],[4,5,3]]
After move 5: [[1,2,3],[4,5,0]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>board.length == 2</code></li>
	<li><code>board[i].length == 3</code></li>
	<li><code>0 &lt;= board[i][j] &lt;= 5</code></li>
	<li>Each value <code>board[i][j]</code> is <strong>unique</strong>.</li>
</ul>


## Solution

---
### Python3
``` py title='sliding-puzzle'
class Solution:
    def slidingPuzzle(self, board: List[List[int]]) -> int:
        
        def bt(i0: int, j0: int, step: int) -> None:
            state = tuple(board[0] + board[1])
            if state == target:
                state2min[state] = min(state2min[state], step)
                return
            if state2min[state] <= step: # before / equivalent ans is found
                return
            state2min[state] = step

            for ii, jj in [[0,1], [0,-1], [1,0], [-1,0]]:
                ti, tj = i0 + ii, j0 + jj
                if 0 <= ti < 2 and 0 <= tj < 3:
                    board[i0][j0], board[ti][tj] = board[ti][tj], board[i0][j0]
                    bt(ti, tj, step + 1)
                    board[i0][j0], board[ti][tj] = board[ti][tj], board[i0][j0]

        
        state2min = defaultdict(lambda: float('inf'))
        target = tuple([1,2,3,4,5,0])
        i0 = j0 = -1
        for i in range(2):
            for j in range(3):
                if board[i][j] == 0:
                    i0, j0 = i, j
        bt(i0, j0, 0)
        return -1 if target not in state2min else state2min[target]
```

