# import necessary libraries
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
from flask_pymongo import PyMongo
import data_query
import json

# create instance of Flask app
app = Flask(__name__)

# TODO: Setup your connection to mongo with the database "whale_watching_app".
# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/whale_watching_app"
mongo = PyMongo(app)

# NOTE: We've given you this set of code to validate your database and run the query once. 
# TODO: However you'll need to update the file "data_query.py" to make the api call from the function.
# Run the below once, to populate database from api.
if ('whale_coll' not in mongo.db.collection_names()):
  print('adding whale_coll to db')
  data_query.get_api_whale_info(mongo)
else:
  print('whale_coll is in db')


# TODO: Create route that renders index.html template, as well as making a call to your database for all whales.
@app.route("/")
def home():
  whale_query = data_query.get_all_whales(mongo)

  # NOTE: Although we would like to use jsonify, we are going to use json.dumps. 
    # Checkout the link below to review the difference.
      # https://stackoverflow.com/questions/7907596/json-dumps-vs-flask-jsonify
  # return render_template("index.html", whale_list = whale_query)
  # return render_template("index.html", whale_list = jsonify(whale_query))
  return render_template("index.html", whale_list = json.dumps(whale_query))


# TODO: Create a route to send information to your database from your frontend.
@app.route('/send', methods=["GET","POST"])
def send():
  if request.method == "POST":
    whale_info= {
      "latitude": request.form["whaleLat"],
      "longitude": request.form["whaleLon"],
      "description": request.form["whaleDes"]
    }
    data_query.post_whale_info(mongo, whale_info)
    # TODO: Once you've made your post, redirect the user back to the root route.
  return redirect("/", code=302)


if __name__ == "__main__":
  app.run(debug=True)




