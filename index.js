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
        console.log("Instance");
        console.table(result);
    })

    db.query(`
        SELECT entity.name entiy, state.name state
        FROM entity_state
        INNER JOIN entity ON entity.id = entity_state.entity_id
        INNER JOIN state ON state.id = entity_state.state_id
        `,result => {
        console.log("Entity State");
        console.table(result);
    })
    db.query(`
        SELECT entity.name entity, action.name action
        FROM entity_action
        INNER JOIN entity ON entity.id = entity_action.entity_id
        INNER JOIN action ON action.id = entity_action.action_id
        `,result => {
        console.log("Entity Action");
        console.table(result);
    })
    db.query(`
        SELECT entity_action_cause_id cause, entity_action_effect_id effect
        FROM entity_action_causality
        `,result => {
        console.log("Entity Action Causality");
        console.table(result);
    })
    db.close();
})
