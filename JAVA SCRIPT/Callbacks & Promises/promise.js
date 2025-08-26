console.log('wait we are trying to resolve your issue');

let prom1 =   new Promise((resolve , reject) => {
       let r = Math.random()
       if (r<0.5){
        reject('we are unable to resolve the issue');        
       }      
       else{
         setTimeout(() => {
            console.log('hurrah! we are 50% done');
            resolve("done")
         }, 1000);
       }   
})

prom1.then((a) => {
  console.log(a);
}).catch((err) =>{
    console.log(err);  
})

let prom2 =   new Promise((resolve , reject) => {
       let r = Math.random()
       if (r<0.5){
        reject('we are unable to resolve the issue 2');        
       }      
       else{
         setTimeout(() => {
            console.log('hurrah! we are 50% done 2');
            resolve("done 2")
         }, 1000);
       }   
})


prom2.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err); 
})

let prom3 =   new Promise((resolve , reject) => {
       let r = Math.random()
       if (r<0.5){
        reject('we are unable to resolve the issue 3');        
       }      
       else{
         setTimeout(() => {
            console.log('hurrah! we are 50% done 3');
            resolve("done 3")
         }, 1000);
       }   
})

let p3 = Promise.allSettled([prom1 , prom2 , prom3])
p3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err); 
})



