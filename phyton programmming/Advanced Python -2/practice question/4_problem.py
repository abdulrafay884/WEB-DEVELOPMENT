from functools import reduce
j = [1,2,3,45,6,675,2536,53,26542563,36,45]
def gr(a,b):
    if(a > b):
        return a
    return b
print(reduce(gr , j))