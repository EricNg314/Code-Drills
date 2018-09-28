# import Flask and jsonify from flask module.
from flask import Flask, jsonify

# Create the variable "app" and set it to the function of Flask with a variable of __name__ as it's parameter
app = Flask(__name__)

# Create a dictionary called "my_info" with the following information:
  # A key of "my_name" with the value of "Farley"
  # A key of "city_state" with the value of "San Francisco, CA"
  # A key of "age" with an integer value of 10

my_info = {
  "my_name": "Farley",
  "city_state": "San Francisco, CA",
  "age": 10
}

# Using the route method from Flask, create a root route that provides a list of routes:
  # "/name"
  # "/city"
  # "/age"
  # "/all"

@app.route("/")
def home():
  return (
    f"Available routes:<br/>"
    f"/name<br/>"
    f"/city<br/>"
    f"/age<br/>"
    f"/all"
  )

# For each route, return the value associated with the route.
  # The "all" route should return the entire dictionary.
@app.route("/name")
def name():
  return my_info['my_name']

@app.route("/city")
def city():
  return my_info['city_state']

@app.route("/age")
def age():
  return jsonify(my_info['age'])

@app.route("/all")
def all():
  return jsonify(my_info)

# Run the app to create local session.
if __name__ == "__main__":
  app.run(debug=True)
