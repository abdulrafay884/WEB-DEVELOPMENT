class Employe:
    language = "Urdu"   #This Is Class Attributes
    salary = "15000"
#INSTANCE ATTRIBUTE TAKE PREFERENCE WHEN RUNNING THE PROGRAM IF BOTH THE 
# ATTRIBUTES IN THE CLASS AND INSTANCCE IS SAME THEN THE INSTANCE ATTRIBUTE RUN

harry = Employe()
harry.language = "greek"   #This Is An {Object/Instance} Attributes
print( harry.language, harry.salary)    

rafay = Employe()
rafay.salary = "140000"
print( rafay.language,rafay.salary)

#Here Name Is {Object/Instance} Attribute And Language And Salary Is Class Attribute