with open("File I/O/log.txt") as f:
    content = f.read()
    
with open ("File I/O/log455.txt", "w") as f:
    f.write(content)
