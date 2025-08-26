class TwoDVector:
    def __init__(self , i ,j):
        self.i = i
        self.j = j
    def show(self):
        print(f"the vector is {self.i}i and {self.j}j")

class ThreeDVector(TwoDVector):
    def __init__(self , i ,j , k):
        super().__init__(i , j)
        self.k = k
    def show(self):
        print(f"the vector is {self.i}i and {self.j}j and {self.k}k")        

a = TwoDVector(5,6)
a.show()
b = ThreeDVector(5,7,9)
b.show()       
