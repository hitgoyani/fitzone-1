CREATE DATABASE IF NOT EXISTS mydata;
USE mydata;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    age INT,
    mobile VARCHAR(15)
);

CREATE TABLE trainers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    specialization VARCHAR(50) NOT NULL,
    experience_years INT,
    email VARCHAR(50) NOT NULL
);

INSERT INTO users (name, email, age, mobile) VALUES
('Hit Goyani', 'hit.goyani@email.com', 22, '9876543210'),
('Dhruv Gajera', 'dhruv.gajera@email.com', 21, '9876543211'),
('Abhi Patel', 'abhi.patel@email.com', 23, '9876543212'),
('Dev Savani', 'dev.savani@email.com', 20, '9876543213');

INSERT INTO trainers (name, specialization, experience_years, email) VALUES
('Hit Goyani', 'Strength Training', 3, 'hit.goyani@fitzone.com'),
('Dhruv Gajera', 'Yoga & Flexibility', 2, 'dhruv.gajera@fitzone.com'),
('Abhi Patel', 'Cardio & Weight Loss', 4, 'abhi.patel@fitzone.com'),
('Dev Savani', 'Zumba & Dance', 1, 'dev.savani@fitzone.com');
