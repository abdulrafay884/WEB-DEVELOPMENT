class Name:
    name = "anonymous"

    @classmethod
    def changename(cls , name):
        cls.name = name

n = Name()
n.changename("rafay") 
print(n.name)      