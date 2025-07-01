---
title: 1552. Magnetic Force Between Two Balls
draft: false
tags: 
  - leetcode-medium
  - array
  - binary-search
  - sorting
  - weekly-contest-202
  - contest-question
date: 2024-06-22
---

[Problem Link](https://leetcode.com/problems/magnetic-force-between-two-balls/)

## Description

---
<p>In the universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket. Rick has <code>n</code> empty baskets, the <code>i<sup>th</sup></code> basket is at <code>position[i]</code>, Morty has <code>m</code> balls and needs to distribute the balls into the baskets such that the <strong>minimum magnetic force</strong> between any two balls is <strong>maximum</strong>.</p>

<p>Rick stated that magnetic force between two different balls at positions <code>x</code> and <code>y</code> is <code>|x - y|</code>.</p>

<p>Given the integer array <code>position</code> and the integer <code>m</code>. Return <em>the required force</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/11/q3v1.jpg" style="width: 562px; height: 195px;" />
<pre>
<strong>Input:</strong> position = [1,2,3,4,7], m = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> Distributing the 3 balls into baskets 1, 4 and 7 will make the magnetic force between ball pairs [3, 3, 6]. The minimum magnetic force is 3. We cannot achieve a larger minimum magnetic force than 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> position = [5,4,3,2,1,1000000000], m = 2
<strong>Output:</strong> 999999999
<strong>Explanation:</strong> We can use baskets 1 and 1000000000.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == position.length</code></li>
	<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= position[i] &lt;= 10<sup>9</sup></code></li>
	<li>All integers in <code>position</code> are <strong>distinct</strong>.</li>
	<li><code>2 &lt;= m &lt;= position.length</code></li>
</ul>


## Solution

---
### Python3
``` py title='magnetic-force-between-two-balls'
class Solution:
    def maxDistance(self, position: List[int], m: int) -> int:
        N = len(position)
        position.sort()

        def good(k):
            count = 1
            curr = position[0]

            for i in range(1,  N):
                if position[i] - curr >= k:
                    count += 1
                    curr = position[i]

                    if count == m: break
            
            return count >= m

        left, right = 0, position[-1] - position[0]

        while left < right:
            mid = (left + right + 1) // 2
            
            if good(mid):
                left = mid
            else:
                right = mid - 1

        return left
```

