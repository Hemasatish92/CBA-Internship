import pandas as pd

# -----------------------------
# EXTRACT
# -----------------------------

# Load CSV files
jan_sales = pd.read_csv("sales_january.csv")
feb_sales = pd.read_csv("sales_february.csv")
store_details = pd.read_csv("store_details.csv")

# Combine sales data
sales_data = pd.concat([jan_sales, feb_sales], ignore_index=True)


# -----------------------------
# TRANSFORM
# -----------------------------

# 1. Remove duplicate transactions using transaction_id
sales_data = sales_data.drop_duplicates(subset="transaction_id")

# 2. Standardize date format
sales_data['transaction_date'] = pd.to_datetime(
    sales_data['transaction_date'], errors='coerce'
).dt.strftime('%Y-%m-%d')

# 3. Handle missing values
sales_data['quantity'] = sales_data['quantity'].fillna(0)
sales_data['price'] = sales_data['price'].fillna(0)

# Convert to numeric if needed
sales_data['quantity'] = pd.to_numeric(sales_data['quantity'], errors='coerce').fillna(0)
sales_data['price'] = pd.to_numeric(sales_data['price'], errors='coerce').fillna(0)

# 4. Create total_amount column
sales_data['total_amount'] = sales_data['quantity'] * sales_data['price']

# 5. Join store details using store_id
final_data = pd.merge(sales_data, store_details, on="store_id", how="left")


# Reorder columns
final_data = final_data[
    [
        "transaction_id",
        "store_id",
        "store_name",
        "city",
        "product",
        "quantity",
        "price",
        "total_amount",
        "transaction_date"
    ]
]


# -----------------------------
# LOAD
# -----------------------------

# Save cleaned dataset
final_data.to_csv("clean_sales_data.csv", index=False)

print("ETL Process Completed Successfully!")