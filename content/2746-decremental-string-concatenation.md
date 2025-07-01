---
title: 2746. Decremental String Concatenation
draft: false
tags: 
  - leetcode-medium
  - array
  - string
  - dynamic-programming
  - biweekly-contest-107
  - contest-question
date: 2023-08-01
---

[Problem Link](https://leetcode.com/problems/decremental-string-concatenation/)

## Description

---
<p>You are given a <strong>0-indexed</strong> array <code>words</code> containing <code>n</code> strings.</p>

<p>Let&#39;s define a <strong>join</strong> operation <code>join(x, y)</code> between two strings <code>x</code> and <code>y</code> as concatenating them into <code>xy</code>. However, if the last character of <code>x</code> is equal to the first character of <code>y</code>, one of them is <strong>deleted</strong>.</p>

<p>For example <code>join(&quot;ab&quot;, &quot;ba&quot;) = &quot;aba&quot;</code> and <code>join(&quot;ab&quot;, &quot;cde&quot;) = &quot;abcde&quot;</code>.</p>

<p>You are to perform <code>n - 1</code> <strong>join</strong> operations. Let <code>str<sub>0</sub> = words[0]</code>. Starting from <code>i = 1</code> up to <code>i = n - 1</code>, for the <code>i<sup>th</sup></code> operation, you can do one of the following:</p>

<ul>
	<li>Make <code>str<sub>i</sub> = join(str<sub>i - 1</sub>, words[i])</code></li>
	<li>Make <code>str<sub>i</sub> = join(words[i], str<sub>i - 1</sub>)</code></li>
</ul>

<p>Your task is to <strong>minimize</strong> the length of <code>str<sub>n - 1</sub></code>.</p>

<p>Return <em>an integer denoting the minimum possible length of</em> <code>str<sub>n - 1</sub></code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;aa&quot;,&quot;ab&quot;,&quot;bc&quot;]
<strong>Output:</strong> 4
<strong>Explanation: </strong>In this example, we can perform join operations in the following order to minimize the length of str<sub>2</sub>: 
str<sub>0</sub> = &quot;aa&quot;
str<sub>1</sub> = join(str<sub>0</sub>, &quot;ab&quot;) = &quot;aab&quot;
str<sub>2</sub> = join(str<sub>1</sub>, &quot;bc&quot;) = &quot;aabc&quot; 
It can be shown that the minimum possible length of str<sub>2</sub> is 4.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;ab&quot;,&quot;b&quot;]
<strong>Output:</strong> 2
<strong>Explanation:</strong> In this example, str<sub>0</sub> = &quot;ab&quot;, there are two ways to get str<sub>1</sub>: 
join(str<sub>0</sub>, &quot;b&quot;) = &quot;ab&quot; or join(&quot;b&quot;, str<sub>0</sub>) = &quot;bab&quot;. 
The first string, &quot;ab&quot;, has the minimum length. Hence, the answer is 2.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;aaa&quot;,&quot;c&quot;,&quot;aba&quot;]
<strong>Output:</strong> 6
<strong>Explanation:</strong> In this example, we can perform join operations in the following order to minimize the length of str<sub>2</sub>: 
str<sub>0</sub> = &quot;aaa&quot;
str<sub>1</sub> = join(str<sub>0</sub>, &quot;c&quot;) = &quot;aaac&quot;
str<sub>2</sub> = join(&quot;aba&quot;, str<sub>1</sub>) = &quot;abaaac&quot;
It can be shown that the minimum possible length of str<sub>2</sub> is 6.
</pre>

<div class="notranslate" style="all: initial;">&nbsp;</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= words.length &lt;= 1000</code></li>
	<li><code>1 &lt;= words[i].length &lt;= 50</code></li>
	<li>Each character in <code>words[i]</code> is an English lowercase letter</li>
</ul>


## Solution

---
### Python3
``` py title='decremental-string-concatenation'
class Solution:
    def minimizeConcatenatedLength(self, words: List[str]) -> int:
        N = len(words)
        
        @cache
        def go(index, start, end):
            if index == N: return 0
            
            curr = words[index]
            length = len(words[index])
            res = length + min(go(index + 1, start, curr[-1]), go(index + 1, curr[0], end))
            
            if curr[0] == end:
                res = min(res, length - 1 + go(index + 1, start, curr[-1]))
            
            if curr[-1] == start:
                res = min(res, length - 1 + go(index + 1, curr[0], end))
            
            return res
            
        
        return len(words[0]) + go(1, words[0][0], words[0][-1])
```

