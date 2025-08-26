try:
    with open ("Advanced Python - 1/file.txt" ,"r") as f:
        c = f.read
        print(c)
except:
    print("sorry")    
try:
    with open ("Advanced Python - 1/file3.txt" ,"r") as f:
       print(f.read)
except:
    print("sorry")    
try:
    with open ("Advanced Python - 1/file4.txt" ,"r") as f:
       print(f.read)
except:
    print("sorry")    