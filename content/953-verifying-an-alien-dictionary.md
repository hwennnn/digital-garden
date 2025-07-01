---
title: 953. Verifying an Alien Dictionary
draft: false
tags: 
  - leetcode-easy
  - array
  - hash-table
  - string
  - weekly-contest-114
  - contest-question
date: 2023-02-02
---

[Problem Link](https://leetcode.com/problems/verifying-an-alien-dictionary/)

## Description

---
<p>In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different <code>order</code>. The <code>order</code> of the alphabet is some permutation of lowercase letters.</p>

<p>Given a sequence of <code>words</code> written in the alien language, and the <code>order</code> of the alphabet, return <code>true</code> if and only if the given <code>words</code> are sorted lexicographically in this alien language.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;hello&quot;,&quot;leetcode&quot;], order = &quot;hlabcdefgijkmnopqrstuvwxyz&quot;
<strong>Output:</strong> true
<strong>Explanation: </strong>As &#39;h&#39; comes before &#39;l&#39; in this language, then the sequence is sorted.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;word&quot;,&quot;world&quot;,&quot;row&quot;], order = &quot;worldabcefghijkmnpqstuvxyz&quot;
<strong>Output:</strong> false
<strong>Explanation: </strong>As &#39;d&#39; comes after &#39;l&#39; in this language, then words[0] &gt; words[1], hence the sequence is unsorted.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;apple&quot;,&quot;app&quot;], order = &quot;abcdefghijklmnopqrstuvwxyz&quot;
<strong>Output:</strong> false
<strong>Explanation: </strong>The first three characters &quot;app&quot; match, and the second string is shorter (in size.) According to lexicographical rules &quot;apple&quot; &gt; &quot;app&quot;, because &#39;l&#39; &gt; &#39;&empty;&#39;, where &#39;&empty;&#39; is defined as the blank character which is less than any other character (<a href="https://en.wikipedia.org/wiki/Lexicographical_order" target="_blank">More info</a>).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= words.length &lt;= 100</code></li>
	<li><code>1 &lt;= words[i].length &lt;= 20</code></li>
	<li><code>order.length == 26</code></li>
	<li>All characters in <code>words[i]</code> and <code>order</code> are English lowercase letters.</li>
</ul>


## Solution

---
### Python3
``` py title='verifying-an-alien-dictionary'
class Solution:
    def isAlienSorted(self, words: List[str], order: str) -> bool:
        O = {x: i for i, x in enumerate(order)}
        
        words = [[O[x] for x in word] for word in words]
        
        return all(x1 <= x2 for x1, x2 in zip(words, words[1:]))
```

