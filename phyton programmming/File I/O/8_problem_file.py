with open("File I/O/this.txt") as f:
    content = f.read()

with open("File I/O/this_copy.txt", "w") as f:
    f.write(content)    