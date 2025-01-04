---
title: 2896. Apply Operations to Make Two Strings Equal
draft: false
tags: 
  - leetcode-medium
  - string
  - dynamic-programming
date: 2023-10-18
---

[Problem Link](https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/)

## Description

---
<p>You are given two <strong>0-indexed</strong> binary strings <code>s1</code> and <code>s2</code>, both of length <code>n</code>, and a positive integer <code>x</code>.</p>

<p>You can perform any of the following operations on the string <code>s1</code> <strong>any</strong> number of times:</p>

<ul>
	<li>Choose two indices <code>i</code> and <code>j</code>, and flip both <code>s1[i]</code> and <code>s1[j]</code>. The cost of this operation is <code>x</code>.</li>
	<li>Choose an index <code>i</code> such that <code>i &lt; n - 1</code> and flip both <code>s1[i]</code> and <code>s1[i + 1]</code>. The cost of this operation is <code>1</code>.</li>
</ul>

<p>Return <em>the <strong>minimum</strong> cost needed to make the strings </em><code>s1</code><em> and </em><code>s2</code><em> equal, or return </em><code>-1</code><em> if it is impossible.</em></p>

<p><strong>Note</strong> that flipping a character means changing it from <code>0</code> to <code>1</code> or vice-versa.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;1100011000&quot;, s2 = &quot;0101001010&quot;, x = 2
<strong>Output:</strong> 4
<strong>Explanation:</strong> We can do the following operations:
- Choose i = 3 and apply the second operation. The resulting string is s1 = &quot;110<u><strong>11</strong></u>11000&quot;.
- Choose i = 4 and apply the second operation. The resulting string is s1 = &quot;1101<strong><u>00</u></strong>1000&quot;.
- Choose i = 0 and j = 8 and apply the first operation. The resulting string is s1 = &quot;<u><strong>0</strong></u>1010010<u><strong>1</strong></u>0&quot; = s2.
The total cost is 1 + 1 + 2 = 4. It can be shown that it is the minimum cost possible.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;10110&quot;, s2 = &quot;00011&quot;, x = 4
<strong>Output:</strong> -1
<strong>Explanation:</strong> It is not possible to make the two strings equal.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == s1.length == s2.length</code></li>
	<li><code>1 &lt;= n, x &lt;= 500</code></li>
	<li><code>s1</code> and <code>s2</code> consist only of the characters <code>&#39;0&#39;</code> and <code>&#39;1&#39;</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='apply-operations-to-make-two-strings-equal'
class Solution:
    def minOperations(self, s1: str, s2: str, x: int) -> int:
        N = len(s1)
        
        diff = [i for i in range(N) if s1[i] != s2[i]]
        
        if len(diff) % 2 == 1: return -1
        
        @cache
        def go(index):
            if index == -1: return 0
            
            if index == 0: return x / 2
            
            return min(go(index - 1) + x / 2, go(index - 2) + diff[index] - diff[index - 1])
        
        return int(go(len(diff) - 1))
```

