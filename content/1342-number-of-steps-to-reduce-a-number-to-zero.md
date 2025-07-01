---
title: 1342. Number of Steps to Reduce a Number to Zero
draft: false
tags: 
  - leetcode-easy
  - math
  - bit-manipulation
  - biweekly-contest-19
  - contest-question
date: 2020-09-05
---

[Problem Link](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/)

## Description

---
<p>Given an integer <code>num</code>, return <em>the number of steps to reduce it to zero</em>.</p>

<p>In one step, if the current number is even, you have to divide it by <code>2</code>, otherwise, you have to subtract <code>1</code> from it.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> num = 14
<strong>Output:</strong> 6
<strong>Explanation:</strong>&nbsp;
Step 1) 14 is even; divide by 2 and obtain 7.&nbsp;
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3.&nbsp;
Step 4) 3 is odd; subtract 1 and obtain 2.&nbsp;
Step 5) 2 is even; divide by 2 and obtain 1.&nbsp;
Step 6) 1 is odd; subtract 1 and obtain 0.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> num = 8
<strong>Output:</strong> 4
<strong>Explanation:</strong>&nbsp;
Step 1) 8 is even; divide by 2 and obtain 4.&nbsp;
Step 2) 4 is even; divide by 2 and obtain 2.&nbsp;
Step 3) 2 is even; divide by 2 and obtain 1.&nbsp;
Step 4) 1 is odd; subtract 1 and obtain 0.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> num = 123
<strong>Output:</strong> 12
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= num &lt;= 10<sup>6</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='number-of-steps-to-reduce-a-number-to-zero'
class Solution:
    def numberOfSteps(self, num: int) -> int:
        res = 0
        
        while num > 0:
            res += 1
            
            if num % 2 == 0:
                num //= 2
            else:
                num -= 1
        
        return res
```
### C++
``` cpp title='number-of-steps-to-reduce-a-number-to-zero'
class Solution {
public:
    int numberOfSteps (int num) {
        if (!num) return 0;
        int res = 0;
        
        while (num){
            res += (num&1) ? 2 : 1;
            num >>= 1;
        }
        
        return res - 1;
        
    }
};
```

