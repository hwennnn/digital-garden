---
title: 1012. Numbers With Repeated Digits
draft: false
tags: 
  - leetcode-hard
  - math
  - dynamic-programming
  - weekly-contest-128
  - contest-question
date: 2022-09-06
---

[Problem Link](https://leetcode.com/problems/numbers-with-repeated-digits/)

## Description

---
<p>Given an integer <code>n</code>, return <em>the number of positive integers in the range </em><code>[1, n]</code><em> that have <strong>at least one</strong> repeated digit</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 20
<strong>Output:</strong> 1
<strong>Explanation:</strong> The only positive number (&lt;= 20) with at least 1 repeated digit is 11.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 100
<strong>Output:</strong> 10
<strong>Explanation:</strong> The positive numbers (&lt;= 100) with atleast 1 repeated digit are 11, 22, 33, 44, 55, 66, 77, 88, 99, and 100.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 1000
<strong>Output:</strong> 262
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='numbers-with-repeated-digits'
class Solution:
    def numDupDigitsAtMostN(self, n: int) -> int:
        
        def findNonRepeated(n):
            digits = []

            while n > 0:
                digits.append(n % 10)
                n //= 10

            digits.reverse()

            N = len(digits)

            @cache
            def dp(pos, tight, mask):
                if pos == N:
                    return 1 if mask != 0 else 0

                limit = digits[pos] if tight else 9
                res = 0

                for i in range(0, limit + 1):
                    if mask & (1 << i) > 0: continue

                    nextTight = tight and i == digits[pos]
                    nextMask = mask if i == 0 and mask == 0 else mask ^ (1 << i)

                    res += dp(pos + 1, nextTight, nextMask)

                return res
            
            return dp(0, True, 0)
        
        return n - findNonRepeated(n)
```
### C++
``` cpp title='numbers-with-repeated-digits'
class Solution {
public:
    //dp[pos][tight][start][rep][mask];
    int dp[10][2][2][2][1<<10];
    vector<int>num;
    int solve(int pos,int tight,int start,int rep,int mask)
    {
        if(pos == num.size())
        {
            return rep;
        }
        int &ans= dp[pos][tight][start][rep][mask];
        if(ans!=-1)return ans;

        int k = num[pos];
        if(tight)k=9;
        int res=0;
        for(int i=0;i<=k;i++)
        {
            int ns = start||i>0;//number started yet or not
            int nt = tight||i<k;//tight for next number
            if(ns){
                res+=solve(pos+1,nt,ns,rep||(mask&(1<<i)),mask|1<<i);
            }
            else{
                res+=solve(pos+1,nt,0,rep,mask);
            }

        }
        ans= res;
        return res;
    }
    int numDupDigitsAtMostN(int N) {
        while(N){
            num.push_back(N%10);
            N/=10;
        }
        reverse(num.begin(),num.end());
        memset(dp,-1,sizeof(dp));
        return solve(0,0,0,0,0);
    }
};
```

