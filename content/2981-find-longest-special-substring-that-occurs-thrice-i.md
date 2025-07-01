---
title: 2981. Find Longest Special Substring That Occurs Thrice I
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - string
  - binary-search
  - sliding-window
  - counting
  - weekly-contest-378
  - contest-question
date: 2024-12-10
---

[Problem Link](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/)

## Description

---
<p>You are given a string <code>s</code> that consists of lowercase English letters.</p>

<p>A string is called <strong>special</strong> if it is made up of only a single character. For example, the string <code>&quot;abc&quot;</code> is not special, whereas the strings <code>&quot;ddd&quot;</code>, <code>&quot;zz&quot;</code>, and <code>&quot;f&quot;</code> are special.</p>

<p>Return <em>the length of the <strong>longest special substring</strong> of </em><code>s</code> <em>which occurs <strong>at least thrice</strong></em>, <em>or </em><code>-1</code><em> if no special substring occurs at least thrice</em>.</p>

<p>A <strong>substring</strong> is a contiguous <strong>non-empty</strong> sequence of characters within a string.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aaaa&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> The longest special substring which occurs thrice is &quot;aa&quot;: substrings &quot;<u><strong>aa</strong></u>aa&quot;, &quot;a<u><strong>aa</strong></u>a&quot;, and &quot;aa<u><strong>aa</strong></u>&quot;.
It can be shown that the maximum length achievable is 2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abcdef&quot;
<strong>Output:</strong> -1
<strong>Explanation:</strong> There exists no special substring which occurs at least thrice. Hence return -1.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abcaba&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> The longest special substring which occurs thrice is &quot;a&quot;: substrings &quot;<u><strong>a</strong></u>bcaba&quot;, &quot;abc<u><strong>a</strong></u>ba&quot;, and &quot;abcab<u><strong>a</strong></u>&quot;.
It can be shown that the maximum length achievable is 1.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= s.length &lt;= 50</code></li>
	<li><code>s</code> consists of only lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='find-longest-special-substring-that-occurs-thrice-i'
class Solution:
    def maximumLength(self, s: str) -> int:
        N = len(s)

        def good(k):
            count = 0
            curr = []
            res = [0] * 26

            for x in s:
                if x == curr:
                    count += 1
                else:
                    curr = x
                    count = 1
                
                if count >= k:
                    c = ord(x) - ord('a')
                    res[c] += 1

                    if res[c] >= 3:
                        return True

            
            return False

        left, right = 0, N
        while left < right:
            mid = (left + right + 1) // 2

            if good(mid):
                left = mid
            else:
                right = mid - 1
        
        if left == 0: return -1

        return left
```

