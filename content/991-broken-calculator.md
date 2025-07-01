---
title: 991. Broken Calculator
draft: false
tags: 
  - leetcode-medium
  - math
  - greedy
  - weekly-contest-123
  - contest-question
date: 2022-03-23
---

[Problem Link](https://leetcode.com/problems/broken-calculator/)

## Description

---
<p>There is a broken calculator that has the integer <code>startValue</code> on its display initially. In one operation, you can:</p>

<ul>
	<li>multiply the number on display by <code>2</code>, or</li>
	<li>subtract <code>1</code> from the number on display.</li>
</ul>

<p>Given two integers <code>startValue</code> and <code>target</code>, return <em>the minimum number of operations needed to display </em><code>target</code><em> on the calculator</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> startValue = 2, target = 3
<strong>Output:</strong> 2
<strong>Explanation:</strong> Use double operation and then decrement operation {2 -&gt; 4 -&gt; 3}.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> startValue = 5, target = 8
<strong>Output:</strong> 2
<strong>Explanation:</strong> Use decrement and then double {5 -&gt; 4 -&gt; 8}.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> startValue = 3, target = 10
<strong>Output:</strong> 3
<strong>Explanation:</strong> Use double, decrement and double {3 -&gt; 6 -&gt; 5 -&gt; 10}.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= startValue, target &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='broken-calculator'
class Solution:
    def brokenCalc(self, startValue: int, target: int) -> int:
        if startValue == target: return 0
        if startValue > target: return startValue - target
        
        if target % 2 == 0:
            return self.brokenCalc(startValue, target // 2) + 1
        else:
            return self.brokenCalc(startValue, target + 1) + 1
```

