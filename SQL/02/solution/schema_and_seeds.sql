DROP DATABASE IF EXISTS Mailer_DB;
CREATE DATABASE Mailer_DB;

USE Mailer_DB;

CREATE TABLE Person (PersonId INT, FirstName VARCHAR(255), LastName VARCHAR(255));
CREATE TABLE Address (AddressId INT, PersonId INT, City VARCHAR(255), State VARCHAR(255));

/* Truncate table deletes all records from a table.*/
TRUNCATE TABLE Person; 
INSERT INTO Person (PersonId, LastName, FirstName) 
VALUES ('1', 'Jimmy', 'Tron'),
	('2', 'Bobert', 'Saw'),
	('3', 'Derick', 'Sing'),
    ('4', 'Sosha', 'Paste'),
    ('5', 'Rick', 'Claw');

TRUNCATE TABLE Address;
INSERT INTO Address (AddressId, PersonId, City, State) 
VALUES ('1', '1', 'San Jose', 'California'),
	('2', '2', 'Oakland', 'California'),
	('3', '4', 'Oakland', 'California'),
    ('4','5', 'Richmond', 'California'),
	('5','7', 'San Francisco', 'California');