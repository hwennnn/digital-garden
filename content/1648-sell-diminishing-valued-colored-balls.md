---
title: 1648. Sell Diminishing-Valued Colored Balls
draft: false
tags: 
  - leetcode-medium
  - array
  - math
  - binary-search
  - greedy
  - sorting
  - heap-priority-queue
  - weekly-contest-214
  - contest-question
date: 2022-06-21
---

[Problem Link](https://leetcode.com/problems/sell-diminishing-valued-colored-balls/)

## Description

---
<p>You have an <code>inventory</code> of different colored balls, and there is a customer that wants <code>orders</code> balls of <strong>any</strong> color.</p>

<p>The customer weirdly values the colored balls. Each colored ball&#39;s value is the number of balls <strong>of that color&nbsp;</strong>you currently have in your <code>inventory</code>. For example, if you own <code>6</code> yellow balls, the customer would pay <code>6</code> for the first yellow ball. After the transaction, there are only <code>5</code> yellow balls left, so the next yellow ball is then valued at <code>5</code> (i.e., the value of the balls decreases as you sell more to the customer).</p>

<p>You are given an integer array, <code>inventory</code>, where <code>inventory[i]</code> represents the number of balls of the <code>i<sup>th</sup></code> color that you initially own. You are also given an integer <code>orders</code>, which represents the total number of balls that the customer wants. You can sell the balls <strong>in any order</strong>.</p>

<p>Return <em>the <strong>maximum</strong> total value that you can attain after selling </em><code>orders</code><em> colored balls</em>. As the answer may be too large, return it <strong>modulo </strong><code>10<sup>9 </sup>+ 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/05/jj.gif" style="width: 480px; height: 270px;" />
<pre>
<strong>Input:</strong> inventory = [2,5], orders = 4
<strong>Output:</strong> 14
<strong>Explanation:</strong> Sell the 1st color 1 time (2) and the 2nd color 3 times (5 + 4 + 3).
The maximum total value is 2 + 5 + 4 + 3 = 14.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> inventory = [3,5], orders = 6
<strong>Output:</strong> 19
<strong>Explanation: </strong>Sell the 1st color 2 times (3 + 2) and the 2nd color 4 times (5 + 4 + 3 + 2).
The maximum total value is 3 + 2 + 5 + 4 + 3 + 2 = 19.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= inventory.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= inventory[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>1 &lt;= orders &lt;= min(sum(inventory[i]), 10<sup>9</sup>)</code></li>
</ul>


## Solution

---
### Python3
``` py title='sell-diminishing-valued-colored-balls'
from heapq import heappop, heappush

class Solution:
    def maxProfit(self, inventory: List[int], orders: int) -> int:
        M = 10 ** 9 + 7
        
        pq = []
        for v in inventory:
            heappush(pq, (-v, 1))

        res = 0
        
        while pq and orders > 0:
            top, count = heappop(pq)
            top = -top
            
            while pq and top == -pq[0][0]:
                count += heappop(pq)[1]
            
            nextTop = 0
            if pq:
                nextTop = -pq[0][0]
                
            delta = top - nextTop
            
            if delta * count <= orders:
                d = (top*(top+1)) // 2
                d -= (nextTop*(nextTop+1)) // 2
                d *= count
                
                res += d
                res %= M
                orders -= (delta*count)
            
            else:
                cnt = orders // count
                d = (top*(top+1)) // 2
                nextTop = top - cnt
                d -= (nextTop*(nextTop+1)) // 2
                d *= count
                
                res += d
                res %= M
                orders -= (count * cnt)
                
                leftover = orders % count
                res += nextTop * leftover
                res %= M
                
                orders -= leftover
                
            if nextTop:
                heappush(pq, (-nextTop, count))
            
                        
        return res % M
```

