let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scisssor = document.querySelector(".scissor");
let message = document.querySelector(".message");
let userscore = document.querySelector("#user");
let compscore = document.querySelector("#comp");
let userscoreval = 0;
let compscoreval = 0;
let reset = document.querySelector(".reset");


rock.addEventListener("click", () => {
    userchoice = "rock";
    playgame()
})

paper.addEventListener("click", () => {
    userchoice = "paper";
    playgame()
})

scisssor.addEventListener("click", () => {
    userchoice = "scissor";
    playgame()
})

let userchoice = ""
let choice = ["rock", "paper", "scissor"];
console.log(userchoice);

function generatechoice() {
    let ranind = Math.floor(Math.random() * 3)
    return choice[ranind]
}

function playgame() {
    let compchoice = generatechoice()
    console.log(`${userchoice} | ${compchoice}`);

    if (userchoice === compchoice) {
        message.innerHTML = "<b>Draw</b>"
        message.style.backgroundColor = "black"
        message.style.color = "white"
    }
    else if (userchoice === "rock" && compchoice === "paper" || userchoice === "paper" && compchoice === "scissor" || userchoice === "scissor" && compchoice === "rock") {
        message.innerHTML = `You Lost! ${compchoice} beats your ${userchoice}`;
        message.style.backgroundColor = "red"
        message.style.color = "white"
        compscoreval++
        compscore.textContent = compscoreval
    }

    else {
        message.innerHTML = `You Won! Your ${userchoice} beats ${compchoice}`;
        message.style.backgroundColor = "green"
        message.style.color = "white"
        userscoreval++
        userscore.textContent = userscoreval
    }
}

reset.addEventListener("click" , ()=>{
    userscoreval = 0;
    compscoreval = 0;
    userscore.textContent = userscoreval
    compscore.textContent = compscoreval
    message.innerText = "PLAY YOUR MOVE"
    message.style.backgroundColor = "black"
    message.style.color = "white"

})

message.addEventListener("click" , ()=>{
    message.innerText = "Press Button, Not Me!!!"
})

message.addEventListener("dblclick" , ()=>{
    message.innerText = "PLAY YOUR MOVE"
})