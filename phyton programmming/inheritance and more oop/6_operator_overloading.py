class Number:
    def __init__(self , a):
        self.a = a
    def __add__(self,num):
        return self.a + num

n = 2
m = 2
print(n+m)        
        