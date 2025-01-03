---
title: 1317. Convert Integer to the Sum of Two No-Zero Integers
draft: false
tags: 
  - math
date: 2020-12-28
---

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-blue.svg)

## Description

---
<p><strong>No-Zero integer</strong> is a positive integer that <strong>does not contain any <code>0</code></strong> in its decimal representation.</p>

<p>Given an integer <code>n</code>, return <em>a list of two integers</em> <code>[a, b]</code> <em>where</em>:</p>

<ul>
	<li><code>a</code> and <code>b</code> are <strong>No-Zero integers</strong>.</li>
	<li><code>a + b = n</code></li>
</ul>

<p>The test cases are generated so that there is at least one valid solution. If there are many valid solutions, you can return any of them.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> [1,1]
<strong>Explanation:</strong> Let a = 1 and b = 1.
Both a and b are no-zero integers, and a + b = 2 = n.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 11
<strong>Output:</strong> [2,9]
<strong>Explanation:</strong> Let a = 2 and b = 9.
Both a and b are no-zero integers, and a + b = 11 = n.
Note that there are other valid answers as [8, 3] that can be accepted.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= n &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python
``` py title='convert-integer-to-the-sum-of-two-no-zero-integers'
class Solution:
    def getNoZeroIntegers(self, n: int) -> List[int]:
        
        def findZeroes(n):
            return str(n).count("0") > 0
        
        a, b = 1, n - 1
        
        while findZeroes(a) or findZeroes(b):
            if findZeroes(a):
                a += 1
                b -= 1
            if findZeroes(b):
                a += 1
                b -= 1
        
        return [a,b]
            
        

```

