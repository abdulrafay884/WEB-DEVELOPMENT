// ! Synchoronous Progmramming
console.log('one');
console.log('two');
console.log('three');


// ! Asynchoronous Programming
console.log('one');
console.log('two');
setTimeout(() => {
   console.log('hello');   // it will run after four seconds but compiler dont wait for it and instead going down        and start printing three and four
}, 4000);
console.log('three');
console.log('four');
