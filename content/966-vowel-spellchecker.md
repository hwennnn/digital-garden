---
title: 966. Vowel Spellchecker
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - string
  - weekly-contest-117
  - contest-question
date: 2022-02-22
---

[Problem Link](https://leetcode.com/problems/vowel-spellchecker/)

## Description

---
<p>Given a <code>wordlist</code>, we want to implement a spellchecker that converts a query word into a correct word.</p>

<p>For a given <code>query</code> word, the spell checker handles two categories of spelling mistakes:</p>

<ul>
	<li>Capitalization: If the query matches a word in the wordlist (<strong>case-insensitive</strong>), then the query word is returned with the same case as the case in the wordlist.

	<ul>
		<li>Example: <code>wordlist = [&quot;yellow&quot;]</code>, <code>query = &quot;YellOw&quot;</code>: <code>correct = &quot;yellow&quot;</code></li>
		<li>Example: <code>wordlist = [&quot;Yellow&quot;]</code>, <code>query = &quot;yellow&quot;</code>: <code>correct = &quot;Yellow&quot;</code></li>
		<li>Example: <code>wordlist = [&quot;yellow&quot;]</code>, <code>query = &quot;yellow&quot;</code>: <code>correct = &quot;yellow&quot;</code></li>
	</ul>
	</li>
	<li>Vowel Errors: If after replacing the vowels <code>(&#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, &#39;u&#39;)</code> of the query word with any vowel individually, it matches a word in the wordlist (<strong>case-insensitive</strong>), then the query word is returned with the same case as the match in the wordlist.
	<ul>
		<li>Example: <code>wordlist = [&quot;YellOw&quot;]</code>, <code>query = &quot;yollow&quot;</code>: <code>correct = &quot;YellOw&quot;</code></li>
		<li>Example: <code>wordlist = [&quot;YellOw&quot;]</code>, <code>query = &quot;yeellow&quot;</code>: <code>correct = &quot;&quot;</code> (no match)</li>
		<li>Example: <code>wordlist = [&quot;YellOw&quot;]</code>, <code>query = &quot;yllw&quot;</code>: <code>correct = &quot;&quot;</code> (no match)</li>
	</ul>
	</li>
</ul>

<p>In addition, the spell checker operates under the following precedence rules:</p>

<ul>
	<li>When the query exactly matches a word in the wordlist (<strong>case-sensitive</strong>), you should return the same word back.</li>
	<li>When the query matches a word up to capitlization, you should return the first such match in the wordlist.</li>
	<li>When the query matches a word up to vowel errors, you should return the first such match in the wordlist.</li>
	<li>If the query has no matches in the wordlist, you should return the empty string.</li>
</ul>

<p>Given some <code>queries</code>, return a list of words <code>answer</code>, where <code>answer[i]</code> is the correct word for <code>query = queries[i]</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> wordlist = ["KiTe","kite","hare","Hare"], queries = ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"]
<strong>Output:</strong> ["kite","KiTe","KiTe","Hare","hare","","","KiTe","","KiTe"]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> wordlist = ["yellow"], queries = ["YellOw"]
<strong>Output:</strong> ["yellow"]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= wordlist.length, queries.length &lt;= 5000</code></li>
	<li><code>1 &lt;= wordlist[i].length, queries[i].length &lt;= 7</code></li>
	<li><code>wordlist[i]</code> and <code>queries[i]</code> consist only of only English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='vowel-spellchecker'
class Solution:
    def spellchecker(self, wordlist: List[str], queries: List[str]) -> List[str]:
        wordList = set(wordlist)
        words = {}
        shuffled = {}
        done_shuffled = set()
        res = []
        
        
        for word in wordlist:
            lower = word.lower()
            
            if lower not in words:
                words[lower] = word
            
            if lower in done_shuffled: continue
                
            # word, current processed index
            queue = deque([(word.lower(), 0)])
            
            while queue:
                currWord, index = queue.popleft()
                
                if index == len(word): continue
                
                if currWord[index] in "aeiou":
                    for vowel in "aeiou":
                        newWord = currWord[:index] + vowel + currWord[index + 1:]
                        if newWord not in shuffled:
                            shuffled[newWord] = word
                        queue.append((newWord, index + 1))
                else:
                    queue.append((currWord, index + 1))
            
            done_shuffled.add(word)
            
        for word in queries:
            if word in wordList:
                res.append(word)
                continue
            
            lower = word.lower()
            
            if lower in words:
                res.append(words[lower])
                continue
            
            if lower in shuffled:
                res.append(shuffled[lower])
                continue
            
            res.append("")
        
        return res
```

