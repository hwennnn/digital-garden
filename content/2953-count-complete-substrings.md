---
title: 2953. Count Complete Substrings
draft: false
tags: 
  - leetcode-hard
  - hash-table
  - string
  - sliding-window
  - weekly-contest-374
  - contest-question
date: 2023-12-04
---

[Problem Link](https://leetcode.com/problems/count-complete-substrings/)

## Description

---
<p>You are given a string <code>word</code> and an integer <code>k</code>.</p>

<p>A substring <code>s</code> of <code>word</code> is <strong>complete</strong> if:</p>

<ul>
	<li>Each character in <code>s</code> occurs <strong>exactly</strong> <code>k</code> times.</li>
	<li>The difference between two adjacent characters is <strong>at most</strong> <code>2</code>. That is, for any two adjacent characters <code>c1</code> and <code>c2</code> in <code>s</code>, the absolute difference in their positions in the alphabet is <strong>at most</strong> <code>2</code>.</li>
</ul>

<p>Return <em>the number of <strong>complete </strong>substrings of</em> <code>word</code>.</p>

<p>A <strong>substring</strong> is a <strong>non-empty</strong> contiguous sequence of characters in a string.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> word = &quot;igigee&quot;, k = 2
<strong>Output:</strong> 3
<strong>Explanation:</strong> The complete substrings where each character appears exactly twice and the difference between adjacent characters is at most 2 are: <u><strong>igig</strong></u>ee, igig<u><strong>ee</strong></u>, <u><strong>igigee</strong></u>.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> word = &quot;aaabbbccc&quot;, k = 3
<strong>Output:</strong> 6
<strong>Explanation:</strong> The complete substrings where each character appears exactly three times and the difference between adjacent characters is at most 2 are: <strong><u>aaa</u></strong>bbbccc, aaa<u><strong>bbb</strong></u>ccc, aaabbb<u><strong>ccc</strong></u>, <strong><u>aaabbb</u></strong>ccc, aaa<u><strong>bbbccc</strong></u>, <u><strong>aaabbbccc</strong></u>.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= word.length &lt;= 10<sup>5</sup></code></li>
	<li><code>word</code> consists only of lowercase English letters.</li>
	<li><code>1 &lt;= k &lt;= word.length</code></li>
</ul>


## Solution

---
### Python3
``` py title='count-complete-substrings'
class Solution:
    def countCompleteSubstrings(self, word: str, k: int) -> int:

        def f(x):
            return ord(x) - ord('a')
        
        def check(cnt, uniqueChars):
            unique = 0

            for x in cnt:
                if x == 0: continue
                if x != k: return False
                unique += 1

            return unique == uniqueChars

        def solve(A):
            M = len(A)
            res = 0

            # there are 26 unique characters, loop thru the len with k, 2k, 3k ..., 26k
            for uniqueChars in range(1, 27):
                length = k * uniqueChars
                if length > M: break

                cnt = [0] * 26
                for i in range(length):
                    cnt[f(A[i])] += 1
                
                res += check(cnt, uniqueChars)

                # when length is greater than M, slide the window from (length - M, length)
                for i in range(length, M):
                    cnt[f(A[i - length])] -= 1
                    cnt[f(A[i])] += 1
                    res += check(cnt, uniqueChars)
            
            return res


        N = len(word)
        res = 0
        curr = ""

        for i, x in enumerate(word):
            curr += x

            if i < N - 1 and abs(ord(word[i + 1]) - ord(word[i])) > 2:
                res += solve(curr)
                curr = ""
        
        res += solve(curr)

        return res
```

