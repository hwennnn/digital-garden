---
title: 2788. Split Strings by Separator
draft: false
tags: 
  - leetcode-easy
  - array
  - string
  - weekly-contest-355
  - contest-question
date: 2023-07-23
---

[Problem Link](https://leetcode.com/problems/split-strings-by-separator/)

## Description

---
<p>Given an array of strings <code>words</code> and a character <code>separator</code>, <strong>split</strong> each string in <code>words</code> by <code>separator</code>.</p>

<p>Return <em>an array of strings containing the new strings formed after the splits, <strong>excluding empty strings</strong>.</em></p>

<p><strong>Notes</strong></p>

<ul>
	<li><code>separator</code> is used to determine where the split should occur, but it is not included as part of the resulting strings.</li>
	<li>A split may result in more than two strings.</li>
	<li>The resulting strings must maintain the same order as they were initially given.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;one.two.three&quot;,&quot;four.five&quot;,&quot;six&quot;], separator = &quot;.&quot;
<strong>Output:</strong> [&quot;one&quot;,&quot;two&quot;,&quot;three&quot;,&quot;four&quot;,&quot;five&quot;,&quot;six&quot;]
<strong>Explanation: </strong>In this example we split as follows:

&quot;one.two.three&quot; splits into &quot;one&quot;, &quot;two&quot;, &quot;three&quot;
&quot;four.five&quot; splits into &quot;four&quot;, &quot;five&quot;
&quot;six&quot; splits into &quot;six&quot; 

Hence, the resulting array is [&quot;one&quot;,&quot;two&quot;,&quot;three&quot;,&quot;four&quot;,&quot;five&quot;,&quot;six&quot;].</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;$easy{PROBLEM_DESCRIPTION}quot;,&quot;$problem{PROBLEM_DESCRIPTION}quot;], separator = &quot;{PROBLEM_DESCRIPTION}quot;
<strong>Output:</strong> [&quot;easy&quot;,&quot;problem&quot;]
<strong>Explanation:</strong> In this example we split as follows: 

&quot;$easy{PROBLEM_DESCRIPTION}quot; splits into &quot;easy&quot; (excluding empty strings)
&quot;$problem{PROBLEM_DESCRIPTION}quot; splits into &quot;problem&quot; (excluding empty strings)

Hence, the resulting array is [&quot;easy&quot;,&quot;problem&quot;].
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;|||&quot;], separator = &quot;|&quot;
<strong>Output:</strong> []
<strong>Explanation:</strong> In this example the resulting split of &quot;|||&quot; will contain only empty strings, so we return an empty array []. </pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= words.length &lt;= 100</code></li>
	<li><code>1 &lt;= words[i].length &lt;= 20</code></li>
	<li>characters in <code>words[i]</code> are either lowercase English letters or characters from the string <code>&quot;.,|$#@&quot;</code> (excluding the quotes)</li>
	<li><code>separator</code> is a character from the string <code>&quot;.,|$#@&quot;</code> (excluding the quotes)</li>
</ul>


## Solution

---
### Python3
``` py title='split-strings-by-separator'
class Solution:
    def splitWordsBySeparator(self, words: List[str], separator: str) -> List[str]:
        res = []
        
        for word in words:
            sep = word.split(separator)
            
            for x in sep:
                if len(x) > 0:
                    res.append(x)
        
        return res
```

