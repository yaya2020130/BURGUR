DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;
CREATE TABLE burgers (
  id INT not null AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  devour BOOLEAN DEFAULT false
)