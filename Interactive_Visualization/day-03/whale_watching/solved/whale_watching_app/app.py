# import necessary libraries
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
from flask_pymongo import PyMongo
import data_query

# create instance of Flask app
app = Flask(__name__)

data_query.get_whale_info()

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/whale_watching_app"
mongo = PyMongo(app)






# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")





