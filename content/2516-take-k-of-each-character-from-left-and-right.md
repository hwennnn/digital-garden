---
title: 2516. Take K of Each Character From Left and Right
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - string
  - sliding-window
  - weekly-contest-325
  - contest-question
date: 2024-11-20
---

[Problem Link](https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/)

## Description

---
<p>You are given a string <code>s</code> consisting of the characters <code>&#39;a&#39;</code>, <code>&#39;b&#39;</code>, and <code>&#39;c&#39;</code> and a non-negative integer <code>k</code>. Each minute, you may take either the <strong>leftmost</strong> character of <code>s</code>, or the <strong>rightmost</strong> character of <code>s</code>.</p>

<p>Return<em> the <strong>minimum</strong> number of minutes needed for you to take <strong>at least</strong> </em><code>k</code><em> of each character, or return </em><code>-1</code><em> if it is not possible to take </em><code>k</code><em> of each character.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aabaaaacaabc&quot;, k = 2
<strong>Output:</strong> 8
<strong>Explanation:</strong> 
Take three characters from the left of s. You now have two &#39;a&#39; characters, and one &#39;b&#39; character.
Take five characters from the right of s. You now have four &#39;a&#39; characters, two &#39;b&#39; characters, and two &#39;c&#39; characters.
A total of 3 + 5 = 8 minutes is needed.
It can be proven that 8 is the minimum number of minutes needed.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;a&quot;, k = 1
<strong>Output:</strong> -1
<strong>Explanation:</strong> It is not possible to take one &#39;b&#39; or &#39;c&#39; so return -1.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> consists of only the letters <code>&#39;a&#39;</code>, <code>&#39;b&#39;</code>, and <code>&#39;c&#39;</code>.</li>
	<li><code>0 &lt;= k &lt;= s.length</code></li>
</ul>


## Solution

---
### Python3
``` py title='take-k-of-each-character-from-left-and-right'
class Solution:
    def takeCharacters(self, s: str, target: int) -> int:
        N = len(s)
        
        prefix = [[0, 0, 0]]
        for x in s:
            a, b, c = prefix[-1]
            
            if x == "a":
                a += 1
            elif x == "b":
                b += 1
            else:
                c += 1
            
            prefix.append([a, b, c])
        
        def query(i, j):
            la, lb, lc = prefix[i]
            ra, rb, rc = prefix[j]
            
            return [ra - la, rb - lb, rc - lc]
        
        def good(k):
            for i in range(k + 1):
                la, lb, lc = query(0, i)
                ra, rb, rc = query(N - k + i, N)

                a, b, c = la + ra, lb + rb, lc + rc
                
                if a >= target and b >= target and c >= target:
                    return True
                
            return False
        
        res = -1
        left, right = 3 * target, N
        
        while left <= right:
            mid = left + (right - left) // 2

            if good(mid):
                res = mid
                right = mid - 1
            else:
                left = mid + 1
        
        return res
```

