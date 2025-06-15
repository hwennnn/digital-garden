---
title: 3573. Best Time to Buy and Sell Stock V
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
date: 2025-06-08
---

[Problem Link](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-v/)

## Description

---
<p>You are given an integer array <code>prices</code> where <code>prices[i]</code> is the price of a stock in dollars on the <code>i<sup>th</sup></code> day, and an integer <code>k</code>.</p>

<p>You are allowed to make at most <code>k</code> transactions, where each transaction can be either of the following:</p>

<ul>
	<li>
	<p><strong>Normal transaction</strong>: Buy on day <code>i</code>, then sell on a later day <code>j</code> where <code>i &lt; j</code>. You profit <code>prices[j] - prices[i]</code>.</p>
	</li>
	<li>
	<p><strong>Short selling transaction</strong>: Sell on day <code>i</code>, then buy back on a later day <code>j</code> where <code>i &lt; j</code>. You profit <code>prices[i] - prices[j]</code>.</p>
	</li>
</ul>

<p><strong>Note</strong> that you must complete each transaction before starting another. Additionally, you can't buy or sell on the same day you are selling or buying back as part of a previous transaction.</p>

<p>Return the <strong>maximum</strong> total profit you can earn by making <strong>at most</strong> <code>k</code> transactions.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">prices = [1,7,9,8,2], k = 2</span></p>

<p><strong>Output:</strong> <span class="example-io">14</span></p>

<p><strong>Explanation:</strong></p>
We can make $14 of profit through 2 transactions:

<ul>
	<li>A normal transaction: buy the stock on day 0 for $1 then sell it on day 2 for $9.</li>
	<li>A short selling transaction: sell the stock on day 3 for $8 then buy back on day 4 for $2.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">prices = [12,16,19,19,8,1,19,13,9], k = 3</span></p>

<p><strong>Output:</strong> <span class="example-io">36</span></p>

<p><strong>Explanation:</strong></p>
We can make $36 of profit through 3 transactions:

<ul>
	<li>A normal transaction: buy the stock on day 0 for $12 then sell it on day 2 for $19.</li>
	<li>A short selling transaction: sell the stock on day 3 for $19 then buy back on day 4 for $8.</li>
	<li>A normal transaction: buy the stock on day 5 for $1 then sell it on day 6 for $19.</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= prices.length &lt;= 10<sup>3</sup></code></li>
	<li><code>1 &lt;= prices[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>1 &lt;= k &lt;= prices.length / 2</code></li>
</ul>


## Solution

---
### C++
``` cpp title='best-time-to-buy-and-sell-stock-v'
class Solution {
public:
    long long memo[1001][501][3];

    long long maximumProfit(vector<int>& prices, int k) {
        int N = prices.size();
        memset(memo, -1, sizeof(memo));
        return dp(0, k, 0, prices, N);
    }

    long long dp(int index, int k, int status, vector<int>& prices, int N) {
        if (index == N - 1) {
            if (status == 0) return 0;
            if (status == 1) return prices[index];
            return -prices[index];
        }

        if (k == 0) return 0;

        if (memo[index][k][status] != -1) return memo[index][k][status];

        // skip
        long long res = dp(index + 1, k, status, prices, N);

        if (status == 0) {
            // status == 1, long
            res = max(res, -prices[index] + dp(index + 1, k, 1, prices, N));

            // status == 2, short
            res = max(res, prices[index] + dp(index + 1, k, 2, prices, N));
        } else if (status == 1) {
            // sell now
            res = max(res, prices[index] + dp(index + 1, k - 1, 0, prices, N));
        } else {
            // buy back now
            res = max(res, -prices[index] + dp(index + 1, k - 1, 0, prices, N));
        }

        return memo[index][k][status] = res;
    }
};
```
### Python3
``` py title='best-time-to-buy-and-sell-stock-v'
class Solution:
    def maximumProfit(self, prices: List[int], k: int) -> int:
        N = len(prices)
        
        @cache
        def dp(index, currK, status):
            if index == N - 1:
                if status == 0: return 0
                if status == 1: return prices[index]
                return -prices[index]

            if index >= N or currK == 0: return 0

            # skip
            res = dp(index + 1, currK, status)

            if status == 0:
                # status == 1, long
                res = max(res, -prices[index] + dp(index + 1, currK, 1))

                # status == 2, short
                res = max(res, prices[index] + dp(index + 1, currK, 2))
            elif status == 1:
                # sell now
                res = max(res, prices[index] + dp(index + 1, currK - 1, 0))
            else:
                # buy back now
                res = max(res, -prices[index] + dp(index + 1, currK - 1, 0))
            
            return res
        
        ans = dp(0, k, 0)
        dp.cache_clear()
        return ans
        
            
```

