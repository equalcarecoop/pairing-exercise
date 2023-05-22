import Database from "better-sqlite3";

export const db = Database("data.db");

db.exec(`CREATE TABLE IF NOT EXISTS examples (value TEXT)`);
db.exec(`INSERT INTO examples (value) VALUES ('Latest example: ${Date.now().toString()}')`);