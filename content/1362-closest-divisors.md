---
title: 1362. Closest Divisors
draft: false
tags: 
  - leetcode-medium
  - math
  - weekly-contest-177
  - contest-question
date: 2020-10-16
---

[Problem Link](https://leetcode.com/problems/closest-divisors/)

## Description

---
<p>Given an integer <code>num</code>, find the closest two integers in absolute difference whose product equals&nbsp;<code>num + 1</code>&nbsp;or <code>num + 2</code>.</p>

<p>Return the two integers in any order.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> num = 8
<strong>Output:</strong> [3,3]
<strong>Explanation:</strong> For num + 1 = 9, the closest divisors are 3 &amp; 3, for num + 2 = 10, the closest divisors are 2 &amp; 5, hence 3 &amp; 3 is chosen.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> num = 123
<strong>Output:</strong> [5,25]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> num = 999
<strong>Output:</strong> [40,25]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= num &lt;= 10^9</code></li>
</ul>


## Solution

---
### Python3
``` py title='closest-divisors'
class Solution:
    def closestDivisors(self, num: int) -> List[int]:
        
        for i in range(int(math.sqrt(num+2)), 0 , -1):
            if (num + 1) % i == 0:
                return [i, (num+1)//i]
            
            if (num + 2) % i == 0:
                return [i, (num+2)//i]
                
```

