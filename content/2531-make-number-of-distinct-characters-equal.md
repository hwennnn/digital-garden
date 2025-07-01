---
title: 2531. Make Number of Distinct Characters Equal
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - string
  - counting
  - weekly-contest-327
  - contest-question
date: 2023-01-08
---

[Problem Link](https://leetcode.com/problems/make-number-of-distinct-characters-equal/)

## Description

---
<p>You are given two <strong>0-indexed</strong> strings <code>word1</code> and <code>word2</code>.</p>

<p>A <strong>move</strong> consists of choosing two indices <code>i</code> and <code>j</code> such that <code>0 &lt;= i &lt; word1.length</code> and <code>0 &lt;= j &lt; word2.length</code> and swapping <code>word1[i]</code> with <code>word2[j]</code>.</p>

<p>Return <code>true</code> <em>if it is possible to get the number of distinct characters in</em> <code>word1</code> <em>and</em> <code>word2</code> <em>to be equal with <strong>exactly one</strong> move. </em>Return <code>false</code> <em>otherwise</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> word1 = &quot;ac&quot;, word2 = &quot;b&quot;
<strong>Output:</strong> false
<strong>Explanation:</strong> Any pair of swaps would yield two distinct characters in the first string, and one in the second string.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> word1 = &quot;abcc&quot;, word2 = &quot;aab&quot;
<strong>Output:</strong> true
<strong>Explanation:</strong> We swap index 2 of the first string with index 0 of the second string. The resulting strings are word1 = &quot;abac&quot; and word2 = &quot;cab&quot;, which both have 3 distinct characters.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> word1 = &quot;abcde&quot;, word2 = &quot;fghij&quot;
<strong>Output:</strong> true
<strong>Explanation:</strong> Both resulting strings will have 5 distinct characters, regardless of which indices we swap.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= word1.length, word2.length &lt;= 10<sup>5</sup></code></li>
	<li><code>word1</code> and <code>word2</code> consist of only lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='make-number-of-distinct-characters-equal'
class Solution:
    def isItPossible(self, word1: str, word2: str) -> bool:
        cnt1 = [0] * 26
        cnt2 = [0] * 26
        
        for x in word1:
            cnt1[ord(x) - ord('a')] += 1
        
        for x in word2:
            cnt2[ord(x) - ord('a')] += 1
        
        def check(cnt1, cnt2):
            return sum(1 for x in cnt1 if x > 0) == sum(1 for x in cnt2 if x > 0)
        
        for a in range(26):
            for b in range(26):
                if cnt1[a] > 0 and cnt2[b] > 0:
                    # if a in word1 swap with b in word2
                    cnt1[a] -= 1
                    cnt1[b] += 1

                    cnt2[a] += 1
                    cnt2[b] -= 1

                    if check(cnt1, cnt2):
                        return True
                    
                    cnt1[a] += 1
                    cnt1[b] -= 1

                    cnt2[a] -= 1
                    cnt2[b] += 1
        
        return False
```

