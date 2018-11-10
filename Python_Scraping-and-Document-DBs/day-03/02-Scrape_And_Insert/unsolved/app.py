# import necessary libraries:
  # Flask, render_template, redirect from flask
  # PyMongo from flask_pymongo

# import your scrape file.



# ---------------------------------------------------------
# create instance of Flask app


# Use flask_pymongo to set up mongo connection



# ---------------------------------------------------------
# Create your root route (or home route)


  # Query mongo for all documents in a collection called "state_collection"


  # Render the template "index.html" passing through a variable called
    # "state_news" with the values from your mongo query.


# ---------------------------------------------------------


  # Create a variable to called "state_news" and 
    # call upon your scrape function defined in your scrape file.
    # HINT: Start working on your scrape file and come back to this task later.


  # Insert the "state_news" array into mongo as individual documents for each object.


  # Tell the user's browser to return to the root route and provide a status code of 302.


# ---------------------------------------------------------
# Run your app.
