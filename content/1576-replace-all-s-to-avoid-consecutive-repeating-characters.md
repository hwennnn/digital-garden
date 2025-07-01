---
title: 1576. Replace All ?'s to Avoid Consecutive Repeating Characters
draft: false
tags: 
  - leetcode-easy
  - string
  - weekly-contest-205
  - contest-question
date: 2020-09-06
---

[Problem Link](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/)

## Description

---
<p>Given a string <code>s</code> containing only lowercase English letters and the <code>&#39;?&#39;</code> character, convert <strong>all </strong>the <code>&#39;?&#39;</code> characters into lowercase letters such that the final string does not contain any <strong>consecutive repeating </strong>characters. You <strong>cannot </strong>modify the non <code>&#39;?&#39;</code> characters.</p>

<p>It is <strong>guaranteed </strong>that there are no consecutive repeating characters in the given string <strong>except </strong>for <code>&#39;?&#39;</code>.</p>

<p>Return <em>the final string after all the conversions (possibly zero) have been made</em>. If there is more than one solution, return <strong>any of them</strong>. It can be shown that an answer is always possible with the given constraints.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;?zs&quot;
<strong>Output:</strong> &quot;azs&quot;
<strong>Explanation:</strong> There are 25 solutions for this problem. From &quot;azs&quot; to &quot;yzs&quot;, all are valid. Only &quot;z&quot; is an invalid modification as the string will consist of consecutive repeating characters in &quot;zzs&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;ubv?w&quot;
<strong>Output:</strong> &quot;ubvaw&quot;
<strong>Explanation:</strong> There are 24 solutions for this problem. Only &quot;v&quot; and &quot;w&quot; are invalid modifications as the strings will consist of consecutive repeating characters in &quot;ubvvw&quot; and &quot;ubvww&quot;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 100</code></li>
	<li><code>s</code> consist of lowercase English letters and <code>&#39;?&#39;</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='replace-all-s-to-avoid-consecutive-repeating-characters'
class Solution:
    def modifyString(self, s: str) -> str:
        n = len(s)
        
        string = "abcdefghijklmnopqrstuvwxyz"
        res = ""
        
        for i in range(n):
            
            if s[i] == "?":
                left_idx = ord(res[i-1]) - 97 if i > 0 else -1
                right_idx = ord(s[i+1]) - 97 if i+1 <= n-1 else -1
                idx = (left_idx + 2)%26 if left_idx != -1 else (right_idx + 1)%26
                
                while (idx == left_idx or idx == right_idx):
                    idx = (idx + 1)%26
                res += string[idx]

            else:
                res += s[i]
        return res
```

