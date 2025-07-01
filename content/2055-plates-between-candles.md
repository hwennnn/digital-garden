---
title: 2055. Plates Between Candles
draft: false
tags: 
  - leetcode-medium
  - array
  - string
  - binary-search
  - prefix-sum
  - biweekly-contest-64
  - contest-question
date: 2021-10-31
---

[Problem Link](https://leetcode.com/problems/plates-between-candles/)

## Description

---
<p>There is a long table with a line of plates and candles arranged on top of it. You are given a <strong>0-indexed</strong> string <code>s</code> consisting of characters <code>&#39;*&#39;</code> and <code>&#39;|&#39;</code> only, where a <code>&#39;*&#39;</code> represents a <strong>plate</strong> and a <code>&#39;|&#39;</code> represents a <strong>candle</strong>.</p>

<p>You are also given a <strong>0-indexed</strong> 2D integer array <code>queries</code> where <code>queries[i] = [left<sub>i</sub>, right<sub>i</sub>]</code> denotes the <strong>substring</strong> <code>s[left<sub>i</sub>...right<sub>i</sub>]</code> (<strong>inclusive</strong>). For each query, you need to find the <strong>number</strong> of plates <strong>between candles</strong> that are <strong>in the substring</strong>. A plate is considered <strong>between candles</strong> if there is at least one candle to its left <strong>and</strong> at least one candle to its right <strong>in the substring</strong>.</p>

<ul>
	<li>For example, <code>s = &quot;||**||**|*&quot;</code>, and a query <code>[3, 8]</code> denotes the substring <code>&quot;*||<strong><u>**</u></strong>|&quot;</code>. The number of plates between candles in this substring is <code>2</code>, as each of the two plates has at least one candle <strong>in the substring</strong> to its left <strong>and</strong> right.</li>
</ul>

<p>Return <em>an integer array</em> <code>answer</code> <em>where</em> <code>answer[i]</code> <em>is the answer to the</em> <code>i<sup>th</sup></code> <em>query</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="ex-1" src="https://assets.leetcode.com/uploads/2021/10/04/ex-1.png" style="width: 400px; height: 134px;" />
<pre>
<strong>Input:</strong> s = &quot;**|**|***|&quot;, queries = [[2,5],[5,9]]
<strong>Output:</strong> [2,3]
<strong>Explanation:</strong>
- queries[0] has two plates between candles.
- queries[1] has three plates between candles.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="ex-2" src="https://assets.leetcode.com/uploads/2021/10/04/ex-2.png" style="width: 600px; height: 193px;" />
<pre>
<strong>Input:</strong> s = &quot;***|**|*****|**||**|*&quot;, queries = [[1,17],[4,5],[14,17],[5,11],[15,16]]
<strong>Output:</strong> [9,0,0,0,0]
<strong>Explanation:</strong>
- queries[0] has nine plates between candles.
- The other queries have zero plates between candles.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> consists of <code>&#39;*&#39;</code> and <code>&#39;|&#39;</code> characters.</li>
	<li><code>1 &lt;= queries.length &lt;= 10<sup>5</sup></code></li>
	<li><code>queries[i].length == 2</code></li>
	<li><code>0 &lt;= left<sub>i</sub> &lt;= right<sub>i</sub> &lt; s.length</code></li>
</ul>


## Solution

---
### Python3
``` py title='plates-between-candles'
class Solution:
    def platesBetweenCandles(self, s: str, queries: List[List[int]]) -> List[int]:
        A = [i for i, x in enumerate(s) if x == '|']
        res = []
        
        for start, end in queries:
            i = bisect.bisect_left(A, start)
            j = bisect.bisect(A, end) - 1
            res.append(A[j] - A[i] - (j - i) if i < j else 0)
        
        return res
```

