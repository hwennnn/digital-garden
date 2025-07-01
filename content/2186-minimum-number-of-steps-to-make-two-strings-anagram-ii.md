---
title: 2186. Minimum Number of Steps to Make Two Strings Anagram II
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - string
  - counting
  - weekly-contest-282
  - contest-question
date: 2022-02-27
---

[Problem Link](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/)

## Description

---
<p>You are given two strings <code>s</code> and <code>t</code>. In one step, you can append <strong>any character</strong> to either <code>s</code> or <code>t</code>.</p>

<p>Return <em>the minimum number of steps to make </em><code>s</code><em> and </em><code>t</code><em> <strong>anagrams</strong> of each other.</em></p>

<p>An <strong>anagram</strong> of a string is a string that contains the same characters with a different (or the same) ordering.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;<strong><u>lee</u></strong>tco<u><strong>de</strong></u>&quot;, t = &quot;co<u><strong>a</strong></u>t<u><strong>s</strong></u>&quot;
<strong>Output:</strong> 7
<strong>Explanation:</strong> 
- In 2 steps, we can append the letters in &quot;as&quot; onto s = &quot;leetcode&quot;, forming s = &quot;leetcode<strong><u>as</u></strong>&quot;.
- In 5 steps, we can append the letters in &quot;leede&quot; onto t = &quot;coats&quot;, forming t = &quot;coats<u><strong>leede</strong></u>&quot;.
&quot;leetcodeas&quot; and &quot;coatsleede&quot; are now anagrams of each other.
We used a total of 2 + 5 = 7 steps.
It can be shown that there is no way to make them anagrams of each other with less than 7 steps.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;night&quot;, t = &quot;thing&quot;
<strong>Output:</strong> 0
<strong>Explanation:</strong> The given strings are already anagrams of each other. Thus, we do not need any further steps.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length, t.length &lt;= 2 * 10<sup>5</sup></code></li>
	<li><code>s</code> and <code>t</code> consist of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='minimum-number-of-steps-to-make-two-strings-anagram-ii'
class Solution:
    def minSteps(self, s: str, t: str) -> int:
        count1 = Counter(s)
        count2 = Counter(t)
        
        for x in s:
            if count2[x] > 0:
                count2[x] -= 1
        
        for x in t:
            if count1[x] > 0:
                count1[x] -= 1
        
        return sum(count1.values()) + sum(count2.values())
```

