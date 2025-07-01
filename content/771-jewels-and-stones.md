---
title: 771. Jewels and Stones
draft: false
tags: 
  - leetcode-easy
  - hash-table
  - string
  - weekly-contest-69
  - contest-question
date: 2019-10-07
---

[Problem Link](https://leetcode.com/problems/jewels-and-stones/)

## Description

---
<p>You&#39;re given strings <code>jewels</code> representing the types of stones that are jewels, and <code>stones</code> representing the stones you have. Each character in <code>stones</code> is a type of stone you have. You want to know how many of the stones you have are also jewels.</p>

<p>Letters are case sensitive, so <code>&quot;a&quot;</code> is considered a different type of stone from <code>&quot;A&quot;</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> jewels = "aA", stones = "aAAbbbb"
<strong>Output:</strong> 3
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> jewels = "z", stones = "ZZ"
<strong>Output:</strong> 0
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;=&nbsp;jewels.length, stones.length &lt;= 50</code></li>
	<li><code>jewels</code> and <code>stones</code> consist of only English letters.</li>
	<li>All the characters of&nbsp;<code>jewels</code> are <strong>unique</strong>.</li>
</ul>


## Solution

---
### Python3
``` py title='jewels-and-stones'
class Solution:
    def numJewelsInStones(self, J: str, S: str) -> int:
        
        return sum([i in J for i in S])
```
### Python
``` py title='jewels-and-stones'
class Solution(object):
    def numJewelsInStones(self, J, S):
        """
        :type J: str
        :type S: str
        :rtype: int
        """
        lst = []
        for i in J:
            lst.append(i)
        count=0
        
        for i in S:
            if i in lst:
                count+=1
        return count
            
```

