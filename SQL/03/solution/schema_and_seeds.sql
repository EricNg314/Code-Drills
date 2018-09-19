DROP DATABASE IF EXISTS Mail_Values_DB;
CREATE DATABASE Mail_Values_DB;

USE Mail_Values_DB;

CREATE TABLE people (
	PersonId INT, 
	FirstName VARCHAR(255), 
	LastName VARCHAR(255), 
	Savings INT);
CREATE TABLE Address (
	AddressId INT, 
	PersonId INT, 
	City VARCHAR(255), 
	State VARCHAR(255),
	Avg_Price INT);

/* Truncate table deletes all records from a table.*/
TRUNCATE TABLE people; 
INSERT INTO people (PersonId, LastName, FirstName, Savings) 
VALUES ('1', 'Jimmy', 'Tron', 10000),
	('2', 'Bobert', 'Saw', 15000),
	('3', 'Derick', 'Sing', 10000),
    ('4', 'Sosha', 'Paste', 20000),
    ('5', 'Rick', 'Claw', 18000);

TRUNCATE TABLE Address;
INSERT INTO Address (AddressId, PersonId, City, State, Avg_Price) 
VALUES ('1', '1', 'San Jose', 'California',100000),
	('2', '2', 'Oakland', 'California',800000),
	('3', '4', 'Oakland', 'California',800000),
    ('4','5', 'Richmond', 'California',750000),
	('5','7', 'San Francisco', 'California',200000);