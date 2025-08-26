import random

class Train:
    def __init__(rafay,trainno):
        rafay.trainno = trainno
    def book(rafay , fro ,to):
        print(f"your seat number is {rafay.trainno} and you travelled from {fro} to {to}")
    def getstatus(rafay):
        print(f"your train {rafay.trainno} is coming on time")
    def getfare(rafay,fro,to):
        print(f"ticket fare in {rafay.trainno} from {fro} to {to} is {random.randint(1000,12000)}")            

t = Train(1445)
t.book("karachi" , "lahore")
t.getstatus()        
t.getfare("karachi" , "lahore")