---
title: 1718. Construct the Lexicographically Largest Valid Sequence
draft: false
tags: 
  - leetcode-medium
  - array
  - backtracking
date: 2021-07-29
---

[Problem Link](https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/)

## Description

---
<p>Given an integer <code>n</code>, find a sequence that satisfies all of the following:</p>

<ul>
	<li>The integer <code>1</code> occurs once in the sequence.</li>
	<li>Each integer between <code>2</code> and <code>n</code> occurs twice in the sequence.</li>
	<li>For every integer <code>i</code> between <code>2</code> and <code>n</code>, the <strong>distance</strong> between the two occurrences of <code>i</code> is exactly <code>i</code>.</li>
</ul>

<p>The <strong>distance</strong> between two numbers on the sequence, <code>a[i]</code> and <code>a[j]</code>, is the absolute difference of their indices, <code>|j - i|</code>.</p>

<p>Return <em>the <strong>lexicographically largest</strong> sequence</em><em>. It is guaranteed that under the given constraints, there is always a solution. </em></p>

<p>A sequence <code>a</code> is lexicographically larger than a sequence <code>b</code> (of the same length) if in the first position where <code>a</code> and <code>b</code> differ, sequence <code>a</code> has a number greater than the corresponding number in <code>b</code>. For example, <code>[0,1,9,0]</code> is lexicographically larger than <code>[0,1,5,6]</code> because the first position they differ is at the third number, and <code>9</code> is greater than <code>5</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 3
<strong>Output:</strong> [3,1,2,3,2]
<strong>Explanation:</strong> [2,3,2,1,3] is also a valid sequence, but [3,1,2,3,2] is the lexicographically largest valid sequence.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 5
<strong>Output:</strong> [5,3,1,4,3,5,2,4,2]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 20</code></li>
</ul>


## Solution

---
### Python3
``` py title='construct-the-lexicographically-largest-valid-sequence'
class Solution:
    def constructDistancedSequence(self, n: int) -> List[int]:
        res = [0] * (n * 2 - 1)
        used = [0] * (n + 1)
        
        def backtrack(i):
            if i == len(res): return True
            
            if res[i]: return backtrack(i + 1)
            
            for k in range(n, 1, -1):
                if used[k]: continue
                
                if i + k < len(res) and res[i] == res[i + k] == 0:
                    res[i] = res[i + k] = k
                    used[k] = 1
                    
                    if backtrack(i + 1): return True
                    
                    res[i] = res[i + k] = 0
                    used[k] = 0
            
            if not used[1]:
                res[i] = 1
                used[1] = 1
                
                if backtrack(i + 1): return True
                
                res[i] = 0
                used[1] = 0
            
            return False
        
        backtrack(0)
        
        return res
```
