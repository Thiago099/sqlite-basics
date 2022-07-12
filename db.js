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

module.exports.run = (sql) => {
    db.exec(sql, function(err){
        if (err) {
            return console.error(err.message);
        }
    });
}


module.exports.query = (sql, callback) =>  {
    db.all(sql, base_sql_callback(callback));
}

module.exports.serialize = (callback) => {
    db.serialize(callback);
}

module.exports.close = () => {
    db.close();
}
