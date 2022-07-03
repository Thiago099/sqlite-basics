CREATE TABLE subject
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(64)
);
INSERT INTO subject (name) VALUES ('John'), ('Jane'), ('Bob');

CREATE TABLE adjective
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(64)
);
INSERT INTO adjective (name) VALUES ('handsome'), ('ugly'), ('fat'), ('thin'), ('tall'), ('short');

CREATE TABLE verb
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(64)
);
INSERT INTO verb (name) VALUES ('jump'), ('swim'), ('walk'), ('run'), ('play'), ('eat');