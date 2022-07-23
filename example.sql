CREATE TABLE entity
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(64)
);
INSERT INTO entity VALUES (1, 'eletronic'), (2, 'hands'), (3, 'something');

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
