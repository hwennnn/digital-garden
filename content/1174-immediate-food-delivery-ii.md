---
title: 1174. Immediate Food Delivery II
draft: false
tags: 
  - leetcode-medium
  - database
date: 2025-03-02
---

[Problem Link](https://leetcode.com/problems/immediate-food-delivery-ii/)

## Description

---
<p>Table: <code>Delivery</code></p>

<pre>
+-----------------------------+---------+
| Column Name                 | Type    |
+-----------------------------+---------+
| delivery_id                 | int     |
| customer_id                 | int     |
| order_date                  | date    |
| customer_pref_delivery_date | date    |
+-----------------------------+---------+
delivery_id is the column of unique values of this table.
The table holds information about food delivery to customers that make orders at some date and specify a preferred delivery date (on the same order date or after it).
</pre>

<p>&nbsp;</p>

<p>If the customer&#39;s preferred delivery date is the same as the order date, then the order is called <strong>immediate;</strong> otherwise, it is called <strong>scheduled</strong>.</p>

<p>The <strong>first order</strong> of a customer is the order with the earliest order date that the customer made. It is guaranteed that a customer has precisely one first order.</p>

<p>Write a solution to find the percentage of immediate orders in the first orders of all customers, <strong>rounded to 2 decimal places</strong>.</p>

<p>The&nbsp;result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
Delivery table:
+-------------+-------------+------------+-----------------------------+
| delivery_id | customer_id | order_date | customer_pref_delivery_date |
+-------------+-------------+------------+-----------------------------+
| 1           | 1           | 2019-08-01 | 2019-08-02                  |
| 2           | 2           | 2019-08-02 | 2019-08-02                  |
| 3           | 1           | 2019-08-11 | 2019-08-12                  |
| 4           | 3           | 2019-08-24 | 2019-08-24                  |
| 5           | 3           | 2019-08-21 | 2019-08-22                  |
| 6           | 2           | 2019-08-11 | 2019-08-13                  |
| 7           | 4           | 2019-08-09 | 2019-08-09                  |
+-------------+-------------+------------+-----------------------------+
<strong>Output:</strong> 
+----------------------+
| immediate_percentage |
+----------------------+
| 50.00                |
+----------------------+
<strong>Explanation:</strong> 
The customer id 1 has a first order with delivery id 1 and it is scheduled.
The customer id 2 has a first order with delivery id 2 and it is immediate.
The customer id 3 has a first order with delivery id 5 and it is scheduled.
The customer id 4 has a first order with delivery id 7 and it is immediate.
Hence, half the customers have immediate first orders.
</pre>


## Solution

---
### PostgreSQL
``` sql title='immediate-food-delivery-ii'
-- Write your PostgreSQL query statement below
select round(avg(
    case 
        when d.order_date = d.customer_pref_delivery_date then 1
        else 0
    end
) * 100, 2) as immediate_percentage
from delivery d
where (d.customer_id, d.order_date) in (
    select d.customer_id, min(order_date)
    from delivery d
    group by d.customer_id
);
```

