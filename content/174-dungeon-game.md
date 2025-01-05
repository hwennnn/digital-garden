---
title: 174. Dungeon Game
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - matrix
date: 2020-03-11
---

[Problem Link](https://leetcode.com/problems/dungeon-game/)

## Description

---
<p>The demons had captured the princess and imprisoned her in <strong>the bottom-right corner</strong> of a <code>dungeon</code>. The <code>dungeon</code> consists of <code>m x n</code> rooms laid out in a 2D grid. Our valiant knight was initially positioned in <strong>the top-left room</strong> and must fight his way through <code>dungeon</code> to rescue the princess.</p>

<p>The knight has an initial health point represented by a positive integer. If at any point his health point drops to <code>0</code> or below, he dies immediately.</p>

<p>Some of the rooms are guarded by demons (represented by negative integers), so the knight loses health upon entering these rooms; other rooms are either empty (represented as 0) or contain magic orbs that increase the knight&#39;s health (represented by positive integers).</p>

<p>To reach the princess as quickly as possible, the knight decides to move only <strong>rightward</strong> or <strong>downward</strong> in each step.</p>

<p>Return <em>the knight&#39;s minimum initial health so that he can rescue the princess</em>.</p>

<p><strong>Note</strong> that any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/13/dungeon-grid-1.jpg" style="width: 253px; height: 253px;" />
<pre>
<strong>Input:</strong> dungeon = [[-2,-3,3],[-5,-10,1],[10,30,-5]]
<strong>Output:</strong> 7
<strong>Explanation:</strong> The initial health of the knight must be at least 7 if he follows the optimal path: RIGHT-&gt; RIGHT -&gt; DOWN -&gt; DOWN.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> dungeon = [[0]]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == dungeon.length</code></li>
	<li><code>n == dungeon[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 200</code></li>
	<li><code>-1000 &lt;= dungeon[i][j] &lt;= 1000</code></li>
</ul>


## Solution

---
### Python3
``` py title='dungeon-game'
class Solution:
    def calculateMinimumHP(self, mat: List[List[int]]) -> int:
        rows, cols = len(mat), len(mat[0])
        dp = [[float('inf')] * (cols + 1) for _ in range(rows + 1)]
        dp[rows][cols - 1] = dp[rows - 1][cols] = 1
        
        for i in range(rows - 1, -1, -1):
            for j in range(cols - 1, -1, -1):
                need = min(dp[i][j + 1], dp[i + 1][j]) - mat[i][j]
                dp[i][j] = 1 if need <= 0 else need
        
        return dp[0][0]
```
### Java
``` java title='dungeon-game'
class Solution {
    public int calculateMinimumHP(int[][] dungeon) {
        if(dungeon == null || dungeon.length == 0 || dungeon[0].length == 0) return 1;
        
        int N = dungeon.length;
        int M = dungeon[0].length;
        int[][] dp = new int[N][M];
        dp[N - 1][M - 1] = 1 - dungeon[N - 1][M - 1];
        dp[N - 1][M - 1] = dp[N - 1][M - 1] <= 0 ? 1 : dp[N - 1][M - 1];
            
        for(int i = N - 1; i >= 0; --i){
            for(int j = M - 1; j >= 0; --j){
                if(i == N - 1 && j == M - 1) continue;
                int HP_D = i + 1 == N ? Integer.MAX_VALUE : dp[i + 1][j] - dungeon[i][j];
                int HP_R = j + 1 == M ? Integer.MAX_VALUE : dp[i][j + 1] - dungeon[i][j];
                int HP = Math.min(HP_D, HP_R);
                dp[i][j] = HP <= 0 ? 1 : HP;
            }    
        }
        
        return dp[0][0] ;
    }
}
```
