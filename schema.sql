CREATE DATABASE system_clients;

USE system_clients;

CREATE TABLE clients (
    id int AUTO_INCREMENT PRIMARY KEY,
    name_client VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    nif CHAR(8) UNIQUE NOT NULL,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
);
