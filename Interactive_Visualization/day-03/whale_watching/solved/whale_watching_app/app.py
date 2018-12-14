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

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/whale_watching_app"
mongo = PyMongo(app)

# Run the below once, to populate database from api.
if ('whale_coll' not in mongo.db.collection_names()):
  print('adding whale_coll to db')
  data_query.get_api_whale_info(mongo)
else:
  print('whale_coll is in db')

# create route that renders index.html template
@app.route("/")
def home():
  whale_query = data_query.get_all_whales(mongo)

  # Although we would like to use jsonify, we are going to use json.dumps. 
    # Checkout the link below to review the difference.
      # https://stackoverflow.com/questions/7907596/json-dumps-vs-flask-jsonify
  # return render_template("index.html", whale_list = whale_query)
  # return render_template("index.html", whale_list = jsonify(whale_query))
  return render_template("index.html", whale_list = json.dumps(whale_query))

@app.route('/send', methods=["GET","POST"])
def send():
  print("Entered Send route")
  if request.method == "POST":
    whale_info= {
      "latitude": request.form["whaleLat"],
      "longitude": request.form["whaleLon"],
      "description": request.form["whaleDes"]
    }
    data_query.post_whale_info(mongo, whale_info)
  return redirect("/", code=302)


if __name__ == "__main__":
  app.run(debug=True)




