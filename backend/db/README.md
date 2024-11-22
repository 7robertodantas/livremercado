## Creating the Database

To create the database for the first time, use the following command in the terminal:

```shell
sqlite3 sqlite.db "VACUUM;"
```

### Migrations

### Installation

To use db-migrate you need to install it globally first:

```shell
npm install -g db-migrate
```

#### Running Migrations

When first running the migrations, all will be executed in sequence. A table named migrations will also be created in your database to track which migrations have been applied.

```shell
db-migrate up
```

#### Creating a New Migration

To create a new migration using the `db-migrate` module, refer to the [db-migrate documentation](https://db-migrate.readthedocs.io/en/latest/Getting%20Started/usage/).

Run the following command:

```shell
db-migrate create add-people --sql-file
```

This command generates three files:

- `./migrations/20111219120000-add-people.js`
- `./migrations/sqls/20111219120000-add-people-up.sql`
- `./migrations/sqls/20111219120000-add-people-down.sql`

Replace the content of the SQL files with your SQL commands.