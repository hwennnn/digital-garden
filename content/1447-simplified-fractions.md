---
title: 1447. Simplified Fractions
draft: false
tags: 
  - leetcode-medium
  - math
  - string
  - number-theory
  - biweekly-contest-26
  - contest-question
date: 2020-10-13
---

[Problem Link](https://leetcode.com/problems/simplified-fractions/)

## Description

---
<p>Given an integer <code>n</code>, return <em>a list of all <strong>simplified</strong> fractions between </em><code>0</code><em> and </em><code>1</code><em> (exclusive) such that the denominator is less-than-or-equal-to </em><code>n</code>. You can return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> [&quot;1/2&quot;]
<strong>Explanation:</strong> &quot;1/2&quot; is the only unique fraction with a denominator less-than-or-equal-to 2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 3
<strong>Output:</strong> [&quot;1/2&quot;,&quot;1/3&quot;,&quot;2/3&quot;]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 4
<strong>Output:</strong> [&quot;1/2&quot;,&quot;1/3&quot;,&quot;1/4&quot;,&quot;2/3&quot;,&quot;3/4&quot;]
<strong>Explanation:</strong> &quot;2/4&quot; is not a simplified fraction because it can be simplified to &quot;1/2&quot;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 100</code></li>
</ul>


## Solution

---
### Python3
``` py title='simplified-fractions'
class Solution:
    def simplifiedFractions(self, n: int) -> List[str]:
        res = []
        for i in range(2, n + 1):
            for j in range(1, i):
                if math.gcd(i, j) == 1:
                    res.append(str(j) + '/' + str(i))
        return res
```

