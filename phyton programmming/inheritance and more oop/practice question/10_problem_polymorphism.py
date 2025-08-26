class Circle:
    def __init__(self , r):
        self.r = r

    def area(self):
        return ((22/7) * self.r ** 2)    
    def parimeter(self):
        return (2 * (22/7) * self.r ** 2)    
c1 = Circle(25)
print(c1.area())
print(c1.parimeter())    