import pandas as pd

df = pd.read_csv("../data/validation_data.csv")

# Convert age to numeric
df["age"] = pd.to_numeric(df["age"], errors="coerce")

valid = df.dropna()
invalid = df[df.isnull().any(axis=1)]

valid.to_csv("../output/valid_data.csv", index=False)
invalid.to_csv("../output/invalid_data.csv", index=False)

print("✅ VALIDATION DONE")