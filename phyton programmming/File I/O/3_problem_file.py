def generate_table(n):
    table = ""
    for i in range(1,11):
        table+=(f"{n}x{i} = {n*i}\n")
    
    
    with open (f"File I/O/tables1/table_{n}.txt" , "w") as f:
        f.write(table)
    
    
for i in range(1,150):
   generate_table(i)



