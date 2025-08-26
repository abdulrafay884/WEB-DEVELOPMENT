// ? 1
// function downloadFile(url , callback){
//     console.log(`downloading files from ${url}`);
//     setTimeout(() => {
//         console.log('download complete');
//         callback()
//     }, 2000);
// }

// function print(){
//   console.log('saving files...');

// }

// downloadFile("https://www.filmora.com" , print)

// ?  2
// function orderFood(food) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (food !== "") {
//                 resolve(`your ${food} will be ready soon`)
//             }
//             else {
//                 reject("no items selected")
//             }
//         }, 3000);
//     });
// }

// orderFood("biryani")
//     .then((res) => {
//         console.log(res);
//     })

//     .catch((err) => {
//         console.log(err);
//     })
// orderFood("")
//     .then((res) => {
//         console.log(res);
//     })

//     .catch((err) => {
//         console.log(err);
//     })

// ?  3
function getUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id: 1, name: "Ali"})
        }, 3000);
    })
}

async function showdata() {
    let user = await getUserData()
    console.log(`User: ${user.name} (id: ${user.id})`);
}

showdata()