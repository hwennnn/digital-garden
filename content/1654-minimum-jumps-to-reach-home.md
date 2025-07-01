---
title: 1654. Minimum Jumps to Reach Home
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
  - breadth-first-search
  - biweekly-contest-39
  - contest-question
date: 2022-03-10
---

[Problem Link](https://leetcode.com/problems/minimum-jumps-to-reach-home/)

## Description

---
<p>A certain bug&#39;s home is on the x-axis at position <code>x</code>. Help them get there from position <code>0</code>.</p>

<p>The bug jumps according to the following rules:</p>

<ul>
	<li>It can jump exactly <code>a</code> positions <strong>forward</strong> (to the right).</li>
	<li>It can jump exactly <code>b</code> positions <strong>backward</strong> (to the left).</li>
	<li>It cannot jump backward twice in a row.</li>
	<li>It cannot jump to any <code>forbidden</code> positions.</li>
</ul>

<p>The bug may jump forward <strong>beyond</strong> its home, but it <strong>cannot jump</strong> to positions numbered with <strong>negative</strong> integers.</p>

<p>Given an array of integers <code>forbidden</code>, where <code>forbidden[i]</code> means that the bug cannot jump to the position <code>forbidden[i]</code>, and integers <code>a</code>, <code>b</code>, and <code>x</code>, return <em>the minimum number of jumps needed for the bug to reach its home</em>. If there is no possible sequence of jumps that lands the bug on position <code>x</code>, return <code>-1.</code></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> forbidden = [14,4,18,1,15], a = 3, b = 15, x = 9
<strong>Output:</strong> 3
<strong>Explanation:</strong> 3 jumps forward (0 -&gt; 3 -&gt; 6 -&gt; 9) will get the bug home.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> forbidden = [8,3,16,6,12,20], a = 15, b = 13, x = 11
<strong>Output:</strong> -1
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> forbidden = [1,6,2,14,5,17,4], a = 16, b = 9, x = 7
<strong>Output:</strong> 2
<strong>Explanation:</strong> One jump forward (0 -&gt; 16) then one jump backward (16 -&gt; 7) will get the bug home.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= forbidden.length &lt;= 1000</code></li>
	<li><code>1 &lt;= a, b, forbidden[i] &lt;= 2000</code></li>
	<li><code>0 &lt;= x &lt;= 2000</code></li>
	<li>All the elements in <code>forbidden</code> are distinct.</li>
	<li>Position <code>x</code> is not forbidden.</li>
</ul>


## Solution

---
### Python3
``` py title='minimum-jumps-to-reach-home'
class Solution:
    def minimumJumps(self, forbidden: List[int], a: int, b: int, x: int) -> int:
        f = set(forbidden)
        
        queue = deque([(0, 0, False)])
        maxVal = max([x] + forbidden) + a + b
        visited = set([0])
        
        while queue:
            curr, steps, isBackward = queue.popleft()
            
            if curr == x:
                return steps
            
            forward = curr + a
            if forward <= maxVal and forward not in f and (forward, False) not in visited:
                visited.add((forward, False))
                queue.append((forward, steps + 1, False))
            
            backward = curr - b
            if not isBackward and backward >= 0 and backward not in f and (backward, True) not in visited:
                visited.add((backward, True))
                queue.append((backward, steps + 1, True))
        
        return -1
```

