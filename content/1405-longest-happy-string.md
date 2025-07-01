---
title: 1405. Longest Happy String
draft: false
tags: 
  - leetcode-medium
  - string
  - greedy
  - heap-priority-queue
  - weekly-contest-183
  - contest-question
date: 2025-01-05
---

[Problem Link](https://leetcode.com/problems/longest-happy-string/)

## Description

---
<p>A string <code>s</code> is called <strong>happy</strong> if it satisfies the following conditions:</p>

<ul>
	<li><code>s</code> only contains the letters <code>&#39;a&#39;</code>, <code>&#39;b&#39;</code>, and <code>&#39;c&#39;</code>.</li>
	<li><code>s</code> does not contain any of <code>&quot;aaa&quot;</code>, <code>&quot;bbb&quot;</code>, or <code>&quot;ccc&quot;</code> as a substring.</li>
	<li><code>s</code> contains <strong>at most</strong> <code>a</code> occurrences of the letter <code>&#39;a&#39;</code>.</li>
	<li><code>s</code> contains <strong>at most</strong> <code>b</code> occurrences of the letter <code>&#39;b&#39;</code>.</li>
	<li><code>s</code> contains <strong>at most</strong> <code>c</code> occurrences of the letter <code>&#39;c&#39;</code>.</li>
</ul>

<p>Given three integers <code>a</code>, <code>b</code>, and <code>c</code>, return <em>the <strong>longest possible happy </strong>string</em>. If there are multiple longest happy strings, return <em>any of them</em>. If there is no such string, return <em>the empty string </em><code>&quot;&quot;</code>.</p>

<p>A <strong>substring</strong> is a contiguous sequence of characters within a string.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> a = 1, b = 1, c = 7
<strong>Output:</strong> &quot;ccaccbcc&quot;
<strong>Explanation:</strong> &quot;ccbccacc&quot; would also be a correct answer.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> a = 7, b = 1, c = 0
<strong>Output:</strong> &quot;aabaa&quot;
<strong>Explanation:</strong> It is the only correct answer in this case.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= a, b, c &lt;= 100</code></li>
	<li><code>a + b + c &gt; 0</code></li>
</ul>


## Solution

---
### Python3
``` py title='longest-happy-string'
class Solution:
    def longestDiverseString(self, a: int, b: int, c: int) -> str:
        res = []
        pq = []
        if a > 0:
            heappush(pq, (-a, "a"))
        if b > 0:
            heappush(pq, (-b, "b"))
        if c > 0:
            heappush(pq, (-c, "c"))

        while pq:
            count, char = heappop(pq)
            count = -count

            if len(res) >= 2 and res[-2] == res[-1] == char:
                if not pq: return "".join(res)

                count2, char2 = heappop(pq)
                count2 = -count2

                res.append(char2)
                if count2 - 1 > 0:
                    heappush(pq, (-(count2 - 1), char2))
                
                heappush(pq, (-count, char))
                continue
            else:
                res.append(char)
                if count - 1 > 0:
                    heappush(pq, (-(count - 1), char))

        return "".join(res)
```

