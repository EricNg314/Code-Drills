-- Drops the pokemon_db if it already exists --
DROP DATABASE IF EXISTS pokemon_db;
-- Create a database called programming_db --
CREATE DATABASE pokemon_db;
-- Use the database
USE pokemon_db;

-- Delete all the weak links.
DELETE FROM pokemon_db.pokemon WHERE Total < 500;

-- Alter the table and add an auto incrementing column with a primary ID.
ALTER TABLE pokemon
ADD id INT AUTO_INCREMENT PRIMARY KEY FIRST;

-- Select all dragon type Pokemon
SELECT * FROM pokemon 
WHERE `Type 1` = "Dragon" OR
`Type 2` = "Dragon";

-- Select all Pokemon that are legendary AND has a stat total greater than or equal to 600 AND are dragon types
SELECT * FROM pokemon
WHERE (Legendary = True AND Total >= 600)
AND (`Type 1` = "Dragon" OR
`Type 2` = "Dragon");

-- Create a new table called gen5_legendaries based on Pokemon from Generation 5 that are legendary
CREATE TABLE gen5_legendaries AS
    SELECT * FROM pokemon
    WHERE Legendary = "True" AND Generation = 5;

SELECT * FROM gen5_legendaries;

-- Find the average of each statfor all pokemon in this new table
SELECT 
AVG(Total),
AVG(HP),
AVG(Attack),
AVG(Defense),
AVG(`Sp. Atk`),
AVG(`Sp. Def`),
AVG(Speed)
FROM gen5_legendaries;

-- Find the strongest and weakest Pokemon from this table

-- Strongest
SELECT MAX(Total) FROM gen5_legendaries;

SELECT * FROM gen5_legendaries
WHERE Total = 700;

-- Weakest
SELECT MIN(Total) FROM gen5_legendaries;

SELECT * FROM gen5_legendaries
WHERE Total = 580;

-- Create another new table called `cute_legendaries`, a cute legendary is categorized as a Pokemon with a stat total of 600 and has 100 in every stat column.
CREATE TABLE cute_legendaries AS
    SELECT * FROM pokemon
    WHERE Total = 600 
    AND HP = 100
    AND Attack = 100
    AND Defense = 100
    AND `Sp. Atk` = 100
    AND `Sp. Def` = 100
    AND Speed = 100;

SELECT * FROM cute_legendaries;

-- Update Legendary to be true for all Pokemon in this table
UPDATE cute_legendaries
SET Legendary = "True";





