---
title: 2034. Stock Price Fluctuation 
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - design
  - heap-priority-queue
  - data-stream
  - ordered-set
  - weekly-contest-262
  - contest-question
date: 2021-10-10
---

[Problem Link](https://leetcode.com/problems/stock-price-fluctuation/)

## Description

---
<p>You are given a stream of <strong>records</strong> about a particular stock. Each record contains a <strong>timestamp</strong> and the corresponding <strong>price</strong> of the stock at that timestamp.</p>

<p>Unfortunately due to the volatile nature of the stock market, the records do not come in order. Even worse, some records may be incorrect. Another record with the same timestamp may appear later in the stream <strong>correcting</strong> the price of the previous wrong record.</p>

<p>Design an algorithm that:</p>

<ul>
	<li><strong>Updates</strong> the price of the stock at a particular timestamp, <strong>correcting</strong> the price from any previous records at the timestamp.</li>
	<li>Finds the <strong>latest price</strong> of the stock based on the current records. The <strong>latest price</strong> is the price at the latest timestamp recorded.</li>
	<li>Finds the <strong>maximum price</strong> the stock has been based on the current records.</li>
	<li>Finds the <strong>minimum price</strong> the stock has been based on the current records.</li>
</ul>

<p>Implement the <code>StockPrice</code> class:</p>

<ul>
	<li><code>StockPrice()</code> Initializes the object with no price records.</li>
	<li><code>void update(int timestamp, int price)</code> Updates the <code>price</code> of the stock at the given <code>timestamp</code>.</li>
	<li><code>int current()</code> Returns the <strong>latest price</strong> of the stock.</li>
	<li><code>int maximum()</code> Returns the <strong>maximum price</strong> of the stock.</li>
	<li><code>int minimum()</code> Returns the <strong>minimum price</strong> of the stock.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input</strong>
[&quot;StockPrice&quot;, &quot;update&quot;, &quot;update&quot;, &quot;current&quot;, &quot;maximum&quot;, &quot;update&quot;, &quot;maximum&quot;, &quot;update&quot;, &quot;minimum&quot;]
[[], [1, 10], [2, 5], [], [], [1, 3], [], [4, 2], []]
<strong>Output</strong>
[null, null, null, 5, 10, null, 5, null, 2]

<strong>Explanation</strong>
StockPrice stockPrice = new StockPrice();
stockPrice.update(1, 10); // Timestamps are [1] with corresponding prices [10].
stockPrice.update(2, 5);  // Timestamps are [1,2] with corresponding prices [10,5].
stockPrice.current();     // return 5, the latest timestamp is 2 with the price being 5.
stockPrice.maximum();     // return 10, the maximum price is 10 at timestamp 1.
stockPrice.update(1, 3);  // The previous timestamp 1 had the wrong price, so it is updated to 3.
                          // Timestamps are [1,2] with corresponding prices [3,5].
stockPrice.maximum();     // return 5, the maximum price is 5 after the correction.
stockPrice.update(4, 2);  // Timestamps are [1,2,4] with corresponding prices [3,5,2].
stockPrice.minimum();     // return 2, the minimum price is 2 at timestamp 4.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= timestamp, price &lt;= 10<sup>9</sup></code></li>
	<li>At most <code>10<sup>5</sup></code> calls will be made <strong>in total</strong> to <code>update</code>, <code>current</code>, <code>maximum</code>, and <code>minimum</code>.</li>
	<li><code>current</code>, <code>maximum</code>, and <code>minimum</code> will be called <strong>only after</strong> <code>update</code> has been called <strong>at least once</strong>.</li>
</ul>


## Solution

---
### Python3
``` py title='stock-price-fluctuation'
class StockPrice:

    def __init__(self):
        self.records = collections.defaultdict(int)        
        self.t = -1
        self.maxHeap = []
        self.minHeap = []

    def update(self, timestamp: int, price: int) -> None:
        self.records[timestamp] = price
        self.t = max(self.t, timestamp)
        heapq.heappush(self.maxHeap, (-price, timestamp))
        heapq.heappush(self.minHeap, (price, timestamp))

    def current(self) -> int:
        return self.records[self.t]

    def maximum(self) -> int:
        while self.maxHeap and self.records[self.maxHeap[0][1]] != -self.maxHeap[0][0]:
            heapq.heappop(self.maxHeap)
        return -self.maxHeap[0][0]

    def minimum(self) -> int:
        while self.minHeap and self.records[self.minHeap[0][1]] != self.minHeap[0][0]:
            heapq.heappop(self.minHeap)
        return self.minHeap[0][0]


# Your StockPrice object will be instantiated and called as such:
# obj = StockPrice()
# obj.update(timestamp,price)
# param_2 = obj.current()
# param_3 = obj.maximum()
# param_4 = obj.minimum()
```

