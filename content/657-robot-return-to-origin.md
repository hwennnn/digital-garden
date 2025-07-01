---
title: 657. Robot Return to Origin
draft: false
tags: 
  - leetcode-easy
  - string
  - simulation
  - weekly-contest-45
  - contest-question
date: 2019-10-08
---

[Problem Link](https://leetcode.com/problems/robot-return-to-origin/)

## Description

---
<p>There is a robot starting at the position <code>(0, 0)</code>, the origin, on a 2D plane. Given a sequence of its moves, judge if this robot <strong>ends up at </strong><code>(0, 0)</code> after it completes its moves.</p>

<p>You are given a string <code>moves</code> that represents the move sequence of the robot where <code>moves[i]</code> represents its <code>i<sup>th</sup></code> move. Valid moves are <code>&#39;R&#39;</code> (right), <code>&#39;L&#39;</code> (left), <code>&#39;U&#39;</code> (up), and <code>&#39;D&#39;</code> (down).</p>

<p>Return <code>true</code><em> if the robot returns to the origin after it finishes all of its moves, or </em><code>false</code><em> otherwise</em>.</p>

<p><strong>Note</strong>: The way that the robot is &quot;facing&quot; is irrelevant. <code>&#39;R&#39;</code> will always make the robot move to the right once, <code>&#39;L&#39;</code> will always make it move left, etc. Also, assume that the magnitude of the robot&#39;s movement is the same for each move.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> moves = &quot;UD&quot;
<strong>Output:</strong> true
<strong>Explanation</strong>: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> moves = &quot;LL&quot;
<strong>Output:</strong> false
<strong>Explanation</strong>: The robot moves left twice. It ends up two &quot;moves&quot; to the left of the origin. We return false because it is not at the origin at the end of its moves.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= moves.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>moves</code> only contains the characters <code>&#39;U&#39;</code>, <code>&#39;D&#39;</code>, <code>&#39;L&#39;</code> and <code>&#39;R&#39;</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='robot-return-to-origin'
class Solution:
    def judgeCircle(self, moves: str) -> bool:
        
        x = y = 0
        
        for i in moves:
            
            if (i == "U"): y+=1 
                
            elif (i == "D"): y-=1
            
            elif(i == "R"): x+=1
            
            elif(i == "L"): x-=1
            
        
        return True if (x==0 and y==0) else False
```
### Python
``` py title='robot-return-to-origin'
class Solution(object):
    def judgeCircle(self, moves):
        """
        :type moves: str
        :rtype: bool
        """
        
        val = [0,0]
        
        for i in moves:
            if i == "U":
                val[1]+=1
            elif i == "D":
                val[1]-=1
            elif i == "L":
                val[0]+=1
            elif i == "R":
                val[0]-=1
        
        for i in val:
            if i != 0:
                return False
        
        return True
```

