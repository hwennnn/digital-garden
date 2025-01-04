---
title: 1541. Minimum Insertions to Balance a Parentheses String
draft: false
tags: 
  - leetcode-medium
  - string
  - stack
  - greedy
date: 2021-09-18
---

[Problem Link](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/)

## Description

---
<p>Given a parentheses string <code>s</code> containing only the characters <code>&#39;(&#39;</code> and <code>&#39;)&#39;</code>. A parentheses string is <strong>balanced</strong> if:</p>

<ul>
	<li>Any left parenthesis <code>&#39;(&#39;</code> must have a corresponding two consecutive right parenthesis <code>&#39;))&#39;</code>.</li>
	<li>Left parenthesis <code>&#39;(&#39;</code> must go before the corresponding two consecutive right parenthesis <code>&#39;))&#39;</code>.</li>
</ul>

<p>In other words, we treat <code>&#39;(&#39;</code> as an opening parenthesis and <code>&#39;))&#39;</code> as a closing parenthesis.</p>

<ul>
	<li>For example, <code>&quot;())&quot;</code>, <code>&quot;())(())))&quot;</code> and <code>&quot;(())())))&quot;</code> are balanced, <code>&quot;)()&quot;</code>, <code>&quot;()))&quot;</code> and <code>&quot;(()))&quot;</code> are not balanced.</li>
</ul>

<p>You can insert the characters <code>&#39;(&#39;</code> and <code>&#39;)&#39;</code> at any position of the string to balance it if needed.</p>

<p>Return <em>the minimum number of insertions</em> needed to make <code>s</code> balanced.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;(()))&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> The second &#39;(&#39; has two matching &#39;))&#39;, but the first &#39;(&#39; has only &#39;)&#39; matching. We need to add one more &#39;)&#39; at the end of the string to be &quot;(())))&quot; which is balanced.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;())&quot;
<strong>Output:</strong> 0
<strong>Explanation:</strong> The string is already balanced.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;))())(&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> Add &#39;(&#39; to match the first &#39;))&#39;, Add &#39;))&#39; to match the last &#39;(&#39;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> consists of <code>&#39;(&#39;</code> and <code>&#39;)&#39;</code> only.</li>
</ul>


## Solution

---
### Python
``` py title='minimum-insertions-to-balance-a-parentheses-string'
class Solution:
    def minInsertions(self, s: str) -> int:
        res = closed = 0
        
        for c in s:
            if c == '(':
                if closed & 1:
                    closed -= 1
                    res += 1
                    
                closed += 2
            else:
                if closed == 0:
                    res += 1
                    closed += 2
                    
                closed -= 1
        
        return res + closed
```

