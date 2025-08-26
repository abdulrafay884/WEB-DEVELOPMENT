class Account:
    def __init__(self , bal , acc):
        self.balance = bal
        self.accountno = acc

#debit method
    def debit(self ,amount):
        self.balance -= amount
        print(f"{amount} is deducted from your bank account")
        print(f"your total balance is {self.balance}")
    def credit(self ,amount):
        self.balance += amount
        print(f"{amount} is added to your bank account")
        print(f"your total balance is {self.balance}")
    def balance(self):                
        return self.balance 
a = Account(10000 , 222)
a.debit(1000)
a.credit(10000)    