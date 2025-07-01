---
title: 2706. Buy Two Chocolates
draft: false
tags: 
  - leetcode-easy
  - array
  - greedy
  - sorting
  - biweekly-contest-105
  - contest-question
date: 2023-12-20
---

[Problem Link](https://leetcode.com/problems/buy-two-chocolates/)

## Description

---
<p>You are given an integer array <code>prices</code> representing the prices of various chocolates in a store. You are also given a single integer <code>money</code>, which represents your initial amount of money.</p>

<p>You must buy <strong>exactly</strong> two chocolates in such a way that you still have some <strong>non-negative</strong> leftover money. You would like to minimize the sum of the prices of the two chocolates you buy.</p>

<p>Return <em>the amount of money you will have leftover after buying the two chocolates</em>. If there is no way for you to buy two chocolates without ending up in debt, return <code>money</code>. Note that the leftover must be non-negative.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> prices = [1,2,2], money = 3
<strong>Output:</strong> 0
<strong>Explanation:</strong> Purchase the chocolates priced at 1 and 2 units respectively. You will have 3 - 3 = 0 units of money afterwards. Thus, we return 0.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> prices = [3,2,3], money = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> You cannot buy 2 chocolates without going in debt, so we return 3.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= prices.length &lt;= 50</code></li>
	<li><code>1 &lt;= prices[i] &lt;= 100</code></li>
	<li><code>1 &lt;= money &lt;= 100</code></li>
</ul>


## Solution

---
### Python3
``` py title='buy-two-chocolates'
class Solution:
    def buyChoco(self, prices: List[int], money: int) -> int:
        smallest = secondSmallest = 101

        for price in prices:
            if price < smallest:
                smallest, secondSmallest = price, smallest
            elif price < secondSmallest:
                secondSmallest = price
        
        return money - smallest - secondSmallest if smallest + secondSmallest <= money else money
```

