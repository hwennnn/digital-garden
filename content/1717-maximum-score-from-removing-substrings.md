---
title: 1717. Maximum Score From Removing Substrings
draft: false
tags: 
  - leetcode-medium
  - string
  - stack
  - greedy
  - biweekly-contest-43
  - contest-question
date: 2024-07-12
---

[Problem Link](https://leetcode.com/problems/maximum-score-from-removing-substrings/)

## Description

---
<p>You are given a string <code>s</code> and two integers <code>x</code> and <code>y</code>. You can perform two types of operations any number of times.</p>

<ul>
	<li>Remove substring <code>&quot;ab&quot;</code> and gain <code>x</code> points.

	<ul>
		<li>For example, when removing <code>&quot;ab&quot;</code> from <code>&quot;c<u>ab</u>xbae&quot;</code> it becomes <code>&quot;cxbae&quot;</code>.</li>
	</ul>
	</li>
	<li>Remove substring <code>&quot;ba&quot;</code> and gain <code>y</code> points.
	<ul>
		<li>For example, when removing <code>&quot;ba&quot;</code> from <code>&quot;cabx<u>ba</u>e&quot;</code> it becomes <code>&quot;cabxe&quot;</code>.</li>
	</ul>
	</li>
</ul>

<p>Return <em>the maximum points you can gain after applying the above operations on</em> <code>s</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;cdbcbbaaabab&quot;, x = 4, y = 5
<strong>Output:</strong> 19
<strong>Explanation:</strong>
- Remove the &quot;ba&quot; underlined in &quot;cdbcbbaaa<u>ba</u>b&quot;. Now, s = &quot;cdbcbbaaab&quot; and 5 points are added to the score.
- Remove the &quot;ab&quot; underlined in &quot;cdbcbbaa<u>ab</u>&quot;. Now, s = &quot;cdbcbbaa&quot; and 4 points are added to the score.
- Remove the &quot;ba&quot; underlined in &quot;cdbcb<u>ba</u>a&quot;. Now, s = &quot;cdbcba&quot; and 5 points are added to the score.
- Remove the &quot;ba&quot; underlined in &quot;cdbc<u>ba</u>&quot;. Now, s = &quot;cdbc&quot; and 5 points are added to the score.
Total score = 5 + 4 + 5 + 5 = 19.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aabbaaxybbaabb&quot;, x = 5, y = 4
<strong>Output:</strong> 20
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= x, y &lt;= 10<sup>4</sup></code></li>
	<li><code>s</code> consists of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='maximum-score-from-removing-substrings'
class Solution:
    def maximumGain(self, s: str, cx: int, cy: int) -> int:
        N = len(s)
        
        def helper(s, target, cost):
            res = 0
            stack = []

            for x in s:
                stack.append(x)

                while len(stack) >= 2:
                    if stack[-1] == target[-1] and stack[-2] == target[-2]:
                        stack.pop()
                        stack.pop()
                        res += cost
                    else:
                        break
            
            return "".join(stack), res

        if cx >= cy:
            s, cost1 = helper(s, "ab", cx)
            s, cost2 = helper(s, "ba", cy)
            return cost1 + cost2
        else:
            s, cost1 = helper(s, "ba", cy)
            s, cost2 = helper(s, "ab", cx)

            return cost1 + cost2
```

