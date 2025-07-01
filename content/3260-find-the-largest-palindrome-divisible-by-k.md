---
title: 3260. Find the Largest Palindrome Divisible by K
draft: false
tags: 
  - leetcode-hard
  - math
  - string
  - dynamic-programming
  - greedy
  - number-theory
  - weekly-contest-411
  - contest-question
date: 2024-08-18
---

[Problem Link](https://leetcode.com/problems/find-the-largest-palindrome-divisible-by-k/)

## Description

---
<p>You are given two <strong>positive</strong> integers <code>n</code> and <code>k</code>.</p>

<p>An integer <code>x</code> is called <strong>k-palindromic</strong> if:</p>

<ul>
	<li><code>x</code> is a <span data-keyword="palindrome-integer">palindrome</span>.</li>
	<li><code>x</code> is divisible by <code>k</code>.</li>
</ul>

<p>Return the<strong> largest</strong> integer having <code>n</code> digits (as a string) that is <strong>k-palindromic</strong>.</p>

<p><strong>Note</strong> that the integer must <strong>not</strong> have leading zeros.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 3, k = 5</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;595&quot;</span></p>

<p><strong>Explanation:</strong></p>

<p>595 is the largest k-palindromic integer with 3 digits.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 1, k = 4</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;8&quot;</span></p>

<p><strong>Explanation:</strong></p>

<p>4 and 8 are the only k-palindromic integers with 1 digit.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 5, k = 6</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;89898&quot;</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= k &lt;= 9</code></li>
</ul>


## Solution

---
### Python3
``` py title='find-the-largest-palindrome-divisible-by-k'
class Solution:
    def largestPalindrome(self, n: int, k: int) -> str:
        if k == 1 or k == 3 or k == 9:
            return '9' * n

        if k == 2:
            if n <= 2:
                return '8' * n
            else:
                return '8' + '9' * (n - 2) + '8'

        if k == 4:
            if n <= 4:
                return '8' * n
            else:
                return '88' + '9' * (n - 4) + '88'

        if k == 5:
            if n <= 2:
                return '5' * n
            else:
                return '5' + '9' * (n - 2) + '5'
        
        if k == 8:
            if n <= 6:
                return '8' * n
            else:
                return '888' + '9' * (n - 6) + '888'
        
        if k == 6:
            # n = 5, 89898
            # n = 6, 897798
            # n = 7, 8998998

            if n <= 2:
                return '6' * n
            elif n % 2 == 1:
                half = n // 2 - 1
                return '8' + '9' * half + '8' + '9' * half + '8'
            else:
                half = n // 2 - 2
                return '8' + '9' * half + '77' + '9' * half + '8'
        
        if k == 7:
            # n = 2, 77
            # n = 3, 959
            # n = 4, 9779
            # n = 5, 99799
            # n = 6, 999999
            # n = 7, 9994999

            dic = {0: '', 1: '7', 2: '77', 3: '959', 4: '9779', 5: '99799', 6: '999999', 7: '9994999',
                       8: '99944999', 9: '999969999', 10: '9999449999', 11: '99999499999'}
            l, r = divmod(n, 12)
            return '999999' * l + dic[r] + '999999' * l
```

