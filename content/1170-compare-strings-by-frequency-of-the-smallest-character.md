---
title: 1170. Compare Strings by Frequency of the Smallest Character
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - string
  - binary-search
  - sorting
  - weekly-contest-151
  - contest-question
date: 2021-05-15
---

[Problem Link](https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/)

## Description

---
<p>Let the function <code>f(s)</code> be the <strong>frequency of the lexicographically smallest character</strong> in a non-empty string <code>s</code>. For example, if <code>s = &quot;dcce&quot;</code> then <code>f(s) = 2</code> because the lexicographically smallest character is <code>&#39;c&#39;</code>, which has a frequency of 2.</p>

<p>You are given an array of strings <code>words</code> and another array of query strings <code>queries</code>. For each query <code>queries[i]</code>, count the <strong>number of words</strong> in <code>words</code> such that <code>f(queries[i])</code> &lt; <code>f(W)</code> for each <code>W</code> in <code>words</code>.</p>

<p>Return <em>an integer array </em><code>answer</code><em>, where each </em><code>answer[i]</code><em> is the answer to the </em><code>i<sup>th</sup></code><em> query</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> queries = [&quot;cbd&quot;], words = [&quot;zaaaz&quot;]
<strong>Output:</strong> [1]
<strong>Explanation:</strong> On the first query we have f(&quot;cbd&quot;) = 1, f(&quot;zaaaz&quot;) = 3 so f(&quot;cbd&quot;) &lt; f(&quot;zaaaz&quot;).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> queries = [&quot;bbb&quot;,&quot;cc&quot;], words = [&quot;a&quot;,&quot;aa&quot;,&quot;aaa&quot;,&quot;aaaa&quot;]
<strong>Output:</strong> [1,2]
<strong>Explanation:</strong> On the first query only f(&quot;bbb&quot;) &lt; f(&quot;aaaa&quot;). On the second query both f(&quot;aaa&quot;) and f(&quot;aaaa&quot;) are both &gt; f(&quot;cc&quot;).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= queries.length &lt;= 2000</code></li>
	<li><code>1 &lt;= words.length &lt;= 2000</code></li>
	<li><code>1 &lt;= queries[i].length, words[i].length &lt;= 10</code></li>
	<li><code>queries[i][j]</code>, <code>words[i][j]</code> consist of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='compare-strings-by-frequency-of-the-smallest-character'
class Solution:
    def numSmallerByFrequency(self, queries: List[str], words: List[str]) -> List[int]:
        res, res1, res2 = [], [], []
        
        def f(word):
            count = [0] * 26
            for w in word:
                count[ord(w) - ord('a')] += 1

            for c in count:
                if c != 0: return c
            
            return -1
            
        for word in queries:
            res1.append(f(word))
        
        for word in words:
            res2.append(f(word))
        
        for x in res1:
            count = 0
            for y in res2:
                if y > x:
                    count += 1
            
            res.append(count)
        
        return res
        
        
            
```

