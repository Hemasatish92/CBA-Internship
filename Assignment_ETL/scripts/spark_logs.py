from pyspark.sql import SparkSession
from pyspark.sql.functions import substring

spark = SparkSession.builder.appName("Logs").getOrCreate()

df = spark.read.text("../data/logs.txt")

# Filter ERROR 500
filtered = df.filter(df.value.contains("500"))

# Extract date and count
result = filtered.withColumn("date", substring("value", 1, 10)) \
                 .groupBy("date").count()

# Save output
result.write.mode("overwrite").csv("../output/error_logs")

print("✅ LOG PROCESSING DONE")