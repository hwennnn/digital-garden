---
title: 999. Available Captures for Rook
draft: false
tags: 
  - leetcode-easy
  - array
  - matrix
  - simulation
  - weekly-contest-125
  - contest-question
date: 2022-02-20
---

[Problem Link](https://leetcode.com/problems/available-captures-for-rook/)

## Description

---
<p>You are given an <code>8 x 8</code> <strong>matrix</strong> representing a chessboard. There is <strong>exactly one</strong> white rook represented by <code>&#39;R&#39;</code>, some number of white bishops <code>&#39;B&#39;</code>, and some number of black pawns <code>&#39;p&#39;</code>. Empty squares are represented by <code>&#39;.&#39;</code>.</p>

<p>A rook can move any number of squares horizontally or vertically (up, down, left, right) until it reaches another piece <em>or</em> the edge of the board. A rook is <strong>attacking</strong> a pawn if it can move to the pawn&#39;s square in one move.</p>

<p>Note: A rook cannot move through other pieces, such as bishops or pawns. This means a rook cannot attack a pawn if there is another piece blocking the path.</p>

<p>Return the <strong>number of pawns</strong> the white rook is <strong>attacking</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/02/20/1253_example_1_improved.PNG" style="width: 300px; height: 305px;" />
<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">board = [[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;R&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]]</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p>In this example, the rook is attacking all the pawns.</p>
</div>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/02/19/1253_example_2_improved.PNG" style="width: 300px; height: 306px;" />
<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">board = [[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;p&quot;,&quot;p&quot;,&quot;B&quot;,&quot;p&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;p&quot;,&quot;B&quot;,&quot;R&quot;,&quot;B&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;p&quot;,&quot;p&quot;,&quot;B&quot;,&quot;p&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]]</span></p>

<p><strong>Output:</strong> <span class="example-io">0</span></p>

<p><strong>Explanation:</strong></p>

<p>The bishops are blocking the rook from attacking any of the pawns.</p>
</div>

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/02/20/1253_example_3_improved.PNG" style="width: 300px; height: 305px;" />
<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">board = [[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;p&quot;,&quot;p&quot;,&quot;.&quot;,&quot;R&quot;,&quot;.&quot;,&quot;p&quot;,&quot;B&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;B&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]]</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p>The rook is attacking the pawns at positions b5, d6, and f5.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>board.length == 8</code></li>
	<li><code>board[i].length == 8</code></li>
	<li><code>board[i][j]</code> is either <code>&#39;R&#39;</code>, <code>&#39;.&#39;</code>, <code>&#39;B&#39;</code>, or <code>&#39;p&#39;</code></li>
	<li>There is exactly one cell with <code>board[i][j] == &#39;R&#39;</code></li>
</ul>


## Solution

---
### Python3
``` py title='available-captures-for-rook'
class Solution:
    def numRookCaptures(self, board: List[List[str]]) -> int:
        x = y = 0
        
        for i in range(8):
            for j in range(8):
                if board[i][j] == 'R':
                    x, y = i, j
        
        left, right = y - 1, y + 1
        top, bottom = x - 1, x + 1
        res = 0
        
        while left >= 0:
            if board[x][left] == ".":
                left -= 1
            elif board[x][left] == "B":
                break
            elif board[x][left] == "p":
                res += 1
                break
        
        while right < 8:
            if board[x][right] == ".":
                right += 1
            elif board[x][right] == "B":
                break
            elif board[x][right] == "p":
                res += 1
                break
        
        while top >= 0:
            if board[top][y] == ".":
                top -= 1
            elif board[top][y] == "B":
                break
            elif board[top][y] == "p":
                res += 1
                break
        
        while bottom < 8:
            if board[bottom][y] == ".":
                bottom += 1
            elif board[bottom][y] == "B":
                break
            elif board[bottom][y] == "p":
                res += 1
                break
        
        return res
        
        
                
        
```

