a = int(input("enter number: "))
l = [a*i for i in range(1,11) ]
with open ("Advanced Python - 1/practice question/tables.txt" , "a") as f:
    f.write(f"Table Of {a} = {str(l)} \n")