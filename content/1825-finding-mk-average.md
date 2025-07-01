---
title: 1825. Finding MK Average
draft: false
tags: 
  - leetcode-hard
  - design
  - queue
  - heap-priority-queue
  - data-stream
  - ordered-set
  - weekly-contest-236
  - contest-question
date: 2021-04-11
---

[Problem Link](https://leetcode.com/problems/finding-mk-average/)

## Description

---
<p>You are given two integers, <code>m</code> and <code>k</code>, and a stream of integers. You are tasked to implement a data structure that calculates the <strong>MKAverage</strong> for the stream.</p>

<p>The <strong>MKAverage</strong> can be calculated using these steps:</p>

<ol>
	<li>If the number of the elements in the stream is less than <code>m</code> you should consider the <strong>MKAverage</strong> to be <code>-1</code>. Otherwise, copy the last <code>m</code> elements of the stream to a separate container.</li>
	<li>Remove the smallest <code>k</code> elements and the largest <code>k</code> elements from the container.</li>
	<li>Calculate the average value for the rest of the elements <strong>rounded down to the nearest integer</strong>.</li>
</ol>

<p>Implement the <code>MKAverage</code> class:</p>

<ul>
	<li><code>MKAverage(int m, int k)</code> Initializes the <strong>MKAverage</strong> object with an empty stream and the two integers <code>m</code> and <code>k</code>.</li>
	<li><code>void addElement(int num)</code> Inserts a new element <code>num</code> into the stream.</li>
	<li><code>int calculateMKAverage()</code> Calculates and returns the <strong>MKAverage</strong> for the current stream <strong>rounded down to the nearest integer</strong>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input</strong>
[&quot;MKAverage&quot;, &quot;addElement&quot;, &quot;addElement&quot;, &quot;calculateMKAverage&quot;, &quot;addElement&quot;, &quot;calculateMKAverage&quot;, &quot;addElement&quot;, &quot;addElement&quot;, &quot;addElement&quot;, &quot;calculateMKAverage&quot;]
[[3, 1], [3], [1], [], [10], [], [5], [5], [5], []]
<strong>Output</strong>
[null, null, null, -1, null, 3, null, null, null, 5]

<strong>Explanation</strong>
<code>MKAverage obj = new MKAverage(3, 1); 
obj.addElement(3);        // current elements are [3]
obj.addElement(1);        // current elements are [3,1]
obj.calculateMKAverage(); // return -1, because m = 3 and only 2 elements exist.
obj.addElement(10);       // current elements are [3,1,10]
obj.calculateMKAverage(); // The last 3 elements are [3,1,10].
                          // After removing smallest and largest 1 element the container will be [3].
                          // The average of [3] equals 3/1 = 3, return 3
obj.addElement(5);        // current elements are [3,1,10,5]
obj.addElement(5);        // current elements are [3,1,10,5,5]
obj.addElement(5);        // current elements are [3,1,10,5,5,5]
obj.calculateMKAverage(); // The last 3 elements are [5,5,5].
                          // After removing smallest and largest 1 element the container will be [5].
                          // The average of [5] equals 5/1 = 5, return 5
</code></pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= m &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt; k*2 &lt; m</code></li>
	<li><code>1 &lt;= num &lt;= 10<sup>5</sup></code></li>
	<li>At most <code>10<sup>5</sup></code> calls will be made to <code>addElement</code> and <code>calculateMKAverage</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='finding-mk-average'
from sortedcontainers import SortedList

class SortedListWithSum:
    def __init__(self):
        self.items = SortedList()
        self.total = 0
        
    def add(self, item):
        self.total += item
        self.items.add(item)
        
    def remove(self, item):
        self.total -= item
        self.items.remove(item)

class MKAverage:
    
    def __init__(self, m: int, k: int):
        # inside
        self.m = m
        # smallest
        self.k = k
        
        self.buffer = collections.deque()
        self.left = SortedListWithSum()
        self.mid = SortedListWithSum()
        self.right = SortedListWithSum()

    def addElement(self, num: int) -> None:
        self.buffer.append(num)
        
        if len(self.buffer) > self.m:
            r = self.buffer.popleft()
            
            if r in self.right.items:
                self.right.remove(r)
            elif r in self.mid.items:
                self.mid.remove(r)
                
                small = self.right.items[0]
                self.right.remove(small)
                self.mid.add(small)
            else:
                self.left.remove(r)
                
                small = self.mid.items[0]
                self.mid.remove(small)
                self.left.add(small)
                
                small = self.right.items[0]
                self.right.remove(small)
                self.mid.add(small)
        
        self.left.add(num)
        if len(self.left.items) > self.k:
            big = self.left.items[-1]
            self.left.remove(big)
            
            self.mid.add(big)
            if len(self.mid.items) > self.m - self.k - self.k:
                big = self.mid.items[-1]
                self.mid.remove(big)
                self.right.add(big)
        #print(self.left.items, self.mid.items,  self.right.items, self.mid.total, self.m, self.k)        

    def calculateMKAverage(self) -> int:
        if len(self.buffer) >= self.m:
            #print(self.left.items, self.mid.items,  self.right.items, self.mid.total, self.m, self.k)
            return int(self.mid.total / (self.m - self.k - self.k))
        else:
            return -1
        
        


# Your MKAverage object will be instantiated and called as such:
# obj = MKAverage(m, k)
# obj.addElement(num)
# param_2 = obj.calculateMKAverage()

```

