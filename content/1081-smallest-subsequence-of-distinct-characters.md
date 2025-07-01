---
title: 1081. Smallest Subsequence of Distinct Characters
draft: false
tags: 
  - leetcode-medium
  - string
  - stack
  - greedy
  - monotonic-stack
  - weekly-contest-140
  - contest-question
date: 2022-03-18
---

[Problem Link](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/)

## Description

---
<p>Given a string <code>s</code>, return <em>the </em><span data-keyword="lexicographically-smaller-string"><em>lexicographically smallest</em></span> <span data-keyword="subsequence-string"><em>subsequence</em></span><em> of</em> <code>s</code> <em>that contains all the distinct characters of</em> <code>s</code> <em>exactly once</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;bcabc&quot;
<strong>Output:</strong> &quot;abc&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;cbacdcbc&quot;
<strong>Output:</strong> &quot;acdb&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 1000</code></li>
	<li><code>s</code> consists of lowercase English letters.</li>
</ul>

<p>&nbsp;</p>
<strong>Note:</strong> This question is the same as 316: <a href="https://leetcode.com/problems/remove-duplicate-letters/" target="_blank">https://leetcode.com/problems/remove-duplicate-letters/</a>

## Solution

---
### Python3
``` py title='smallest-subsequence-of-distinct-characters'
class Solution:
    def smallestSubsequence(self, s: str) -> str:
        stack = []
        put = set()
        counter = Counter(s)
        
        for x in s:
            counter[x] -= 1
            
            if x in put: continue
                
            while stack and x < stack[-1] and counter[stack[-1]] > 0:
                put.remove(stack.pop())
            
            stack.append(x)
            put.add(x)
        
        return "".join(stack)
```

