// async function getdata() {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log('we are doing it');
//             resolve("done")
//         }, 4000);
//     })
// }


async function getdata() {
let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

let data =await x.json()
console.log(data);
}

async function main() {
    console.log('doing something');
    console.log('you can do something else in the mean time');
    console.log('loading the data');
    let data = await getdata()
    console.log(data);
    console.log('process the data');
    
}

main()