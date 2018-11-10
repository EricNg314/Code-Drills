# import necessary libraries
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import scrape_news

# create instance of Flask app
app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/state_app"
mongo = PyMongo(app)

@app.route("/")
def home():
  # Temporary info for state_news
  # state_news = [
  #   {
  #   "title":"California",
  #   "url_link":"Link To News"
  #   }
  # ]
  state_news = scrape_news.scrape_states()
  print(state_news)
  # return render_template("test.html", state_news = state_news)
  return render_template("index.html", state_news = state_news)

@app.route("/scrape")
def scrape():
  state_news = scrape_news.scrape_states()
  print(state_news)

  mongo.db.collection.insert_one(state_news)


  return redirect("/", code=302)

if __name__ == "__main__":
  app.run(debug=True)