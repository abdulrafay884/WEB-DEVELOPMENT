class Account:
    def __init__(self , accno , passw):
        self.accontno = accno
        self.__password = passw
a = Account(12345 , "abcde")
print(a.accontno)
#now account password will not be shown as we 
# made it private attribute so it will not be display
print(a.__password)        