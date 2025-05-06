---
title: Stored Procedure
tags:
  - backend
  - database
  - sql
  - cs2102
date: 2025-05-06
---
## Introduction
A stored procedure is a pre-compiled set of SQL statements that is stored in a database and can be executed as a single unit, similar to a function or subroutine. It allows you to encapsulate SQL code for reusability, better organization, and improved performance. 

## Benefits of Using Stored Procedures
1) **Improved Code Organization:**
	Stored procedures make it easier to organize and maintain SQL code. 
2) **Reduced Network Traffic:**
	Executing a stored procedure can reduce network traffic compared to sending multiple individual SQL queries.
3) **Enhanced Security:**
	Stored procedures can limit user access to sensitive data by granting permissions to execute the stored procedure rather than direct table access.
4) **Increased Performance:**
	Stored procedures can improve query execution time due to pre-compilation and execution on the database server.

## SQL Functions

### Example: Convert Marks to Grades
Suppose we want to convert numeric marks to letter grades, we can abstract the main computation away into **functions**,

```sql
CREATE OR REPLACE FUNCTION convert(Mark INT)
RETURNS CHAR(1) AS $$
	SELECT CASE
		WHEN Mark >= 70 THEN 'A'
		WHEN Mark >= 60 THEN 'B'
		WHEN Mark >= 50 THEN 'C'
		ELSE 'F'
	END;
$$ LANGUAGE sql;
```

now we can do the following for better code reuse and simplicity,
```sql
SELECT Name, convert(Mark) FROM Scores;

SELECT Name FROM Scores where convert(Mark) = 'B';
```

### Function Return Types

#### One Existing Tuple
```sql
CREATE OR REPLACE FUNCTION topStudent()
RETURNS Scores AS $$
	SELECT * 
	FROM Scores 
	ORDER BY Mark DESC LIMIT 1;
$$ LANGUAGE sql;
```
#### Set of Existing Tuples
```sql
CREATE OR REPLACE FUNCTION topStudents()
RETURNS SETOF Scores AS $$
	SELECT * FROM Scores
	WHERE Mark = (SELECT MAX(Mark) FROM Scores);
$$ LANGUAGE sql;
```

#### One New Tuple (`RECORD`)
```sql
CREATE OR REPLACE FUNCTION topMarkCount
  (OUT Mark INT, OUT Count INT)
RETURNS RECORD AS $$
	SELECT Mark, COUNT(*)
	FROM Scores
	WHERE Mark = (SELECT MAX(Mark) FROM Scores)
	GROUP BY Mark;
$$ LANGUAGE sql;
```
> [!note]
> If we use `RECORD`, we must have at least two `OUT` parameters!

#### Set of New Tuples

##### Option 1 - `RECORD`
```sql
CREATE OR REPLACE FUNCTION topMarkCount
  (OUT Mark INT, OUT Count INT)
RETURNS SETOF RECORD AS $$
	SELECT Mark, COUNT(*)
	FROM Scores
	WHERE Mark = (SELECT MAX(Mark) FROM Scores)
	GROUP BY Mark;
$$ LANGUAGE sql;
```

##### Option 2 - `TABLE`

```sql
CREATE OR REPLACE FUNCTION markCounts()
RETURNS TABLE(Mark INT, Count INT) AS $$
	SELECT Mark, COUNT(*)
	FROM Scores
	GROUP BY Mark;
$$ LANGUAGE sql;
```

#### No Return: `VOID` functions
```sql
CREATE OR REPLACE FUNCTION transfer(frAcc TEXT, toAcc TEXT, amount INT)
	RETURNS VOID AS $$
	UPDATE Acct SET balance = balance - amount WHERE name = frAcc;
	UPDATE Acct SET balance = balance + amount WHERE name = toAcc;
$$ LANGUAGE sql;
```

```sql
SELECT transfer('Alice','Bob',100);
```

#### SQL Procedures
```sql
CREATE OR REPLACE PROCEDURE transfer(frAcc TEXT, toAcc TEXT, amount INT)
AS $$
	UPDATE Acct SET balance = balance - amount WHERE name = frAcc;
	UPDATE Acct SET balance = balance + amount WHERE name = toAcc;
$$ LANGUAGE sql;
```
```sql
CALL transfer('Alice','Bob',100);
```

### Stored Functions vs Stored Procedures

| Feature     | Function               | Procedure                           |
| ----------- | ---------------------- | ----------------------------------- |
| Return      | Must return a value    | No return, but can use `OUT` params |
| Transaction | Cannot commit/rollback | Can commit/rollback                 |
>[!note]
> Procedure can commit or roll back, function cannot!