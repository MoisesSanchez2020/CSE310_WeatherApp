from pymongo import MongoClient

# MongoDB connection string
uri = "mongodb+srv://msanchez4ever1982:ladecima10@cluster0.zx70j8u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Connect to MongoDB
client = MongoClient(uri)

# Select your database
db = client['WeatherApp']

# Select your collection
collection = db['cities']

# Retrieve the first document from the collection
first_document = collection.find_one()
print("First document:", first_document)

# Print the total count of documents in the collection
print("Total documents in collection:", collection.count_documents({}))
