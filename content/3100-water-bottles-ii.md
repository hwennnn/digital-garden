---
title: 3100. Water Bottles II
draft: false
tags: 
  - leetcode-medium
  - math
  - simulation
  - weekly-contest-391
  - contest-question
date: 2024-03-31
---

[Problem Link](https://leetcode.com/problems/water-bottles-ii/)

## Description

---
<p>You are given two integers <code>numBottles</code> and <code>numExchange</code>.</p>

<p><code>numBottles</code> represents the number of full water bottles that you initially have. In one operation, you can perform one of the following operations:</p>

<ul>
	<li>Drink any number of full water bottles turning them into empty bottles.</li>
	<li>Exchange <code>numExchange</code> empty bottles with one full water bottle. Then, increase <code>numExchange</code> by one.</li>
</ul>

<p>Note that you cannot exchange multiple batches of empty bottles for the same value of <code>numExchange</code>. For example, if <code>numBottles == 3</code> and <code>numExchange == 1</code>, you cannot exchange <code>3</code> empty water bottles for <code>3</code> full bottles.</p>

<p>Return <em>the <strong>maximum</strong> number of water bottles you can drink</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2024/01/28/exampleone1.png" style="width: 948px; height: 482px; padding: 10px; background: #fff; border-radius: .5rem;" />
<pre>
<strong>Input:</strong> numBottles = 13, numExchange = 6
<strong>Output:</strong> 15
<strong>Explanation:</strong> The table above shows the number of full water bottles, empty water bottles, the value of numExchange, and the number of bottles drunk.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2024/01/28/example231.png" style="width: 990px; height: 642px; padding: 10px; background: #fff; border-radius: .5rem;" />
<pre>
<strong>Input:</strong> numBottles = 10, numExchange = 3
<strong>Output:</strong> 13
<strong>Explanation:</strong> The table above shows the number of full water bottles, empty water bottles, the value of numExchange, and the number of bottles drunk.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= numBottles &lt;= 100 </code></li>
	<li><code>1 &lt;= numExchange &lt;= 100</code></li>
</ul>


## Solution

---
### Python3
``` py title='water-bottles-ii'
class Solution:
    def maxBottlesDrunk(self, numBottles: int, numExchange: int) -> int:
        empty = 0
        res = 0
        
        while numBottles > 0 or empty >= numExchange:
            if numBottles > 0:
                res += numBottles
                empty += numBottles
                numBottles = 0
            
            if empty >= numExchange:
                empty -= numExchange
                numBottles += 1
                numExchange += 1
            
        return res
```

