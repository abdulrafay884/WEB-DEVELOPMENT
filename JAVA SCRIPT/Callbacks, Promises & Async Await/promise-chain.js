// const asyncfunction1 = () =>{
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             console.log('data1');
//             resolve("success")
//         }, 4000);
//     })
// }

// const asyncfunction2 = () =>{
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             console.log('data2');
//             resolve("success")
//         }, 4000);
//     })
// }

// console.log('fetching data1...');
// asyncfunction1().then((res)=>{
//   
//     console.log('fetching data2...');
//     asyncfunction2().then((res)=>{
//       
//     })
// })





// !  CALLBACK-HELL 
// function getdata(dataid , nextdata){
//     setTimeout(() => {
//         console.log('data', dataid);
//         if(nextdata){
//             nextdata()
//         }
//     }, 2000);
// }

// getdata(1 , ()=>{
//     console.log('data 2 is coming....');
//     getdata(2, ()=>{
//         console.log('data 3 is coming..');
//         getdata(3, ()=>{
//             console.log('data 4 is coming');
//             getdata(4)
//         })
//     })
// })


// ! BY PROMISE CHAINING
// function getdata(dataid){
//      return new Promise((resolve, reject) => {
//          setTimeout(() => {
//              console.log('data', dataid);
//              resolve("SUCCESS")
//          }, 2000);
//     })
// }
// console.log('fetching data1');
// getdata(1)
//    .then((res)=>{
// console.log('fetching data2');
//     return getdata(2)
//    }).then((res)=>{
// console.log('fetching data3');
//     return getdata(3)
//    }).then((res)=>{
//     console.log(res);
//    })