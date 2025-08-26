// function weather(){
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//             console.log('weather data');
//             resolve(200)
//         }, 3000);
//     })  
// }

// async function getadata() {
//     await weather()
//     await weather()
// }




function getdata(dataid){
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             console.log('data', dataid);
             resolve("SUCCESS")
         }, 2000);
    })
}
async function data() {
    console.log('fetching data 1....');
    await getdata(1)
    console.log('fetching data 2....');
    await getdata(2)
    console.log('fetching data 3....');
    await getdata(3)
}