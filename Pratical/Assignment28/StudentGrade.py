total = 0

n = int(input("Enter number of subjects: "))

for i in range(n):
    marks = int(input("Enter marks: "))
    total = total + marks

average = total / n

if average >= 90:
    grade = "A"
elif average >= 75:
    grade = "B"
elif average >= 60:
    grade = "C"
elif average >= 40:
    grade = "D"
else:
    grade = "Fail"

print("Total Marks:", total)
print("Average:", average)
print("Grade:", grade)