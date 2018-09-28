# A whole new ORM World

I can show you the world... of (ORMs) shining, shimmering splendid. Tell me `disney_princesses` now when did you let last your heart decide (to create a new database). I can open your eyes (to the power of ORMs). Take you wonder by wonder! Over sideways and under on a magic SQL ride. A WHOLE NEW ORM WOOOOOORLD. A new fantastic way to query.

In this activity you will be practicing your magically cruddy SQL skills and creating Disney princesses through SQLAlchemy.

## Instructions

* Import the neccessary dependencies for `SQLAlchemy`
* Create a new class called `Princess` that holds the following values:
    * `__tablename__`: Should be "disney_princesses"
    * `id`: a primary key that auto-increments
    * `name`: a string, the name of the princess (ex. Jasmine)
    * `sidekick`: a string, the name of the princess' sidekick (ex. Rajah)
    * `coolness`: a float, represents how cool you think this character is (1-100 value)
* Create a connection to the SQLite database and create a session object to push the newly created object
* Create at least 3 instances of the `Princess` class and commit them to the database
* Update the data so that one character's coolness is now 100 and change another's sidekick name
* Delete the row with the lowest coolness
* Read and display all the data within this database