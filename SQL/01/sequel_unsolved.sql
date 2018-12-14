-- Drops the sequel_db if it already exists --
DROP DATABASE IF EXISTS sequel_db;
-- Create a database called sequel_db --
CREATE DATABASE sequel_db;

USE sequel_db;

-- Create a table called movies_with_sequels
CREATE TABLE movies_with_sequels(
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
  -- Creates a boolean column called "liked" (or whatever you want) which will automatically fill --
  -- with false when a new row is made and the value isn't otherwise defined. --
);

-- Creates new rows with movie titles and ratings for each --

-- Display the table
SELECT * from movies_with_sequels;

-- Update the table and set liked to true where the movie's rating is greater than 75

-- Display the table again to see your changes --
SELECT * from movies_with_sequels;

-- Add a column called 'better_than_og' that takes a default boolean value

-- Update the column for movies you thought were better than the original

-- Display the table again to see your changes --
SELECT * from movies_with_sequels;

-- Delete rows where liked and better_than_og are false

-- Display the table again to see your changes --
SELECT * from movies_with_sequels;