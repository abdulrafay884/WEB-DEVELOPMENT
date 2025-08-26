def https_server(status):
    match status:
        case 200:
            return "wait we are working"
        case 404:
            return "ok"
        case 600:
            return "not found"
        case _:
            return "invalid error"
status = int(input("Enter Your Error Code: "))
print(https_server(status))        
