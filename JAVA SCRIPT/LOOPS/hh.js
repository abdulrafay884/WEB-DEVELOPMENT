let a = 1
// FOR LOOP
for (let i = 0; i < 10; i++) {
    console.log(a+i)
}
let obj = {
    name : "rafay",
    job : "manager AI",
    salary : "500cr"
}

for (const key in obj) {
    const element = obj[key]
    console.log(key , element)  
}

for (const c of "junaid") {
    console.log(c)
}

// WHILE LOOP
let i = 1;
while (i <10) {
    console.log("hi" ,i)
    i = i+1    
}


// DO WHILE LOOP
let g = 0
do {
    console.log(g)
    g=g+1
} while (g<10);