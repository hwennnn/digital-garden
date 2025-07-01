---
title: 3. Longest Substring Without Repeating Characters
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - string
  - sliding-window
date: 2024-07-25
---

[Problem Link](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## Description

---
<p>Given a string <code>s</code>, find the length of the <strong>longest</strong> <span data-keyword="substring-nonempty"><strong>substring</strong></span> without duplicate characters.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abcabcbb&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is &quot;abc&quot;, with the length of 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;bbbbb&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> The answer is &quot;b&quot;, with the length of 1.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;pwwkew&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is &quot;wke&quot;, with the length of 3.
Notice that the answer must be a substring, &quot;pwke&quot; is a subsequence and not a substring.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= s.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>s</code> consists of English letters, digits, symbols and spaces.</li>
</ul>


## Solution

---
### Python3
``` py title='longest-substring-without-repeating-characters'
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        N = len(s)
        i = res = 0
        seen = set()

        for j, x in enumerate(s):
            while x in seen:
                seen.remove(s[i])
                i += 1
            
            seen.add(x)
            res = max(res, j - i + 1)
        
        return res
```
### C++
``` cpp title='longest-substring-without-repeating-characters'
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int res = 0, N = s.size();
        unordered_map<int, int> count;

        for (int i = 0, j = 0; j < N; j++) {
            count[s[j]]++;

            while (count[s[j]] > 1) {
                count[s[i]]--;
                i++;
            }

            res = max(res, j - i + 1);
        }

        return res;
    }
};
```

