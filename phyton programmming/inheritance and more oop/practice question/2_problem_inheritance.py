class Animals:
    pass
class Pets(Animals):
    pass
class Dog(Pets):
    @staticmethod
    def bark():
       print("dog is barking")

d = Dog()
d.bark()       