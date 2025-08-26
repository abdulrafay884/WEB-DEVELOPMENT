with open("File I/O/poems.txt") as f:
    c = f.read()
    if "twinkle" in c:
        print("twinkle is")
    else:
        print("twinkle is not")
