class Employe:
    salary = 1000
    increment = 30
    @property
    def salaryafterincrement(self):
        return self.salary + (self.salary*self.increment/100)

    @salaryafterincrement.setter
    def salaryafterincrement(self , newsalary):
        self.increment=((newsalary/self.salary) -1 )*100

e = Employe()
e.salaryafterincrement=55555
print(e.increment)