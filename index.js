const db = require('./db');
var fs = require('fs');
db.serialize(() => {
    db.run(fs.readFileSync('./example.sql').toString())
    db.query(`
        SELECT entity_from.name entity_from, entity_to.name entity_to
        FROM instance
        INNER JOIN entity entity_from ON entity_from.id = instance.entity_from_id
        INNER JOIN entity entity_to ON entity_to.id = instance.entity_to_id
        `,result => {
        console.table(result);
    })
    db.close();
})
