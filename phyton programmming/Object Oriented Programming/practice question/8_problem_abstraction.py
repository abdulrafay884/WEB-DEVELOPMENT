class Car:
    def __init__(self , acc , brk , clutch):
        self.acc = False
        self.brk = False
        self.clutch = False
    def startcar(self):
        self.acc = True
        self.brk = True
        self.clutch = True
        print("Car Started..")
c =Car(False,False,False)
c.startcar()   