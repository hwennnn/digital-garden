---
title: 2276. Count Integers in Intervals
draft: false
tags: 
  - leetcode-hard
  - design
  - segment-tree
  - ordered-set
  - weekly-contest-293
  - contest-question
date: 2022-05-15
---

[Problem Link](https://leetcode.com/problems/count-integers-in-intervals/)

## Description

---
<p>Given an <strong>empty</strong> set of intervals, implement a data structure that can:</p>

<ul>
	<li><strong>Add</strong> an interval to the set of intervals.</li>
	<li><strong>Count</strong> the number of integers that are present in <strong>at least one</strong> interval.</li>
</ul>

<p>Implement the <code>CountIntervals</code> class:</p>

<ul>
	<li><code>CountIntervals()</code> Initializes the object with an empty set of intervals.</li>
	<li><code>void add(int left, int right)</code> Adds the interval <code>[left, right]</code> to the set of intervals.</li>
	<li><code>int count()</code> Returns the number of integers that are present in <strong>at least one</strong> interval.</li>
</ul>

<p><strong>Note</strong> that an interval <code>[left, right]</code> denotes all the integers <code>x</code> where <code>left &lt;= x &lt;= right</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input</strong>
[&quot;CountIntervals&quot;, &quot;add&quot;, &quot;add&quot;, &quot;count&quot;, &quot;add&quot;, &quot;count&quot;]
[[], [2, 3], [7, 10], [], [5, 8], []]
<strong>Output</strong>
[null, null, null, 6, null, 8]

<strong>Explanation</strong>
CountIntervals countIntervals = new CountIntervals(); // initialize the object with an empty set of intervals. 
countIntervals.add(2, 3);  // add [2, 3] to the set of intervals.
countIntervals.add(7, 10); // add [7, 10] to the set of intervals.
countIntervals.count();    // return 6
                           // the integers 2 and 3 are present in the interval [2, 3].
                           // the integers 7, 8, 9, and 10 are present in the interval [7, 10].
countIntervals.add(5, 8);  // add [5, 8] to the set of intervals.
countIntervals.count();    // return 8
                           // the integers 2 and 3 are present in the interval [2, 3].
                           // the integers 5 and 6 are present in the interval [5, 8].
                           // the integers 7 and 8 are present in the intervals [5, 8] and [7, 10].
                           // the integers 9 and 10 are present in the interval [7, 10].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= left &lt;= right &lt;= 10<sup>9</sup></code></li>
	<li>At most <code>10<sup>5</sup></code> calls <strong>in total</strong> will be made to <code>add</code> and <code>count</code>.</li>
	<li>At least <strong>one</strong> call will be made to <code>count</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='count-integers-in-intervals'
from sortedcontainers import SortedList

class CountIntervals:

    def __init__(self):
        self.sl = SortedList()
        self.res = 0
        
    def add(self, left: int, right: int) -> None:
        def overlap(l1, r1, l2, r2):
            lo = max(l1, l2)
            hi = min(r1, r2)
            
            return hi >= lo

        i = j = self.sl.bisect_left((left, -1))
        
        if i - 1 >= 0 and self.sl[i - 1][1] >= left:
            i -= 1
        
        while j < len(self.sl) and overlap(left, right, *self.sl[j]):
            j += 1

        for k in range(j - 1, i - 1, -1):
            L, R = self.sl[k]
            left = min(left, L)
            right = max(right, R)
            self.res -= R - L + 1
            del self.sl[k]
        
        self.res += right - left + 1
        self.sl.add((left, right))

    def count(self) -> int:
        return self.res
        


# Your CountIntervals object will be instantiated and called as such:
# obj = CountIntervals()
# obj.add(left,right)
# param_2 = obj.count()
```

