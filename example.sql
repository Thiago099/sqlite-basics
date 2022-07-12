CREATE TABLE entity
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(64)
);
INSERT INTO entity VALUES (1, 'eletronic'), (2, 'hands'), (3, 'something'), (4, 'something hot'), (5, 'burned hands');

CREATE TABLE state
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(64)
);
INSERT INTO state VALUES (1, 'broken'), (2, 'burned'), (3, 'hot');

CREATE TABLE action
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(64)
);
INSERT INTO action VALUES (1, 'wet'), (2, 'touch'), (3, 'burn'), (4, 'break');

CREATE TABLE instance
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    entity_from_id INTEGER,
    entity_to_id INTEGER,
    FOREIGN KEY(entity_from_id) REFERENCES entity(id),
    FOREIGN KEY(entity_to_id) REFERENCES entity(id)
);

INSERT INTO instance VALUES (1, 3, 4), (2, 3,2), (3, 3, 1),(4, 2, 5);

CREATE TABLE entity_state
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    entity_id INTEGER,
    state_id INTEGER,
    FOREIGN KEY(entity_id) REFERENCES entity(id),
    FOREIGN KEY(state_id) REFERENCES state(id)
);

INSERT INTO entity_state VALUES (1, 4, 3), (2, 5, 2);

CREATE TABLE entity_action
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    entity_id INTEGER,
    action_id INTEGER,
    FOREIGN KEY(entity_id) REFERENCES entity(id),
    FOREIGN KEY(action_id) REFERENCES action(id)
);

INSERT INTO entity_action VALUES (1, 4, 2), (2, 3, 2), (3, 1, 1), (4, 1, 4);

CREATE TABLE entity_action_causality
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    entity_action_cause_id INTEGER,
    entity_action_effect_id INTEGER,
    FOREIGN KEY(entity_action_cause_id) REFERENCES entity_action(id),
    FOREIGN KEY(entity_action_effect_id) REFERENCES entity_action(id)
);

INSERT INTO entity_action_causality VALUES (1, 1, 2), (2, 2, 3);