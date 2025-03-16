---
title: 1079. Letter Tile Possibilities
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - string
  - backtracking
  - counting
date: 2019-10-09
---

[Problem Link](https://leetcode.com/problems/letter-tile-possibilities/)

## Description

---
<p>You have <code>n</code>&nbsp;&nbsp;<code>tiles</code>, where each tile has one letter <code>tiles[i]</code> printed on it.</p>

<p>Return <em>the number of possible non-empty sequences of letters</em> you can make using the letters printed on those <code>tiles</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> tiles = &quot;AAB&quot;
<strong>Output:</strong> 8
<strong>Explanation: </strong>The possible sequences are &quot;A&quot;, &quot;B&quot;, &quot;AA&quot;, &quot;AB&quot;, &quot;BA&quot;, &quot;AAB&quot;, &quot;ABA&quot;, &quot;BAA&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> tiles = &quot;AAABBC&quot;
<strong>Output:</strong> 188
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> tiles = &quot;V&quot;
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= tiles.length &lt;= 7</code></li>
	<li><code>tiles</code> consists of uppercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='letter-tile-possibilities'
class Solution:
    def numTilePossibilities(self, tiles: str) -> int:
        N = len(tiles)
        seen = set()

        def go(curr, mask):
            if curr != "":
                seen.add(curr)
            
            for i in range(N):
                if mask & (1 << i) == 0:
                    go(curr + tiles[i], mask | (1 << i))

        go("", 0)

        return len(seen)
```
### Python
``` py title='letter-tile-possibilities'
class Solution(object):
    def numTilePossibilities(self, tiles):
        s = "".join(set(tiles))
        ans = [] 

        for char in s:
            ans.append(char)    

        for elem in ans:
            temp = elem

            for char in s:
                temp += char
                if temp.count(char)<=tiles.count(char): 
                    ans.append(temp)
                temp = elem
                
        return len(set(ans))


        
```

