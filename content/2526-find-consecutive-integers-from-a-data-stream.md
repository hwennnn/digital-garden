---
title: 2526. Find Consecutive Integers from a Data Stream
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - design
  - queue
  - counting
  - data-stream
  - biweekly-contest-95
  - contest-question
date: 2023-01-07
---

[Problem Link](https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/)

## Description

---
<p>For a stream of integers, implement a data structure that checks if the last <code>k</code> integers parsed in the stream are <strong>equal</strong> to <code>value</code>.</p>

<p>Implement the <strong>DataStream</strong> class:</p>

<ul>
	<li><code>DataStream(int value, int k)</code> Initializes the object with an empty integer stream and the two integers <code>value</code> and <code>k</code>.</li>
	<li><code>boolean consec(int num)</code> Adds <code>num</code> to the stream of integers. Returns <code>true</code> if the last <code>k</code> integers are equal to <code>value</code>, and <code>false</code> otherwise. If there are less than <code>k</code> integers, the condition does not hold true, so returns <code>false</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input</strong>
[&quot;DataStream&quot;, &quot;consec&quot;, &quot;consec&quot;, &quot;consec&quot;, &quot;consec&quot;]
[[4, 3], [4], [4], [4], [3]]
<strong>Output</strong>
[null, false, false, true, false]

<strong>Explanation</strong>
DataStream dataStream = new DataStream(4, 3); //value = 4, k = 3 
dataStream.consec(4); // Only 1 integer is parsed, so returns False. 
dataStream.consec(4); // Only 2 integers are parsed.
                      // Since 2 is less than k, returns False. 
dataStream.consec(4); // The 3 integers parsed are all equal to value, so returns True. 
dataStream.consec(3); // The last k integers parsed in the stream are [4,4,3].
                      // Since 3 is not equal to value, it returns False.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= value, num &lt;= 10<sup>9</sup></code></li>
	<li><code>1 &lt;= k &lt;= 10<sup>5</sup></code></li>
	<li>At most <code>10<sup>5</sup></code> calls will be made to <code>consec</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='find-consecutive-integers-from-a-data-stream'
class DataStream:

    def __init__(self, value: int, k: int):
        self.value = value
        self.k = k
        self.A = deque()

    def consec(self, num: int) -> bool:        
        if num == self.value:
            self.A.append(num)
        else:
            self.A.clear()
            
        if len(self.A) > self.k:
            self.A.popleft()
        
        return len(self.A) == self.k


# Your DataStream object will be instantiated and called as such:
# obj = DataStream(value, k)
# param_1 = obj.consec(num)
```

