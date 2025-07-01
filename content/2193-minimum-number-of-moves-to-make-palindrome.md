---
title: 2193. Minimum Number of Moves to Make Palindrome
draft: false
tags: 
  - leetcode-hard
  - two-pointers
  - string
  - greedy
  - binary-indexed-tree
  - biweekly-contest-73
  - contest-question
date: 2022-03-05
---

[Problem Link](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/)

## Description

---
<p>You are given a string <code>s</code> consisting only of lowercase English letters.</p>

<p>In one <strong>move</strong>, you can select any two <strong>adjacent</strong> characters of <code>s</code> and swap them.</p>

<p>Return <em>the <strong>minimum number of moves</strong> needed to make</em> <code>s</code> <em>a palindrome</em>.</p>

<p><strong>Note</strong> that the input will be generated such that <code>s</code> can always be converted to a palindrome.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aabb&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong>
We can obtain two palindromes from s, &quot;abba&quot; and &quot;baab&quot;. 
- We can obtain &quot;abba&quot; from s in 2 moves: &quot;a<u><strong>ab</strong></u>b&quot; -&gt; &quot;ab<u><strong>ab</strong></u>&quot; -&gt; &quot;abba&quot;.
- We can obtain &quot;baab&quot; from s in 2 moves: &quot;a<u><strong>ab</strong></u>b&quot; -&gt; &quot;<u><strong>ab</strong></u>ab&quot; -&gt; &quot;baab&quot;.
Thus, the minimum number of moves needed to make s a palindrome is 2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;letelt&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong>
One of the palindromes we can obtain from s in 2 moves is &quot;lettel&quot;.
One of the ways we can obtain it is &quot;lete<u><strong>lt</strong></u>&quot; -&gt; &quot;let<u><strong>et</strong></u>l&quot; -&gt; &quot;lettel&quot;.
Other palindromes such as &quot;tleelt&quot; can also be obtained in 2 moves.
It can be shown that it is not possible to obtain a palindrome in less than 2 moves.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 2000</code></li>
	<li><code>s</code> consists only of lowercase English letters.</li>
	<li><code>s</code> can be converted to a palindrome using a finite number of moves.</li>
</ul>


## Solution

---
### Python3
``` py title='minimum-number-of-moves-to-make-palindrome'
class Solution:
    def minMovesToMakePalindrome(self, s: str) -> int:
        n = len(s)
        s = list(s)
        start, end = 0, n - 1
        res = 0
        
        while start < end:
            if s[start] == s[end]:
                start += 1
                end -= 1
            else:
                i = end - 1
                
                while i > start and s[start] != s[i]:
                    i -= 1
                
                if start == i:
                    s[start], s[start + 1] = s[start + 1], s[start]
                    res += 1
                else:
                    while i < end:
                        s[i], s[i + 1] = s[i + 1], s[i]
                        i += 1
                        res += 1
                    
                    start += 1
                    end -= 1
        
        return res
```
### C++
``` cpp title='minimum-number-of-moves-to-make-palindrome'
// https://molchevskyi.medium.com/best-solutions-for-microsoft-interview-tasks-min-swaps-to-make-palindrome-e931689f8cae

class Solution {
public:
    int minMovesToMakePalindrome(string s) {
        int s_size = s.size();
        int result = 0;
        int start = 0, end = s_size - 1;

        while (end > start) {
            // if we found different chars
            if (s[start] != s[end]) {
                int i = end - 1; // make an additional iterator from the end

                // move toward the start until we found the same char
                while (i > start && s[i] != s[start]) { --i; }

                // if we scanned whole the string and found
                // no one the same char swap char on the 
                // start with adjacent char it needs for 
                // case when the first char is not on it's 
                // right place all other parts of the 
                // algorithm don't process a char on the start
                if (i == start) {
                    swap(s[start], s[start + 1]);
                    ++result;
                }
                // if the same character found swap all 
                // chars from i to the end
                else {
                    while (i < end) {
                        swap(s[i], s[i + 1]);
                        ++result;
                        ++i;
                    }
                    ++start; --end;
                }
            }
            // if s[start] == s[end] shrink the processing window
            else {
                ++start; --end;
            }
        }
        return result;
    }
};
```

