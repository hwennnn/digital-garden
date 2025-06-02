---
title: 909. Snakes and Ladders
draft: false
tags: 
  - leetcode-medium
  - array
  - breadth-first-search
  - matrix
date: 2023-01-24
---

[Problem Link](https://leetcode.com/problems/snakes-and-ladders/)

## Description

---
<p>You are given an <code>n x n</code> integer matrix <code>board</code> where the cells are labeled from <code>1</code> to <code>n<sup>2</sup></code> in a <a href="https://en.wikipedia.org/wiki/Boustrophedon" target="_blank"><strong>Boustrophedon style</strong></a> starting from the bottom left of the board (i.e. <code>board[n - 1][0]</code>) and alternating direction each row.</p>

<p>You start on square <code>1</code> of the board. In each move, starting from square <code>curr</code>, do the following:</p>

<ul>
	<li>Choose a destination square <code>next</code> with a label in the range <code>[curr + 1, min(curr + 6, n<sup>2</sup>)]</code>.

	<ul>
		<li>This choice simulates the result of a standard <strong>6-sided die roll</strong>: i.e., there are always at most 6 destinations, regardless of the size of the board.</li>
	</ul>
	</li>
	<li>If <code>next</code> has a snake or ladder, you <strong>must</strong> move to the destination of that snake or ladder. Otherwise, you move to <code>next</code>.</li>
	<li>The game ends when you reach the square <code>n<sup>2</sup></code>.</li>
</ul>

<p>A board square on row <code>r</code> and column <code>c</code> has a snake or ladder if <code>board[r][c] != -1</code>. The destination of that snake or ladder is <code>board[r][c]</code>. Squares <code>1</code> and <code>n<sup>2</sup></code> are not the starting points of any snake or ladder.</p>

<p>Note that you only take a snake or ladder at most once per dice roll. If the destination to a snake or ladder is the start of another snake or ladder, you do <strong>not</strong> follow the subsequent&nbsp;snake or ladder.</p>

<ul>
	<li>For example, suppose the board is <code>[[-1,4],[-1,3]]</code>, and on the first move, your destination square is <code>2</code>. You follow the ladder to square <code>3</code>, but do <strong>not</strong> follow the subsequent ladder to <code>4</code>.</li>
</ul>

<p>Return <em>the least number of dice rolls required to reach the square </em><code>n<sup>2</sup></code><em>. If it is not possible to reach the square, return </em><code>-1</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2018/09/23/snakes.png" style="width: 500px; height: 394px;" />
<pre>
<strong>Input:</strong> board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> 
In the beginning, you start at square 1 (at row 5, column 0).
You decide to move to square 2 and must take the ladder to square 15.
You then decide to move to square 17 and must take the snake to square 13.
You then decide to move to square 14 and must take the ladder to square 35.
You then decide to move to square 36, ending the game.
This is the lowest possible number of moves to reach the last square, so return 4.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> board = [[-1,-1],[-1,3]]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == board.length == board[i].length</code></li>
	<li><code>2 &lt;= n &lt;= 20</code></li>
	<li><code>board[i][j]</code> is either <code>-1</code> or in the range <code>[1, n<sup>2</sup>]</code>.</li>
	<li>The squares labeled <code>1</code> and <code>n<sup>2</sup></code> are not the starting points of any snake or ladder.</li>
</ul>


## Solution

---
### Python3
``` py title='snakes-and-ladders'
class Solution:
    def snakesAndLadders(self, board: List[List[int]]) -> int:
        N = len(board)
        mp = {}

        curr = 1
        rev = False
        for i in range(N - 1, -1, -1):
            if not rev:
                for j in range(N):
                    mp[curr] = (i, j)
                    curr += 1
            else:
                for j in range(N - 1, -1, -1):
                    mp[curr] = (i, j)
                    curr += 1

            rev = not rev

        queue = deque([1])
        seen = set([1])
        moves = 0

        while queue:
            M = len(queue)

            for _ in range(M):
                node = queue.popleft()

                if node == N * N: return moves

                for adj in range(node + 1, min(node + 6, N * N) + 1):
                    r, c = mp[adj]
                    
                    if board[r][c] != -1:
                        adj = board[r][c]

                    if adj not in seen:
                        seen.add(adj)
                        queue.append(adj)
            
            moves += 1

        return -1
```
### C++
``` cpp title='snakes-and-ladders'
class Solution {
public:
    int snakesAndLadders(vector<vector<int>>& board) {
        int n = (int)board.size();
        int m = n * n;
        
        vector<bool> visited(m + 1, false);
        visited[1] = true;
        deque<int> queue = {1};
        int moves = 1;
        
        while (!queue.empty()) {
            for (int i = 0, l = (int)queue.size(); i < l; i++) {
                int u = queue.front();
                queue.pop_front();
                for (int v = u + 1, k = min(m, u + 6); v <= k; v++) {
                    int y = n - 1 - (v - 1) / n;
                    int x = (v - 1) % n;
                    if ((v - 1) / n % 2) x = n - 1 - x;
                    int w = board[y][x] == -1 ? v : board[y][x];
                    if (w == m) return moves;
                    if (!visited[w]) {
                        visited[w] = true;
                        queue.push_back(w);
                    }
                }
            }
            moves++;
        }
        
        return -1;
    }
};
```

