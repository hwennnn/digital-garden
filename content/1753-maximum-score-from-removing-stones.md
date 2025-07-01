---
title: 1753. Maximum Score From Removing Stones
draft: false
tags: 
  - leetcode-medium
  - math
  - greedy
  - heap-priority-queue
  - weekly-contest-227
  - contest-question
date: 2021-02-14
---

[Problem Link](https://leetcode.com/problems/maximum-score-from-removing-stones/)

## Description

---
<p>You are playing a solitaire game with <strong>three piles</strong> of stones of sizes <code>a</code>​​​​​​, <code>b</code>,​​​​​​ and <code>c</code>​​​​​​ respectively. Each turn you choose two <strong>different non-empty </strong>piles, take one stone from each, and add <code>1</code> point to your score. The game stops when there are <strong>fewer than two non-empty</strong> piles (meaning there are no more available moves).</p>

<p>Given three integers <code>a</code>​​​​​, <code>b</code>,​​​​​ and <code>c</code>​​​​​, return <em>the</em> <strong><em>maximum</em> </strong><em><strong>score</strong> you can get.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> a = 2, b = 4, c = 6
<strong>Output:</strong> 6
<strong>Explanation:</strong> The starting state is (2, 4, 6). One optimal set of moves is:
- Take from 1st and 3rd piles, state is now (1, 4, 5)
- Take from 1st and 3rd piles, state is now (0, 4, 4)
- Take from 2nd and 3rd piles, state is now (0, 3, 3)
- Take from 2nd and 3rd piles, state is now (0, 2, 2)
- Take from 2nd and 3rd piles, state is now (0, 1, 1)
- Take from 2nd and 3rd piles, state is now (0, 0, 0)
There are fewer than two non-empty piles, so the game ends. Total: 6 points.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> a = 4, b = 4, c = 6
<strong>Output:</strong> 7
<strong>Explanation:</strong> The starting state is (4, 4, 6). One optimal set of moves is:
- Take from 1st and 2nd piles, state is now (3, 3, 6)
- Take from 1st and 3rd piles, state is now (2, 3, 5)
- Take from 1st and 3rd piles, state is now (1, 3, 4)
- Take from 1st and 3rd piles, state is now (0, 3, 3)
- Take from 2nd and 3rd piles, state is now (0, 2, 2)
- Take from 2nd and 3rd piles, state is now (0, 1, 1)
- Take from 2nd and 3rd piles, state is now (0, 0, 0)
There are fewer than two non-empty piles, so the game ends. Total: 7 points.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> a = 1, b = 8, c = 8
<strong>Output:</strong> 8
<strong>Explanation:</strong> One optimal set of moves is to take from the 2nd and 3rd piles for 8 turns until they are empty.
After that, there are fewer than two non-empty piles, so the game ends.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= a, b, c &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### C++
``` cpp title='maximum-score-from-removing-stones'
class Solution {
public:
    int maximumScore(int a, int b, int c) {
        if (a < b)
            return maximumScore(b, a, c);
        
        if (b < c)
            return maximumScore(a, c, b);
        
        return b == 0 ? 0 : 1 + maximumScore(a-1, b-1, c);
    }
};
```
### Python3
``` py title='maximum-score-from-removing-stones'
from heapq import heappush, heappop, heapify

class Solution:
    # heap
    def maximumScore(self, a: int, b: int, c: int) -> int:
        return min((a+b+c)//2 , a+b+c - max(a,b,c))
        res = 0
        stones = [-a,-b,-c]
        heapify(stones)
        
        while abs(stones[0]) > 0 and abs(stones[1]) > 0:
            first = heappop(stones) + 1
            second = heappop(stones) + 1
            
            heappush(stones, first)
            heappush(stones, second)
            
            res += 1
            
        return res
            
            
```

