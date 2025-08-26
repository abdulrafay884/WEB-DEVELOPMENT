class Employe:
    language = "Urdu"   #This Is Class Attributes
    salary = "15000"
    def __init__(self, name , salary , language): #it is a constructor function
        #and is also called dunder method and it called automatically we dont need to call it.
        self.name = name
        self.salary = salary
        self.language = language
        print("ok")
harry = Employe("zubair" , 130000, "python")
print(harry.name,harry.salary,harry.language)
