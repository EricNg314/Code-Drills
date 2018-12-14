# 2 SQL 2 SCHEMA - The CRUDy SQL sequel

Hollywood is known for their sequels. But which ones actually lived up to their predecessor? You decide! In this activity we will be creating a database and adding tables with movies that have sequel. Your task is to find movies with sequel and rate them. 

This is meant to help exercise your SQL schema writing powers and get more practice with CRUD. Start to love and learn CRUD or you will have a _crudy_ experience with SQL!

## Instructions

* Create a new database called `sequel_db` this will be a database of movies that have sequels
* Create a table called `movies_with_sequels` which includes a primary key `id` that auto increments
* The table should include a column for the `name` of the movie and a `rating` score ranging from 1-100 and a `thumbs up/down`. (You can call these columns whatever you like these are just suggestions)
* The `thumbs up/thumbs down` column should take a boolean which defaults to `false` and represents whether you liked the movie or not
* Insert data into your table only with the `title` and `rating`
  
Now start Googling! Or if you remember some of your favorite movies that have sequels start inserting that data into your table. Try to at least have 8-10 movies in your database.

Display the table after each change

* Modify your table and change the `thumbs up` column with `true` where the rating is greater than 75.
* Add an extra column to your table called `better than the og` that takes a boolean and represents... well was it better than the original?
* Add in whether you think the movie was better than the original into this column
* Delete all movies that you don't like OR aren't better than the original

You now have a table of the best sequels ever. Grats!
