/* LogRocket tutorial express/postgresql */

CREATE TABLE IF NOT EXISTS users (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(30)
);

/* show tables */
SELECT * FROM pg_catalog.pg_tables;

SELECT * FROM users;
