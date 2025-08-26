// ! basic way of writitng an object!!!
// * const students = {
// *     name : "abdul rafay",
// *     marks : 87.45,
// *     printmarks: function marksstudent() {
// *         console.log(`marks of student ${this.marks}`);  // this. is a keyword means student.marks
// *     }
// * }

// ! prototype
// * const employee = {
// *     calctax(){
// *         console.log('10% tax');
// *     }
// * }
// * 
// * const emp1 = {
// *     salary:50000
// * }
// * const emp2 = {
// *     salary:90000
// *       calctax(){
// *           console.log('tax rate is 20%');       this caltax method will be used 
// *       }
// * }
// * const emp3 = {
// *     salary:40000
// * }
// * const emp4 = {
// *     salary:500
// * }
// * 
// * emp1.__proto__ = employee
// * emp2.__proto__ = employee
// * emp3.__proto__ = employee
// * emp4.__proto__ = employee


// ! CLASSES
class Car{
     constructor(brand,mileage){
        console.log('car info is coming');
        this.brand = brand;   //now we dont have to make another function like setbrand
        this.mileage = mileage;
     }
    start(){
        console.log('starting');
    }

    stop(){
        console.log('stopping');
    }

    // setbrand(brand){
        // this.brand                          = brand;
       // *  its the property of object  |      its the parameter of argument
       // *  we can give same to both but now the difference is clear
        // !  we can comment it out and directly use it under the constructor function
    // }
}

let fortuner = new Car("TOYOTA" , 12);
console.log(fortuner);
let civic = new Car("HONDA" , 10);
console.log(civic);
