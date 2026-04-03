import pandas as pd

df = pd.read_csv("../data/iot_data.csv")

# Remove invalid temps
df = df[df["temperature"] > -50]

# Convert timestamp
df["timestamp"] = pd.to_datetime(df["timestamp"])
df["minute"] = df["timestamp"].dt.floor("T")

# Average per minute
result = df.groupby("minute")["temperature"].mean().reset_index()

result.to_csv("../output/iot_result.csv", index=False)

print("✅ IOT PROCESSING DONE")