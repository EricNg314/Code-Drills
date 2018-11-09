# import necessary libraries
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import scrape_wiki

# create instance of Flask app
app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/state_app"
mongo = PyMongo(app)

@app.route("/")
def home():
  # Temporary info for states_info
  states_info = [
    {
    "state":"California",
    "capital":"Sacramento"
    }
  ]

  return render_template("index.html", states_info = states_info)

@app.route("/scrape")
def scrape():
  states = scrape_wiki.scrape_states()
  print(states)
  return redirect("/", code=302)

if __name__ == "__main__":
  app.run(debug=True)