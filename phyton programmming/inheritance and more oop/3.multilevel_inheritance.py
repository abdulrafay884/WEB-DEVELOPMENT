class Office:
    def __init__(self,name,location):
        self.name = name
        self.location = location
a = Office("abdul rafay" , "karchi")
print(a.name , a.location)       

class Programmer(Office):
    def __init__(self, id, language ):
        self.id = id
        self.language = language
b = Programmer(159 , "C++")
print(a.name , b.id , b.language)

class Manager(Programmer):
    def __init__(self, branchcode, app):
        self.branchcode = branchcode
        self.app = app
c = Manager("12CB" , "insta")
print(a.name , b.id , c.branchcode , a.location , b.language , c.app)        

    