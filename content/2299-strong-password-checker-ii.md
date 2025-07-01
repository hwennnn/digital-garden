---
title: 2299. Strong Password Checker II
draft: false
tags: 
  - leetcode-easy
  - string
  - biweekly-contest-80
  - contest-question
date: 2022-06-12
---

[Problem Link](https://leetcode.com/problems/strong-password-checker-ii/)

## Description

---
<p>A password is said to be <strong>strong</strong> if it satisfies all the following criteria:</p>

<ul>
	<li>It has at least <code>8</code> characters.</li>
	<li>It contains at least <strong>one lowercase</strong> letter.</li>
	<li>It contains at least <strong>one uppercase</strong> letter.</li>
	<li>It contains at least <strong>one digit</strong>.</li>
	<li>It contains at least <strong>one special character</strong>. The special characters are the characters in the following string: <code>&quot;!@#$%^&amp;*()-+&quot;</code>.</li>
	<li>It does <strong>not</strong> contain <code>2</code> of the same character in adjacent positions (i.e., <code>&quot;aab&quot;</code> violates this condition, but <code>&quot;aba&quot;</code> does not).</li>
</ul>

<p>Given a string <code>password</code>, return <code>true</code><em> if it is a <strong>strong</strong> password</em>. Otherwise, return <code>false</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> password = &quot;IloveLe3tcode!&quot;
<strong>Output:</strong> true
<strong>Explanation:</strong> The password meets all the requirements. Therefore, we return true.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> password = &quot;Me+You--IsMyDream&quot;
<strong>Output:</strong> false
<strong>Explanation:</strong> The password does not contain a digit and also contains 2 of the same character in adjacent positions. Therefore, we return false.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> password = &quot;1aB!&quot;
<strong>Output:</strong> false
<strong>Explanation:</strong> The password does not meet the length requirement. Therefore, we return false.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= password.length &lt;= 100</code></li>
	<li><code>password</code> consists of letters, digits, and special characters: <code>&quot;!@#$%^&amp;*()-+&quot;</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='strong-password-checker-ii'
class Solution:
    def strongPasswordCheckerII(self, password: str) -> bool:
        n = len(password)
        if n < 8: return False
        
        lower = upper = numbers = special = 0
        
        for index, x in enumerate(password):
            if index + 1 < n and x == password[index + 1]:
                return False
        
            if x in string.ascii_letters:
                if x.islower():
                    lower += 1
                else:
                    upper += 1
            elif x.isdigit():
                numbers += 1
            else:
                special += 1

        return lower > 0 and upper > 0 and numbers > 0 and special > 0
```

