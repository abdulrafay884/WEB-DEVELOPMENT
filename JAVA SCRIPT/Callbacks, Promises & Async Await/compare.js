// ! is me teeno method (callback hell , promise chain and aywn-await) use krke ek hi kaam kia hai aur teeno me dekhte hain konsa method easy hai

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
//     return getdata(2)               // asyn-await > promise chain > callback hell
//    }).then((res)=>{
// console.log('fetching data3');
//     return getdata(3)
//    }).then((res)=>{
//     console.log(res);
//    })


// ! By Async - Await
// function getdata(dataid){
//      return new Promise((resolve, reject) => {
//          setTimeout(() => {
//              console.log('data', dataid);
//              resolve("SUCCESS")
//          }, 2000);
//     })
// }
// async function data() {
//     console.log('fetching data 1....');
//     await getdata(1)
//     console.log('fetching data 2....');
//     await getdata(2)
//     console.log('fetching data 3....');
//     await getdata(3)
// }


// * SO WE GET TO KNOW THAT ASYNC - AWAIT IS EASY AND SHORT METHOD