def div(n):
    if(n%5 == 0):
        return True
    return False
a = [1,2,3,45,6,675,2536,53,26542563,36,45]
s = list(filter(div , a))
print(s)