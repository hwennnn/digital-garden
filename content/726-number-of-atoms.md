---
title: 726. Number of Atoms
draft: false
tags: 
  - leetcode-hard
  - hash-table
  - string
  - stack
  - sorting
  - weekly-contest-58
  - contest-question
date: 2024-07-14
---

[Problem Link](https://leetcode.com/problems/number-of-atoms/)

## Description

---
<p>Given a string <code>formula</code> representing a chemical formula, return <em>the count of each atom</em>.</p>

<p>The atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name.</p>

<p>One or more digits representing that element&#39;s count may follow if the count is greater than <code>1</code>. If the count is <code>1</code>, no digits will follow.</p>

<ul>
	<li>For example, <code>&quot;H2O&quot;</code> and <code>&quot;H2O2&quot;</code> are possible, but <code>&quot;H1O2&quot;</code> is impossible.</li>
</ul>

<p>Two formulas are concatenated together to produce another formula.</p>

<ul>
	<li>For example, <code>&quot;H2O2He3Mg4&quot;</code> is also a formula.</li>
</ul>

<p>A formula placed in parentheses, and a count (optionally added) is also a formula.</p>

<ul>
	<li>For example, <code>&quot;(H2O2)&quot;</code> and <code>&quot;(H2O2)3&quot;</code> are formulas.</li>
</ul>

<p>Return the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than <code>1</code>), followed by the second name (in sorted order), followed by its count (if that count is more than <code>1</code>), and so on.</p>

<p>The test cases are generated so that all the values in the output fit in a <strong>32-bit</strong> integer.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> formula = &quot;H2O&quot;
<strong>Output:</strong> &quot;H2O&quot;
<strong>Explanation:</strong> The count of elements are {&#39;H&#39;: 2, &#39;O&#39;: 1}.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> formula = &quot;Mg(OH)2&quot;
<strong>Output:</strong> &quot;H2MgO2&quot;
<strong>Explanation:</strong> The count of elements are {&#39;H&#39;: 2, &#39;Mg&#39;: 1, &#39;O&#39;: 2}.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> formula = &quot;K4(ON(SO3)2)2&quot;
<strong>Output:</strong> &quot;K4N2O14S4&quot;
<strong>Explanation:</strong> The count of elements are {&#39;K&#39;: 4, &#39;N&#39;: 2, &#39;O&#39;: 14, &#39;S&#39;: 4}.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= formula.length &lt;= 1000</code></li>
	<li><code>formula</code> consists of English letters, digits, <code>&#39;(&#39;</code>, and <code>&#39;)&#39;</code>.</li>
	<li><code>formula</code> is always valid.</li>
</ul>


## Solution

---
### Python3
``` py title='number-of-atoms'
class Solution:
    def countOfAtoms(self, formula: str) -> str:

        def parsed(s):
            N = len(s)
            stack = []
            i = 0

            while i < N:
                if s[i].isupper():
                    name = s[i]
                    i += 1

                    while i < N and s[i].islower():
                        name += s[i]
                        i += 1
                    
                    stack.append(name)
                elif s[i].isdigit():
                    count = 0

                    while i < N and s[i].isdigit():
                        count = count * 10 + int(s[i])
                        i += 1
                    
                    stack.append(str(count))
                else:
                    stack.append(s[i])
                    i += 1

            return stack

        s = parsed(formula)
        N = len(s)
        i = 0
        stack = [Counter()]

        while i < N:
            x = s[i]

            if x == "(":
                stack.append(Counter())
            else:
                count = 1

                if i + 1 < N and s[i + 1].isdigit():
                    count = int(s[i + 1])
                    i += 1
                
                mp = stack.pop() if x == ")" else {x : 1}

                for k, v in mp.items():
                    stack[-1][k] += v * count
                
            i += 1

        return "".join([k + (str(v) if v > 1 else "") for k, v in sorted(stack[-1].items())])


```

