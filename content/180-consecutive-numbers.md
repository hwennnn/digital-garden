---
title: 180. Consecutive Numbers
draft: false
tags: 
  - leetcode-medium
  - database
date: 2025-03-02
---

[Problem Link](https://leetcode.com/problems/consecutive-numbers/)

## Description

---
<p>Table: <code>Logs</code></p>

<pre>
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| num         | varchar |
+-------------+---------+
In SQL, id is the primary key for this table.
id is an autoincrement column starting from 1.
</pre>

<p>&nbsp;</p>

<p>Find all numbers that appear at least three times consecutively.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The&nbsp;result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Logs table:
+----+-----+
| id | num |
+----+-----+
| 1  | 1   |
| 2  | 1   |
| 3  | 1   |
| 4  | 2   |
| 5  | 1   |
| 6  | 2   |
| 7  | 2   |
+----+-----+
<strong>Output:</strong> 
+-----------------+
| ConsecutiveNums |
+-----------------+
| 1               |
+-----------------+
<strong>Explanation:</strong> 1 is the only number that appears consecutively for at least three times.
</pre>


## Solution

---
### PostgreSQL
``` sql title='consecutive-numbers'
-- Write your PostgreSQL query statement below
select distinct l1.num as ConsecutiveNums
from logs l1
where exists (
    select 1 from logs l2
    where l2.id = l1.id + 1 and l2.num = l1.num
) and exists (
    select 1 from logs l2
    where l2.id = l1.id + 2 and l2.num = l1.num
);
```

