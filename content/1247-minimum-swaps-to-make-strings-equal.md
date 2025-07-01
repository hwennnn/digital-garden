---
title: 1247. Minimum Swaps to Make Strings Equal
draft: false
tags: 
  - leetcode-medium
  - math
  - string
  - greedy
  - weekly-contest-161
  - contest-question
date: 2021-01-02
---

[Problem Link](https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/)

## Description

---
<p>You are given two strings <code>s1</code> and <code>s2</code> of equal length consisting of letters <code>&quot;x&quot;</code> and <code>&quot;y&quot;</code> <strong>only</strong>. Your task is to make these two strings equal to each other. You can swap any two characters that belong to <strong>different</strong> strings, which means: swap <code>s1[i]</code> and <code>s2[j]</code>.</p>

<p>Return the minimum number of swaps required to make <code>s1</code> and <code>s2</code> equal, or return <code>-1</code> if it is impossible to do so.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;xx&quot;, s2 = &quot;yy&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> Swap s1[0] and s2[1], s1 = &quot;yx&quot;, s2 = &quot;yx&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;xy&quot;, s2 = &quot;yx&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> Swap s1[0] and s2[0], s1 = &quot;yy&quot;, s2 = &quot;xx&quot;.
Swap s1[0] and s2[1], s1 = &quot;xy&quot;, s2 = &quot;xy&quot;.
Note that you cannot swap s1[0] and s1[1] to make s1 equal to &quot;yx&quot;, cause we can only swap chars in different strings.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;xx&quot;, s2 = &quot;xy&quot;
<strong>Output:</strong> -1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s1.length, s2.length &lt;= 1000</code></li>
	<li><code>s1.length == s2.length</code></li>
	<li><code>s1, s2</code> only contain <code>&#39;x&#39;</code> or <code>&#39;y&#39;</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='minimum-swaps-to-make-strings-equal'
class Solution:
    def minimumSwap(self, s1: str, s2: str) -> int:
        counter1, counter2 = Counter(s1), Counter(s2)
        
        if (counter1["x"] + counter2["x"]) % 2 and (counter1["y"] + counter2["y"]) % 2: return -1
        
        mp1, mp2 = Counter(), Counter()
        
        res = 0
        
        for c1,c2 in zip(s1,s2):
            if c1 != c2:
                if mp1[c1] > 0 and mp2[c2] > 0:
                    mp1[c1] -= 1
                    mp2[c2] -= 1
                else:
                    mp1[c1] += 1
                    mp2[c2] += 1
                    res += 1
        
        return res
```

