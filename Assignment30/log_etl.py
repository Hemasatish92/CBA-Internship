import pandas as pd
import mysql.connector

# ---------------- EXTRACT ----------------
logs = []

with open("server_log.txt","r") as file:
    for line in file:
        parts = line.strip().split()

        timestamp = parts[0] + " " + parts[1]
        event_type = parts[3]
        user_id = parts[4].split("=")[1]

        logs.append([timestamp,event_type,user_id])

df = pd.DataFrame(logs, columns=["timestamp","event_type","user_id"])

print(df)

# ---------------- TRANSFORM ----------------

# convert timestamp to datetime
df['timestamp'] = pd.to_datetime(df['timestamp'])

# count events per user
user_summary = df.groupby("user_id").size().reset_index(name="total_events")

# count events per event type
event_summary = df.groupby("event_type").size().reset_index(name="event_count")

print(user_summary)
print(event_summary)

# ---------------- LOAD ----------------

con = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root",
    database="etldb"
)

cursor = con.cursor()

# load user summary
for r in user_summary.itertuples():
    cursor.execute(
        "INSERT INTO user_event_summary VALUES (%s,%s)",
        (r.user_id, r.total_events)
    )

# load event summary
for r in event_summary.itertuples():
    cursor.execute(
        "INSERT INTO event_type_summary VALUES (%s,%s)",
        (r.event_type, r.event_count)
    )

con.commit()

print("Data loaded successfully!")

cursor.close()
con.close()