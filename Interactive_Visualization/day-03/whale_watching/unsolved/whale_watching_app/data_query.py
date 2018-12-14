# TODO: Import your depenencies, you'll need to make GET requests.
import requests

def get_api_whale_info(mongo):
  #TODO: Review the following website and make a SINGLE api call for at most 1000 results since 3 years ago.
  # http://hotline.whalemuseum.org/ 
  # NOTE: Most of the data from api is between Seattle, WA and Vancouver, BC



  # TODO: Drop the current collection.

  # TODO: Insert all results into your database with a single method.

  print('insert info') # This is a placeholder, remove when desired.


def get_all_whales(mongo):
  #TODO: Write a mongo query to retrieve ALL documents from your database.


  whale_list = []
  #NOTE: When sending a list of mongo documents, if the documents contain ObjectId('...'), 
  # then you may run into an error on your front end when attempting to store this as an array.
    # This is due to ObjectId not being wrapped with quotes, so convert it to a string first!
  
  return whale_list

def post_whale_info(mongo, whale_info):
#TODO: Within mongo, add "whale_info" into your database.
  
  print('insert info') # This is a placeholder, remove when desired.
