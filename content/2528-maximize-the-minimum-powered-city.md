---
title: 2528. Maximize the Minimum Powered City
draft: false
tags: 
  - leetcode-hard
  - array
  - binary-search
  - greedy
  - queue
  - sliding-window
  - prefix-sum
  - biweekly-contest-95
  - contest-question
date: 2023-01-08
---

[Problem Link](https://leetcode.com/problems/maximize-the-minimum-powered-city/)

## Description

---
<p>You are given a <strong>0-indexed</strong> integer array <code>stations</code> of length <code>n</code>, where <code>stations[i]</code> represents the number of power stations in the <code>i<sup>th</sup></code> city.</p>

<p>Each power station can provide power to every city in a fixed <strong>range</strong>. In other words, if the range is denoted by <code>r</code>, then a power station at city <code>i</code> can provide power to all cities <code>j</code> such that <code>|i - j| &lt;= r</code> and <code>0 &lt;= i, j &lt;= n - 1</code>.</p>

<ul>
	<li>Note that <code>|x|</code> denotes <strong>absolute</strong> value. For example, <code>|7 - 5| = 2</code> and <code>|3 - 10| = 7</code>.</li>
</ul>

<p>The <strong>power</strong> of a city is the total number of power stations it is being provided power from.</p>

<p>The government has sanctioned building <code>k</code> more power stations, each of which can be built in any city, and have the same range as the pre-existing ones.</p>

<p>Given the two integers <code>r</code> and <code>k</code>, return <em>the <strong>maximum possible minimum power</strong> of a city, if the additional power stations are built optimally.</em></p>

<p><strong>Note</strong> that you can build the <code>k</code> power stations in multiple cities.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> stations = [1,2,4,5,0], r = 1, k = 2
<strong>Output:</strong> 5
<strong>Explanation:</strong> 
One of the optimal ways is to install both the power stations at city 1. 
So stations will become [1,4,4,5,0].
- City 0 is provided by 1 + 4 = 5 power stations.
- City 1 is provided by 1 + 4 + 4 = 9 power stations.
- City 2 is provided by 4 + 4 + 5 = 13 power stations.
- City 3 is provided by 5 + 4 = 9 power stations.
- City 4 is provided by 5 + 0 = 5 power stations.
So the minimum power of a city is 5.
Since it is not possible to obtain a larger power, we return 5.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> stations = [4,4,4,4], r = 0, k = 3
<strong>Output:</strong> 4
<strong>Explanation:</strong> 
It can be proved that we cannot make the minimum power of a city greater than 4.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == stations.length</code></li>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= stations[i] &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= r&nbsp;&lt;= n - 1</code></li>
	<li><code>0 &lt;= k&nbsp;&lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximize-the-minimum-powered-city'
class Solution:
    def maxPower(self, stations: List[int], r: int, k: int) -> int:
        N = len(stations)
        prefix = [0] * (N + 1)

        for i in range(N):
            left = max(0, i - r)
            right = min(N - 1, i + r)

            prefix[left] += stations[i]
            prefix[right + 1] -= stations[i]
        
        for i in range(1, N):
            prefix[i] += prefix[i - 1]

        def good(mid):
            stations = k
            build = [0] * (N + 1)

            for i in range(N):
                if i > 0:
                    build[i] += build[i - 1]
                
                curr = prefix[i] + build[i]

                if curr < mid:
                    need = mid - curr
                    stations -= need
                    if stations < 0:
                        return False
                    
                    j = min(i + r + r, N - 1)
                    build[i] += need
                    build[j + 1] -= need
            
            return stations >= 0

        left, right = 0, 10 ** 18
        res = 0

        while left <= right:
            mid = left + (right - left) // 2

            if good(mid):
                res = mid
                left = mid + 1
            else:
                right = mid - 1
        
        return res
```

