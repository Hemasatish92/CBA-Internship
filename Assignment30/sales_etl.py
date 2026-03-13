import pandas as pd
import mysql.connector

# ---------------- EXTRACT ----------------
df = pd.read_csv("sales_data.csv")

print("Original Data")
print(df)

# ---------------- TRANSFORM ----------------

# remove duplicates
df = df.drop_duplicates()

# remove missing values
df = df.dropna()

# create total_amount column
df['total_amount'] = df['quantity'] * df['price']

# convert order_date to date format
df['order_date'] = pd.to_datetime(df['order_date'])

# filter quantity > 0
df = df[df['quantity'] > 0]

# select required columns
df = df[['order_id','product','quantity','price','total_amount','order_date']]

print("Cleaned Data")
print(df)

# ---------------- LOAD ----------------

con = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root",
    database="etldb"
)

cursor = con.cursor()

for r in df.itertuples():
    cursor.execute(
        "INSERT INTO ecommerce_sales VALUES (%s,%s,%s,%s,%s,%s)",
        (r.order_id, r.product, r.quantity, r.price, r.total_amount, r.order_date)
    )

con.commit()

print("Data loaded successfully!")

cursor.close()
con.close()