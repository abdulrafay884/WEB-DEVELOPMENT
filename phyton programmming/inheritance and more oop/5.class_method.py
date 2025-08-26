class Row:
    a = 1
    @classmethod  #this method show the value of class attribute if we dont use it
    #it shows the 21 the value of instance and thats why we change self with cls 
    #because self shows the value of object attribute.
    def show(cls):
        print(f"the class attribute of a is {cls.a}")
e = Row()
e.a = 21
e.show()        