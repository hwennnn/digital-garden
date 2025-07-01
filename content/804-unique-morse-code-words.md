---
title: 804. Unique Morse Code Words
draft: false
tags: 
  - leetcode-easy
  - array
  - hash-table
  - string
  - weekly-contest-77
  - contest-question
date: 2019-10-08
---

[Problem Link](https://leetcode.com/problems/unique-morse-code-words/)

## Description

---
<p>International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:</p>

<ul>
	<li><code>&#39;a&#39;</code> maps to <code>&quot;.-&quot;</code>,</li>
	<li><code>&#39;b&#39;</code> maps to <code>&quot;-...&quot;</code>,</li>
	<li><code>&#39;c&#39;</code> maps to <code>&quot;-.-.&quot;</code>, and so on.</li>
</ul>

<p>For convenience, the full table for the <code>26</code> letters of the English alphabet is given below:</p>

<pre>
[&quot;.-&quot;,&quot;-...&quot;,&quot;-.-.&quot;,&quot;-..&quot;,&quot;.&quot;,&quot;..-.&quot;,&quot;--.&quot;,&quot;....&quot;,&quot;..&quot;,&quot;.---&quot;,&quot;-.-&quot;,&quot;.-..&quot;,&quot;--&quot;,&quot;-.&quot;,&quot;---&quot;,&quot;.--.&quot;,&quot;--.-&quot;,&quot;.-.&quot;,&quot;...&quot;,&quot;-&quot;,&quot;..-&quot;,&quot;...-&quot;,&quot;.--&quot;,&quot;-..-&quot;,&quot;-.--&quot;,&quot;--..&quot;]</pre>

<p>Given an array of strings <code>words</code> where each word can be written as a concatenation of the Morse code of each letter.</p>

<ul>
	<li>For example, <code>&quot;cab&quot;</code> can be written as <code>&quot;-.-..--...&quot;</code>, which is the concatenation of <code>&quot;-.-.&quot;</code>, <code>&quot;.-&quot;</code>, and <code>&quot;-...&quot;</code>. We will call such a concatenation the <strong>transformation</strong> of a word.</li>
</ul>

<p>Return <em>the number of different <strong>transformations</strong> among all words we have</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;gin&quot;,&quot;zen&quot;,&quot;gig&quot;,&quot;msg&quot;]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The transformation of each word is:
&quot;gin&quot; -&gt; &quot;--...-.&quot;
&quot;zen&quot; -&gt; &quot;--...-.&quot;
&quot;gig&quot; -&gt; &quot;--...--.&quot;
&quot;msg&quot; -&gt; &quot;--...--.&quot;
There are 2 different transformations: &quot;--...-.&quot; and &quot;--...--.&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;a&quot;]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= words.length &lt;= 100</code></li>
	<li><code>1 &lt;= words[i].length &lt;= 12</code></li>
	<li><code>words[i]</code> consists of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='unique-morse-code-words'
table = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

class Solution:
    def uniqueMorseRepresentations(self, words: List[str]) -> int:
        seen = set()
        
        for word in words:
            s = []
            
            for char in word:
                o = ord(char) - ord("a")
                s.append(table[o])
            
            seen.add("".join(s))
        
        return len(seen)
```
### Python
``` py title='unique-morse-code-words'
class Solution(object):
    def uniqueMorseRepresentations(self, words):
        """
        :type words: List[str]
        :rtype: int
        """
        
        
        string = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        table = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
        lst = []

        for i in words:
            i_str = ""
            for x in i:
                str_index = string.index(x)
                i_str+=table[str_index]  
            lst.append(i_str)

        another_lst = []
        
        for i in lst:
            if i not in another_lst:
                another_lst.append(i)
        
        return len(another_lst)
    
        
        
            
```

