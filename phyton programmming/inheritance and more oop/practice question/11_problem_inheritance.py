class Employe:
    def __init__(self , role , department , salary):
        self.role = role
        self.department = department
        self.salary = salary

    def showdetails(self):    
        print(f"role = {self.role}\ndepartment = {self.department}\nsalary = {self.salary}")

class Engineer(Employe):
    def __init__(self,name , age):
        self.name = name
        self.age = age
        super().__init__("Engineer" , "IT" , 50000)

    def show(self):
        print(f"name = {self.name}\nagge = {self.age}")
    def showdetails(self):
        return super().showdetails()    
e = Engineer("elon" , 52)
e.show()  
e.showdetails()      
