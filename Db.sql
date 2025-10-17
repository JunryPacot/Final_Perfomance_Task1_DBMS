CREATE DATABASE FPT1_Pacot;

USE FPT1_Pacot;

CREATE TABLE patient_Pacot (id INT AUTO_INCREMENT PRIMARY KEY,firstname VARCHAR(100),lastname VARCHAR(100),gender VARCHAR(10),age INT);

INSERT INTO patient_Pacot (firstname, lastname, gender, age)VALUES('Junry', 'Pacot', 'Male', 19),('Lee', 'Bebis', 'Male', 19),('Mike', 'Ibit', 'Male', 19),('Jashaa', 'Deofilo', 'Female', 20),('Crispen', 'Duarte', 'Male', 19);

SELECT * FROM patient_Pacot;

UPDATE patient_Pacot SET firstname = 'Leonard' WHERE firstname = 'Lee'; SELECT * FROM patient_Pacot;

UPDATE patient_Pacot SET gender = 'Female' WHERE firstname = 'Mike'; SELECT * FROM patient_Pacot;

UPDATE patient_Pacot SET age = 20 WHERE firstname = 'Junry'; SELECT * FROM patient_Pacot;

UPDATE patient_Pacot SET lastname = 'Duartez' WHERE firstname = 'Crispen'; SELECT * FROM patient_Pacot;

