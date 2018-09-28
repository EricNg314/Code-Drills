# Harry Potter and the Flask of APIs

You're an API wizard Harry! In this exercise you will be using `Flask` to create API routes that return json for a Python dictionary containing the name of Hogwarts students and their houses. 

## Instructions

* Intialize your flask app and create a default route `/` that returns a welcome message and all available routes
* Display routes for each of the 4 houses: Gryffindor, Ravenclaw, Hufflepuff and Slytherin
* You will be conjuring 2 variable API routes. 
    * One that is able to take the name of a given house and returns all students in that house
    * A second that takes a name of specific student and returns all information on that student
    * If the house or student does not exist return an error message

## Bonus

Look into HTML `<a>` tags and display the available routes as clickable links

## Hints

* If you're stuck and don't know where to start look towards the in class activities from `Week 11/Day-2` numbers 7-8
* In order to display all students in a house, you will need to create an empty variable that gets data appended to it when the variable matches