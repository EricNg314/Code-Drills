from flask import jsonify
import requests

def get_api_whale_info(mongo):
  target_url = "http://hotline.whalemuseum.org/api.json?limit=1000&since='3 year ago'"
  response = requests.get(target_url).json()

  mongo.db.whale_coll.drop()
  mongo.db.whale_coll.insert_many(response)

def get_all_whales(mongo):
  #TODO: Write a mongo query to retrieve ALL documents from your database.
  #NOTE: When sending a list of mongo documents, if the documents contain ObjectId('...'), 
  # then you may run into an error on your front end when attempting to store this as an array.
    # This is due to ObjectId not being wrapped with quotes, so convert it to a string first!
  data = mongo.db.whale_coll.find()

  whale_list = []

  for sighting in data:
    sighting['_id'] = str(sighting['_id'])
    whale_list.append(sighting)
  
  return whale_list