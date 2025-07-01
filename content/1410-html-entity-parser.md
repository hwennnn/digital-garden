---
title: 1410. HTML Entity Parser
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - string
  - weekly-contest-184
  - contest-question
date: 2020-10-14
---

[Problem Link](https://leetcode.com/problems/html-entity-parser/)

## Description

---
<p><strong>HTML entity parser</strong> is the parser that takes HTML code as input and replace all the entities of the special characters by the characters itself.</p>

<p>The special characters and their entities for HTML are:</p>

<ul>
	<li><strong>Quotation Mark:</strong> the entity is <code>&amp;quot;</code> and symbol character is <code>&quot;</code>.</li>
	<li><strong>Single Quote Mark:</strong> the entity is <code>&amp;apos;</code> and symbol character is <code>&#39;</code>.</li>
	<li><strong>Ampersand:</strong> the entity is <code>&amp;amp;</code> and symbol character is <code>&amp;</code>.</li>
	<li><strong>Greater Than Sign:</strong> the entity is <code>&amp;gt;</code> and symbol character is <code>&gt;</code>.</li>
	<li><strong>Less Than Sign:</strong> the entity is <code>&amp;lt;</code> and symbol character is <code>&lt;</code>.</li>
	<li><strong>Slash:</strong> the entity is <code>&amp;frasl;</code> and symbol character is <code>/</code>.</li>
</ul>

<p>Given the input <code>text</code> string to the HTML parser, you have to implement the entity parser.</p>

<p>Return <em>the text after replacing the entities by the special characters</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> text = &quot;&amp;amp; is an HTML entity but &amp;ambassador; is not.&quot;
<strong>Output:</strong> &quot;&amp; is an HTML entity but &amp;ambassador; is not.&quot;
<strong>Explanation:</strong> The parser will replace the &amp;amp; entity by &amp;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> text = &quot;and I quote: &amp;quot;...&amp;quot;&quot;
<strong>Output:</strong> &quot;and I quote: \&quot;...\&quot;&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= text.length &lt;= 10<sup>5</sup></code></li>
	<li>The string may contain any possible characters out of all the 256 ASCII characters.</li>
</ul>


## Solution

---
### Python3
``` py title='html-entity-parser'
class Solution:
    def entityParser(self, text: str) -> str:
        d = {"&quot;" : '"', 
             "&apos;": "'",
             "&amp;": "&",
             "&gt;":">",
             "&lt;" : "<",
             "&frasl;" : "/"}

        special = ""
        res = ""
        for c in text:
            if c != "&":
                if special == "":
                    res += c
                else:
                    special += c
                    
                    if c == ";":
                        if special in d:
                            res += d[special]
                            special = ""
                        else:
                            res += special
                            special = ""
            else:
                res += special
                special = "&"
            
        return res
```

