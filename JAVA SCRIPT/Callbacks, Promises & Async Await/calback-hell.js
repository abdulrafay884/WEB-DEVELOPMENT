function getdata(dataid , nextdata){
    setTimeout(() => {
        console.log('data', dataid);
        if(nextdata){
            nextdata()
        }
    }, 2000);
}
// !  CALLBACK-HELL 
getdata(1 , ()=>{
    console.log('data 2 is coming....');
    getdata(2, ()=>{
        console.log('data 3 is coming..');
        getdata(3, ()=>{
            console.log('data 4 is coming');
            getdata(4)
        })
    })
})
