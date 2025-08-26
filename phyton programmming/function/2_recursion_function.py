def factorial(n):  
    if n==1 or n==0:
        return 1 
    elif(n<0):
        raise ValueError ("enter bigger number")
    else:             
     return n * factorial(n-1)
n = int(input("enter number: "))
print(f"the factorial is: {factorial(n)}")