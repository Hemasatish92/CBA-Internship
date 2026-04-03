import pandas as pd

# Read data
csv_df = pd.read_csv("../data/store_sales.csv")
json_df = pd.read_json("../data/mobile_sales.json")

# Transform
json_df.rename(columns={
    "id": "order_id",
    "item": "product",
    "price": "amount"
}, inplace=True)

json_df["date"] = pd.to_datetime(json_df["date"], format="%d-%m-%Y")

# Merge
final_df = pd.concat([csv_df, json_df])

# Save output
final_df.to_csv("../output/final_sales.csv", index=False)

print("✅ ETL DONE")