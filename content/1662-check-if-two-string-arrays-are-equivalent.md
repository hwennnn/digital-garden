---
title: 1662. Check If Two String Arrays are Equivalent
draft: false
tags: 
  - leetcode-easy
  - array
  - string
  - weekly-contest-216
  - contest-question
date: 2021-01-08
---

[Problem Link](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/)

## Description

---
<p>Given two string arrays <code>word1</code> and <code>word2</code>, return<em> </em><code>true</code><em> if the two arrays <strong>represent</strong> the same string, and </em><code>false</code><em> otherwise.</em></p>

<p>A string is <strong>represented</strong> by an array if the array elements concatenated <strong>in order</strong> forms the string.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> word1 = [&quot;ab&quot;, &quot;c&quot;], word2 = [&quot;a&quot;, &quot;bc&quot;]
<strong>Output:</strong> true
<strong>Explanation:</strong>
word1 represents string &quot;ab&quot; + &quot;c&quot; -&gt; &quot;abc&quot;
word2 represents string &quot;a&quot; + &quot;bc&quot; -&gt; &quot;abc&quot;
The strings are the same, so return true.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> word1 = [&quot;a&quot;, &quot;cb&quot;], word2 = [&quot;ab&quot;, &quot;c&quot;]
<strong>Output:</strong> false
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> word1  = [&quot;abc&quot;, &quot;d&quot;, &quot;defg&quot;], word2 = [&quot;abcddefg&quot;]
<strong>Output:</strong> true
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= word1.length, word2.length &lt;= 10<sup>3</sup></code></li>
	<li><code>1 &lt;= word1[i].length, word2[i].length &lt;= 10<sup>3</sup></code></li>
	<li><code>1 &lt;= sum(word1[i].length), sum(word2[i].length) &lt;= 10<sup>3</sup></code></li>
	<li><code>word1[i]</code> and <code>word2[i]</code> consist of lowercase letters.</li>
</ul>


## Solution

---
### Python3
``` py title='check-if-two-string-arrays-are-equivalent'
class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        M, N = len(word1), len(word2)
        i = j = 0
        p1 = p2 = 0

        while i < M and j < N:
            while p1 < len(word1[i]) and p2 < len(word2[j]):
                if word1[i][p1] != word2[j][p2]:
                    return False
                
                p1 += 1
                p2 += 1
            
            if p1 == len(word1[i]):
                i += 1
                p1 = 0
            
            if p2 == len(word2[j]):
                j += 1
                p2 = 0

        return i == M and j == N
```
### C++
``` cpp title='check-if-two-string-arrays-are-equivalent'
class Solution {
public:
    bool arrayStringsAreEqual(vector<string>& word1, vector<string>& word2) {
        string s1 = "", s2 = "";
        for (auto w : word1) s1 += w;
        for (auto w: word2) s2 += w;
        
        return s1 == s2;
    }
};
```

