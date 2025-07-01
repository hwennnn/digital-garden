---
title: 879. Profitable Schemes
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - weekly-contest-95
  - contest-question
date: 2023-04-22
---

[Problem Link](https://leetcode.com/problems/profitable-schemes/)

## Description

---
<p>There is a group of <code>n</code> members, and a list of various crimes they could commit. The <code>i<sup>th</sup></code> crime generates a <code>profit[i]</code> and requires <code>group[i]</code> members to participate in it. If a member participates in one crime, that member can&#39;t participate in another crime.</p>

<p>Let&#39;s call a <strong>profitable scheme</strong> any subset of these crimes that generates at least <code>minProfit</code> profit, and the total number of members participating in that subset of crimes is at most <code>n</code>.</p>

<p>Return the number of schemes that can be chosen. Since the answer may be very large, <strong>return it modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 5, minProfit = 3, group = [2,2], profit = [2,3]
<strong>Output:</strong> 2
<strong>Explanation:</strong> To make a profit of at least 3, the group could either commit crimes 0 and 1, or just crime 1.
In total, there are 2 schemes.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 10, minProfit = 5, group = [2,3,5], profit = [6,7,8]
<strong>Output:</strong> 7
<strong>Explanation:</strong> To make a profit of at least 5, the group could commit any crimes, as long as they commit one.
There are 7 possible schemes: (0), (1), (2), (0,1), (0,2), (1,2), and (0,1,2).</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 100</code></li>
	<li><code>0 &lt;= minProfit &lt;= 100</code></li>
	<li><code>1 &lt;= group.length &lt;= 100</code></li>
	<li><code>1 &lt;= group[i] &lt;= 100</code></li>
	<li><code>profit.length == group.length</code></li>
	<li><code>0 &lt;= profit[i] &lt;= 100</code></li>
</ul>


## Solution

---
### Python3
``` py title='profitable-schemes'
class Solution:
    def profitableSchemes(self, n: int, minProfit: int, group: List[int], profit: List[int]) -> int:
        N = len(group)
        M = 10 ** 9 + 7

        @cache
        def go(index, people, currProfit):
            if people == 0 or index == N:
                return currProfit >= minProfit

            # skip
            res = go(index + 1, people, currProfit)

            if people - group[index] >= 0:
                res += go(index + 1, people - group[index], min(currProfit + profit[index], minProfit))
            
            return res % M
        
        return go(0, n, 0)
```

