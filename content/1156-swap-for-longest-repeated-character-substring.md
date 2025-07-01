---
title: 1156. Swap For Longest Repeated Character Substring
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - string
  - sliding-window
  - weekly-contest-149
  - contest-question
date: 2021-05-15
---

[Problem Link](https://leetcode.com/problems/swap-for-longest-repeated-character-substring/)

## Description

---
<p>You are given a string <code>text</code>. You can swap two of the characters in the <code>text</code>.</p>

<p>Return <em>the length of the longest substring with repeated characters</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> text = &quot;ababa&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> We can swap the first &#39;b&#39; with the last &#39;a&#39;, or the last &#39;b&#39; with the first &#39;a&#39;. Then, the longest repeated character substring is &quot;aaa&quot; with length 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> text = &quot;aaabaaa&quot;
<strong>Output:</strong> 6
<strong>Explanation:</strong> Swap &#39;b&#39; with the last &#39;a&#39; (or the first &#39;a&#39;), and we get longest repeated character substring &quot;aaaaaa&quot; with length 6.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> text = &quot;aaaaa&quot;
<strong>Output:</strong> 5
<strong>Explanation:</strong> No need to swap, longest repeated character substring is &quot;aaaaa&quot; with length is 5.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= text.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>text</code> consist of lowercase English characters only.</li>
</ul>


## Solution

---
### Python3
``` py title='swap-for-longest-repeated-character-substring'
class Solution:
    def maxRepOpt1(self, text: str) -> int:
        A = [[c, len(list(x))] for c,x in itertools.groupby(text)]
        count = collections.Counter(text)
        
        res = max(min(count[c], x + 1) for c,x in A)
        
        for i in range(1, len(A) - 1):
            if A[i - 1][0] == A[i + 1][0] and A[i][1] == 1:
                res = max(res, min(A[i - 1][1] + A[i + 1][1] + 1, count[A[i - 1][0]]))
        
        return res
```

