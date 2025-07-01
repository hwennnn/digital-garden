---
title: 2062. Count Vowel Substrings of a String
draft: false
tags: 
  - leetcode-easy
  - hash-table
  - string
  - weekly-contest-266
  - contest-question
date: 2021-11-07
---

[Problem Link](https://leetcode.com/problems/count-vowel-substrings-of-a-string/)

## Description

---
<p>A <strong>substring</strong> is a contiguous (non-empty) sequence of characters within a string.</p>

<p>A <strong>vowel substring</strong> is a substring that <strong>only</strong> consists of vowels (<code>&#39;a&#39;</code>, <code>&#39;e&#39;</code>, <code>&#39;i&#39;</code>, <code>&#39;o&#39;</code>, and <code>&#39;u&#39;</code>) and has <strong>all five</strong> vowels present in it.</p>

<p>Given a string <code>word</code>, return <em>the number of <strong>vowel substrings</strong> in</em> <code>word</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> word = &quot;aeiouu&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> The vowel substrings of word are as follows (underlined):
- &quot;<strong><u>aeiou</u></strong>u&quot;
- &quot;<strong><u>aeiouu</u></strong>&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> word = &quot;unicornarihan&quot;
<strong>Output:</strong> 0
<strong>Explanation:</strong> Not all 5 vowels are present, so there are no vowel substrings.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> word = &quot;cuaieuouac&quot;
<strong>Output:</strong> 7
<strong>Explanation:</strong> The vowel substrings of word are as follows (underlined):
- &quot;c<strong><u>uaieuo</u></strong>uac&quot;
- &quot;c<strong><u>uaieuou</u></strong>ac&quot;
- &quot;c<strong><u>uaieuoua</u></strong>c&quot;
- &quot;cu<strong><u>aieuo</u></strong>uac&quot;
- &quot;cu<strong><u>aieuou</u></strong>ac&quot;
- &quot;cu<strong><u>aieuoua</u></strong>c&quot;
- &quot;cua<strong><u>ieuoua</u></strong>c&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= word.length &lt;= 100</code></li>
	<li><code>word</code> consists of lowercase English letters only.</li>
</ul>


## Solution

---
### Python3
``` py title='count-vowel-substrings-of-a-string'
class Solution:
    def countVowelSubstrings(self, word: str) -> int:
        res = 0
        
        n = len(word)
        
        for i in range(n):
            A = [0, 0, 0, 0, 0]
            for j in range(i, n):
                if word[j] == 'a':
                    A[0] += 1
                elif word[j] == 'e':
                    A[1] += 1
                elif word[j] == 'i':
                    A[2] += 1
                elif word[j] == 'o':
                    A[3] += 1
                elif word[j] == 'u':
                    A[4] += 1
                else:
                    break
                
                if all(x > 0 for x in A):
                    res += 1

        return res
```

