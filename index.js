const db = require('./db');
var fs = require('fs');
db.serialize(() => {
    db.run(fs.readFileSync('./example.sql').toString())
    db.query(`
        SELECT * from entity
        `,result => {
        console.log("Instance");
        console.table(result);
    })

    db.close();
})
