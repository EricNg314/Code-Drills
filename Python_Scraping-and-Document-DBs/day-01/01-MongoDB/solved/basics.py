# Import your dependencies:
# You'll need pymongo
# Including us_land that we've provided.
import pymongo
import us_land

# Declare a variable called "us_info" and set it equal to the us_info data in us_land.py
us_info = us_land.us_info

# --------------------------------------------------
# Create a connection to mongodb using pymongo.
conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)

# Declare the database "us_info_db"
db = client.us_info_db

# Create and Declare the collection "all_info_coll"
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
# Then print the corresponding name only.
find_one = all_info_coll.find_one({
    'abbreviation': 'MP'
})
print(find_one['name'])

# --------------------------------------------------
print('------------------------------------')
# Delete any documents with the name "Alabama" from the collection.
all_info_coll.remove({
    'name': 'Alabama'
})

# Check to see if Alabama has been removed by doing one of the queries in previous steps.
find_one = all_info_coll.find_one({
    'name': 'Alabama'
})
print(find_one)  # Should print as "None"

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
print(find_one)  # Should print the document

# --------------------------------------------------
print('------------------------------------')

# Add a second California to your data by adding keys and values.
# Name should be "California" with the abbreviation "CA"
all_info_coll.insert_one({
    "name": "California",
    "abbreviation": "CA"
})

# Find the first California and update 
  # its name to "North California" and abbreviation to "NCA"
all_info_coll.update_one({
    'name': 'California'
}, {
    '$set': {
        'name': 'North California',
        'abbreviation': 'NCA'
    }
})

# Find the next California and update 
  # its name to "South California" and abbreviation to "SCA"
all_info_coll.update_one({
    'name': 'California'
}, {
  '$set': {
    'name': 'South California',
    'abbreviation': 'SCA'
  }
})

# Validate whether info was updated properly by uncommenting the following:
find_NCA = all_info_coll.find_one({
    'abbreviation': 'NCA'
})
print(find_NCA)  # Should print the document

find_SCA = all_info_coll.find_one({
    'abbreviation': 'SCA'
})
print(find_SCA)  # Should print the document


find_California = all_info_coll.find_one({
    'name': 'California'
})
print(find_California)  # Should print as "None"


# --------------------------------------------------
# Undo everything you did in the previous step using remove and update.

all_info_coll.remove({
    'abbreviation': 'SCA'
})

all_info_coll.update_one({
    'abbreviation': 'NCA'
}, {
  '$set': {
    'name': 'California',
    'abbreviation': 'CA'
  }
})

# Validate whether info was updated properly by uncommenting the following:
find_California = all_info_coll.find_one({
    'name': 'California'
})
print(find_California)  # Should print the document


