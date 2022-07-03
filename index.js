const db = require('./db');
var fs = require('fs');
db.serialize(() => {
    db.run(fs.readFileSync('./example.sql').toString())
    db.query('SELECT * FROM entity',result => {
        console.log(result);
    })
    db.query('SELECT * FROM adjective',result => {
        console.log(result);
    })
    db.query('SELECT * FROM verb',result => {
        console.log(result);
    })
    db.close();
})
