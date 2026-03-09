total = 0

n = int(input("Enter number of items: "))

for i in range(n):
    price = float(input("Enter item price: "))
    quantity = int(input("Enter quantity: "))
    total = total + (price * quantity)

if total > 3000:
    shipping = 0
else:
    shipping = 100

final_amount = total + shipping

print("Cart Value:", total)
print("Shipping Charge:", shipping)
print("Final Amount:", final_amount)