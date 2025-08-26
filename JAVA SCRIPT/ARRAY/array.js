let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let b = ["juniad", "akram"]
let c = ["irfan", "chandio"]
console.log(a)

// SHIFT FUNCTION REMOVE THE FISRT ELEMENT FROM AN ARRAY
console.log(a.shift())
console.log(a)


// IT INSERT A NEW ELEMNT ON THE INDEX 0 AND RETURNS THE NEW LENGHT OF ARRAY
console.log(a.unshift("rafay"))
console.log(a)


// ITS JOIN THE ARRAYS INTO ONE ARRAY BUT ITS THE ONLY METHOD BY WHICH ARRAY DONT CHANGE MEANS a REMAINS SAME THIS CONCAT METHOD DOESNT CHANGE AN ARRAY 
console.log(a.concat(b, c))
console.log(a)

// ITS CONVERTS THE ARRAY INTO STRING
console.log(a.join())
console.log(a)

// The .sort() method in JavaScript is used to sort the elements of an array. It changes the original array (does not create a new one) and can sort alphabetically, numerically, or using custom logic.
console.log(a.sort())


// splice method delete element from the list bye their index number first number is starting  number second number is ending and then numbers added from their position
console.log(a.splice(1, 3, 222, 444, 5566))
console.log(a.length)
console.log(a)

// ITS REVERSE THE WHOLE LIST
console.log(a.reverse())
console.log(a)

// IT REMOVES THE FIRST ELEMENT FROM AN ARRAY
console.log(a.pop())
console.log(a)

// it add an elemnt at the end of the list
console.log(a.push("balveer"))
console.log(a)