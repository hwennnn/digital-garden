---
title: 1491. Average Salary Excluding the Minimum and Maximum Salary
draft: false
tags: 
  - leetcode-easy
  - array
  - sorting
date: 2023-05-01
---

[Problem Link](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/)

## Description

---
<p>You are given an array of <strong>unique</strong> integers <code>salary</code> where <code>salary[i]</code> is the salary of the <code>i<sup>th</sup></code> employee.</p>

<p>Return <em>the average salary of employees excluding the minimum and maximum salary</em>. Answers within <code>10<sup>-5</sup></code> of the actual answer will be accepted.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> salary = [4000,3000,1000,2000]
<strong>Output:</strong> 2500.00000
<strong>Explanation:</strong> Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> salary = [1000,2000,3000]
<strong>Output:</strong> 2000.00000
<strong>Explanation:</strong> Minimum salary and maximum salary are 1000 and 3000 respectively.
Average salary excluding minimum and maximum salary is (2000) / 1 = 2000
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= salary.length &lt;= 100</code></li>
	<li><code>1000 &lt;= salary[i] &lt;= 10<sup>6</sup></code></li>
	<li>All the integers of <code>salary</code> are <strong>unique</strong>.</li>
</ul>


## Solution

---
### Python
``` py title='average-salary-excluding-the-minimum-and-maximum-salary'
class Solution:
    def average(self, salary: List[int]) -> float:
        N = len(salary)
        total = sum(salary)
        mmax = max(salary)
        mmin = min(salary)

        return (total - mmax - mmin) / (N - 2)
```

