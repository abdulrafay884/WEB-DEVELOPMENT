function getdata(dataid){
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             console.log('data', dataid);
             resolve("SUCCESS")
         }, 2000);
    })
}                              //its a advance level of js now as you can see that we dont need to call a function it will run automatically as soon as it made
(async function() {
    console.log('fetching data 1....');
    await getdata(1)
    console.log('fetching data 2....');
    await getdata(2)
    console.log('fetching data 3....');
    await getdata(3)
})();