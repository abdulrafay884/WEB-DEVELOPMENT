class Student:
    def __init__(self , chem , math , phy):
        self.chem = chem
        self.math = math
        self.phy = phy
    @property
    def percentrage(self):
        return str((self.chem + self.math + self.phy ) / 3) + "%"

s = Student(77,88,99)
print(s.percentrage)

s.chem = 99
print(s.percentrage)