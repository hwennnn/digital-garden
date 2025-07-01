---
title: 552. Student Attendance Record II
draft: false
tags: 
  - leetcode-hard
  - dynamic-programming
  - weekly-contest-28
  - contest-question
date: 2024-05-26
---

[Problem Link](https://leetcode.com/problems/student-attendance-record-ii/)

## Description

---
<p>An attendance record for a student can be represented as a string where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:</p>

<ul>
	<li><code>&#39;A&#39;</code>: Absent.</li>
	<li><code>&#39;L&#39;</code>: Late.</li>
	<li><code>&#39;P&#39;</code>: Present.</li>
</ul>

<p>Any student is eligible for an attendance award if they meet <strong>both</strong> of the following criteria:</p>

<ul>
	<li>The student was absent (<code>&#39;A&#39;</code>) for <strong>strictly</strong> fewer than 2 days <strong>total</strong>.</li>
	<li>The student was <strong>never</strong> late (<code>&#39;L&#39;</code>) for 3 or more <strong>consecutive</strong> days.</li>
</ul>

<p>Given an integer <code>n</code>, return <em>the <strong>number</strong> of possible attendance records of length</em> <code>n</code><em> that make a student eligible for an attendance award. The answer may be very large, so return it <strong>modulo</strong> </em><code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> 8
<strong>Explanation:</strong> There are 8 records with length 2 that are eligible for an award:
&quot;PP&quot;, &quot;AP&quot;, &quot;PA&quot;, &quot;LP&quot;, &quot;PL&quot;, &quot;AL&quot;, &quot;LA&quot;, &quot;LL&quot;
Only &quot;AA&quot; is not eligible because there are 2 absences (there need to be fewer than 2).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 1
<strong>Output:</strong> 3
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 10101
<strong>Output:</strong> 183236316
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='student-attendance-record-ii'
MOD = 10 ** 9 + 7

@cache
def dp(index, absent, late):
    if index == 0: return 1

    res = dp(index - 1, absent, 0) # present
    res %= MOD
    if absent + 1 < 2:
        res += dp(index - 1, absent + 1, 0) # absent
        res %= MOD
    if late + 1 < 3:
        res += dp(index - 1, absent, late + 1) # late
        res %= MOD
    
    return res

class Solution:
    def checkRecord(self, n: int) -> int:
        return dp(n, 0, 0)
```
### C++
``` cpp title='student-attendance-record-ii'
class Solution {
public:
    int dp[100005][2][3];
    int MOD = 1e9 + 7;

    long long solve(int index, int absent, int late) {
        if (absent == 2 || late == 3) return 0LL;
        if (index == 0) return 1LL;

        if (dp[index][absent][late] != -1) return dp[index][absent][late];

        long long res = solve(index - 1, absent, 0) % MOD;
        res = (res + solve(index - 1, absent + 1, 0) % MOD) % MOD;
        res = (res + solve(index - 1, absent, late + 1) % MOD) % MOD;

        return dp[index][absent][late] = res;
    }

    int checkRecord(int n) {
        memset(dp, -1, sizeof (dp));
        return solve(n, 0, 0);
    }
};
```

