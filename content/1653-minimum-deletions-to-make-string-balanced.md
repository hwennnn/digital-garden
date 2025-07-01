---
title: 1653. Minimum Deletions to Make String Balanced
draft: false
tags: 
  - leetcode-medium
  - string
  - dynamic-programming
  - stack
  - biweekly-contest-39
  - contest-question
date: 2024-07-30
---

[Problem Link](https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/)

## Description

---
<p>You are given a string <code>s</code> consisting only of characters <code>&#39;a&#39;</code> and <code>&#39;b&#39;</code>​​​​.</p>

<p>You can delete any number of characters in <code>s</code> to make <code>s</code> <strong>balanced</strong>. <code>s</code> is <strong>balanced</strong> if there is no pair of indices <code>(i,j)</code> such that <code>i &lt; j</code> and <code>s[i] = &#39;b&#39;</code> and <code>s[j]= &#39;a&#39;</code>.</p>

<p>Return <em>the <strong>minimum</strong> number of deletions needed to make </em><code>s</code><em> <strong>balanced</strong></em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aababbab&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> You can either:
Delete the characters at 0-indexed positions 2 and 6 (&quot;aa<u>b</u>abb<u>a</u>b&quot; -&gt; &quot;aaabbb&quot;), or
Delete the characters at 0-indexed positions 3 and 6 (&quot;aab<u>a</u>bb<u>a</u>b&quot; -&gt; &quot;aabbbb&quot;).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;bbaaaaabb&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> The only solution is to delete the first two characters.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s[i]</code> is&nbsp;<code>&#39;a&#39;</code> or <code>&#39;b&#39;</code>​​.</li>
</ul>


## Solution

---
### C++
``` cpp title='minimum-deletions-to-make-string-balanced'
class Solution {
public:
    int minimumDeletions(string s) {
        int N = s.size(), res = N;
        vector<int> prefixB(N + 1, 0), suffixA(N + 1, 0);

        for (int i = 0; i < N; i++) {
            prefixB[i + 1] = prefixB[i] + (s[i] == 'b');
        }

        for (int i = N - 1; i >= 0; i--) {
            suffixA[i] = suffixA[i + 1] + (s[i] == 'a');
        }

        for (int i = 0; i <= N; i++) {
            res = min(res, prefixB[i] + suffixA[i]);
        }

        return res;
    }
};
```
### Python3
``` py title='minimum-deletions-to-make-string-balanced'
class Solution:
    def minimumDeletions(self, s: str) -> int:
        c = collections.Counter(s)
        
        a_right = c["a"]
        b_right = c["b"]
        
        a_left = b_left = 0
        res = len(s)
        
        for c in s+"b":

            res = min(res, b_left + a_right)
                
            if c == "a":
                a_left += 1
                a_right -= 1
            else:
                b_left += 1
                b_right -= 1
            
            
        
        return res
            
```

