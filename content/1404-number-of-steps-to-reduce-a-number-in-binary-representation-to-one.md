---
title: 1404. Number of Steps to Reduce a Number in Binary Representation to One
draft: false
tags: 
  - leetcode-medium
  - string
  - bit-manipulation
  - simulation
  - weekly-contest-183
  - contest-question
date: 2020-08-31
---

[Problem Link](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/)

## Description

---
<p>Given the binary representation of an integer as a string <code>s</code>, return <em>the number of steps to reduce it to </em><code>1</code><em> under the following rules</em>:</p>

<ul>
	<li>
	<p>If the current number is even, you have to divide it by <code>2</code>.</p>
	</li>
	<li>
	<p>If the current number is odd, you have to add <code>1</code> to it.</p>
	</li>
</ul>

<p>It is guaranteed that you can always reach one for all test cases.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;1101&quot;
<strong>Output:</strong> 6
<strong>Explanation:</strong> &quot;1101&quot; corressponds to number 13 in their decimal representation.
Step 1) 13 is odd, add 1 and obtain 14.&nbsp;
Step 2) 14 is even, divide by 2 and obtain 7.
Step 3) 7 is odd, add 1 and obtain 8.
Step 4) 8 is even, divide by 2 and obtain 4.&nbsp; 
Step 5) 4 is even, divide by 2 and obtain 2.&nbsp;
Step 6) 2 is even, divide by 2 and obtain 1.&nbsp; 
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;10&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> &quot;10&quot; corresponds to number 2 in their decimal representation.
Step 1) 2 is even, divide by 2 and obtain 1.&nbsp; 
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;1&quot;
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length&nbsp;&lt;= 500</code></li>
	<li><code>s</code> consists of characters &#39;0&#39; or &#39;1&#39;</li>
	<li><code>s[0] == &#39;1&#39;</code></li>
</ul>


## Solution

---
### Python3
``` py title='number-of-steps-to-reduce-a-number-in-binary-representation-to-one'
class Solution:
    def numSteps(self, s: str) -> int:
        N = len(s)
        res = 0
        carry = 0

        for i in range(N - 1, 0, -1):
            # odd number
            if int(s[i]) + carry == 1:
                carry = 1
                res += 2 # add 1 and divide by two
            else:
                res += 1

        return res + carry
```
### C++
``` cpp title='number-of-steps-to-reduce-a-number-in-binary-representation-to-one'
class Solution { // my own simulation 
public:
    int numSteps(string s) {        
        int ans = 0;
        while(s!="1"){
            const int n = s.size();
            if(s[n-1]=='0'){       // using right shift to simulate divide in binary          
               // s=s.substr(0,n-1); //ok
                s.pop_back(); // better
            }else{                 // binary addition
                int i = n - 1;
                for(; i>=0 && s[i]!='0'; i--) s[i]='0';
                if(i>= 0) s[i]='1';
                else 
                    s = '1'+s;
                    //s.insert(s.begin(), '1'); //ok
                    //s.insert(0, 1,'1'); //ok
            }
            ans++;
        }
        return ans;
    }
}; 
```

