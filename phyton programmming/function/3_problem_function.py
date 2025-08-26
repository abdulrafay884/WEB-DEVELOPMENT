def big(a , b , c):
    if(a>b and b>c):
        return a
    elif(b>a and b>c):
        return b
    else:
        return c
a = int(input("enter value"))
b = int(input("enter value"))
c = int(input("enter value"))

print(big(a , b, c))