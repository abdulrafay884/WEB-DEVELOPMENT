import random

class Train:
    def __init__(self,trainno):
        self.trainno = trainno
    def book(self , fro ,to):
        print(f"your seat number is {self.trainno} and you travelled from {fro} to {to}")
    def getstatus(self):
        print(f"your train {self.trainno} is coming on time")
    def getfare(self,fro,to):
        print(f"ticket fare in {self.trainno} from {fro} to {to} is {random.randint(1000,12000)}")            

t = Train(1445)
t.book("karachi" , "lahore")
t.getstatus()        
t.getfare("karachi" , "lahore")