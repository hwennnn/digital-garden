---
title: 1824. Minimum Sideway Jumps
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
  - greedy
  - weekly-contest-236
  - contest-question
date: 2021-04-15
---

[Problem Link](https://leetcode.com/problems/minimum-sideway-jumps/)

## Description

---
<p>There is a <strong>3 lane road</strong> of length <code>n</code> that consists of <code>n + 1</code> <strong>points</strong> labeled from <code>0</code> to <code>n</code>. A frog <strong>starts</strong> at point <code>0</code> in the <strong>second </strong>lane<strong> </strong>and wants to jump to point <code>n</code>. However, there could be obstacles along the way.</p>

<p>You are given an array <code>obstacles</code> of length <code>n + 1</code> where each <code>obstacles[i]</code> (<strong>ranging from 0 to 3</strong>) describes an obstacle on the lane <code>obstacles[i]</code> at point <code>i</code>. If <code>obstacles[i] == 0</code>, there are no obstacles at point <code>i</code>. There will be <strong>at most one</strong> obstacle in the 3 lanes at each point.</p>

<ul>
	<li>For example, if <code>obstacles[2] == 1</code>, then there is an obstacle on lane 1 at point 2.</li>
</ul>

<p>The frog can only travel from point <code>i</code> to point <code>i + 1</code> on the same lane if there is not an obstacle on the lane at point <code>i + 1</code>. To avoid obstacles, the frog can also perform a <strong>side jump</strong> to jump to <strong>another</strong> lane (even if they are not adjacent) at the <strong>same</strong> point if there is no obstacle on the new lane.</p>

<ul>
	<li>For example, the frog can jump from lane 3 at point 3 to lane 1 at point 3.</li>
</ul>

<p>Return<em> the <strong>minimum number of side jumps</strong> the frog needs to reach <strong>any lane</strong> at point n starting from lane <code>2</code> at point 0.</em></p>

<p><strong>Note:</strong> There will be no obstacles on points <code>0</code> and <code>n</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/25/ic234-q3-ex1.png" style="width: 500px; height: 244px;" />
<pre>
<strong>Input:</strong> obstacles = [0,1,2,3,0]
<strong>Output:</strong> 2 
<strong>Explanation:</strong> The optimal solution is shown by the arrows above. There are 2 side jumps (red arrows).
Note that the frog can jump over obstacles only when making side jumps (as shown at point 2).
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/25/ic234-q3-ex2.png" style="width: 500px; height: 196px;" />
<pre>
<strong>Input:</strong> obstacles = [0,1,1,3,3,0]
<strong>Output:</strong> 0
<strong>Explanation:</strong> There are no obstacles on lane 2. No side jumps are required.
</pre>

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/25/ic234-q3-ex3.png" style="width: 500px; height: 196px;" />
<pre>
<strong>Input:</strong> obstacles = [0,2,1,0,3,0]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The optimal solution is shown by the arrows above. There are 2 side jumps.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>obstacles.length == n + 1</code></li>
	<li><code>1 &lt;= n &lt;= 5 * 10<sup>5</sup></code></li>
	<li><code>0 &lt;= obstacles[i] &lt;= 3</code></li>
	<li><code>obstacles[0] == obstacles[n] == 0</code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-sideway-jumps'
class Solution:
    def minSideJumps(self, obs: List[int]) -> int:
        n = len(obs)
        lanes = [[True] * n for _ in range(3)]

        for i,x in enumerate(obs):
            if x != 0:
                lanes[x - 1][i] = False
                
        suffix = [[1] * n for _ in range(3)]
        for i in range(3):
            for j in reversed(range(n)):
                if not lanes[i][j]:
                    suffix[i][j] = 0
                else:
                    if j != n - 1:
                        suffix[i][j] += suffix[i][j + 1]
        
        curr = 1
        jumps = 0
        for i in range(n-1):
            if not lanes[curr][i+1]:
                lane1 = suffix[0][i] if curr != 0 and lanes[0][i] else float('-inf')
                lane2 = suffix[1][i] if curr != 1 and lanes[1][i] else float('-inf')
                lane3 = suffix[2][i] if curr != 2 and lanes[2][i] else float('-inf')
                
                m = max(lane1, lane2, lane3)
                if m == lane1: 
                    curr = 0
                elif m == lane2: 
                    curr = 1
                else:
                     curr = 2
                
                jumps += 1

            
        return jumps
```

