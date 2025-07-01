---
title: 1864. Minimum Number of Swaps to Make the Binary String Alternating
draft: false
tags: 
  - leetcode-medium
  - string
  - greedy
  - weekly-contest-241
  - contest-question
date: 2021-05-16
---

[Problem Link](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/)

## Description

---
<p>Given a binary string <code>s</code>, return <em>the <strong>minimum</strong> number of character swaps to make it <strong>alternating</strong>, or </em><code>-1</code><em> if it is impossible.</em></p>

<p>The string is called <strong>alternating</strong> if no two adjacent characters are equal. For example, the strings <code>&quot;010&quot;</code> and <code>&quot;1010&quot;</code> are alternating, while the string <code>&quot;0100&quot;</code> is not.</p>

<p>Any two characters may be swapped, even if they are&nbsp;<strong>not adjacent</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;111000&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> Swap positions 1 and 4: &quot;1<u>1</u>10<u>0</u>0&quot; -&gt; &quot;1<u>0</u>10<u>1</u>0&quot;
The string is now alternating.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;010&quot;
<strong>Output:</strong> 0
<strong>Explanation:</strong> The string is already alternating, no swaps are needed.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;1110&quot;
<strong>Output:</strong> -1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 1000</code></li>
	<li><code>s[i]</code> is either <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='minimum-number-of-swaps-to-make-the-binary-string-alternating'
class Solution:
    def minSwaps(self, s: str) -> int:
        ones = zeroes = 0
        
        for c in s:
            if c == '0':
                zeroes += 1
            else:
                ones += 1
        
        if abs(zeroes - ones) > 1: return -1
        
        def countSwap(char):
            count = 0
            for c in s:
                if c != char:
                    count += 1
                char = '1' if char == '0' else '0'
            
            return count // 2
        
        if zeroes > ones:
            return countSwap('0')
        elif ones > zeroes:
            return countSwap('1')
        else:
            return min(countSwap('0'), countSwap('1'))
```

