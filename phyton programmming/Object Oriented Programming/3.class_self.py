class Employe:
    language = "Urdu"   #This Is Class Attributes
    salary = "15000"
    def info(self): #self is conventional its not necessary to wrtie self we can write 
                    #anything except self but self feels more descriptive or professional
        print(f"The Language Is {self.language}.\nThe Salary Is {self.salary}")
    @staticmethod
    def greet(): 
        print("Good Morning!Sir")    #multi line commen tbelow
        '''
         as we dont need any object in this greeting method 
        so if we want to remove self or if we dont want to write it as
        we dont need object so we can write @staticmethod 
        above the method and we told the compilet that 
        this function dont need self as no attributes are using here
        
        '''

harry = Employe()
harry.name = "Sultan"   #This Is An {Object/Instance} Attributes
print(harry.name, harry.language, harry.salary)    

rafay = Employe()
rafay.name = "Abdul Rafay"
print(rafay.name, rafay.language,rafay.salary)
rafay.info()
harry.greet()
#Here Name Is {Object/Instance} Attribute And Language And Salary Is Class Attribute