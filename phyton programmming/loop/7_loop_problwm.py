a = int(input("enter number"))

for i in range(1 , a+1):
    print(" " * (a - i),end="")
    print("*" * (2 * i - 1),end="")
    print("")