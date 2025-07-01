---
title: 1291. Sequential Digits
draft: false
tags: 
  - leetcode-medium
  - enumeration
  - weekly-contest-167
  - contest-question
date: 2024-02-02
---

[Problem Link](https://leetcode.com/problems/sequential-digits/)

## Description

---
<p>An&nbsp;integer has <em>sequential digits</em> if and only if each digit in the number is one more than the previous digit.</p>

<p>Return a <strong>sorted</strong> list of all the integers&nbsp;in the range <code>[low, high]</code>&nbsp;inclusive that have sequential digits.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> low = 100, high = 300
<strong>Output:</strong> [123,234]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> low = 1000, high = 13000
<strong>Output:</strong> [1234,2345,3456,4567,5678,6789,12345]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>10 &lt;= low &lt;= high &lt;= 10^9</code></li>
</ul>


## Solution

---
### Python3
``` py title='sequential-digits'
class Solution:
    def sequentialDigits(self, low: int, high: int) -> List[int]:
        queue = deque(range(1, 9))
        res = []
        
        while queue:
            x = queue.popleft()
            if low <= x <= high:
                res.append(x)
            
            if (last := x % 10) < 9:
                queue.append(x * 10 + last + 1)
        
        return res

```

