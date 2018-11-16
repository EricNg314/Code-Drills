# Import your dependencies:
    # You'll need pymongo
    # Including us_land that we've provided.



# Declare a variable called "us_info" and set it equal to the us_info data in us_land.py


# --------------------------------------------------
# Create a connection to mongodb using pymongo.



# Declare the database "us_info_db"


# Create and Declare the collection "all_info_coll"


# --------------------------------------------------
# Insert the first item in "us_info" into your all_info_coll


# --------------------------------------------------
# Drop your "all_info_coll" collection.



# --------------------------------------------------
# Insert all items from "us_info" into mongo without a loop.



# --------------------------------------------------
print('------------------------------------')
# Run a query and print all information in all_info_coll





# --------------------------------------------------
print('------------------------------------')
# Find one document with the abbreviation "MP" in the list of documents
# Then print the corresponding name only.





# --------------------------------------------------
print('------------------------------------')
# Delete any documents with the name "Alabama" from the collection.





# Check to see if Alabama has been removed by doing one of the queries in previous steps.


# print(find_one)  # Should print as "None"

# --------------------------------------------------
print('------------------------------------')
# Add Alabama back to your data by adding keys and values.
# Name should be "Alabama" with the abbreviation "AL"






# Check to see if Alabama has been added by doing one of the queries in previous steps.



# print(find_one)  # Should print the document

# --------------------------------------------------
print('------------------------------------')

# Add a second California to your data by adding keys and values.
# Name should be "California" with the abbreviation "CA"





# Find the first California and update 
  # its name to "North California" and abbreviation to "NCA"








# Find the next California and update 
  # its name to "South California" and abbreviation to "SCA"







# Validate whether info was updated properly by uncommenting the following:





# print(find_NCA)  # Should print the document





# print(find_SCA)  # Should print the document





# print(find_California)  # Should print as "None"


# --------------------------------------------------
print('------------------------------------')
# Undo everything you did in the previous step using remove and update.















# Validate whether info was updated properly by uncommenting the following:
# find_California = all_info_coll.find_one({
#     'name': 'California'
# })
# print(find_California)  # Should print the document


