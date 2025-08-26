let adjactives = {
   1 : "crazy" ,
   2 :"amazing",
   3 :"fire"
}

let shop = {
    4 : "engine" ,
    5 : "food" ,
    6 : "garments"
}

let another = {
    7 : "bros" ,
    8 : "limited" , 
    9 : "hub"
}
let random = Math.random()
let first , second , third

if (random<= 0.33){
    first = "crazy"   
}
else if (random<0.66 && random>=0.33){
    first = "amazing"
}
else{
    first = "fire"
}

random = Math.random()
if (random<= 0.33){
    second = "engine"   
}
else if (random<0.66 && random>=0.33){
    second = "food"
}
else{
    second = "garments"
}

random = Math.random()
if (random<= 0.33){
    third = "bros"   
}
else if (random<0.66 && random>=0.33){
    third = "limited"
}
else{
    third = "hub"
}

console.log(`${first} ${second} ${third}`)
