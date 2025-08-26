let currentturn = "X"
const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

a = document.querySelectorAll(".box");
a.forEach((btn)=>{
    btn.addEventListener("click" , () =>{
        if (btn.innerText == ""){
            btn.innerText = currentturn;
            if(checkwinner()){
            }
            currentturn = currentturn === "X" ? "O" : "X";
    }
})
})

function checkwinner() {
    for (const pattern of wins) {
        let [e,r,t] = pattern
        if(a[e].innerText === a[r].innerText && a[e].innerText === a[t].innerText  && a[r].innerText === a[t].innerText && a[e].innerText !== ""){
        alert(`${a[e].innerText} wins`)
        return true
        }
    }
    return false
}

let reset = document.querySelectorAll(".reset")
reset.forEach((b)=>{
    b.addEventListener("click" , ()=>{
        a.forEach((btn)=>{
            btn.innerText = ""
})
currentturn = "X";
    })
})