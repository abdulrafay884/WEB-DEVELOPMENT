// ? 1
let data = "secret information"
class User{
     constructor(name , email){
         this.name = name
         this.email = email
     }
     viewdata(){
         console.log(data);        
     }
 }

class Admin extends User{
    constructor(name , email){
    super(name , email)
    }
    editdata(){
        data = "edit data"
    }
}
let st1 = new User("ali" , "ali445@gmail.com")
st1.viewdata();
let admin1 = new Admin("admin" , "admin34@gmail.com")

