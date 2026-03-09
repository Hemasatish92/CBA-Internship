units = int(input("Enter electricity units consumed: "))

if units <= 100:
    bill = units * 5
elif units <= 200:
    bill = units * 7
else:
    bill = units * 10

print("Total Electricity Bill:", bill)