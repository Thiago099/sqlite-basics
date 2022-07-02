const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        return console.error(err.message);
    }
});

function base_sql_callback(callback = ()=>{}) {
    return function (err, result) {
        if (err) {
            return console.error(err.message);
        }
        callback(result);
    }
}

db.exec(`
    CREATE TABLE entity
    (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(64)
    );
`)
db.exec(`
    INSERT INTO entity (name) VALUES ('John'), ('Jane'), ('Bob');
`, base_sql_callback())
db.all('SELECT * FROM entity',base_sql_callback(result => {
    console.log(result);
}))
db.each('SELECT * FROM entity',base_sql_callback(result => {
    console.log(result);
}))

