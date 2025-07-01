---
title: 745. Prefix and Suffix Search
draft: false
tags: 
  - leetcode-hard
  - array
  - hash-table
  - string
  - design
  - trie
  - weekly-contest-by-app-academy
  - contest-question
date: 2022-06-18
---

[Problem Link](https://leetcode.com/problems/prefix-and-suffix-search/)

## Description

---
<p>Design a special dictionary that searches the words in it by a prefix and a suffix.</p>

<p>Implement the <code>WordFilter</code> class:</p>

<ul>
	<li><code>WordFilter(string[] words)</code> Initializes the object with the <code>words</code> in the dictionary.</li>
	<li><code>f(string pref, string suff)</code> Returns <em>the index of the word in the dictionary,</em> which has the prefix <code>pref</code> and the suffix <code>suff</code>. If there is more than one valid index, return <strong>the largest</strong> of them. If there is no such word in the dictionary, return <code>-1</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input</strong>
[&quot;WordFilter&quot;, &quot;f&quot;]
[[[&quot;apple&quot;]], [&quot;a&quot;, &quot;e&quot;]]
<strong>Output</strong>
[null, 0]
<strong>Explanation</strong>
WordFilter wordFilter = new WordFilter([&quot;apple&quot;]);
wordFilter.f(&quot;a&quot;, &quot;e&quot;); // return 0, because the word at index 0 has prefix = &quot;a&quot; and suffix = &quot;e&quot;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= words.length &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= words[i].length &lt;= 7</code></li>
	<li><code>1 &lt;= pref.length, suff.length &lt;= 7</code></li>
	<li><code>words[i]</code>, <code>pref</code> and <code>suff</code> consist of lowercase English letters only.</li>
	<li>At most <code>10<sup>4</sup></code> calls will be made to the function <code>f</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='prefix-and-suffix-search'
class WordFilter:

    def __init__(self, words: List[str]):
        self.mp = collections.defaultdict(int)
        self.prefixes = collections.defaultdict(set)
        self.suffixes = collections.defaultdict(set)
        
        for index,word in enumerate(words):
            prefix = ""
            suffix = ""
            
            for char in [""] + list(word):
                prefix += char
                self.prefixes[prefix].add(word)
            
            for char in [""] + list(word[::-1]):
                suffix += char
                self.suffixes[suffix[::-1]].add(word)
            
            self.mp[word] = index

    def f(self, prefix: str, suffix: str) -> int:
        res = -1
        
        for word in self.prefixes[prefix] & self.suffixes[suffix]:
            res = max(res, self.mp[word])
        
        return res


# Your WordFilter object will be instantiated and called as such:
# obj = WordFilter(words)
# param_1 = obj.f(prefix,suffix)
```

