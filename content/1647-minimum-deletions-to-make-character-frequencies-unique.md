---
title: 1647. Minimum Deletions to Make Character Frequencies Unique
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - string
  - greedy
  - sorting
date: 2023-09-12
---

[Problem Link](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/)

## Description

---
<p>A string <code>s</code> is called <strong>good</strong> if there are no two different characters in <code>s</code> that have the same <strong>frequency</strong>.</p>

<p>Given a string <code>s</code>, return<em> the <strong>minimum</strong> number of characters you need to delete to make </em><code>s</code><em> <strong>good</strong>.</em></p>

<p>The <strong>frequency</strong> of a character in a string is the number of times it appears in the string. For example, in the string <code>&quot;aab&quot;</code>, the <strong>frequency</strong> of <code>&#39;a&#39;</code> is <code>2</code>, while the <strong>frequency</strong> of <code>&#39;b&#39;</code> is <code>1</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aab&quot;
<strong>Output:</strong> 0
<strong>Explanation:</strong> <code>s</code> is already good.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aaabbbcc&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> You can delete two &#39;b&#39;s resulting in the good string &quot;aaabcc&quot;.
Another way it to delete one &#39;b&#39; and one &#39;c&#39; resulting in the good string &quot;aaabbc&quot;.</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;ceabaacb&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> You can delete both &#39;c&#39;s resulting in the good string &quot;eabaab&quot;.
Note that we only care about characters that are still in the string at the end (i.e. frequency of 0 is ignored).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code>&nbsp;contains only lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='minimum-deletions-to-make-character-frequencies-unique'
class Solution:
    def minDeletions(self, s: str) -> int:
        N = len(s)
        counter = Counter(s)
        curr = inf
        res = 0

        for v in sorted(counter.values(), reverse = 1):
            if v > curr:
                res += v - curr
                v = curr

            curr = max(v - 1, 0)

        return res

```

