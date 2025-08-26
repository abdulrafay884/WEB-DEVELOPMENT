let currentturn = "X";
let turn = 1
const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let a = document.querySelectorAll(".box");

a.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.innerText == "") {
            btn.innerText = currentturn;
            if (checkwinner()){
            }
            currentturn = currentturn === "X" ? "O" : "X";
        }
    })
})

function checkwinner() {
    for (const pattern of wins) {
        let [g, h, j] = pattern
        if (a[g].innerText === a[h].innerText && a[g].innerText === a[j].innerText && a[h].innerText === a[j].innerText && a[g].innerText !== "") {
            alert(`${a[g].innerText} wins `)
            return true
        }
    }
    return false
}

let reset = document.querySelectorAll(".reset")
reset.forEach((b)=>{
    b.addEventListener("click" , ()=>{
        a.forEach((btn)=>{
            btn.innerText =""
})
currentturn = "X";
    })
})    

