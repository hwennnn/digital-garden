---
title: 854. K-Similar Strings
draft: false
tags: 
  - leetcode-hard
  - string
  - breadth-first-search
  - weekly-contest-89
  - contest-question
date: 2022-01-05
---

[Problem Link](https://leetcode.com/problems/k-similar-strings/)

## Description

---
<p>Strings <code>s1</code> and <code>s2</code> are <code>k</code><strong>-similar</strong> (for some non-negative integer <code>k</code>) if we can swap the positions of two letters in <code>s1</code> exactly <code>k</code> times so that the resulting string equals <code>s2</code>.</p>

<p>Given two anagrams <code>s1</code> and <code>s2</code>, return the smallest <code>k</code> for which <code>s1</code> and <code>s2</code> are <code>k</code><strong>-similar</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;ab&quot;, s2 = &quot;ba&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> The two string are 1-similar because we can use one swap to change s1 to s2: &quot;ab&quot; --&gt; &quot;ba&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;abc&quot;, s2 = &quot;bca&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> The two strings are 2-similar because we can use two swaps to change s1 to s2: &quot;abc&quot; --&gt; &quot;bac&quot; --&gt; &quot;bca&quot;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s1.length &lt;= 20</code></li>
	<li><code>s2.length == s1.length</code></li>
	<li><code>s1</code> and <code>s2</code> contain only lowercase letters from the set <code>{&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;, &#39;f&#39;}</code>.</li>
	<li><code>s2</code> is an anagram of <code>s1</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='k-similar-strings'
class Solution:
    def kSimilarity(self, s1: str, s2: str) -> int:
        N = len(s1)
        queue = deque([s1])
        level = 0
        visited = set([s1])

        while queue:
            n = len(queue)
            
            for _ in range(n):
                s = queue.popleft()
                
                if s == s2: return level
                
                s = list(s)
                
                i = 0
                while i < N and s[i] == s2[i]:
                    i += 1

                for j in range(i + 1, N):
                    if s[j] == s2[i]:
                        s[i], s[j] = s[j], s[i]
                        word = "".join(s)
                        if word not in visited:
                            visited.add(word)
                            queue.append(word)
                        s[i], s[j] = s[j], s[i]
                
            level += 1
        
        return -1
```

