---
title: SQL Triggers
tags:
  - backend
  - database
  - sql
  - cs2102
date: 2025-05-06
---
## Introduction
SQL triggers are [[Stored Procedure|stored procedures]] that automatically execute in response to certain events in a specific table or view in a database. They are used to maintain the integrity of the data, enforce business rules, and automate tasks. We can set triggers to fire before or after an `INSERT`, `UPDATE`, or `DELETE` operation.

In short,
- Triggers = Event-Condition-Action (ECA) rules.
- Automatically enforce constraints or log events without manual SQL queries.
- Useful for constraints too complex for standard SQL constraints.

### Simple Motivating Example
Supposed we want to log when student marks are entered.

There are two tables:
- `Scores(Name, Mark)`
- `Scores_Log(Name, Date)`

And we are looking for solution that automatically insert into `Scores_Log` upon insertion into `Scores`.

#### Using Stored Procedures (Manual)
```sql
CREATE OR REPLACE PROCEDURE enter_data(Name TEXT, Mark INT)
AS $$
  INSERT INTO Scores VALUES (Name, Mark);
  INSERT INTO Scores_Log VALUES (Name, CURRENT_DATE);
$$ LANGUAGE sql;
```
There is a problem with this solution, which would need to depend on user remembering to use procedure.

#### ✅ Using Triggers (Automatic)
```sql
CREATE OR REPLACE FUNCTION log_score()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO Scores_Log VALUES (NEW.Name, CURRENT_DATE);
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER score_log
AFTER INSERT ON Scores
FOR EACH ROW
EXECUTE FUNCTION log_score();
```

## Trigger Function Details
- Must `RETURNS TRIGGER`.
- `NEW` refers to the new row (for INSERT/UPDATE).
- `OLD` refers to the old row (for UPDATE/DELETE).
- Trigger-specific variables:
	- `TG_OP` – operation type (INSERT, UPDATE, DELETE)
	- `TG_TABLE_NAME` – name of table that invoked the trigger

>[!note]
>`NEW` transition variable is not available during delete operation. `OLD` transition variable is not available during insert operation.
## Effect of Return Value


|               | NULL tuple            | non-NULL tuple `t`                  |
| ------------- | --------------------- | ----------------------------------- |
| BEFORE INSERT | No tuple inserted     | Tuple `t` will be inserted          |
| BEFORE UPDATE | No tuple updated      | Tuple `t` will be the updated tuple |
| BEFORE DELETE | No deletion performed | Deletion proceeds as normal         |
| AFTER INSERT  | Does not matter       | Does not matter                     |
| AFTER UPDATE  | Does not matter       | Does not matter                     |
| AFTER DELETE  | Does not matter       | Does not matter                     |
## Trigger Granularity

Granularity Types:
- **Row-Level Trigger (FOR EACH ROW):** Executes the trigger function for each affected row.
- **Statement-Level Trigger (FOR EACH STATEMENT):** Executes the trigger function once per SQL statement, regardless of the number of affected rows.

Use Cases:
- **Row-Level:** Needed when actions depend on row values (e.g., auditing changes).
- **Statement-Level:** Efficient when only one check or action is needed per statement (e.g., log attempts or block certain actions).

## Trigger Timing and Compatibility

| Timing       | Row-Level        | Statement-Level      |
| ------------ | ---------------- | -------------------- |
| `BEFORE`     | Tables and Views | Tables and Views<br> |
| `AFTER`      | Tables and Views | Tables and Views<br> |
| `INSTEAD OF` | Views only       | ❌ Not supported<br>  |
## Trigger Behavior
- **RAISE NOTICE:** Just shows a message; doesn’t stop the operation.
- **RETURN NULL (in statement-level triggers):** Does not prevent the operation.
- **RAISE EXCEPTION:** Aborts the operation and the whole transaction.

## Trigger Conditions (`WHEN` Clause)

Given
```sql
CREATE OR REPLACE FUNCTION give_bob_full_mark() RETURNS TRIGGER AS $$
BEGIN
	IF (NEW.Name = 'Bob') THEN
		NEW.Mark := 100;
	END IF;
	RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER bob_should_get_full_mark
BEFORE INSERT ON Scores
FOR EACH ROW
EXECUTE FUNCTION give_bob_full_mark();
```

Instead of checking the condition on each insertion, we can move simple logic like `IF NEW.name = 'BOB` to the `WHEN` clause.

```sql
CREATE OR REPLACE FUNCTION give_adi_full_mark() RETURNS TRIGGER AS $$
BEGIN
	NEW.Mark := 100;
	RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER bob_should_get_full_mark
BEFORE INSERT ON Scores
FOR EACH ROW WHEN (NEW.name = 'Bob')
EXECUTE FUNCTION give_bob_full_mark();
```

Restrictions:
- No `SELECT` queries.
- No `OLD` in `INSERT`.
- No `NEW` in `DELETE`.
- No `WHEN` in `INSTEAD OF` triggers.

## Deferred Triggers
Deferred triggers are especially useful to ensure data consistency across multiple operations in a transaction.

INITIALLY DEFERRED indicates that by default, the trigger is deferred. In other words, only check at the end of the transaction.

```sql
CREATE CONSTRAINT TRIGGER balance_check
AFTER INSERT OR UPDATE OR DELETE ON Account
DEFERRABLE INITIALLY DEFERRED
FOR EACH ROW EXECUTE FUNCTION check_balance();
```

>[!note]
>`CONSTRAINT` and `DEFERRABLE` together indicate that the trigger can be deferred.
>

Now we can do the following, `check_balance()` triggered for both rows are deferred to the end of the transaction.

```sql
BEGIN TRANSACTION;

UPDATE Account SET Balance = Balance – Amount WHERE AID = Account1;
UPDATE Account SET Balance = Balance + Amount WHERE AID = Account2;

COMMIT;
```

Deferred triggers only works with:
- `AFTER`
- `FOR EACH ROW`
- Must be defined as `CONSTRAINT` and `DEFERRABLE`

**Example Use Case:** Ensure a customer’s total account balance ≥ 150, only after all account updates in a transaction are done.
