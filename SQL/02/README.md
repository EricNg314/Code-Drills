# Gotta Query Em' All

Do you want to be the very best? That no one ever was? To catch them all, is your real test. To query them is our cause. You will travel across the csvs, searching for and wide. Each Pokemon to understand, the power that's inside! POKEMON gotta query em all!

*ahem* In this code drill you will get more practice importing a csv into MySQL and performing various queries.

## Instructions

* Create a new database called `Pokemon_db`
* In this database, use the table import wizard within MySQL Workbench and import the `pokemon.csv` file
* First let's get rid of all the weak Pokemon. We only care about the strong ones! Only keep Pokemon with a `Total` greater than 500
* Alter the table and add a primary key ID
* Select all Pokemon that are Dragon type. Make sure to select from either `Type 1` or `Type 2`
* Select all Pokemon where `Legendary` is equal to true has a total greater than `600` and are Dragon type
* Create a new table called `gen5_legendaries` where the `Generation` is equal to 5 and `Legendary` is equal to true
* Find the average of each stat column for the Pokemon in the `gen5_legendaries` table
* Find the strongest and weakest pokemon from this table based on their `Total`
* Create another new table where the `Total` is equal to 600 and every column with numerical value is equal to 100. Call this new table `cute_legendaries`
* Update the `cute_legendaries` table to set all false instances in `Legendary` to true

## Hints

Some columns have spaces in them which will mess up your queries. Be sure you check syntax, the order of AND and OR statements in your queries matter!
