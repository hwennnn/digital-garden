---
title: 3306. Count of Substrings Containing Every Vowel and K Consonants II
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - string
  - sliding-window
date: 2025-03-10
---

[Problem Link](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/)

## Description

---
<p>You are given a string <code>word</code> and a <strong>non-negative</strong> integer <code>k</code>.</p>

<p>Return the total number of <span data-keyword="substring-nonempty">substrings</span> of <code>word</code> that contain every vowel (<code>&#39;a&#39;</code>, <code>&#39;e&#39;</code>, <code>&#39;i&#39;</code>, <code>&#39;o&#39;</code>, and <code>&#39;u&#39;</code>) <strong>at least</strong> once and <strong>exactly</strong> <code>k</code> consonants.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">word = &quot;aeioqq&quot;, k = 1</span></p>

<p><strong>Output:</strong> <span class="example-io">0</span></p>

<p><strong>Explanation:</strong></p>

<p>There is no substring with every vowel.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">word = &quot;aeiou&quot;, k = 0</span></p>

<p><strong>Output:</strong> <span class="example-io">1</span></p>

<p><strong>Explanation:</strong></p>

<p>The only substring with every vowel and zero consonants is <code>word[0..4]</code>, which is <code>&quot;aeiou&quot;</code>.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">word = &quot;</span>ieaouqqieaouqq<span class="example-io">&quot;, k = 1</span></p>

<p><strong>Output:</strong> 3</p>

<p><strong>Explanation:</strong></p>

<p>The substrings with every vowel and one consonant are:</p>

<ul>
	<li><code>word[0..5]</code>, which is <code>&quot;ieaouq&quot;</code>.</li>
	<li><code>word[6..11]</code>, which is <code>&quot;qieaou&quot;</code>.</li>
	<li><code>word[7..12]</code>, which is <code>&quot;ieaouq&quot;</code>.</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>5 &lt;= word.length &lt;= 2 * 10<sup>5</sup></code></li>
	<li><code>word</code> consists only of lowercase English letters.</li>
	<li><code>0 &lt;= k &lt;= word.length - 5</code></li>
</ul>


## Solution

---
### Python3
``` py title='count-of-substrings-containing-every-vowel-and-k-consonants-ii'
class Solution:
    def countOfSubstrings(self, word: str, k: int) -> int:
        def countAtLeastMConsonants(m):
            n = len(word)
            vowels = ('a', 'e', 'i', 'o', 'u')
            vowels_map = defaultdict(int)
            num_consonants = 0
            ans = 0
            l = 0
            r = 0
            while r < n or l < n:
                if len(vowels_map) == 5 and num_consonants >= m:
                    ans += n - r + 1
                    if word[l] not in vowels:
                        num_consonants -= 1
                    else:
                        vowels_map[word[l]] -= 1
                        if vowels_map[word[l]] == 0:
                            del vowels_map[word[l]]
                    l += 1
                else:
                    if r == n:
                        break
                    if word[r] not in vowels:
                        num_consonants += 1
                    else:
                        vowels_map[word[r]] += 1
                    r += 1
            return ans
        
        return countAtLeastMConsonants(k) - countAtLeastMConsonants(k + 1)
       
        
```

