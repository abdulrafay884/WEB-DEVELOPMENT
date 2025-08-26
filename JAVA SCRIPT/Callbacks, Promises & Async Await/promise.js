const getpromise = () =>{
     return new Promise((resolve, reject) => {
      console.log('woking...');
    //   resolve("done..")
    reject("network error")
    })
}
let promise = getpromise()
promise.then(()=>{
    console.log('success');
})

promise.catch(()=>{
    console.log('problem');
    
})


// function getdata(dataid, nextdata) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
            // console.log('data', dataid);
            // resolve("done...")
//             reject("error")
//             if (nextdata) {
//                 nextdata()
//             }
//         }, 1000);
//     })
// }
// console.log('start');
// console.log(getdata(1));
// console.log('sop');
