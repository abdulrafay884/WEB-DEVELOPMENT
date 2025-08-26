let a = "Abdul Rafay is a good boy he plays cricket and football and also play hockey"

let words = a.split(" ")
console.log(a)
console.log("words" , words.length)


let space = a.replaceAll(" " ,"" )
console.log(space.length)

let four = []
   for (let i = 0; i < words.length; i++) {
    if(words[i].length >4)
        four.push(words[i])
   }
console.log(four , four.length)   

// THEY BOTH DO THE SAME WORK

const five = (a) => {
   if(a.length > 4){
      return true
   }
   return false
}
let resu = words.filter(five)
console.log(resu , resu.length)