---
title: 1160. Find Words That Can Be Formed by Characters
draft: false
tags: 
  - leetcode-easy
  - array
  - hash-table
  - string
  - counting
  - weekly-contest-150
  - contest-question
date: 2023-12-03
---

[Problem Link](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/)

## Description

---
<p>You are given an array of strings <code>words</code> and a string <code>chars</code>.</p>

<p>A string is <strong>good</strong> if it can be formed by characters from <code>chars</code> (each character can only be used once for <strong>each</strong> word in <code>words</code>).</p>

<p>Return <em>the sum of lengths of all good strings in words</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;cat&quot;,&quot;bt&quot;,&quot;hat&quot;,&quot;tree&quot;], chars = &quot;atach&quot;
<strong>Output:</strong> 6
<strong>Explanation:</strong> The strings that can be formed are &quot;cat&quot; and &quot;hat&quot; so the answer is 3 + 3 = 6.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;hello&quot;,&quot;world&quot;,&quot;leetcode&quot;], chars = &quot;welldonehoneyr&quot;
<strong>Output:</strong> 10
<strong>Explanation:</strong> The strings that can be formed are &quot;hello&quot; and &quot;world&quot; so the answer is 5 + 5 = 10.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= words.length &lt;= 1000</code></li>
	<li><code>1 &lt;= words[i].length, chars.length &lt;= 100</code></li>
	<li><code>words[i]</code> and <code>chars</code> consist of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='find-words-that-can-be-formed-by-characters'
class Solution:
    def countCharacters(self, words: List[str], chars: str) -> int:
        res = 0

        for word in words:
            cnt = Counter(chars)
            ok = True

            for x in word:
                if cnt[x] == 0:
                    ok = False
                    break

                cnt[x] -= 1

            if ok:
                res += len(word)
        
        return res
```

