import pandas as pd

df = pd.read_csv("../data/transactions.csv")

# Aggregate
summary = df.groupby(["region", "product"])["amount"].sum().reset_index()

# Save output
summary.to_csv("../output/sales_summary.csv", index=False)

print("✅ AGGREGATION DONE")