---
title: 1416. Restore The Array
draft: false
tags: 
  - leetcode-hard
  - string
  - dynamic-programming
date: 2023-04-23
---

[Problem Link](https://leetcode.com/problems/restore-the-array/)

## Description

---
<p>A program was supposed to print an array of integers. The program forgot to print whitespaces and the array is printed as a string of digits <code>s</code> and all we know is that all integers in the array were in the range <code>[1, k]</code> and there are no leading zeros in the array.</p>

<p>Given the string <code>s</code> and the integer <code>k</code>, return <em>the number of the possible arrays that can be printed as </em><code>s</code><em> using the mentioned program</em>. Since the answer may be very large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;1000&quot;, k = 10000
<strong>Output:</strong> 1
<strong>Explanation:</strong> The only possible array is [1000]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;1000&quot;, k = 10
<strong>Output:</strong> 0
<strong>Explanation:</strong> There cannot be an array that was printed this way and has all integer &gt;= 1 and &lt;= 10.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;1317&quot;, k = 2000
<strong>Output:</strong> 8
<strong>Explanation:</strong> Possible arrays are [1317],[131,7],[13,17],[1,317],[13,1,7],[1,31,7],[1,3,17],[1,3,1,7]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> consists of only digits and does not contain leading zeros.</li>
	<li><code>1 &lt;= k &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='restore-the-array'
class Solution:
    def numberOfArrays(self, s: str, k: int) -> int:
        N = len(s)
        MOD = 10 ** 9 + 7

        @cache
        def go(index):
            if index == N: return 1

            if s[index] == '0': return 0

            res = curr = 0

            for i in range(index, N):
                curr = curr * 10 + int(s[i])

                if curr > k: break

                res += go(i + 1)
                res %= MOD
            
            return res % MOD
        
        return go(0)
```
