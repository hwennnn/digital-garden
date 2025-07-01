---
title: 728. Self Dividing Numbers
draft: false
tags: 
  - leetcode-easy
  - math
  - weekly-contest-59
  - contest-question
date: 2019-10-09
---

[Problem Link](https://leetcode.com/problems/self-dividing-numbers/)

## Description

---
<p>A <strong>self-dividing number</strong> is a number that is divisible by every digit it contains.</p>

<ul>
	<li>For example, <code>128</code> is <strong>a self-dividing number</strong> because <code>128 % 1 == 0</code>, <code>128 % 2 == 0</code>, and <code>128 % 8 == 0</code>.</li>
</ul>

<p>A <strong>self-dividing number</strong> is not allowed to contain the digit zero.</p>

<p>Given two integers <code>left</code> and <code>right</code>, return <em>a list of all the <strong>self-dividing numbers</strong> in the range</em> <code>[left, right]</code> (both <strong>inclusive</strong>).</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> left = 1, right = 22
<strong>Output:</strong> [1,2,3,4,5,6,7,8,9,11,12,15,22]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> left = 47, right = 85
<strong>Output:</strong> [48,55,66,77]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= left &lt;= right &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='self-dividing-numbers'
class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        
        temp = []
        check = True
        for i in range(left,right+1):
            
            if i <10:
                temp.append(i)
            
            elif "0" not in str(i):

                for d in str(i):
                    if i%int(d) !=0:
                        print(i)
                        check = False
                        break
                if check:
                    temp.append(i)
        
            check = True
        return temp
```
### Python
``` py title='self-dividing-numbers'
class Solution(object):
    def selfDividingNumbers(self, left, right):
        """
        :type left: int
        :type right: int
        :rtype: List[int]
        """
        ans = []
        isSelfDividing = True
        for i in range(left, right+1):
        # single digit
            if i < 10:
                ans.append(i)      
            # check if not contains 0, aka mod 10 != 0
            elif '0' not in str(i):
                for d in str(i):
                    if i%int(d):
                        isSelfDividing = False
                        break
                if isSelfDividing:
                    ans.append(i)

                isSelfDividing = True
        return ans           
```

