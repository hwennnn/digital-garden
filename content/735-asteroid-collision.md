---
title: 735. Asteroid Collision
draft: false
tags: 
  - leetcode-medium
  - array
  - stack
  - simulation
  - weekly-contest-60
  - contest-question
date: 2023-07-20
---

[Problem Link](https://leetcode.com/problems/asteroid-collision/)

## Description

---
<p>We are given an array <code>asteroids</code> of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.</p>

<p>For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.</p>

<p>Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> asteroids = [5,10,-5]
<strong>Output:</strong> [5,10]
<strong>Explanation:</strong> The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> asteroids = [8,-8]
<strong>Output:</strong> []
<strong>Explanation:</strong> The 8 and -8 collide exploding each other.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> asteroids = [10,2,-5]
<strong>Output:</strong> [10]
<strong>Explanation:</strong> The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= asteroids.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-1000 &lt;= asteroids[i] &lt;= 1000</code></li>
	<li><code>asteroids[i] != 0</code></li>
</ul>


## Solution

---
### Python3
``` py title='asteroid-collision'
class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []

        for x in asteroids:
            while stack and (x < 0 and stack[-1] > 0):
                if x == -stack[-1]:
                    stack.pop()
                    break
                elif stack[-1] > -x:
                    break
                else:
                    stack.pop()
            else:
                stack.append(x)
        
        return stack
```

