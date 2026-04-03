import pandas as pd

df = pd.read_csv("../data/customers.csv")

df = df.drop_duplicates()
df = df.dropna(subset=["email"])
df["phone"] = df["phone"].str.replace(r"\D", "", regex=True)

df.to_csv("../output/clean_customers.csv", index=False)

print("✅ CLEANING DONE")