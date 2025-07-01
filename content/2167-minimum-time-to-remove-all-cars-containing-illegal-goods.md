---
title: 2167. Minimum Time to Remove All Cars Containing Illegal Goods
draft: false
tags: 
  - leetcode-hard
  - string
  - dynamic-programming
  - weekly-contest-279
  - contest-question
date: 2022-02-06
---

[Problem Link](https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/)

## Description

---
<p>You are given a <strong>0-indexed</strong> binary string <code>s</code> which represents a sequence of train cars. <code>s[i] = &#39;0&#39;</code> denotes that the <code>i<sup>th</sup></code> car does <strong>not</strong> contain illegal goods and <code>s[i] = &#39;1&#39;</code> denotes that the <code>i<sup>th</sup></code> car does contain illegal goods.</p>

<p>As the train conductor, you would like to get rid of all the cars containing illegal goods. You can do any of the following three operations <strong>any</strong> number of times:</p>

<ol>
	<li>Remove a train car from the <strong>left</strong> end (i.e., remove <code>s[0]</code>) which takes 1 unit of time.</li>
	<li>Remove a train car from the <strong>right</strong> end (i.e., remove <code>s[s.length - 1]</code>) which takes 1 unit of time.</li>
	<li>Remove a train car from <strong>anywhere</strong> in the sequence which takes 2 units of time.</li>
</ol>

<p>Return <em>the <strong>minimum</strong> time to remove all the cars containing illegal goods</em>.</p>

<p>Note that an empty sequence of cars is considered to have no cars containing illegal goods.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;<strong><u>11</u></strong>00<strong><u>1</u></strong>0<strong><u>1</u></strong>&quot;
<strong>Output:</strong> 5
<strong>Explanation:</strong> 
One way to remove all the cars containing illegal goods from the sequence is to
- remove a car from the left end 2 times. Time taken is 2 * 1 = 2.
- remove a car from the right end. Time taken is 1.
- remove the car containing illegal goods found in the middle. Time taken is 2.
This obtains a total time of 2 + 1 + 2 = 5. 

An alternative way is to
- remove a car from the left end 2 times. Time taken is 2 * 1 = 2.
- remove a car from the right end 3 times. Time taken is 3 * 1 = 3.
This also obtains a total time of 2 + 3 = 5.

5 is the minimum time taken to remove all the cars containing illegal goods. 
There are no other ways to remove them with less time.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;00<strong><u>1</u></strong>0&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong>
One way to remove all the cars containing illegal goods from the sequence is to
- remove a car from the left end 3 times. Time taken is 3 * 1 = 3.
This obtains a total time of 3.

Another way to remove all the cars containing illegal goods from the sequence is to
- remove the car containing illegal goods found in the middle. Time taken is 2.
This obtains a total time of 2.

Another way to remove all the cars containing illegal goods from the sequence is to 
- remove a car from the right end 2 times. Time taken is 2 * 1 = 2. 
This obtains a total time of 2.

2 is the minimum time taken to remove all the cars containing illegal goods. 
There are no other ways to remove them with less time.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 2 * 10<sup>5</sup></code></li>
	<li><code>s[i]</code> is either <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='minimum-time-to-remove-all-cars-containing-illegal-goods'
class Solution:
    def minimumTime(self, s: str) -> int:
        n = len(s)
        
        if n == 1: return 1 if s == "1" else 0
        
        left, right = [], []
        
        curr = 0
        for x in s:
            if x == "1":
                curr += 1
            else:
                curr -= 1
            
            left.append(curr)
        
        curr = 0
        for x in s[::-1]:
            if x == "1":
                curr += 1
            else:
                curr -= 1
            
            right.append(curr)
        right.reverse()
        
        leftMax, leftCurr = [left[0]], left[0]
        for i in range(1, n):
            leftCurr = max(leftCurr, left[i])
            leftMax.append(leftCurr)
        
        rightMax, rightCurr = [right[-1]], right[-1]
        for i in range(n - 2, -1, -1):
            rightCurr = max(rightCurr, right[i])
            rightMax.append(rightCurr)
        rightMax.reverse()
        
        total = 2 * s.count("1")
        save = 0
        
        for i in range(n - 1):
            save = max(save, max(0, leftMax[i]) + max(0, rightMax[i + 1]))
        
        return total - save
```

