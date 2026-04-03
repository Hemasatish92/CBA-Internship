import pandas as pd
from pymongo import MongoClient

df = pd.read_csv("../data/products.csv")

records = df.to_dict(orient="records")

client = MongoClient("mongodb://localhost:27017/")
db = client["store"]
collection = db["products"]

collection.insert_many(records)

print("✅ DATA INSERTED INTO MONGODB")