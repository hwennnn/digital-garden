---
title: 1781. Sum of Beauty of All Substrings
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - string
  - counting
  - biweekly-contest-47
  - contest-question
date: 2021-04-10
---

[Problem Link](https://leetcode.com/problems/sum-of-beauty-of-all-substrings/)

## Description

---
<p>The <strong>beauty</strong> of a string is the difference in frequencies between the most frequent and least frequent characters.</p>

<ul>
	<li>For example, the beauty of <code>&quot;abaacc&quot;</code> is <code>3 - 1 = 2</code>.</li>
</ul>

<p>Given a string <code>s</code>, return <em>the sum of <strong>beauty</strong> of all of its substrings.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aabcb&quot;
<strong>Output:</strong> 5
<strong>Explanation: </strong>The substrings with non-zero beauty are [&quot;aab&quot;,&quot;aabc&quot;,&quot;aabcb&quot;,&quot;abcb&quot;,&quot;bcb&quot;], each with beauty equal to 1.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aabcbaa&quot;
<strong>Output:</strong> 17
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;=<sup> </sup>500</code></li>
	<li><code>s</code> consists of only lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='sum-of-beauty-of-all-substrings'
class Solution:
    def beautySum(self, s: str) -> int:
        n = len(s)
        res = 0
        
        for i in range(n):
            mp = collections.defaultdict(int)
            for j in range(i, n):
                mp[s[j]] += 1
                v = mp.values()
                res += max(v) - min(v)
        
        return res
```

