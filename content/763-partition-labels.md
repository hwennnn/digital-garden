---
title: 763. Partition Labels
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - two-pointers
  - string
  - greedy
  - weekly-contest-67
  - contest-question
date: 2020-09-04
---

[Problem Link](https://leetcode.com/problems/partition-labels/)

## Description

---
<p>You are given a string <code>s</code>. We want to partition the string into as many parts as possible so that each letter appears in at most one part. For example, the string <code>&quot;ababcc&quot;</code> can be partitioned into <code>[&quot;abab&quot;, &quot;cc&quot;]</code>, but partitions such as <code>[&quot;aba&quot;, &quot;bcc&quot;]</code> or <code>[&quot;ab&quot;, &quot;ab&quot;, &quot;cc&quot;]</code> are invalid.</p>

<p>Note that the partition is done so that after concatenating all the parts in order, the resultant string should be <code>s</code>.</p>

<p>Return <em>a list of integers representing the size of these parts</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;ababcbacadefegdehijhklij&quot;
<strong>Output:</strong> [9,7,8]
<strong>Explanation:</strong>
The partition is &quot;ababcbaca&quot;, &quot;defegde&quot;, &quot;hijhklij&quot;.
This is a partition so that each letter appears in at most one part.
A partition like &quot;ababcbacadefegde&quot;, &quot;hijhklij&quot; is incorrect, because it splits s into less parts.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;eccbbbbdec&quot;
<strong>Output:</strong> [10]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 500</code></li>
	<li><code>s</code> consists of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='partition-labels'
class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        n = len(s)
        indices = {x: i for i, x in enumerate(s)}
        i = 0
        curr = set()
        res = []
        s += "!"
        
        for j, x in enumerate(s):
            if j == n or (j != 0 and len(curr) == 0):
                res.append(j - i)
                i = j
                
                if j == n: break
            
            curr.add(x)
            
            if indices[x] == j:
                curr.remove(x)
        
        
        return res
                
```
### C++
``` cpp title='partition-labels'
class Solution {
public:
    vector<int> partitionLabels(string S) {
        vector<int> res, pos(26, 0);  
        for (auto i = 0; i < S.size(); ++i){
          pos[S[i] - 'a'] = i;
        }
        
        int maxIdx = INT_MIN, lastIdx = 0;
        
        for (auto i = 0; i < S.size(); i++){
            maxIdx = max(maxIdx, pos[S[i] - 'a']);
            if (i == maxIdx){
                res.push_back(maxIdx - lastIdx + 1);
                lastIdx = i + 1;
            }
        }
        
        return res;      
    }
};
```

