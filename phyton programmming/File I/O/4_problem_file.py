word ="donkey" 

with open ("File I/O/file.txt" , "r")  as f:
    content = f.read()

newcontent = content.replace(word , "######")

with open ("File I/O/file.txt" , "w")  as f:
      f.write(newcontent)    
      