---
title: 1871. Jump Game VII
draft: false
tags: 
  - leetcode-medium
  - string
  - dynamic-programming
  - sliding-window
  - prefix-sum
  - weekly-contest-242
  - contest-question
date: 2021-05-29
---

[Problem Link](https://leetcode.com/problems/jump-game-vii/)

## Description

---
<p>You are given a <strong>0-indexed</strong> binary string <code>s</code> and two integers <code>minJump</code> and <code>maxJump</code>. In the beginning, you are standing at index <code>0</code>, which is equal to <code>&#39;0&#39;</code>. You can move from index <code>i</code> to index <code>j</code> if the following conditions are fulfilled:</p>

<ul>
	<li><code>i + minJump &lt;= j &lt;= min(i + maxJump, s.length - 1)</code>, and</li>
	<li><code>s[j] == &#39;0&#39;</code>.</li>
</ul>

<p>Return <code>true</code><i> if you can reach index </i><code>s.length - 1</code><i> in </i><code>s</code><em>, or </em><code>false</code><em> otherwise.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;<u>0</u>11<u>0</u>1<u>0</u>&quot;, minJump = 2, maxJump = 3
<strong>Output:</strong> true
<strong>Explanation:</strong>
In the first step, move from index 0 to index 3. 
In the second step, move from index 3 to index 5.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;01101110&quot;, minJump = 2, maxJump = 3
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s[i]</code> is either <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li>
	<li><code>s[0] == &#39;0&#39;</code></li>
	<li><code>1 &lt;= minJump &lt;= maxJump &lt; s.length</code></li>
</ul>


## Solution

---
### Python3
``` py title='jump-game-vii'
class Solution:
    def canReach(self, s: str, minJump: int, maxJump: int) -> bool:
        dp = [c == "0" for c in s]
        m = 0
        
        for i in range(1, len(s)):
            if i >= minJump: m += dp[i - minJump]
            if i > maxJump: m -= dp[i - maxJump - 1]
            
            dp[i] &= m > 0
        
        return dp[-1]
```

