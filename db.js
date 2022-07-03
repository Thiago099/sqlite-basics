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

module.exports.run = (sql, callback) => {
    db.exec(sql, base_sql_callback(callback));
}

module.exports.query = (sql, callback) =>  {
    db.all(sql, base_sql_callback(callback));
}