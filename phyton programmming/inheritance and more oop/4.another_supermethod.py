class Car:
    def __init__(self , type):
        self.type = type
    @staticmethod
    def start():
        print("car is starting...")    
    @staticmethod
    def stop():
        print("car is stoping...")
class Toyota(Car):
    def __init__(self,name, type, color):
        super().__init__(type )
        self.name = name
        self.color = color
      
c = Toyota("fortuner","ev" , "blue")
print(c.name)
print(c.type)
print(c.color)
c.start()

                    