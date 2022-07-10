const db = require('./db');
var fs = require('fs');
db.serialize(() => {
    db.run(fs.readFileSync('./example.sql').toString())
    db.query('SELECT * FROM entity',result => {
        console.log(result);
    })
    db.query('SELECT * FROM state',result => {
        console.log(result);
    })
    db.query('SELECT * FROM action',result => {
        console.log(result);
    })
    db.close();
})
