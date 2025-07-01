---
title: 3144. Minimum Substring Partition of Equal Character Frequency
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - string
  - dynamic-programming
  - counting
  - biweekly-contest-130
  - contest-question
date: 2024-05-11
---

[Problem Link](https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/)

## Description

---
<p>Given a string <code>s</code>, you need to partition it into one or more <strong>balanced</strong> <span data-keyword="substring">substrings</span>. For example, if <code>s == &quot;ababcc&quot;</code> then <code>(&quot;abab&quot;, &quot;c&quot;, &quot;c&quot;)</code>, <code>(&quot;ab&quot;, &quot;abc&quot;, &quot;c&quot;)</code>, and <code>(&quot;ababcc&quot;)</code> are all valid partitions, but <code>(&quot;a&quot;, <strong>&quot;bab&quot;</strong>, &quot;cc&quot;)</code>, <code>(<strong>&quot;aba&quot;</strong>, &quot;bc&quot;, &quot;c&quot;)</code>, and <code>(&quot;ab&quot;, <strong>&quot;abcc&quot;</strong>)</code> are not. The unbalanced substrings are bolded.</p>

<p>Return the <strong>minimum</strong> number of substrings that you can partition <code>s</code> into.</p>

<p><strong>Note:</strong> A <strong>balanced</strong> string is a string where each character in the string occurs the same number of times.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;fabccddg&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p>We can partition the string <code>s</code> into 3 substrings in one of the following ways: <code>(&quot;fab, &quot;ccdd&quot;, &quot;g&quot;)</code>, or <code>(&quot;fabc&quot;, &quot;cd&quot;, &quot;dg&quot;)</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;abababaccddb&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<p>We can partition the string <code>s</code> into 2 substrings like so: <code>(&quot;abab&quot;, &quot;abaccddb&quot;)</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 1000</code></li>
	<li><code>s</code> consists only of English lowercase letters.</li>
</ul>


## Solution

---
### Python3
``` py title='minimum-substring-partition-of-equal-character-frequency'
class Solution:
    def minimumSubstringsInPartition(self, s: str) -> int:
        N = len(s)
        
        @cache
        def go(index):
            if index == N: return 0
            
            res = inf
            counter = [0] * 26
            
            for i in range(index, N):
                c = ord(s[i]) - ord('a')
                counter[c] += 1
                ok = True
                
                for k in range(26):
                    if counter[k] == 0: continue
                    
                    if counter[k] != counter[c]:
                        ok = False
                        break
                
                if ok:
                    res = min(res, 1 + go(i + 1))
            
            return res
        
        return go(0)
```

