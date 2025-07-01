---
title: 943. Find the Shortest Superstring
draft: false
tags: 
  - leetcode-hard
  - array
  - string
  - dynamic-programming
  - bit-manipulation
  - bitmask
  - weekly-contest-111
  - contest-question
date: 2022-02-25
---

[Problem Link](https://leetcode.com/problems/find-the-shortest-superstring/)

## Description

---
<p>Given an array of strings <code>words</code>, return <em>the smallest string that contains each string in</em> <code>words</code> <em>as a substring</em>. If there are multiple valid strings of the smallest length, return <strong>any of them</strong>.</p>

<p>You may assume that no string in <code>words</code> is a substring of another string in <code>words</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;alex&quot;,&quot;loves&quot;,&quot;leetcode&quot;]
<strong>Output:</strong> &quot;alexlovesleetcode&quot;
<strong>Explanation:</strong> All permutations of &quot;alex&quot;,&quot;loves&quot;,&quot;leetcode&quot; would also be accepted.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> words = [&quot;catg&quot;,&quot;ctaagt&quot;,&quot;gcta&quot;,&quot;ttca&quot;,&quot;atgcatc&quot;]
<strong>Output:</strong> &quot;gctaagttcatgcatc&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= words.length &lt;= 12</code></li>
	<li><code>1 &lt;= words[i].length &lt;= 20</code></li>
	<li><code>words[i]</code> consists of lowercase English letters.</li>
	<li>All the strings of <code>words</code> are <strong>unique</strong>.</li>
</ul>


## Solution

---
### Python3
``` py title='find-the-shortest-superstring'
class Solution:
    def shortestSuperstring(self, words: List[str]) -> str:
        
        def distance(s1, s2):
            for i in range(1, len(s1)):
                if s2.startswith(s1[i:]):
                    return len(s1) - i + 1
            
            return 1
        
        n = len(words)
        weights = [[0] * n for _ in range(n)]
        dp = [[0] * n for _ in range(1 << n)]
        queue = deque([(0, i, 1 << i, [i]) for i in range(n)])
        full_mask = (1 << n) - 1
        maxWeight, maxPath = -1, []
        
        for i in range(n):
            for j in range(i, n):
                weights[i][j] = distance(words[i], words[j])
                weights[j][i] = distance(words[j], words[i])
        
        while queue:
            w, node, mask, path = queue.popleft()
            
            if dp[mask][node] != w:
                continue
            
            if mask == full_mask and w > maxWeight:
                maxWeight = w
                maxPath = path
                continue
            
            for nei in range(n):
                if mask & (1 << nei) > 0: continue
                
                new_mask = mask | (1 << nei)
                old = dp[new_mask][nei]
                new = dp[mask][node] + weights[node][nei]
                
                if new > old:
                    dp[new_mask][nei] = new
                    queue.append((new, nei, new_mask, path + [nei]))
        
        res = words[maxPath[0]]
        
        for i in range(1, n):
            prev, curr = maxPath[i - 1], maxPath[i]
            overlap = weights[prev][curr] - 1
            res += words[curr][overlap:]
            
        return res
            
```

