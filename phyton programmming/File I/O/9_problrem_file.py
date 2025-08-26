with open ("File I/O/this_copy.txt") as f:
    content = f.read()
with open ("File I/O/this.txt") as f:
    content1 = f.read()    
if(content==content1):
    print("yes")
else:
    print("no")        