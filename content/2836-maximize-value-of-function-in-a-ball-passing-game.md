---
title: 2836. Maximize Value of Function in a Ball Passing Game
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - bit-manipulation
  - weekly-contest-360
  - contest-question
date: 2023-09-05
---

[Problem Link](https://leetcode.com/problems/maximize-value-of-function-in-a-ball-passing-game/)

## Description

---
<p>You are given an integer array <code>receiver</code> of length <code>n</code> and an integer <code>k</code>. <code>n</code> players are playing a ball-passing game.</p>

<p>You choose the starting player, <code>i</code>. The game proceeds as follows: player <code>i</code> passes the ball to player <code>receiver[i]</code>, who then passes it to <code>receiver[receiver[i]]</code>, and so on, for <code>k</code> passes in total. The game&#39;s score is the sum of the indices of the players who touched the ball, including repetitions, i.e. <code>i + receiver[i] + receiver[receiver[i]] + ... + receiver<sup>(k)</sup>[i]</code>.</p>

<p>Return&nbsp;the <strong>maximum</strong>&nbsp;possible score.</p>

<p><strong>Notes:</strong></p>

<ul>
	<li><code>receiver</code> may contain duplicates.</li>
	<li><code>receiver[i]</code> may be equal to <code>i</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">receiver = [2,0,1], k = 4</span></p>

<p><strong>Output:</strong> <span class="example-io">6</span></p>

<p><strong>Explanation:</strong></p>

<p>Starting with player <code>i = 2</code> the initial score is 2:</p>

<table>
	<tbody>
		<tr>
			<th>Pass</th>
			<th>Sender Index</th>
			<th>Receiver Index</th>
			<th>Score</th>
		</tr>
		<tr>
			<td>1</td>
			<td>2</td>
			<td>1</td>
			<td>3</td>
		</tr>
		<tr>
			<td>2</td>
			<td>1</td>
			<td>0</td>
			<td>3</td>
		</tr>
		<tr>
			<td>3</td>
			<td>0</td>
			<td>2</td>
			<td>5</td>
		</tr>
		<tr>
			<td>4</td>
			<td>2</td>
			<td>1</td>
			<td>6</td>
		</tr>
	</tbody>
</table>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">receiver = [1,1,1,2,3], k = 3</span></p>

<p><strong>Output:</strong> <span class="example-io">10</span></p>

<p><strong>Explanation:</strong></p>

<p>Starting with player <code>i = 4</code> the initial score is 4:</p>

<table>
	<tbody>
		<tr>
			<th>Pass</th>
			<th>Sender Index</th>
			<th>Receiver Index</th>
			<th>Score</th>
		</tr>
		<tr>
			<td>1</td>
			<td>4</td>
			<td>3</td>
			<td>7</td>
		</tr>
		<tr>
			<td>2</td>
			<td>3</td>
			<td>2</td>
			<td>9</td>
		</tr>
		<tr>
			<td>3</td>
			<td>2</td>
			<td>1</td>
			<td>10</td>
		</tr>
	</tbody>
</table>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= receiver.length == n &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= receiver[i] &lt;= n - 1</code></li>
	<li><code>1 &lt;= k &lt;= 10<sup>10</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximize-value-of-function-in-a-ball-passing-game'
class Solution:
    def getMaxFunctionValue(self, receiver: List[int], k: int) -> int:
        N = len(receiver)
        M = k.bit_length() + 1

        fa = [[0] * M for _ in range(N)]
        scores = [[0] * M for _ in range(N)]

        for start, end in enumerate(receiver):
            fa[start][0] = scores[start][0] = end
        
        for p in range(1, M):
            for i in range(N):
                fa[i][p] = fa[fa[i][p - 1]][p - 1]
                scores[i][p] = scores[i][p - 1] + scores[fa[i][p - 1]][p - 1]
        
        res = 0

        for i in range(N):
            total = i

            for p in range(M):
                if k & (1 << p) > 0:
                    total += scores[i][p]
                    i = fa[i][p]

            res = max(res, total)

        return res
```

