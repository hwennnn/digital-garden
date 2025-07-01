---
title: 2565. Subsequence With the Minimum Score
draft: false
tags: 
  - leetcode-hard
  - two-pointers
  - string
  - binary-search
  - weekly-contest-332
  - contest-question
date: 2023-02-13
---

[Problem Link](https://leetcode.com/problems/subsequence-with-the-minimum-score/)

## Description

---
<p>You are given two strings <code>s</code> and <code>t</code>.</p>

<p>You are allowed to remove any number of characters from the string <code>t</code>.</p>

<p>The score of the string is <code>0</code> if no characters are removed from the string <code>t</code>, otherwise:</p>

<ul>
	<li>Let <code>left</code> be the minimum index among all removed characters.</li>
	<li>Let <code>right</code> be the maximum index among all removed characters.</li>
</ul>

<p>Then the score of the string is <code>right - left + 1</code>.</p>

<p>Return <em>the minimum possible score to make </em><code>t</code><em>&nbsp;a subsequence of </em><code>s</code><em>.</em></p>

<p>A <strong>subsequence</strong> of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., <code>&quot;ace&quot;</code> is a subsequence of <code>&quot;<u>a</u>b<u>c</u>d<u>e</u>&quot;</code> while <code>&quot;aec&quot;</code> is not).</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abacaba&quot;, t = &quot;bzaa&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> In this example, we remove the character &quot;z&quot; at index 1 (0-indexed).
The string t becomes &quot;baa&quot; which is a subsequence of the string &quot;abacaba&quot; and the score is 1 - 1 + 1 = 1.
It can be proven that 1 is the minimum score that we can achieve.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;cde&quot;, t = &quot;xyz&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> In this example, we remove characters &quot;x&quot;, &quot;y&quot; and &quot;z&quot; at indices 0, 1, and 2 (0-indexed).
The string t becomes &quot;&quot; which is a subsequence of the string &quot;cde&quot; and the score is 2 - 0 + 1 = 3.
It can be proven that 3 is the minimum score that we can achieve.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length, t.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> and <code>t</code> consist of only lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='subsequence-with-the-minimum-score'
class Solution:
    def minimumScore(self, s: str, t: str) -> int:
        N, M = len(s), len(t)
        j = 0
        leftMost = []

        for i, x in enumerate(s):
            if x == t[j]:
                j += 1
            
            if j == M: return 0

            leftMost.append(j)
        
        res = M
        right = M - 1

        for i in range(N - 1, -1, -1):
            if leftMost[i] <= right:
                res = min(res, right - leftMost[i] + 1)
            
            if s[i] == t[right]:
                right -= 1
            
            res = min(res, right + 1)

        return res
        

```

