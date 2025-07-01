---
title: 1507. Reformat Date
draft: false
tags: 
  - leetcode-easy
  - string
  - biweekly-contest-30
  - contest-question
date: 2020-10-12
---

[Problem Link](https://leetcode.com/problems/reformat-date/)

## Description

---
<p>Given a <code>date</code> string in the form&nbsp;<code>Day Month Year</code>, where:</p>

<ul>
	<li><code>Day</code>&nbsp;is in the set <code>{&quot;1st&quot;, &quot;2nd&quot;, &quot;3rd&quot;, &quot;4th&quot;, ..., &quot;30th&quot;, &quot;31st&quot;}</code>.</li>
	<li><code>Month</code>&nbsp;is in the set <code>{&quot;Jan&quot;, &quot;Feb&quot;, &quot;Mar&quot;, &quot;Apr&quot;, &quot;May&quot;, &quot;Jun&quot;, &quot;Jul&quot;, &quot;Aug&quot;, &quot;Sep&quot;, &quot;Oct&quot;, &quot;Nov&quot;, &quot;Dec&quot;}</code>.</li>
	<li><code>Year</code>&nbsp;is in the range <code>[1900, 2100]</code>.</li>
</ul>

<p>Convert the date string to the format <code>YYYY-MM-DD</code>, where:</p>

<ul>
	<li><code>YYYY</code> denotes the 4 digit year.</li>
	<li><code>MM</code> denotes the 2 digit month.</li>
	<li><code>DD</code> denotes the 2 digit day.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> date = &quot;20th Oct 2052&quot;
<strong>Output:</strong> &quot;2052-10-20&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> date = &quot;6th Jun 1933&quot;
<strong>Output:</strong> &quot;1933-06-06&quot;
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> date = &quot;26th May 1960&quot;
<strong>Output:</strong> &quot;1960-05-26&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The given dates are guaranteed to be valid, so no error handling is necessary.</li>
</ul>


## Solution

---
### Python3
``` py title='reformat-date'
class Solution:
    def reformatDate(self, date: str) -> str:
        M = {"Jan" : "01", "Feb" : "02", "Mar" : "03", "Apr" : "04", "May" : "05", "Jun" : "06", "Jul" : "07", "Aug" : "08", "Sep" : "09", "Oct" : "10", "Nov" : "11", "Dec" : "12", }
        
        D = ""
        if (len(date) == 13):
            D += date[-4:] + "-" + M[date[-8:-5]] + "-" + date[:2]
        else:
            D += date[-4:] + "-" + M[date[-8:-5]] + "-0" + date[0]
        return D
```

