---
title: 677. Map Sum Pairs
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - string
  - design
  - trie
  - weekly-contest-50
  - contest-question
date: 2021-07-30
---

[Problem Link](https://leetcode.com/problems/map-sum-pairs/)

## Description

---
<p>Design a map that allows you to do the following:</p>

<ul>
	<li>Maps a string key to a given value.</li>
	<li>Returns the sum of the values that have a key with a prefix equal to a given string.</li>
</ul>

<p>Implement the <code>MapSum</code> class:</p>

<ul>
	<li><code>MapSum()</code> Initializes the <code>MapSum</code> object.</li>
	<li><code>void insert(String key, int val)</code> Inserts the <code>key-val</code> pair into the map. If the <code>key</code> already existed, the original <code>key-value</code> pair will be overridden to the new one.</li>
	<li><code>int sum(string prefix)</code> Returns the sum of all the pairs&#39; value whose <code>key</code> starts with the <code>prefix</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input</strong>
[&quot;MapSum&quot;, &quot;insert&quot;, &quot;sum&quot;, &quot;insert&quot;, &quot;sum&quot;]
[[], [&quot;apple&quot;, 3], [&quot;ap&quot;], [&quot;app&quot;, 2], [&quot;ap&quot;]]
<strong>Output</strong>
[null, null, 3, null, 5]

<strong>Explanation</strong>
MapSum mapSum = new MapSum();
mapSum.insert(&quot;apple&quot;, 3);  
mapSum.sum(&quot;ap&quot;);           // return 3 (<u>ap</u>ple = 3)
mapSum.insert(&quot;app&quot;, 2);    
mapSum.sum(&quot;ap&quot;);           // return 5 (<u>ap</u>ple + <u>ap</u>p = 3 + 2 = 5)
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= key.length, prefix.length &lt;= 50</code></li>
	<li><code>key</code> and <code>prefix</code> consist of only lowercase English letters.</li>
	<li><code>1 &lt;= val &lt;= 1000</code></li>
	<li>At most <code>50</code> calls will be made to <code>insert</code> and <code>sum</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='map-sum-pairs'
class TrieNode:
    def __init__(self):
        self.children = collections.defaultdict(TrieNode)
        self.value = 0

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, key, val):
        curr = self.root
        
        for c in key:
            curr = curr.children[c]
        
        curr.value = val
    
    def sumVal(self, prefix):
        curr = self.root
        
        for c in prefix:
            curr = curr.children[c]
        
        return self.dfs(curr)
    
    def dfs(self, curr):
        total = curr.value
        
        for char in curr.children:
            if curr.children[char]:
                total += self.dfs(curr.children[char])
        
        return total
    
class MapSum:

    def __init__(self):
        self.trie = Trie()

    def insert(self, key: str, val: int) -> None:
        self.trie.insert(key, val)

    def sum(self, prefix: str) -> int:
        return self.trie.sumVal(prefix)


# Your MapSum object will be instantiated and called as such:
# obj = MapSum()
# obj.insert(key,val)
# param_2 = obj.sum(prefix)
```

