def main():
  try:
    a = int(input("enter number: "))
    print(a)
    return
  except:
    print("plz! enter a number(int)\n\t\r")
    a = int(input("enter number(int): "))
    print(a)
    return
  finally:
    print("ok")
main()