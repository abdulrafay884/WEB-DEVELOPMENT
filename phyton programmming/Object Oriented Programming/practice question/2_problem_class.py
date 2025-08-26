class Calculator:
    def __init__(self,a):
        self.a = a
    def square(self):
        print(f"the square is {self.a*self.a}")
    def cube(self):
        print(f"the cube is {self.a*self.a*self.a}")
    def squareroot(self):
        print(f"the squareroot is {self.a**1/2}")
b = Calculator(16)
b.square()       
b.cube()
b.squareroot()