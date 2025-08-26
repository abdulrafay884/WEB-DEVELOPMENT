// ? CREATE A BUTTON THAT TURN DARK MODE IF CLICKED AND WHITE IF AGAIN CLICKED!!!
let btn = document.querySelector(".btn");
let mode = "light";
btn.addEventListener("click" , () =>{
   if(mode === "light"){
    document.body.style.backgroundColor = "black"
    document.body.style.color ="beige"
    mode = "black"
   }
   else if (mode === "black"){
    document.body.style.backgroundColor = "beige"
    document.body.style.color ="black"
    mode = "light"
   }     
})