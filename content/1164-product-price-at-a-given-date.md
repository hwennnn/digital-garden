---
title: 1164. Product Price at a Given Date
draft: false
tags: 
  - leetcode-medium
  - database
date: 2025-03-02
---

[Problem Link](https://leetcode.com/problems/product-price-at-a-given-date/)

## Description

---
<p>Table: <code>Products</code></p>

<pre>
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| product_id    | int     |
| new_price     | int     |
| change_date   | date    |
+---------------+---------+
(product_id, change_date) is the primary key (combination of columns with unique values) of this table.
Each row of this table indicates that the price of some product was changed to a new price at some date.</pre>

<p>&nbsp;</p>

<p>Write a solution to find the prices of all products on <code>2019-08-16</code>. Assume the price of all products before any change is <code>10</code>.</p>

<p>Return the result table in <strong>any order</strong>.</p>

<p>The&nbsp;result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Products table:
+------------+-----------+-------------+
| product_id | new_price | change_date |
+------------+-----------+-------------+
| 1          | 20        | 2019-08-14  |
| 2          | 50        | 2019-08-14  |
| 1          | 30        | 2019-08-15  |
| 1          | 35        | 2019-08-16  |
| 2          | 65        | 2019-08-17  |
| 3          | 20        | 2019-08-18  |
+------------+-----------+-------------+
<strong>Output:</strong> 
+------------+-------+
| product_id | price |
+------------+-------+
| 2          | 50    |
| 1          | 35    |
| 3          | 10    |
+------------+-------+
</pre>


## Solution

---
### PostgreSQL
``` sql title='product-price-at-a-given-date'
-- Write your PostgreSQL query statement below
select p.product_id, p.new_price as price
from products p, (
    select p.product_id, max(p.change_date) as change_date
    from products p
    where p.change_date <= '2019-08-16'
    group by p.product_id
) as p2
where p.product_id = p2.product_id and p.change_date = p2.change_date
UNION
select p.product_id, 10 as price
from products p
group by p.product_id
having (min(p.change_date) > '2019-08-16');
```

