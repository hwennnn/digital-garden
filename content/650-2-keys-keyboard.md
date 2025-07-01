---
title: 650. 2 Keys Keyboard
draft: false
tags: 
  - leetcode-medium
  - math
  - dynamic-programming
  - weekly-contest-43
  - contest-question
date: 2024-12-26
---

[Problem Link](https://leetcode.com/problems/2-keys-keyboard/)

## Description

---
<p>There is only one character <code>&#39;A&#39;</code> on the screen of a notepad. You can perform one of two operations on this notepad for each step:</p>

<ul>
	<li>Copy All: You can copy all the characters present on the screen (a partial copy is not allowed).</li>
	<li>Paste: You can paste the characters which are copied last time.</li>
</ul>

<p>Given an integer <code>n</code>, return <em>the minimum number of operations to get the character</em> <code>&#39;A&#39;</code> <em>exactly</em> <code>n</code> <em>times on the screen</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> Initially, we have one character &#39;A&#39;.
In step 1, we use Copy All operation.
In step 2, we use Paste operation to get &#39;AA&#39;.
In step 3, we use Paste operation to get &#39;AAA&#39;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 1
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 1000</code></li>
</ul>


## Solution

---
### Python3
``` py title='2-keys-keyboard'
class Solution:
    def minSteps(self, n: int) -> int:
        if n == 1: return 0
        
        @cache
        def go(curr, last):
            if curr > n:
                return inf

            if curr == n:
                return 0
            
            # paste
            res = 1 + go(curr + last, last)

            # copy and paste
            res = min(res, 2 + go(curr + curr, curr))
            
            return res
        
        return go(1, 1) + 1
```

