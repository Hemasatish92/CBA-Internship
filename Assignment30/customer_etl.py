import pandas as pd
import mysql.connector

# ---------------- EXTRACT ----------------

crm_df = pd.read_csv("customer.csv")

web_df = pd.read_json("customer.json")

print("CRM Data")
print(crm_df)

print("Website Data")
print(web_df)

# ---------------- TRANSFORM ----------------

# merge datasets using customer_id
df = pd.merge(crm_df, web_df, on="customer_id")

# standardize city names to uppercase
df['city'] = df['city'].str.upper()

# remove duplicates
df = df.drop_duplicates(subset="customer_id")

# add new column
df['registration_source'] = "CRM + WEBSITE"

print("Merged Data")
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
        "INSERT INTO customers VALUES (%s,%s,%s,%s,%s)",
        (r.customer_id, r.name, r.city, r.email, r.registration_source)
    )

con.commit()

print("Data inserted successfully!")

cursor.close()
con.close()