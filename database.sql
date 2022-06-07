CREATE DATABASE SearchUser;

USE SearchUser;

CREATE TABLE users (
    id INT NOT NULL auto_increment PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(60) NOT NULL,
    age INT NOT NULL
);

INSERT INTO SearchUser.users (name, email, age) VALUES
    ("Homiranha","homiranha@marvel.com", 22),
    ("Batman", "batman@dc.com", 30),
    ("Capitão América","cap@marvel.com", 26);