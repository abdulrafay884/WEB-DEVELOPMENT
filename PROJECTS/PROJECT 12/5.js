let btn = document.querySelectorAll(".box");
let result = document.getElementById("result");
let turn = "X";

// all win combinations
let win = [
  [0,1,2], [3,4,5], [6,7,8], // rows
  [0,3,6], [1,4,7], [2,5,8], // columns
  [0,4,8], [2,4,6]           // diagonals
];

btn.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (box.textContent === "") {
      box.textContent = turn;
      if (checkWin()) {
        result.textContent = turn + " wins!";
        disableBoxes();
      } else {
        turn = turn === "X" ? "O" : "X"; // change turn
      }
    }
  });
});

// check winner
function checkWin() {
  return win.some(combo => {
    let a = btn[combo[0]].textContent;
    let b = btn[combo[1]].textContent;
    let c = btn[combo[2]].textContent;
    return a !== "" && a === b && b === c;
  });
}

// stop game after win
function disableBoxes() {
  btn.forEach(box => box.disabled = true);
}
