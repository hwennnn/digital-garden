---
title: 1444. Number of Ways of Cutting a Pizza
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - memoization
  - matrix
  - prefix-sum
  - weekly-contest-188
  - contest-question
date: 2023-04-01
---

[Problem Link](https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/)

## Description

---
<p>Given a rectangular pizza represented as a <code>rows x cols</code>&nbsp;matrix containing the following characters: <code>&#39;A&#39;</code> (an apple) and <code>&#39;.&#39;</code> (empty cell) and given the integer <code>k</code>. You have to cut the pizza into <code>k</code> pieces using <code>k-1</code> cuts.&nbsp;</p>

<p>For each cut you choose the direction: vertical or horizontal, then you choose a cut position at the cell boundary and cut the pizza into two pieces. If you cut the pizza vertically, give the left part of the pizza to a person. If you cut the pizza horizontally, give the upper part of the pizza to a person. Give the last piece of pizza to the last person.</p>

<p><em>Return the number of ways of cutting the pizza such that each piece contains <strong>at least</strong> one apple.&nbsp;</em>Since the answer can be a huge number, return this modulo 10^9 + 7.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2020/04/23/ways_to_cut_apple_1.png" style="width: 500px; height: 378px;" /></strong></p>

<pre>
<strong>Input:</strong> pizza = [&quot;A..&quot;,&quot;AAA&quot;,&quot;...&quot;], k = 3
<strong>Output:</strong> 3 
<strong>Explanation:</strong> The figure above shows the three ways to cut the pizza. Note that pieces must contain at least one apple.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> pizza = [&quot;A..&quot;,&quot;AA.&quot;,&quot;...&quot;], k = 3
<strong>Output:</strong> 1
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> pizza = [&quot;A..&quot;,&quot;A..&quot;,&quot;...&quot;], k = 1
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= rows, cols &lt;= 50</code></li>
	<li><code>rows ==&nbsp;pizza.length</code></li>
	<li><code>cols ==&nbsp;pizza[i].length</code></li>
	<li><code>1 &lt;= k &lt;= 10</code></li>
	<li><code>pizza</code> consists of characters <code>&#39;A&#39;</code>&nbsp;and <code>&#39;.&#39;</code> only.</li>
</ul>


## Solution

---
### Python3
``` py title='number-of-ways-of-cutting-a-pizza'
class Solution:
    def ways(self, pizza: List[str], k: int) -> int:
        rows, cols = len(pizza), len(pizza[0])
        M = 10 ** 9 + 7

        @cache
        def hasApple(sx, sy, ex, ey):
            if sx > ex or sy > ey: return False

            if pizza[sx][sy] == 'A': return True

            return hasApple(sx + 1, sy, ex, ey) or hasApple(sx, sy + 1, ex, ey)

        @cache
        def count(x, y, rem):
            if rem == 1:
                return int(hasApple(x, y, rows - 1, cols - 1))
            
            res = 0

            for dy in range(y + 1, cols):
                if hasApple(x, y, rows - 1, dy - 1):
                    res += count(x, dy, rem - 1)
            
            for dx in range(x + 1, rows):
                if hasApple(x, y, dx - 1, cols - 1):
                    res += count(dx, y, rem - 1)
            
            return res % M
        
        return count(0, 0, k)

```

