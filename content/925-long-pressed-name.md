---
title: 925. Long Pressed Name
draft: false
tags: 
  - leetcode-easy
  - two-pointers
  - string
  - weekly-contest-107
  - contest-question
date: 2020-03-06
---

[Problem Link](https://leetcode.com/problems/long-pressed-name/)

## Description

---
<p>Your friend is typing his <code>name</code> into a keyboard. Sometimes, when typing a character <code>c</code>, the key might get <em>long pressed</em>, and the character will be typed 1 or more times.</p>

<p>You examine the <code>typed</code> characters of the keyboard. Return <code>True</code> if it is possible that it was your friends name, with some characters (possibly none) being long pressed.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> name = &quot;alex&quot;, typed = &quot;aaleex&quot;
<strong>Output:</strong> true
<strong>Explanation: </strong>&#39;a&#39; and &#39;e&#39; in &#39;alex&#39; were long pressed.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> name = &quot;saeed&quot;, typed = &quot;ssaaedd&quot;
<strong>Output:</strong> false
<strong>Explanation: </strong>&#39;e&#39; must have been pressed twice, but it was not in the typed output.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= name.length, typed.length &lt;= 1000</code></li>
	<li><code>name</code> and <code>typed</code> consist of only lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='long-pressed-name'
class Solution:
    def isLongPressedName(self, name: str, typed: str) -> bool:
        
        i = 0
        for j in range(len(typed)):
            if i < len(name) and name[i] == typed[j]:
                i += 1
            elif j == 0 or typed[j] != typed[j - 1]:
                return False
        return i == len(name)
            
        
```

