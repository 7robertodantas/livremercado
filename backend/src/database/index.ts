
import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('./db/sqlite.db', (err) => {
    if (err) {
        console.error('Error opening database', err);
        throw err;
    }

    db.run('PRAGMA foreign_keys=ON;', (err) => {
        if (err) {
            console.error('Error enabling foreign keys', err);
        }
    });
});

export default db;
