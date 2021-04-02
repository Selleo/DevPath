+++
title = "Persistance - Advanced"
weight = 2
+++

{{%bubble %}}

## Persistance Advanced

**Points:** 2

**Description:** You can get the most out of the relational database (PostgreSQL) and knows when to pick different solution for persistance layer

**Person which successfully completed requirement for given block can:** 

- Knows other type of databases and common use-cases for them
- Can build reactable database solution
- Can use query optimization technics
- Knows how to use complex operations keeping the high-level of data integrity
- Understands different data models and its applications


{{% /bubble%}}

## Areas

**Competence**

- Different types of persistance layers
- More joins
- Filtering out distinct rows
- Conditionals
- Text/math operations & formatting
- JSON / JSONB
- Foreign keys and referencial integrity
- Basic indexing
- Subqueries
- Transactions basics
- Views & materialized views
- Set operations
- Common table expressions aka CTE
- Generating series for different data types
- Window functions
- Indexing
- Query planner
- More joins
- Merge (aka upsert)
- Simple locking
- Triggers & generated-columns
- Text search

{{%todo %}}
## 📦 Different types of persistance layers
{{% /todo%}}

## 📦 More joins

- LEFT
- RIGHT

### 🎓 Resources

- 📗 [queries-table-expressions](https://www.postgresql.org/docs/11/static/queries-table-expressions.html)

---

## 📦 Filtering out distinct rows

- DISTINCT [ON]

### 🎓 Resources

- 📗 [sql-select](https://www.postgresql.org/docs/11/sql-select.html)

---

## 📦 Conditionals

- CASE
- COALESCE
- GREATEST
- LEAST

### 🎓 Resources

- 📗 [functions-conditional](https://www.postgresql.org/docs/11/static/functions-conditional.html)

---

## 📦 Text/math operations & formatting

Text:
- string concatenation (`||` / concat / concat_ws)
- length
- lower / upper
- quote_*

> Be aware of encoding/converting functions.

Math:
- operators
- round
- ceil
- floor
- sign
- trunc
- random
- div
- scale

### 🎓 Resources

- 📗 [functions-string](https://www.postgresql.org/docs/11/static/functions-string.html)
- 📗 [functions-formatting](https://www.postgresql.org/docs/11/static/functions-formatting.html)
- 📗 [functions-math](https://www.postgresql.org/docs/11/static/functions-math.html)

---

## 📦 JSON / JSONB 

### 🎓 Resources

- 📗 [datatype-json](https://www.postgresql.org/docs/11/static/datatype-json.html)
- 📗 [functions-json](https://www.postgresql.org/docs/11/static/functions-json.html)

---

## 📦 Foreign keys and referencial integrity

-  FOREIGN KEY

### 🎓 Resources

- 📗 [ddl-constraints](https://www.postgresql.org/docs/11/static/ddl-constraints.html)

---

## Basic indexing

- understand that there are different types that support different operations (no need for in-depth theory how it works)
- Unique
- Multicolumn

### 🎓 Resources

- 📗 [indexes](https://www.postgresql.org/docs/11/static/indexes.html)
- 📗 [types](https://www.postgresql.org/docs/11/indexes-types.html)
- 📗 [multicolumn](https://www.postgresql.org/docs/11/indexes-multicolumn.html)

## 📦 Subqueries

### 🎓 Resources

- 📗 [functions-subquery](https://www.postgresql.org/docs/11/static/functions-subquery.html)

---

## 📦 Transactions basics
### 🎓 Resources
- 📗 [sql-begin](https://www.postgresql.org/docs/11/static/sql-begin.html)
- 📗 [sql-commit](https://www.postgresql.org/docs/11/static/sql-commit.html)
- 📗 [sql-rollback](https://www.postgresql.org/docs/11/static/sql-rollback.html)

---

## 📦 Views & materialized views

### 🎓 Resources
- 📗 [sql-createview](https://www.postgresql.org/docs/11/static/sql-createview.html)
- 📗 [rules-materializedviews](https://www.postgresql.org/docs/11/static/rules-materializedviews.html)
- 📗 [sql-refreshmaterializedview](https://www.postgresql.org/docs/11/static/sql-refreshmaterializedview.html)

---

## 📦 Set operations

- UNION [ALL]
- INTERSECT [ALL]
- EXCEPT [ALL]

### 🎓 Resources
- 📗 [queries-union](https://www.postgresql.org/docs/11/static/queries-union.html)
- 📗 [sql-select](https://www.postgresql.org/docs/11/static/sql-select.html)
- 📗 [type-resolution](https://www.postgresql.org/docs/current/typeconv-union-case.html)

## 📦 Common table expressions aka CTE

### 🎓 Resources

- 📗 [queries-with](https://www.postgresql.org/docs/11/static/queries-with.html)
- 📗 [workshop-db-03](https://github.com/qbart/workshop-db-03)

---

## 📦 Generating series for different data types

### 🎓 Resources

- 📗 [functions-srf](https://www.postgresql.org/docs/11/static/functions-srf.html)

---

## 📦 Window functions

### 🎓 Resources

- 📗 [tutorial-window](https://www.postgresql.org/docs/11/static/tutorial-window.html)
- 📗 [sql-select](https://www.postgresql.org/docs/11/static/sql-select.html#SQL-WINDOW)
- 📗 [functions-window](https://www.postgresql.org/docs/11/static/functions-window.html)
- 📗 [workshop-db-03](https://github.com/qbart/workshop-db-03)

---

## 📦 Indexing

### 🎓 Resources

- 📗 [indexes](https://www.postgresql.org/docs/11/static/indexes.html)
- 📗 [heroku postgres indexes](https://devcenter.heroku.com/articles/postgresql-indexes)
- 📗 [principles-and-applications-of-the-index-types-supported-by-postgresql](https://medium.com/@Alibaba_Cloud/principles-and-applications-of-the-index-types-supported-by-postgresql-481f59bab67d)
- 📗 [tour-of-postgres-index-types](https://www.citusdata.com/blog/2017/10/17/tour-of-postgres-index-types/)
- 📗 [habr blog](https://habr.com/en/company/postgrespro/blog/441962/) (1-10)

---

## 📦 Query planner

### 🎓 Resources

- 📗 [explaining-the-unexplainable 1](https://www.depesz.com/2013/04/16/explaining-the-unexplainable/)
- 📗 [explaining-the-unexplainable 2](https://www.depesz.com/2013/04/27/explaining-the-unexplainable-part-2/)
- 📗 [explaining-the-unexplainable 3](https://www.depesz.com/2013/05/09/explaining-the-unexplainable-part-3/)
- 📗 [explaining-the-unexplainable 4](https://www.depesz.com/2013/05/19/explaining-the-unexplainable-part-4/)
- 📗 [performance-tips](https://www.postgresql.org/docs/11/performance-tips.html)
- 📗 [parallel-query](https://www.postgresql.org/docs/11/parallel-query.html)
- 📗 [performance-cheat-sheet-postgresql](https://severalnines.com/blog/performance-cheat-sheet-postgresql)
- 📗 [reading-an-explain-analyze-query-plan](https://robots.thoughtbot.com/reading-an-explain-analyze-query-plan)
- 📗 [plan-visualization](http://tatiyants.com/pev/#/plans)

---

## 📦 More joins

- FULL
- CROSS

### 🎓 Resources

- 📗 [queries-table-expressions](https://www.postgresql.org/docs/11/static/queries-table-expressions.html)

---

## 📦 Merge (aka upsert)

### 🎓 Resources

- 📗 [sql-insert](https://www.postgresql.org/docs/11/static/sql-insert.html)

---

## 📦 Simple locking

### 🎓 Resources

- 📗 [sql-for-update-share](https://www.postgresql.org/docs/current/sql-select.html#SQL-FOR-UPDATE-SHARE)
- 📗 [explicit-locking](https://www.postgresql.org/docs/11/static/explicit-locking.html)

---

## 📦 Triggers & generated-columns

### 🎓 Resources

- 📗 [generated-columns](https://www.postgresql.org/docs/12/ddl-generated-columns.html)
- 📗 [sql-createtrigger](https://www.postgresql.org/docs/11/static/sql-createtrigger.html)
- 📗 [plpgsql-trigger](https://www.postgresql.org/docs/11/static/plpgsql-trigger.html)
- 📗 [trigger-definition](https://www.postgresql.org/docs/11/static/trigger-definition.html)
- 📗 [functions-event-triggers](https://www.postgresql.org/docs/11/functions-event-triggers.html)

---

## 📦 Text search

As a general rule you understand differences and similiartites between two approaches and you know when to use Postgres or ElasticSearch.

### 🎓 Resources

- 📙 [datatype-textsearch](https://www.postgresql.org/docs/11/static/datatype-textsearch.html)
- 📙 [functions-textsearch](https://www.postgresql.org/docs/11/static/functions-textsearch.html)
- 📙 [textsearch](https://www.postgresql.org/docs/11/static/textsearch.html)

### 🎓 Elastic Search

Elasticsearch is a distributed, open source search and analytics engine for all types of data, including textual, numerical, geospatial, structured, and unstructured.
Possible use cases:

* Application search
* Website search
* Logging and log analytics
* Infrastructure metrics and container monitoring
* Application performance monitoring
* Geospatial data analysis and visualization
* Security analytics
* Business analytics

- 📙 [es-intro](https://www.elastic.co/guide/en/elasticsearch/reference/current/elasticsearch-intro.html)
- 📙 [es-docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs.html)
- 📙 [es-indices](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices.html)
- 📙 [es-mapping](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping.html)
- 📙 [es-query-dsl](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html)

## Different data models

- 📙 ["Classification" of different database systems](https://db-engines.com/en/article/NoSQL)
- 📗 [No-SQL db-engines](https://db-engines.com/en/article/NoSQL)
- 📗 [No-SQL Microsoft docs](https://azure.microsoft.com/en-us/overview/nosql-database/)
- 📗 [No-SQL MongoDB docs](https://www.mongodb.com/nosql-explained)

### Document-oriented

- 📙 [DB engines](https://db-engines.com/en/article/Document+Stores)
- 📙 [Wikipedia](https://en.wikipedia.org/wiki/Document-oriented_database)
- 📙 [DB engines - MongoDB](https://db-engines.com/en/system/MongoDB)

### Graph-oriented 

- 📙 [Graph DBMS](https://db-engines.com/en/article/Graph+DBMS)
- 📙 [Intro to Graphs and Neo4j](https://www.youtube.com/watch?v=Go3P73-KV30)
- 📙 [Neo4j Top Use Cases](https://www.youtube.com/watch?v=lb90EBfAj0o)
- 📙 [Neo4j graph database book](https://neo4j.com/graph-databases-book/)
- 📙 [Data modeling](https://neo4j.com/developer/data-modeling/)
- 📙 [Neo4j gists](https://neo4j.com/graphgists/)

### Wide-Column stores

- 📙 [DB engines](https://db-engines.com/en/article/Wide+Column+Stores)
- 📙 [Dataversity](https://www.dataversity.net/wide-column-database/)

## Questions

1. What's the difference between `DISTINCT` and `DISTINCT ON`?
2. What's the difference between `UNION/INTERSECT/EXCEPT` and `UNION/INTERSECT/EXCEPT ALL`?
- When combining two queries with `UNION/INTERSECT/EXCEPT [ALL]`, what conditions must be met to produce a valid output?
3. Describe transactions.
4. What are views?
5. What are materialized views?
- Example usage? 
- How to refresh it?
- Can we create indexes? Why/Why not?
- What conditions must be met to refresh materialized view via `CONCURRENTLY` option? 
6. Describe basic index types and their operators support.
- What types/data are worth indexing?
- In which situations is it [is it not] beneficial to create an index?
- Does the order of indexed columns for the multicolumn index matter? Why/Why not?
7. What is the purpose of referential integrity and how do we implement one?
8. Describe ACID.
9. Describe difference between `FULL JOIN` and `CROSS JOIN`.
10. In which situations the `INSERT` command will trigger `ON CONFLICT` action that was specified in the upsert query?
11. How do database triggers work? 
12. How do generated columns work?
13. Compare PostgreSQL text-search capabilities with ElasticSearch.
- In which situations you would recommend customer to use PostgreSQL FTS vs. ElasticSearch?
14. Describe locking. What is it for?
- Describe row-level, table-level, advisory locks.
- What is a deadlock?
15. Indexing:
- What are partial indexes?
- What are expressions indexes?
- What are include indexes?
- What is an index-only scan? How does it correlate to include indexes?
16. What is a query planner?
- Does it always generate fully optimal plan?
- Can you force query planner to choose a different plan?
17. Describe NoSQL database of your choice.
18. What is the column store and what is a column-oriented storage that exists in some RDBMS?
19. In which situations you would recommend document-oriented store?
20. In which situations you would recommend graph-oriented store?
21. Describe NoSQL scaling.
