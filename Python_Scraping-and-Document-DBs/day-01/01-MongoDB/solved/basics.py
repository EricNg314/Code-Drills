# Import your dependencies:
# You'll need pymongo
# Including us_land that we've provided.
import pymongo
import us_land

# Declare a variable called "us_info" and set it equal to the territories data in us_land.py
us_info = us_land.us_info

# --------------------------------------------------
# Create a connection to mongodb using pymongo.
conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)

# Declare the database "us_info_db"
db = client.us_info_db

# Declare the collection "all_info_coll"
all_info_coll = db.all_info_coll

# --------------------------------------------------
# Insert the first item in "us_info" into your all_info_coll
all_info_coll.insert_one(us_info[0])

# --------------------------------------------------
# Drop your "all_info_coll" collection.
all_info_coll.drop()


# --------------------------------------------------
# Insert all items from "us_info" into mongo without a loop.
all_info_coll.insert_many(us_info)


# --------------------------------------------------
print('------------------------------------')
# Run a query and print all information in all_info_coll
data = all_info_coll.find()
for row in data:
  print(row)

# --------------------------------------------------
print('------------------------------------')
# Find one document with the abbreviation "MP" in the list of documents
  # Then print the corresponding name.
find_one = all_info_coll.find_one({
  'abbreviation': 'MP'
})

print(find_one['name'])

# --------------------------------------------------
print('------------------------------------')
# Delete any documents with the name "Alabama" from the collection.
all_info_coll.remove({
  'name':'Alabama'
})

# Check to see if Alabama has been removed by doing one of the queries in previous steps.
find_one = all_info_coll.find_one({
  'name': 'Alabama'
})

print(find_one) # Should print as "None"

# --------------------------------------------------
print('------------------------------------')
# Add Alabama back to your data by adding keys and values. 
  # Name should be "Alabama" with the abbreviation "AL"
all_info_coll.insert_one({
    "name": "Alabama",
    "abbreviation": "AL"
})

# Check to see if Alabama has been added by doing one of the queries in previous steps.
find_one = all_info_coll.find_one({
  'name': 'Alabama'
})

print(find_one) # Should print the document

# --------------------------------------------------
print('------------------------------------')
# In the collection update California's abbreviation to KA 
all_info_coll.update({
  'name':'California'
},{
  'abbreviation':'KA'
}
)

# Check to see if Alabama has been added by doing one of the queries in previous steps.
find_one = all_info_coll.find_one({
  'name': 'California'
})

print(find_one) # Should print as "None"



