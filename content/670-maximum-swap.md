---
title: 670. Maximum Swap
draft: false
tags: 
  - leetcode-medium
  - math
  - greedy
  - weekly-contest-48
  - contest-question
date: 2024-10-17
---

[Problem Link](https://leetcode.com/problems/maximum-swap/)

## Description

---
<p>You are given an integer <code>num</code>. You can swap two digits at most once to get the maximum valued number.</p>

<p>Return <em>the maximum valued number you can get</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> num = 2736
<strong>Output:</strong> 7236
<strong>Explanation:</strong> Swap the number 2 and the number 7.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> num = 9973
<strong>Output:</strong> 9973
<strong>Explanation:</strong> No swap.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= num &lt;= 10<sup>8</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-swap'
class Solution:
    def maximumSwap(self, num):
        num = list(str(num))
        mp = collections.defaultdict(int)

        for i, x in enumerate(num):
            mp[int(x)] = i
        
        for i, x in enumerate(num):
            for k in range(9, -1, -1):
                if int(x) < k and mp[k] > i:
                    num[i], num[mp[k]] = num[mp[k]], num[i]
                    return int("".join(num))
        
        return int("".join(num))
        
```

