// *  let btn1 = document.querySelector("#btn");
// *  btn1.onclick = () =>{
// *      console.log('i am clicked');
// *  }
// *  
// *  let btn2 = document.querySelector(".btn2");
// *  btn2.onmouseover = () =>{
// *      console.log('you are inside me');  
// *  }

// ! EVENT OBJECT
// *  let btn1 = document.querySelector(".box");
// *  btn1.onclick = (e) =>{
// *      console.log(e.target); 
// *      console.log(e.type); 
// *      console.log(e.clientX); 
// *      console.log(e.clientY); 
// *  }

// ! EVENT LISTENRERS
// *  let box = document.querySelector(".box");
// *  box.addEventListener("click" , (e) =>{
// *      console.log("you clicked me");
// *      console.log(e);
// *  })

// TODO: AS WE CAN SEE THAT WE CAN USE TWO DIFFERNT EVENTS ON ONE OBJECT WHICH WE CANT DO IN THOSE TWO METHODS!!


// *  box.addEventListener("dblclick" , (e) =>{
// *       console.log("you clicked me again and that too 2 times");
// *      console.log(e);
// *      console.log(e.target); 
// *      console.log(e.type); 
// *      console.log(e.clientX); 
// *      console.log(e.clientY); 
// *  })

// *  box.addEventListener("click" , (e) =>{
// *      console.log("you clicked me - 4");
// *      console.log(e);
// *  })

// *  const handler3 = () => {
// *      console.log("you clicked me - 3");
// *      console.log(e);
// *  }
// *  box.addEventListener("click" , handler3 )
// TODO: WE CAN ALSO REMOVE OUR LISTENER WE BUT FIRST WE HAD TO CONVERT THAT LISTENER INTO VARIABLE

// *  box.removeEventListener("click" , handler3)