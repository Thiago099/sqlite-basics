const db = require('./db');

db.serialize(() => {
    db.run(`
        CREATE TABLE entity
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(64)
        );
    `)
    db.run(`
        INSERT INTO entity (name) VALUES ('John'), ('Jane'), ('Bob');
    `,)
    db.query('SELECT * FROM entity',result => {
        console.log(result);
    })
    db.close();
})
