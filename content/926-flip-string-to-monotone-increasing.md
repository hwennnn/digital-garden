---
title: 926. Flip String to Monotone Increasing
draft: false
tags: 
  - leetcode-medium
  - string
  - dynamic-programming
date: 2023-01-17
---

[Problem Link](https://leetcode.com/problems/flip-string-to-monotone-increasing/)

## Description

---
<p>A binary string is monotone increasing if it consists of some number of <code>0</code>&#39;s (possibly none), followed by some number of <code>1</code>&#39;s (also possibly none).</p>

<p>You are given a binary string <code>s</code>. You can flip <code>s[i]</code> changing it from <code>0</code> to <code>1</code> or from <code>1</code> to <code>0</code>.</p>

<p>Return <em>the minimum number of flips to make </em><code>s</code><em> monotone increasing</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;00110&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> We flip the last digit to get 00111.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;010110&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> We flip to get 011111, or alternatively 000111.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;00011000&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> We flip to get 00000000.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s[i]</code> is either <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li>
</ul>


## Solution

---
### Python
``` py title='flip-string-to-monotone-increasing'
class Solution:
    def minFlipsMonoIncr(self, s: str) -> int:
        flipCount = oneCount = 0

        for x in s:
            if x == '0':
                flipCount += 1
            else:
                oneCount += 1
            
            flipCount = min(flipCount, oneCount)

        return flipCount
```
