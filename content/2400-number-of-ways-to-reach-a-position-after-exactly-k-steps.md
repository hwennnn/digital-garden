---
title: 2400. Number of Ways to Reach a Position After Exactly k Steps
draft: false
tags: 
  - leetcode-medium
  - math
  - dynamic-programming
  - combinatorics
  - weekly-contest-309
  - contest-question
date: 2022-09-04
---

[Problem Link](https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/)

## Description

---
<p>You are given two <strong>positive</strong> integers <code>startPos</code> and <code>endPos</code>. Initially, you are standing at position <code>startPos</code> on an <strong>infinite</strong> number line. With one step, you can move either one position to the left, or one position to the right.</p>

<p>Given a positive integer <code>k</code>, return <em>the number of <strong>different</strong> ways to reach the position </em><code>endPos</code><em> starting from </em><code>startPos</code><em>, such that you perform <strong>exactly</strong> </em><code>k</code><em> steps</em>. Since the answer may be very large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>Two ways are considered different if the order of the steps made is not exactly the same.</p>

<p><strong>Note</strong> that the number line includes negative integers.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> startPos = 1, endPos = 2, k = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> We can reach position 2 from 1 in exactly 3 steps in three ways:
- 1 -&gt; 2 -&gt; 3 -&gt; 2.
- 1 -&gt; 2 -&gt; 1 -&gt; 2.
- 1 -&gt; 0 -&gt; 1 -&gt; 2.
It can be proven that no other way is possible, so we return 3.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> startPos = 2, endPos = 5, k = 10
<strong>Output:</strong> 0
<strong>Explanation:</strong> It is impossible to reach position 5 from position 2 in exactly 10 steps.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= startPos, endPos, k &lt;= 1000</code></li>
</ul>


## Solution

---
### Python3
``` py title='number-of-ways-to-reach-a-position-after-exactly-k-steps'
class Solution:
    def numberOfWays(self, startPos: int, endPos: int, k: int) -> int:
        M = 10 ** 9 + 7
        
        @cache
        def dfs(pos, steps):
            if steps == k:
                return 1 if pos == endPos else 0
            
            remainingSteps = k - steps
            
            if abs(pos - endPos) > remainingSteps:
                return 0
                
            return (dfs(pos + 1, steps + 1) + dfs(pos - 1, steps + 1)) % M
    
        return dfs(startPos, 0)
```

