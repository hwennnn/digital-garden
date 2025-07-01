---
title: 2413. Smallest Even Multiple
draft: false
tags: 
  - leetcode-easy
  - math
  - number-theory
  - weekly-contest-311
  - contest-question
date: 2022-09-18
---

[Problem Link](https://leetcode.com/problems/smallest-even-multiple/)

## Description

---
Given a <strong>positive</strong> integer <code>n</code>, return <em>the smallest positive integer that is a multiple of <strong>both</strong> </em><code>2</code><em> and </em><code>n</code>.
<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 5
<strong>Output:</strong> 10
<strong>Explanation:</strong> The smallest multiple of both 5 and 2 is 10.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 6
<strong>Output:</strong> 6
<strong>Explanation:</strong> The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 150</code></li>
</ul>


## Solution

---
### Python3
``` py title='smallest-even-multiple'
class Solution:
    def smallestEvenMultiple(self, n: int) -> int:
        if n % 2 == 0: return n
        
        return n * 2
```

