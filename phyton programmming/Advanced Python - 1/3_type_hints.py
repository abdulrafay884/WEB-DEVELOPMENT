from typing import list , Tuple , Dict , Union

#list of a integer
num : list[int] = [12,4,56,7,3,25,]

#tuple of a string and int
person : tuple[str , int] = ("alice" , 99)

#dictionary with a string key and int values
car : dict[str , int] = {"toyota": 2020 , "margala": 1999}

#union type for varible that can hold multiple types
identifier : Union[int , str] = 3424244
#identifier = "rafay"   {also valid}