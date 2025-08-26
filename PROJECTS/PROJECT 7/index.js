let random = Math.random();
console.log(random)
let a = prompt("ENTER YOUR FIRST NUMBER");
let b = prompt("Enter Your Operation");
let c = prompt("ENTER YOUR SECOND  NUMBER");

let o = {
    "+" : "-",
    "-" : "+" ,
    "*" : " /"
}

if (random > 0.1) {
    console.log(`The result of ${a} ${b} ${c}`)
    alert(`The result of ${eval(`${a} ${b} ${c}`)}`)
}
else {
    b = o[b]
    alert(`The result of ${eval(`${a} ${b} ${c}`)}`)
}