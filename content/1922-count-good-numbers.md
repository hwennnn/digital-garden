---
title: 1922. Count Good Numbers
draft: false
tags: 
  - leetcode-medium
  - math
  - recursion
  - weekly-contest-248
  - contest-question
date: 2021-07-06
---

[Problem Link](https://leetcode.com/problems/count-good-numbers/)

## Description

---
<p>A digit string is <strong>good</strong> if the digits <strong>(0-indexed)</strong> at <strong>even</strong> indices are <strong>even</strong> and the digits at <strong>odd</strong> indices are <strong>prime</strong> (<code>2</code>, <code>3</code>, <code>5</code>, or <code>7</code>).</p>

<ul>
	<li>For example, <code>&quot;2582&quot;</code> is good because the digits (<code>2</code> and <code>8</code>) at even positions are even and the digits (<code>5</code> and <code>2</code>) at odd positions are prime. However, <code>&quot;3245&quot;</code> is <strong>not</strong> good because <code>3</code> is at an even index but is not even.</li>
</ul>

<p>Given an integer <code>n</code>, return <em>the <strong>total</strong> number of good digit strings of length </em><code>n</code>. Since the answer may be large, <strong>return it modulo </strong><code>10<sup>9</sup> + 7</code>.</p>

<p>A <strong>digit string</strong> is a string consisting of digits <code>0</code> through <code>9</code> that may contain leading zeros.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 1
<strong>Output:</strong> 5
<strong>Explanation:</strong> The good numbers of length 1 are &quot;0&quot;, &quot;2&quot;, &quot;4&quot;, &quot;6&quot;, &quot;8&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 4
<strong>Output:</strong> 400
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 50
<strong>Output:</strong> 564908303
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>15</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='count-good-numbers'
class Solution:
    def countGoodNumbers(self, n: int) -> int:
        M = 10 ** 9 + 7
        even = (n + 1) // 2
        odd = n // 2
        
        def ipower(base, exp):
            if exp == 0: return 1
            
            ans = ipower(base, exp // 2)
            
            if exp % 2 == 0:
                return (ans * ans) % M
            else:
                return (base * ans * ans) % M
            
        return (ipower(5, even) * ipower(4, odd)) % M
        
        
```
### C++
``` cpp title='count-good-numbers'
class Solution {
public:
    int M = 1e9 + 7;
    
    long long power(long long base, long long exp){
        if (exp == 0) return 1;
        
        long long res = power(base, exp / 2) % M;
        
        res *= res;
        res %= M;
        
        if (exp & 1)
            res *= base;
        res %= M;
        
        return res;
    }
    int countGoodNumbers(long long n) {
        long long even = (n + 1) / 2;
        long long odd = n - even;
        
        return (power(5, even) * power(4, odd)) % M;
    }
};
```

