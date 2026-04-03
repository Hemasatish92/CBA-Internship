import pandas as pd

day1 = pd.read_csv("../data/employees_day1.csv")
day2 = pd.read_csv("../data/employees_day2.csv")

merged = pd.merge(day1, day2, on="emp_id", how="outer", suffixes=('_old', '_new'))

updates = merged[merged["salary_old"] != merged["salary_new"]]
new_records = merged[merged["salary_old"].isna()]

print("Updates:\n", updates)
print("New Records:\n", new_records)

day2.to_csv("../output/final_employees.csv", index=False)

print("✅ INCREMENTAL LOAD DONE")