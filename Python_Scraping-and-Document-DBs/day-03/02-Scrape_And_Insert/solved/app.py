# import necessary libraries:
  # Flask, render_template, redirect from flask
  # PyMongo from flask_pymongo

# import your scrape file.

from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import scrape_news

# ---------------------------------------------------------
# create instance of Flask app
app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/state_app"
mongo = PyMongo(app)

# ---------------------------------------------------------
# Create your root route (or home route)
@app.route("/")
def home():
  # Query mongo for all documents in a collection called "state_collection"
  state_news = mongo.db.state_collection.find()

  # Render the template "index.html" passing through a variable called
    # "state_news" with the values from your mongo query.
  return render_template("index.html", state_news = state_news)

# ---------------------------------------------------------
@app.route("/scrape")
def scrape():
  # Create a variable to called "state_news" and 
    # call upon your scrape function defined in your scrape file.
    # HINT: Start working on your scrape file and come back to this task later.
  state_news = scrape_news.scrape_states()

  # Insert the "state_news" array into mongo as individual documents for each object.
  mongo.db.state_collection.insert_many(state_news)

  # Tell the user's browser to return to the root route and provide a status code of 302.
  return redirect("/", code=302)

# ---------------------------------------------------------
# Run your app.
if __name__ == "__main__":
  app.run(debug=True)