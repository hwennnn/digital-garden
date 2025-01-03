---
title: 818. Race Car
draft: false
tags: 
  - dynamic-programming
date: 2022-03-25
---

![Difficulty](https://img.shields.io/badge/Difficulty-Hard-blue.svg)

## Description

---
<p>Your car starts at position <code>0</code> and speed <code>+1</code> on an infinite number line. Your car can go into negative positions. Your car drives automatically according to a sequence of instructions <code>&#39;A&#39;</code> (accelerate) and <code>&#39;R&#39;</code> (reverse):</p>

<ul>
	<li>When you get an instruction <code>&#39;A&#39;</code>, your car does the following:

	<ul>
		<li><code>position += speed</code></li>
		<li><code>speed *= 2</code></li>
	</ul>
	</li>
	<li>When you get an instruction <code>&#39;R&#39;</code>, your car does the following:
	<ul>
		<li>If your speed is positive then <code>speed = -1</code></li>
		<li>otherwise <code>speed = 1</code></li>
	</ul>
	Your position stays the same.</li>
</ul>

<p>For example, after commands <code>&quot;AAR&quot;</code>, your car goes to positions <code>0 --&gt; 1 --&gt; 3 --&gt; 3</code>, and your speed goes to <code>1 --&gt; 2 --&gt; 4 --&gt; -1</code>.</p>

<p>Given a target position <code>target</code>, return <em>the length of the shortest sequence of instructions to get there</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> target = 3
<strong>Output:</strong> 2
<strong>Explanation:</strong> 
The shortest instruction sequence is &quot;AA&quot;.
Your position goes from 0 --&gt; 1 --&gt; 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> target = 6
<strong>Output:</strong> 5
<strong>Explanation:</strong> 
The shortest instruction sequence is &quot;AAARA&quot;.
Your position goes from 0 --&gt; 1 --&gt; 3 --&gt; 7 --&gt; 7 --&gt; 6.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= target &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python
``` py title='race-car'
class Solution:
    def racecar(self, target: int) -> int:
        queue = deque([(0, 1, 0)])
        visited = set([(0, 1)])
        
        while queue:
            x, speed, steps = queue.popleft()
            
            if x == target: return steps
            
            A = [(x + speed, speed * 2, steps + 1), (x, -1 if speed > 0 else 1, steps + 1)]
            
            for y, newSpeed, newSteps in A:
                if 0 < y < target * 2 and (y, newSpeed) not in visited:
                    queue.append((y, newSpeed, newSteps))
                    visited.add((y, newSpeed))
                    
        return -1

```

