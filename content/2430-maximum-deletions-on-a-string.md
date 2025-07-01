---
title: 2430. Maximum Deletions on a String
draft: false
tags: 
  - leetcode-hard
  - string
  - dynamic-programming
  - rolling-hash
  - string-matching
  - hash-function
  - weekly-contest-313
  - contest-question
date: 2022-10-02
---

[Problem Link](https://leetcode.com/problems/maximum-deletions-on-a-string/)

## Description

---
<p>You are given a string <code>s</code> consisting of only lowercase English letters. In one operation, you can:</p>

<ul>
	<li>Delete <strong>the entire string</strong> <code>s</code>, or</li>
	<li>Delete the <strong>first</strong> <code>i</code> letters of <code>s</code> if the first <code>i</code> letters of <code>s</code> are <strong>equal</strong> to the following <code>i</code> letters in <code>s</code>, for any <code>i</code> in the range <code>1 &lt;= i &lt;= s.length / 2</code>.</li>
</ul>

<p>For example, if <code>s = &quot;ababc&quot;</code>, then in one operation, you could delete the first two letters of <code>s</code> to get <code>&quot;abc&quot;</code>, since the first two letters of <code>s</code> and the following two letters of <code>s</code> are both equal to <code>&quot;ab&quot;</code>.</p>

<p>Return <em>the <strong>maximum</strong> number of operations needed to delete all of </em><code>s</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abcabcdabc&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong>
- Delete the first 3 letters (&quot;abc&quot;) since the next 3 letters are equal. Now, s = &quot;abcdabc&quot;.
- Delete all the letters.
We used 2 operations so return 2. It can be proven that 2 is the maximum number of operations needed.
Note that in the second operation we cannot delete &quot;abc&quot; again because the next occurrence of &quot;abc&quot; does not happen in the next 3 letters.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aaabaab&quot;
<strong>Output:</strong> 4
<strong>Explanation:</strong>
- Delete the first letter (&quot;a&quot;) since the next letter is equal. Now, s = &quot;aabaab&quot;.
- Delete the first 3 letters (&quot;aab&quot;) since the next 3 letters are equal. Now, s = &quot;aab&quot;.
- Delete the first letter (&quot;a&quot;) since the next letter is equal. Now, s = &quot;ab&quot;.
- Delete all the letters.
We used 4 operations so return 4. It can be proven that 4 is the maximum number of operations needed.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aaaaa&quot;
<strong>Output:</strong> 5
<strong>Explanation:</strong> In each operation, we can delete the first letter of s.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 4000</code></li>
	<li><code>s</code> consists only of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='maximum-deletions-on-a-string'
class Hashes:
    def __init__(self, s, base = 131, mod = 10 ** 9 + 7) -> None:
        self.s = s
        self.base = base
        self.mod = mod
        self.powers = [1]
        self.psa = [0]
        
        for i in range(len(s)):
            self.powers.append(self.powers[-1] * self.base % self.mod)
            self.psa.append((self.psa[-1] + ord(s[i]) * self.powers[-1]) % self.mod)
    
    def get(self, l, r):
        return (self.psa[r + 1] - self.psa[l]) * self.powers[len(self.s) - r] % self.mod

class Solution:
    def deleteString(self, s: str) -> int:
        N = len(s)
        if len(set(s)) == 1: return N
        
        dp = [1] * N
        h = Hashes(s)
        
        for i in range(N - 1, -1, -1):
            for j in range(1, N):
                if i + 2 * j > N: break
                    
                if 1 + dp[i+j] > dp[i] and h.get(i, i + j - 1) == h.get(i + j, i + 2 * j - 1):
                    dp[i] = 1 + dp[i+j]

        return dp[0]
```

