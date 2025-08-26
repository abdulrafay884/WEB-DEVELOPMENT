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