DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
    id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(50),
    devoured boolean,
    PRIMARY KEY(id)  
)