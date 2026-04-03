import pandas as pd
from sqlalchemy import create_engine

# Read data
df = pd.read_excel("../data/sales_excel.xlsx")
lookup = pd.read_csv("../data/lookup.csv")

# Transform (enrich)
df = df.merge(lookup, on="product")

# Connect PostgreSQL
engine = create_engine("postgresql://postgres:password@localhost:5432/testdb")

# Load
df.to_sql("sales_data", engine, if_exists="replace", index=False)

print("✅ EXCEL TO POSTGRES DONE")