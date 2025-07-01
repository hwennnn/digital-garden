---
title: 3076. Shortest Uncommon Substring in an Array
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - string
  - trie
  - weekly-contest-388
  - contest-question
date: 2024-03-10
---

[Problem Link](https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/)

## Description

---
<p>You are given an array <code>arr</code> of size <code>n</code> consisting of <strong>non-empty</strong> strings.</p>

<p>Find a string array <code>answer</code> of size <code>n</code> such that:</p>

<ul>
	<li><code>answer[i]</code> is the <strong>shortest</strong> <span data-keyword="substring">substring</span> of <code>arr[i]</code> that does <strong>not</strong> occur as a substring in any other string in <code>arr</code>. If multiple such substrings exist, <code>answer[i]</code> should be the <span data-keyword="lexicographically-smaller-string">lexicographically smallest</span>. And if no such substring exists, <code>answer[i]</code> should be an empty string.</li>
</ul>

<p>Return <em>the array </em><code>answer</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr = [&quot;cab&quot;,&quot;ad&quot;,&quot;bad&quot;,&quot;c&quot;]
<strong>Output:</strong> [&quot;ab&quot;,&quot;&quot;,&quot;ba&quot;,&quot;&quot;]
<strong>Explanation:</strong> We have the following:
- For the string &quot;cab&quot;, the shortest substring that does not occur in any other string is either &quot;ca&quot; or &quot;ab&quot;, we choose the lexicographically smaller substring, which is &quot;ab&quot;.
- For the string &quot;ad&quot;, there is no substring that does not occur in any other string.
- For the string &quot;bad&quot;, the shortest substring that does not occur in any other string is &quot;ba&quot;.
- For the string &quot;c&quot;, there is no substring that does not occur in any other string.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr = [&quot;abc&quot;,&quot;bcd&quot;,&quot;abcd&quot;]
<strong>Output:</strong> [&quot;&quot;,&quot;&quot;,&quot;abcd&quot;]
<strong>Explanation:</strong> We have the following:
- For the string &quot;abc&quot;, there is no substring that does not occur in any other string.
- For the string &quot;bcd&quot;, there is no substring that does not occur in any other string.
- For the string &quot;abcd&quot;, the shortest substring that does not occur in any other string is &quot;abcd&quot;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == arr.length</code></li>
	<li><code>2 &lt;= n &lt;= 100</code></li>
	<li><code>1 &lt;= arr[i].length &lt;= 20</code></li>
	<li><code>arr[i]</code> consists only of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='shortest-uncommon-substring-in-an-array'
class Solution:
    def shortestSubstrings(self, arr: List[str]) -> List[str]:
        N = len(arr)
        res = ["" for _ in range(N)]
        
        for index in range(N):
            length = len(arr[index])
            
            for i in range(length):
                for j in range(i, length):
                    sub = arr[index][i : j + 1]
                    flag = True

                    for k in range(N):
                        if k == index: continue

                        # print(sub, arr[k])
                        if sub in arr[k]: 
                            flag = False
                            break
                    
                    if flag:
                        if res[index] == "" or len(sub) < len(res[index]):
                            res[index] = sub
                        elif len(sub) == len(res[index]):
                            res[index] = min(res[index], sub)
        
        return res
                
```

