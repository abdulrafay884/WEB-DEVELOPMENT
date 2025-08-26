def temp(f):
    return 5*(f-32)/9
f = int(input("enter temperature in F: "))
c = temp(f)
print(f"{round(c , 2)}'C  " )