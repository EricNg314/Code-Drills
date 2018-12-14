-- Drops the sequel_db if it already exists --
DROP DATABASE IF EXISTS sequel_db;
-- Create a database called se quel_db --
CREATE DATABASE sequel_db;

USE sequel_db;

CREATE TABLE movies_with_sequels(
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(256),
  rating INT,
  -- Creates a boolean column called "liked" (or whatever you want) which will automatically fill --
  -- with false when a new row is made and the value isn't otherwise defined. --
  liked BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);

-- Creates new rows --
INSERT INTO movies_with_sequels (title, rating)
VALUES 
("2 Fast 2 Furious", 70),
("Finding Dory", 95),
("Incredibles 2", 95),
("Toy Story 3", 95),
("Pitch Perfect 2", 50),
("Harry Potter and the Deathly Hallows Part II", 95),
("Rush Hour 2", 65),
("Lord of the Rings - Return of the King", 95),
("Iron Man 3", 75),
("The Matrix Reloaded", 65);

SELECT * from movies_with_sequels;

-- Update the table and set liked to true where the movie's rating is greater than 75
update movies_with_sequels
SET liked = true
WHERE rating > 75;

-- Display the table again to see your changes --
SELECT * from movies_with_sequels;

-- Add a column called 'better_than_og' that takes a default boolean value
ALTER TABLE movies_with_sequels
ADD better_than_og BOOLEAN default false;

-- Update the column for movies you thought were better than the original
update movies_with_sequels
set better_than_og = true
WHERE title = "Finding Dory";

update movies_with_sequels
set better_than_og = true
WHERE id = 3;

update movies_with_sequels
set better_than_og = true
WHERE title = "Toy Story 3";

update movies_with_sequels
set better_than_og = true
WHERE id = 6;

-- Display the table again to see your changes --
SELECT * from movies_with_sequels;

-- Delete rows where liked and better_than_og are false

DELETE FROM movies_with_sequels
WHERE liked = false
OR better_than_og = false;

-- Display the table again to see your changes --
SELECT * from movies_with_sequels;