class Employe:
    language = "Urdu"   #This Is Class Attributes
    salary = "15000"

harry = Employe()
harry.name = "Sultan"   #This Is An {Object/Instance} Attributes
print(harry.name, harry.language, harry.salary)    

rafay = Employe()
rafay.name = "Abdul Rafay"
print(rafay.name, rafay.language,rafay.salary)

#Here Name Is {Object/Instance} Attribute And Language And Salary Is Class Attribute
class Programmer:
    company = "Microsoft"
    def __init__(self,name,salary,age):
        self.name = name
        self.salary = salary
        self.age = age
p = Programmer("Jack" , 1200000 , 28)
print(p.name,p.salary,p.age)

J = Programmer("tenda" , 18500000 , 38)
print(J.name,J.salary,J.age)

q = Programmer("John" , 150000 , 25)
print(q.name,q.salary,q.age)


class Office(Employe , Programmer):
    company = "Adamjee"
    name = "fajfa"
c = Employe
d = Programmer
e = Office
print(c.language, d.company , e.name )