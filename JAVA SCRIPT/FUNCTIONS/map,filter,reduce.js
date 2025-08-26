// ! maps returns new array it doesnt change the original array
// * num = [2.3,45,2,5]
// * num.map((val)=> {
// *     console.log(val);
// * })
// * let newarr = num.map((val)=> {
// *     return val**2
// * }) 
// * console.log(newarr);
// * console.log(num);

// ! it is filter. Filter returns new array it doesnt change the original array
// * num = [2.3,45,2,5,10]
// * let newarr = num.filter((val)=>{
// *     return val % 2 === 0;
// * })
// * console.log(newarr);
// * console.log(num);
 
num = [2.3,45,2,5]
const newarr = num.reduce((res,val)=>{
    return(res+val);
})
console.log(newarr);
