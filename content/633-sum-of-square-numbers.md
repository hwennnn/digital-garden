---
title: 633. Sum of Square Numbers
draft: false
tags: 
  - leetcode-medium
  - math
  - two-pointers
  - binary-search
  - weekly-contest-39
  - contest-question
date: 2024-06-17
---

[Problem Link](https://leetcode.com/problems/sum-of-square-numbers/)

## Description

---
<p>Given a non-negative integer <code>c</code>, decide whether there&#39;re two integers <code>a</code> and <code>b</code> such that <code>a<sup>2</sup> + b<sup>2</sup> = c</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> c = 5
<strong>Output:</strong> true
<strong>Explanation:</strong> 1 * 1 + 2 * 2 = 5
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> c = 3
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= c &lt;= 2<sup>31</sup> - 1</code></li>
</ul>


## Solution

---
### Python3
``` py title='sum-of-square-numbers'
class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        left, right = 0, int(math.sqrt(c))

        while left <= right:
            curr = left * left + right * right
            
            if curr == c:
                return True
            elif curr > c:
                right -= 1
            else:
                left += 1
        
        return False
```

