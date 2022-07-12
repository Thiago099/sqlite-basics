CREATE TABLE entity
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(64)
);
INSERT INTO entity (name) VALUES ('eletronic');

CREATE TABLE state
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(64)
);
INSERT INTO state (name) VALUES ('new'), ('old'), ('functional'), ('broken');

CREATE TABLE action
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(64)
);
INSERT INTO action (name) VALUES ('wet');