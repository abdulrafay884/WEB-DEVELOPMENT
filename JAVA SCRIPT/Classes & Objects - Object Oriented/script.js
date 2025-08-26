// let obj = {
//     a:1,
//     b:"rafay"
// }

// let animal = {
//     eats: true
// }

// let rabit ={
//     jumps : true
// }

// rabit.__proto__ = animal

class Animal{
    constructor(name ,location){
        this.name = name
        this.location = location
        console.log('object is created...');
    }
    eats(){
        console.log('eating');
    }
    jump(){
        console.log('jumping');
    }
}


class lion extends Animal{
    constructor(name , location){
        super(name,location)
        console.log("object is creating...");   
    }
     jump(){
        console.log('jumping roooar');
    }
}

let a = new Animal("bunny", "amazon forest")
console.log(a);

let l = new lion("sheru" , "jungle")
console.log(l);


class Person {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            console.log("Age can't be negative!");
        } else {
            this._age = value;
        }
    }
}

let p = new Person("Ali", 25);
p.age = -5; // Error message: "Age can't be negative!"
p.age = 30;
console.log(p.age); // 30
