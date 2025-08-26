class Student:
    def __init__(self, name , marks):
        self.name = name
        self.marks = marks
    def ave(self):
        sum = 0 
        for value in self.marks:
            sum+=value
        print(f"{self.name} your average score is: {sum/3}")
s1 = Student("ABDUL RAFAY" , [99,88,99])
s1.ave()                           