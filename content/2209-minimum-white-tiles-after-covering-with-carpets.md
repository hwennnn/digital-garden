---
title: 2209. Minimum White Tiles After Covering With Carpets
draft: false
tags: 
  - leetcode-hard
  - string
  - dynamic-programming
  - prefix-sum
  - biweekly-contest-74
  - contest-question
date: 2022-03-21
---

[Problem Link](https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/)

## Description

---
<p>You are given a <strong>0-indexed binary</strong> string <code>floor</code>, which represents the colors of tiles on a floor:</p>

<ul>
	<li><code>floor[i] = &#39;0&#39;</code> denotes that the <code>i<sup>th</sup></code> tile of the floor is colored <strong>black</strong>.</li>
	<li>On the other hand, <code>floor[i] = &#39;1&#39;</code> denotes that the <code>i<sup>th</sup></code> tile of the floor is colored <strong>white</strong>.</li>
</ul>

<p>You are also given <code>numCarpets</code> and <code>carpetLen</code>. You have <code>numCarpets</code> <strong>black</strong> carpets, each of length <code>carpetLen</code> tiles. Cover the tiles with the given carpets such that the number of <strong>white</strong> tiles still visible is <strong>minimum</strong>. Carpets may overlap one another.</p>

<p>Return <em>the <strong>minimum</strong> number of white tiles still visible.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/02/10/ex1-1.png" style="width: 400px; height: 73px;" />
<pre>
<strong>Input:</strong> floor = &quot;10110101&quot;, numCarpets = 2, carpetLen = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> 
The figure above shows one way of covering the tiles with the carpets such that only 2 white tiles are visible.
No other way of covering the tiles with the carpets can leave less than 2 white tiles visible.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/02/10/ex2.png" style="width: 353px; height: 123px;" />
<pre>
<strong>Input:</strong> floor = &quot;11111&quot;, numCarpets = 2, carpetLen = 3
<strong>Output:</strong> 0
<strong>Explanation:</strong> 
The figure above shows one way of covering the tiles with the carpets such that no white tiles are visible.
Note that the carpets are able to overlap one another.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= carpetLen &lt;= floor.length &lt;= 1000</code></li>
	<li><code>floor[i]</code> is either <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li>
	<li><code>1 &lt;= numCarpets &lt;= 1000</code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-white-tiles-after-covering-with-carpets'
class Solution:
    def minimumWhiteTiles(self, floor: str, numCarpets: int, carpetLen: int) -> int:
        n = len(floor)
        total = 0
        prefix = [0]
        
        if numCarpets * carpetLen >= n: return 0
        
        for x in floor:
            if x == "1": total += 1
            prefix.append(prefix[-1] + int(x == "1"))
        
        if total == 0: return 0
            
        @cache
        def go(index, carpets):
            if index == n: return 0
            
            res = float('-inf')
            res = max(res, go(index + 1, carpets))
            
            bound = min(n, index + carpetLen)
            if carpets > 0 and prefix[bound] - prefix[index] > 0:
                res = max(res, go(bound, carpets - 1) + prefix[bound] - prefix[index])
            
            return res
        
        res = go(0, numCarpets)
        
        return total - res if total - res > 0 else 0
```

