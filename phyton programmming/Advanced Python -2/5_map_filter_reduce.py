from functools import reduce
#MAP EXAMPLE
a = [1,2,3,4,5,6,7,8,9,10]
square = lambda a: a*a
sql = map(square , a)
print(list(sql))

#FILTER EXAMPLE
def even(n):
    if(n%2 == 0):
        return True
    return False
onlyeven = filter(even , a)
print(list(onlyeven))

#REDUCE EXAMPLE
def sum(numbers):
    result = reduce( lambda x,y: x+y , a)
    print(result)
mul = reduce(lambda x,y: x*y , a)

sum(a)  
print(mul)