---
title: 957. Prison Cells After N Days
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - math
  - bit-manipulation
  - weekly-contest-115
  - contest-question
date: 2020-08-05
---

[Problem Link](https://leetcode.com/problems/prison-cells-after-n-days/)

## Description

---
<p>There are <code>8</code> prison cells in a row and each cell is either occupied or vacant.</p>

<p>Each day, whether the cell is occupied or vacant changes according to the following rules:</p>

<ul>
	<li>If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.</li>
	<li>Otherwise, it becomes vacant.</li>
</ul>

<p><strong>Note</strong> that because the prison is a row, the first and the last cells in the row can&#39;t have two adjacent neighbors.</p>

<p>You are given an integer array <code>cells</code> where <code>cells[i] == 1</code> if the <code>i<sup>th</sup></code> cell is occupied and <code>cells[i] == 0</code> if the <code>i<sup>th</sup></code> cell is vacant, and you are given an integer <code>n</code>.</p>

<p>Return the state of the prison after <code>n</code> days (i.e., <code>n</code> such changes described above).</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> cells = [0,1,0,1,1,0,0,1], n = 7
<strong>Output:</strong> [0,0,1,1,0,0,0,0]
<strong>Explanation:</strong> The following table summarizes the state of the prison on each day:
Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
Day 7: [0, 0, 1, 1, 0, 0, 0, 0]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> cells = [1,0,0,1,0,0,1,0], n = 1000000000
<strong>Output:</strong> [0,0,1,1,1,1,1,0]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>cells.length == 8</code></li>
	<li><code>cells[i]</code>&nbsp;is either <code>0</code> or <code>1</code>.</li>
	<li><code>1 &lt;= n &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='prison-cells-after-n-days'
class Solution:
    def prisonAfterNDays(self, cells: List[int], days: int) -> List[int]:
        
        def g(cells):
            masks = 0
            
            for cell, occupied in enumerate(cells):
                if occupied:
                    masks |= (1 << cell)
            
            return masks
        
        def transform(cells):
            new_cells = [0] * 8
            
            for i in range(1, 7):
                if cells[i - 1] == cells[i + 1]:
                    new_cells[i] = 1
            
            return new_cells
        
        original = cells[:]
        seen = set()
        cycle = 0
        hasCycle = False
        
        for _ in range(days):
            next_cells = transform(cells)
            masks = g(next_cells)
            
            if masks in seen:
                hasCycle = True
                break
            else:
                seen.add(masks)
                cycle += 1
            
            cells = next_cells
        
        if hasCycle:
            count = days % cycle
            
            for _ in range(count):
                cells = transform(cells)
            
        return cells
```
### Java
``` java title='prison-cells-after-n-days'
class Solution {
    public int[] prisonAfterNDays(int[] cells, int N) {
		if(cells==null || cells.length==0 || N<=0) return cells;
        boolean hasCycle = false;
        int cycle = 0;
        HashSet<String> set = new HashSet<>(); 
        for(int i=0;i<N;i++){
            int[] next = nextDay(cells);
            String key = Arrays.toString(next);
            if(!set.contains(key)){ //store cell state
                set.add(key);
                cycle++;
            }
            else{ //hit a cycle
                hasCycle = true;
                break;
            }
            cells = next;
        }
        if(hasCycle){
            N%=cycle;
            for(int i=0;i<N;i++){
                cells = nextDay(cells);
            }   
        }
        return cells;
    }
    
    private int[] nextDay(int[] cells){
        int[] tmp = new int[cells.length];
        for(int i=1;i<cells.length-1;i++){
            tmp[i]=cells[i-1]==cells[i+1]?1:0;
        }
        return tmp;
    }
}
```

