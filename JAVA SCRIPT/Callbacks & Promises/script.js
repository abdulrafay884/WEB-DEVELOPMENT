console.log("arham")
console.log("rafay")

setTimeout(() => {
   console.log("hi boy!!") 
}, 2000);
setTimeout(() => {
   console.log("hi boy again!!") 
}, 2000);

console.log("bye rafay") 



function greet(name) {
    console.log(`hello ${name}`)
}

function bye(name) {
    console.log(`bye ${name}`)
}

function process(name , cb1 ,cb2) {
     cb1(name)
     cb2(name)
}
process("rafay" , greet , bye)



function add(a,b) {
    return a+b
}

function sub(a,b) {
    return a-b
}
function mul(a,b) {
    return a*b
}
function div(a,b) {
    return a/b
}

function calculate(a,b,callback) {
  let result = callback(a,b)
  console.log(result)
}
calculate(5,3,add)
calculate(5,3,sub)
calculate(5,3,mul)
calculate(5,3,div)

