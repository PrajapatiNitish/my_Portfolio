-- Create db in sql.
CREATE DATABASE IF NOT EXISTS defaultdb;
USE defaultdb;

-- This is feedback schema.

CREATE TABLE feedbackData(
    userId VARCHAR(37) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    feedback VARCHAR(1000) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);