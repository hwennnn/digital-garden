---
title: 2478. Number of Beautiful Partitions
draft: false
tags: 
  - leetcode-hard
  - string
  - dynamic-programming
  - weekly-contest-320
  - contest-question
date: 2022-11-21
---

[Problem Link](https://leetcode.com/problems/number-of-beautiful-partitions/)

## Description

---
<p>You are given a string <code>s</code> that consists of the digits <code>&#39;1&#39;</code> to <code>&#39;9&#39;</code> and two integers <code>k</code> and <code>minLength</code>.</p>

<p>A partition of <code>s</code> is called <strong>beautiful</strong> if:</p>

<ul>
	<li><code>s</code> is partitioned into <code>k</code> non-intersecting substrings.</li>
	<li>Each substring has a length of <strong>at least</strong> <code>minLength</code>.</li>
	<li>Each substring starts with a <strong>prime</strong> digit and ends with a <strong>non-prime</strong> digit. Prime digits are <code>&#39;2&#39;</code>, <code>&#39;3&#39;</code>, <code>&#39;5&#39;</code>, and <code>&#39;7&#39;</code>, and the rest of the digits are non-prime.</li>
</ul>

<p>Return<em> the number of <strong>beautiful</strong> partitions of </em><code>s</code>. Since the answer may be very large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>A <strong>substring</strong> is a contiguous sequence of characters within a string.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;23542185131&quot;, k = 3, minLength = 2
<strong>Output:</strong> 3
<strong>Explanation:</strong> There exists three ways to create a beautiful partition:
&quot;2354 | 218 | 5131&quot;
&quot;2354 | 21851 | 31&quot;
&quot;2354218 | 51 | 31&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;23542185131&quot;, k = 3, minLength = 3
<strong>Output:</strong> 1
<strong>Explanation:</strong> There exists one way to create a beautiful partition: &quot;2354 | 218 | 5131&quot;.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;3312958&quot;, k = 3, minLength = 1
<strong>Output:</strong> 1
<strong>Explanation:</strong> There exists one way to create a beautiful partition: &quot;331 | 29 | 58&quot;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k, minLength &lt;= s.length &lt;= 1000</code></li>
	<li><code>s</code> consists of the digits <code>&#39;1&#39;</code> to <code>&#39;9&#39;</code>.</li>
</ul>


## Solution

---
### C++
``` cpp title='number-of-beautiful-partitions'
class Solution {
public:
    const int M = 1e9 + 7;
    int cache[1001][1001];

    bool isPrime(char x) {
        return x == '2' || x == '3' || x == '5' || x == '7';
    }

    int go(int index, int parts, string& s, int k, int minLength, int N) {
        if (cache[index][parts] != -1) return cache[index][parts];
            
        if (parts >= k) return cache[index][parts] = 0;

        if (parts == k - 1) return cache[index][parts] = (N - index >= minLength);

        int res = 0;

        for (int j = index + minLength; j < N - (k - parts - 1) * minLength + 1; j++) {
            if (isPrime(s[j]) && !isPrime(s[j - 1])) {
                res += go(j, parts + 1, s, k, minLength, N);
                res %= M;
            }
        }

        return cache[index][parts] = res;
    }

    int beautifulPartitions(string s, int k, int minLength) {
        int N = s.size();
        memset(cache, -1, sizeof(cache));

        if (!isPrime(s[0]) || isPrime(s[N - 1])) return 0;
        
        return go(0, 0, s, k, minLength, N);
    }
};
```
### Python3
``` py title='number-of-beautiful-partitions'
class Solution:
    def beautifulPartitions(self, s: str, k: int, minLength: int) -> int:
        N = len(s)
        M = 10 ** 9 + 7
        
        primes = set(["2", "3", "5", "7"])
        
        if s[0] not in primes or s[-1] in primes: return 0
        
        @cache
        def go(index, parts):
            if parts == 0 and index <= N: return 1
            if index >= N: return 0
            
            res = go(index + 1, parts)
            
            if s[index] in primes and s[index - 1] not in primes:
                res += go(index + minLength, parts - 1)
            
            return res % M
        
        return go(minLength, k - 1)
```

