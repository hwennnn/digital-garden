---
title: 2671. Frequency Tracker
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - design
  - weekly-contest-344
  - contest-question
date: 2023-05-07
---

[Problem Link](https://leetcode.com/problems/frequency-tracker/)

## Description

---
<p>Design a data structure that keeps track of the values in it and answers some queries regarding their frequencies.</p>

<p>Implement the <code>FrequencyTracker</code> class.</p>

<ul>
	<li><code>FrequencyTracker()</code>: Initializes the <code>FrequencyTracker</code> object with an empty array initially.</li>
	<li><code>void add(int number)</code>: Adds <code>number</code> to the data structure.</li>
	<li><code>void deleteOne(int number)</code>: Deletes <strong>one</strong> occurrence of <code>number</code> from the data structure. The data structure <strong>may not contain</strong> <code>number</code>, and in this case nothing is deleted.</li>
	<li><code>bool hasFrequency(int frequency)</code>: Returns <code>true</code> if there is a number in the data structure that occurs <code>frequency</code> number of times, otherwise, it returns <code>false</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input</strong>
[&quot;FrequencyTracker&quot;, &quot;add&quot;, &quot;add&quot;, &quot;hasFrequency&quot;]
[[], [3], [3], [2]]
<strong>Output</strong>
[null, null, null, true]

<strong>Explanation</strong>
FrequencyTracker frequencyTracker = new FrequencyTracker();
frequencyTracker.add(3); // The data structure now contains [3]
frequencyTracker.add(3); // The data structure now contains [3, 3]
frequencyTracker.hasFrequency(2); // Returns true, because 3 occurs twice

</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input</strong>
[&quot;FrequencyTracker&quot;, &quot;add&quot;, &quot;deleteOne&quot;, &quot;hasFrequency&quot;]
[[], [1], [1], [1]]
<strong>Output</strong>
[null, null, null, false]

<strong>Explanation</strong>
FrequencyTracker frequencyTracker = new FrequencyTracker();
frequencyTracker.add(1); // The data structure now contains [1]
frequencyTracker.deleteOne(1); // The data structure becomes empty []
frequencyTracker.hasFrequency(1); // Returns false, because the data structure is empty

</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input</strong>
[&quot;FrequencyTracker&quot;, &quot;hasFrequency&quot;, &quot;add&quot;, &quot;hasFrequency&quot;]
[[], [2], [3], [1]]
<strong>Output</strong>
[null, false, null, true]

<strong>Explanation</strong>
FrequencyTracker frequencyTracker = new FrequencyTracker();
frequencyTracker.hasFrequency(2); // Returns false, because the data structure is empty
frequencyTracker.add(3); // The data structure now contains [3]
frequencyTracker.hasFrequency(1); // Returns true, because 3 occurs once

</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= number &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= frequency &lt;= 10<sup>5</sup></code></li>
	<li>At most, <code>2 *&nbsp;10<sup>5</sup></code>&nbsp;calls will be made to <code>add</code>, <code>deleteOne</code>, and <code>hasFrequency</code>&nbsp;in <strong>total</strong>.</li>
</ul>


## Solution

---
### Python3
``` py title='frequency-tracker'
class FrequencyTracker:

    def __init__(self):
        self.cnt = Counter()
        self.V = Counter()

    def add(self, number: int) -> None:
        self.V[self.cnt[number]] -= 1
        self.cnt[number] += 1
        self.V[self.cnt[number]] += 1

    def deleteOne(self, number: int) -> None:
        if self.cnt[number] > 0:
            self.V[self.cnt[number]] -= 1
            self.cnt[number] -= 1
            self.V[self.cnt[number]] += 1

    def hasFrequency(self, frequency: int) -> bool:
        return self.V[frequency] > 0


# Your FrequencyTracker object will be instantiated and called as such:
# obj = FrequencyTracker()
# obj.add(number)
# obj.deleteOne(number)
# param_3 = obj.hasFrequency(frequency)
```

