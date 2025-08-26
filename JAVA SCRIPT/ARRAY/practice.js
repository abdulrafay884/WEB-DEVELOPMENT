// ?  Qs. Create an array to store companies -> “Bloomberg”,“Microsoft”,“Uber”,“Google”,“IBM”,“Netflix”
// ?  a. Remove the first company from the array
// ?  b. Remove Uber & Add Ola in its place
// ?  c. Add Amazon at the end.
let cname = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
cname.shift()
cname.splice( 1,1,"ola")
cname.push("Amazon")
console.log(cname);


