---
title: 1839. Longest Substring Of All Vowels in Order
draft: false
tags: 
  - leetcode-medium
  - string
  - sliding-window
  - weekly-contest-238
  - contest-question
date: 2021-04-25
---

[Problem Link](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/)

## Description

---
<p>A string is considered <strong>beautiful</strong> if it satisfies the following conditions:</p>

<ul>
	<li>Each of the 5 English vowels (<code>&#39;a&#39;</code>, <code>&#39;e&#39;</code>, <code>&#39;i&#39;</code>, <code>&#39;o&#39;</code>, <code>&#39;u&#39;</code>) must appear <strong>at least once</strong> in it.</li>
	<li>The letters must be sorted in <strong>alphabetical order</strong> (i.e. all <code>&#39;a&#39;</code>s before <code>&#39;e&#39;</code>s, all <code>&#39;e&#39;</code>s before <code>&#39;i&#39;</code>s, etc.).</li>
</ul>

<p>For example, strings <code>&quot;aeiou&quot;</code> and <code>&quot;aaaaaaeiiiioou&quot;</code> are considered <strong>beautiful</strong>, but <code>&quot;uaeio&quot;</code>, <code>&quot;aeoiu&quot;</code>, and <code>&quot;aaaeeeooo&quot;</code> are <strong>not beautiful</strong>.</p>

<p>Given a string <code>word</code> consisting of English vowels, return <em>the <strong>length of the longest beautiful substring</strong> of </em><code>word</code><em>. If no such substring exists, return </em><code>0</code>.</p>

<p>A <strong>substring</strong> is a contiguous sequence of characters in a string.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> word = &quot;aeiaaio<u>aaaaeiiiiouuu</u>ooaauuaeiu&quot;
<strong>Output:</strong> 13
<b>Explanation:</b> The longest beautiful substring in word is &quot;aaaaeiiiiouuu&quot; of length 13.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> word = &quot;aeeeiiiioooauuu<u>aeiou</u>&quot;
<strong>Output:</strong> 5
<b>Explanation:</b> The longest beautiful substring in word is &quot;aeiou&quot; of length 5.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> word = &quot;a&quot;
<strong>Output:</strong> 0
<b>Explanation:</b> There is no beautiful substring, so return 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= word.length &lt;= 5 * 10<sup>5</sup></code></li>
	<li><code>word</code> consists of characters <code>&#39;a&#39;</code>, <code>&#39;e&#39;</code>, <code>&#39;i&#39;</code>, <code>&#39;o&#39;</code>, and <code>&#39;u&#39;</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='longest-substring-of-all-vowels-in-order'
class Solution:
    def longestBeautifulSubstring(self, word: str) -> int:
        if "a" not in word: return 0
        v = ["a", "e", "i", "o", "u"]

        vi = 0
        n = len(word)
        curr = res = 0
        i = j = word.index("a")
        while j < n and word[j] == "a":
            j += 1
        vi += 1

        while i < n and j < n:
            if word[j] != v[vi]:
                vi = 0
                i = j
                
                while j < n and word[j] != v[vi]:
                    j += 1
                i = j

            if j >= n: return res
            
            while j < n and word[j] == v[vi]:
                j += 1
            
            vi += 1
            if vi == 5: 
                res = max(res, j - i)
                vi = 0
                i = j
            
        return res
```

