from pyspark.sql import SparkSession
from pyspark.sql.functions import broadcast

spark = SparkSession.builder.appName("JoinOptimization").getOrCreate()

customers = spark.read.csv("../data/customers_large.csv", header=True)
transactions = spark.read.csv("../data/transactions_large.csv", header=True)

# Broadcast join (optimized)
joined = transactions.join(broadcast(customers), "cust_id")

joined.show()

print("✅ SPARK JOIN DONE")