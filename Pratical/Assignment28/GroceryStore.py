total = 0.0

n = int(input("Enter number of items: "))

for i in range(n):
    price = float(input("Enter price of item: "))
    total = total + price

discount = 0

if total > 5000:
    discount = total * 0.20
elif total > 2000:
    discount = total * 0.10

final_bill = total - discount

print("Total Price:", total)
print("Discount:", discount)
print("Final Bill:", final_bill)