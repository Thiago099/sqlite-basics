CREATE TABLE entity
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(64)
);
INSERT INTO entity (name) VALUES ('John'), ('Jane'), ('Bob'), ('you');

CREATE TABLE state
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(64)
);
INSERT INTO state (name) VALUES ('handsome'), ('ugly'), ('fat'), ('thin'), ('tall'), ('short'), ('hot'), ('cold'),('burnt');

CREATE TABLE action
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(64)
);
INSERT INTO action (name) VALUES ('jump'), ('swim'), ('walk'), ('run'), ('play'), ('eat'), ('touch'), ('drink'), ('sleep'),('burn');