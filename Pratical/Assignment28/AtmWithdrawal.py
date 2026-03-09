balance = 10000

amount = int(input("Enter withdrawal amount: "))

if amount > balance:
    print("Insufficient Balance")
else:
    balance = balance - amount
    print("Withdrawal Successful")
    print("Remaining Balance:", balance)