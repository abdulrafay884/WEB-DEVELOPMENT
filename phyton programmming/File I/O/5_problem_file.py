words = ["donkey" , "oye" , "ganda"]

with open ("File I/O/file.txt" , "r")  as f:
    content = f.read()
for word in words:
    content = content.replace(word , "#" * len(word))

with open ("File I/O/file.txt" , "w")  as f:
      f.write(content)    
      