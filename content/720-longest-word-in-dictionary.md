---
title: 720. Longest Word in Dictionary
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - string
  - trie
  - sorting
  - weekly-contest-57
  - contest-question
date: 2021-01-21
---

[Problem Link](https://leetcode.com/problems/longest-word-in-dictionary/)

## Description

---
<p>Given an array of strings <code>words</code> representing an English Dictionary, return <em>the longest word in</em> <code>words</code> <em>that can be built one character at a time by other words in</em> <code>words</code>.</p>

<p>If there is more than one possible answer, return the longest word with the smallest lexicographical order. If there is no answer, return the empty string.</p>

<p>Note that the word should be built from left to right with each additional character being added to the end of a previous word.&nbsp;</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;w&quot;,&quot;wo&quot;,&quot;wor&quot;,&quot;worl&quot;,&quot;world&quot;]
<strong>Output:</strong> &quot;world&quot;
<strong>Explanation:</strong> The word &quot;world&quot; can be built one character at a time by &quot;w&quot;, &quot;wo&quot;, &quot;wor&quot;, and &quot;worl&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;a&quot;,&quot;banana&quot;,&quot;app&quot;,&quot;appl&quot;,&quot;ap&quot;,&quot;apply&quot;,&quot;apple&quot;]
<strong>Output:</strong> &quot;apple&quot;
<strong>Explanation:</strong> Both &quot;apply&quot; and &quot;apple&quot; can be built from other words in the dictionary. However, &quot;apple&quot; is lexicographically smaller than &quot;apply&quot;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= words.length &lt;= 1000</code></li>
	<li><code>1 &lt;= words[i].length &lt;= 30</code></li>
	<li><code>words[i]</code> consists of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='longest-word-in-dictionary'
class TrieNode:
    def __init__(self):
        self.mp = [None] * 26
        self.end = False

class Trie:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.root = TrieNode()
        self.ans = collections.defaultdict(int)


    def insert(self, word: str):
        """
        Inserts a word into the trie.
        """
        curr = self.root
        n = len(word)
        for i in range(n):
            index = ord(word[i]) - ord('a')
            if not curr.mp[index]:
                curr.mp[index] = TrieNode()

            curr = curr.mp[index]

        curr.end = True
        
    def search(self):
        self.searchR(self.root)

    def searchR(self, node, word = "", level = 0):
        """
        Returns if the word is in the trie.
        """
        
        if node.end and not self.ans[level]:
            self.ans[level] = word
        
        if self.isLastNode(node): return
        
        for i in range(26):
            if node.mp[i] and node.mp[i].end: 
                word += chr(97+i)
                self.searchR(node.mp[i], word, level + 1)
                word = word[:-1]
    
    def isLastNode(self, node):
        for i in range(26):
            if node.mp[i]: return False
        
        return True
        


class Solution:
    def longestWord(self, words: List[str]) -> str:
        trie = Trie()
        
        for w in words:
            trie.insert(w)
        
        trie.search()
        res = trie.ans
        
        return res[max(res)]
        
        
```

