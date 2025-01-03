---
title: 1111. Maximum Nesting Depth of Two Valid Parentheses Strings
draft: false
tags: 
  - string
  - stack
date: 2021-05-23
---

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-blue.svg)

## Description

---
<p>A string is a <em>valid parentheses string</em>&nbsp;(denoted VPS) if and only if it consists of <code>&quot;(&quot;</code> and <code>&quot;)&quot;</code> characters only, and:</p>

<ul>
	<li>It is the empty string, or</li>
	<li>It can be written as&nbsp;<code>AB</code>&nbsp;(<code>A</code>&nbsp;concatenated with&nbsp;<code>B</code>), where&nbsp;<code>A</code>&nbsp;and&nbsp;<code>B</code>&nbsp;are VPS&#39;s, or</li>
	<li>It can be written as&nbsp;<code>(A)</code>, where&nbsp;<code>A</code>&nbsp;is a VPS.</li>
</ul>

<p>We can&nbsp;similarly define the <em>nesting depth</em> <code>depth(S)</code> of any VPS <code>S</code> as follows:</p>

<ul>
	<li><code>depth(&quot;&quot;) = 0</code></li>
	<li><code>depth(A + B) = max(depth(A), depth(B))</code>, where <code>A</code> and <code>B</code> are VPS&#39;s</li>
	<li><code>depth(&quot;(&quot; + A + &quot;)&quot;) = 1 + depth(A)</code>, where <code>A</code> is a VPS.</li>
</ul>

<p>For example,&nbsp; <code>&quot;&quot;</code>,&nbsp;<code>&quot;()()&quot;</code>, and&nbsp;<code>&quot;()(()())&quot;</code>&nbsp;are VPS&#39;s (with nesting depths 0, 1, and 2), and <code>&quot;)(&quot;</code> and <code>&quot;(()&quot;</code> are not VPS&#39;s.</p>

<p>&nbsp;</p>

<p>Given a VPS <font face="monospace">seq</font>, split it into two disjoint subsequences <code>A</code> and <code>B</code>, such that&nbsp;<code>A</code> and <code>B</code> are VPS&#39;s (and&nbsp;<code>A.length + B.length = seq.length</code>).</p>

<p>Now choose <strong>any</strong> such <code>A</code> and <code>B</code> such that&nbsp;<code>max(depth(A), depth(B))</code> is the minimum possible value.</p>

<p>Return an <code>answer</code> array (of length <code>seq.length</code>) that encodes such a&nbsp;choice of <code>A</code> and <code>B</code>:&nbsp; <code>answer[i] = 0</code> if <code>seq[i]</code> is part of <code>A</code>, else <code>answer[i] = 1</code>.&nbsp; Note that even though multiple answers may exist, you may return any of them.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> seq = &quot;(()())&quot;
<strong>Output:</strong> [0,1,1,1,1,0]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> seq = &quot;()(())()&quot;
<strong>Output:</strong> [0,0,0,1,1,0,1,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= seq.size &lt;= 10000</code></li>
</ul>


## Solution

---
### Python
``` py title='maximum-nesting-depth-of-two-valid-parentheses-strings'
class Solution:
    def maxDepthAfterSplit(self, seq):
        A = B = 0
        res = [0] * len(seq)
        
        for i, c in enumerate(seq):
            v = 1 if c == '(' else -1
            if (v > 0) == (A < B):
                A += v
            else:
                B += v
                res[i] = 1
                
        return res

```

