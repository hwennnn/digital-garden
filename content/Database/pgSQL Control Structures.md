---
title: pgSQL Control Structures
tags:
  - backend
  - database
  - sql
  - cs2102
date: 2025-05-06
---


## Looping Constructs
1.	Basic Loop
```sql
LOOP
  -- Statements
  EXIT WHEN condition;
END LOOP;
```



2.	WHILE Loop
```sql
WHILE condition LOOP
  -- Statements
END LOOP;
```



3.	FOR Loop (Range-based or Query-based)
```sql
FOR i IN 1..10 LOOP
  -- Statements
END LOOP;

FOR r IN SELECT * FROM table LOOP
  -- Use r.column_name
END LOOP;
```




## Swapping Variables

```sql
CREATE OR REPLACE FUNCTION swap(INOUT val1 INT, INOUT val2 INT)
RETURNS RECORD AS $$
DECLARE
  temp INT;
BEGIN
  temp := val1;
  val1 := val2;
  val2 := temp;
END;
$$ LANGUAGE plpgsql;
```






## Sorting Two Integers
```sql
CREATE OR REPLACE FUNCTION sort(INOUT val1 INT, INOUT val2 INT)
RETURNS RECORD AS $$
DECLARE
  temp INT;
BEGIN
  IF val1 > val2 THEN
    temp := val1;
    val1 := val2;
    val2 := temp;
  END IF;
END;
$$ LANGUAGE plpgsql;

```





## Sum from 1 to x

### Using WHILE
```sql
CREATE OR REPLACE FUNCTION sum_to_x(IN x INT)
RETURNS INT AS $$
DECLARE
  s INT := 0;
  temp INT := 1;
BEGIN
  WHILE temp <= x LOOP
    s := s + temp;
    temp := temp + 1;
  END LOOP;
  RETURN s;
END;
$$ LANGUAGE plpgsql;
```



#### Using LOOP + EXIT
```sql
CREATE OR REPLACE FUNCTION sum_to_x(IN x INT)
RETURNS INT AS $$
DECLARE
  s INT := 0;
  temp INT := 1;
BEGIN
  LOOP
    EXIT WHEN temp > x;
    s := s + temp;
    temp := temp + 1;
  END LOOP;
  RETURN s;
END;
$$ LANGUAGE plpgsql;
```


## Cursor Basics

Workflow:
1.	DECLARE cursor
2.	OPEN cursor
3.	FETCH INTO variable
4.	Use EXIT WHEN NOT FOUND
5.	CLOSE cursor

Example:
```sql
DECLARE
  curs CURSOR FOR SELECT * FROM table;
  r RECORD;
BEGIN
  OPEN curs;
  LOOP
    FETCH curs INTO r;
    EXIT WHEN NOT FOUND;
    -- Use r.column_name
  END LOOP;
  CLOSE curs;
END;
```


Variants of FETCH:
- `FETCH PRIOR FROM curs INTO r;`
- `FETCH FIRST FROM curs INTO r;`
- `FETCH LAST FROM curs INTO r;`
- `FETCH ABSOLUTE n FROM curs INTO r;`

### More examples

#### Score Gap Function

Compute the gap between each student and the next highest mark.

Using CURSOR:
```sql
CREATE OR REPLACE FUNCTION score_gap()
RETURNS TABLE(name_ TEXT, mark_ INT, gap INT) AS $$
DECLARE
  curs CURSOR FOR SELECT * FROM Scores ORDER BY Mark DESC;
  r RECORD;
  prev INT := -1;
BEGIN
  OPEN curs;
  LOOP
    FETCH curs INTO r;
    EXIT WHEN NOT FOUND;
    name_ := r.Name;
    mark_ := r.Mark;
    IF prev >= 0 THEN
      gap := prev - mark_;
    ELSE
      gap := NULL;
    END IF;
    RETURN NEXT;
    prev := r.Mark;
  END LOOP;
  CLOSE curs;
END;
$$ LANGUAGE plpgsql;
```


Using FOR Loop:
```sql
CREATE OR REPLACE FUNCTION score_gap()
RETURNS TABLE(name_ TEXT, mark_ INT, gap INT) AS $$
DECLARE
  r RECORD;
  prev INT := -1;
BEGIN
  FOR r IN SELECT * FROM Scores ORDER BY Mark DESC LOOP
    name_ := r.Name;
    mark_ := r.Mark;
    IF prev >= 0 THEN
      gap := prev - mark_;
    ELSE
      gap := NULL;
    END IF;
    RETURN NEXT;
    prev := r.Mark;
  END LOOP;
END;
$$ LANGUAGE plpgsql;

```


#### Median Student(s)

```sql
CREATE OR REPLACE FUNCTION median_student()
RETURNS SETOF Scores AS $$
DECLARE
  curs CURSOR FOR SELECT * FROM Scores ORDER BY Mark DESC;
  r RECORD;
  num_student INT;
BEGIN
  OPEN curs;
  SELECT COUNT(*) INTO num_student FROM Scores;

  IF num_student % 2 = 1 THEN
    FETCH ABSOLUTE (num_student + 1) / 2 FROM curs INTO r;
    RETURN NEXT r;
  ELSE
    FETCH ABSOLUTE num_student / 2 FROM curs INTO r;
    RETURN NEXT r;
    FETCH ABSOLUTE (num_student / 2 + 1) FROM curs INTO r;
    RETURN NEXT r;
  END IF;

  CLOSE curs;
END;
$$ LANGUAGE plpgsql;
```


### Summary of pgSQL Constructs
- Declare Variable: `DECLARE var_name type;`
- Assignment: `var := value;`
- Conditional:
	```sql
	IF condition THEN
	  -- do something
	ELSIF condition THEN
	  -- do something else
	ELSE
	  -- fallback
	END IF;
	```


 - Loops:
	- `LOOP ... END LOOP;`
	- `WHILE condition LOOP ... END LOOP;`
	- `FOR var IN range LOOP ... END LOOP;`
- Break Loop: `EXIT WHEN condition;`
- Cursor Workflow: `DECLARE → OPEN → FETCH → EXIT WHEN NOT FOUND → CLOSE`
