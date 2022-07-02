const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        return console.error(err.message);
    }
});
db.exec(`
    CREATE TABLE entity
    (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(64)
    );
    `)
db.exec(`
    INSERT INTO entity (name) VALUES ('John');
    INSERT INTO entity (name) VALUES ('Jane');
    INSERT INTO entity (name) VALUES ('Bob');
`)
db.all('SELECT * FROM entity',(err,rows)=>{
    console.log(rows);
})
db.each('SELECT * FROM entity',(err,row)=>{
    console.log(row);
})
