/* querys criadas para testar se o banco estava conectado */
CREATE DATABASE firstapi;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email) VALUES 
('joe', 'joe@fazweb.com'),
('ryan', 'ryan@fazweb.com');