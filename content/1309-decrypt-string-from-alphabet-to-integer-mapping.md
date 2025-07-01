---
title: 1309. Decrypt String from Alphabet to Integer Mapping
draft: false
tags: 
  - leetcode-easy
  - string
  - weekly-contest-170
  - contest-question
date: 2020-09-01
---

[Problem Link](https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/)

## Description

---
<p>You are given a string <code>s</code> formed by digits and <code>&#39;#&#39;</code>. We want to map <code>s</code> to English lowercase characters as follows:</p>

<ul>
	<li>Characters (<code>&#39;a&#39;</code> to <code>&#39;i&#39;</code>) are represented by (<code>&#39;1&#39;</code> to <code>&#39;9&#39;</code>) respectively.</li>
	<li>Characters (<code>&#39;j&#39;</code> to <code>&#39;z&#39;</code>) are represented by (<code>&#39;10#&#39;</code> to <code>&#39;26#&#39;</code>) respectively.</li>
</ul>

<p>Return <em>the string formed after mapping</em>.</p>

<p>The test cases are generated so that a unique mapping will always exist.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;10#11#12&quot;
<strong>Output:</strong> &quot;jkab&quot;
<strong>Explanation:</strong> &quot;j&quot; -&gt; &quot;10#&quot; , &quot;k&quot; -&gt; &quot;11#&quot; , &quot;a&quot; -&gt; &quot;1&quot; , &quot;b&quot; -&gt; &quot;2&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;1326#&quot;
<strong>Output:</strong> &quot;acz&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 1000</code></li>
	<li><code>s</code> consists of digits and the <code>&#39;#&#39;</code> letter.</li>
	<li><code>s</code> will be a valid string such that mapping is always possible.</li>
</ul>


## Solution

---
### Python3
``` py title='decrypt-string-from-alphabet-to-integer-mapping'
class Solution:
    def freqAlphabets(self, s: str) -> str:
        n = len(s)
        i = 0
        res = []
        
        while i < n:
            if i + 2 < n and s[i + 2] == "#":
                c = int(s[i : i + 2]) - 1
                res.append(chr(ord('a') + c))
                i += 3
            else:
                c = int(s[i]) - 1
                res.append(chr(ord('a') + c))
                i += 1
        
        return "".join(res)
```
### C++
``` cpp title='decrypt-string-from-alphabet-to-integer-mapping'
class Solution {
public:
    string freqAlphabets(string s) {
      string res;
      for (int i = 0; i < s.size(); ++i) {
        if (i < s.size() - 2 && s[i + 2] == '#') {
          res += 'j' + (s[i] - '1') * 10 + s[i + 1] - '0';
          i += 2;
        }
        else res += 'a' + (s[i] - '1');
      }
      return res;
}
};
```

