---
title: 667. Beautiful Arrangement II
draft: false
tags: 
  - array
  - math
date: 2021-04-12
---

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-blue.svg)

## Description

---
<p>Given two integers <code>n</code> and <code>k</code>, construct a list <code>answer</code> that contains <code>n</code> different positive integers ranging from <code>1</code> to <code>n</code> and obeys the following requirement:</p>

<ul>
	<li>Suppose this list is <code>answer =&nbsp;[a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, ... , a<sub>n</sub>]</code>, then the list <code>[|a<sub>1</sub> - a<sub>2</sub>|, |a<sub>2</sub> - a<sub>3</sub>|, |a<sub>3</sub> - a<sub>4</sub>|, ... , |a<sub>n-1</sub> - a<sub>n</sub>|]</code> has exactly <code>k</code> distinct integers.</li>
</ul>

<p>Return <em>the list</em> <code>answer</code>. If there multiple valid answers, return <strong>any of them</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 3, k = 1
<strong>Output:</strong> [1,2,3]
Explanation: The [1,2,3] has three different positive integers ranging from 1 to 3, and the [1,1] has exactly 1 distinct integer: 1
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 3, k = 2
<strong>Output:</strong> [1,3,2]
Explanation: The [1,3,2] has three different positive integers ranging from 1 to 3, and the [2,1] has exactly 2 distinct integers: 1 and 2.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt; n &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python
``` py title='beautiful-arrangement-ii'
class Solution:
    def constructArray(self, n: int, k: int) -> List[int]:
        res = []
        
        i, j = 1, n
        
        for _ in range(n):
            if k % 2 == 0:
                res.append(i)
                i += 1
            else:
                res.append(j)
                j -= 1
            
            if k > 1:
                k -= 1
        
        return res

```

