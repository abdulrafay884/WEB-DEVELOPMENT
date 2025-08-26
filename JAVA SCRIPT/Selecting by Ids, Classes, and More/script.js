console.log("rafay...")

let boxes = document.getElementsByClassName("box")
console.log(boxes)

// WHEN WE USE THIS SO IT FOLOOWS INDEX NUMBER IF WE ADD ONE MORE BOX THEN INDEX NUMBER WILL INCREASE AND THE COLOR WILL BE APPLIED TO ITS UPPER BOX.   
boxes[2].style.backgroundColor = "green"


// BUT IF WE USE THIS THEN ODNT MATTER HOW MUCH BOX WE WILL ADD IT DOES NOT AFFECT BECAUSE EVERY BOX HAS DIFFERENT ID.
document.getElementById("abdul").style.backgroundColor = "blue"


// ITS FIND THE .BOX CLASS AND APPLY THE PROPERTY TO THE VERY FIRST CHILDREN.
document.querySelector(".box").style.backgroundColor = "red"

// BUT IF WE WANT TO APPLY THE PROPERTIES TO ALL CLASS THEN WE HAVE TO USE THIS METHOD AND APPLI FOR LOOP {NOTE: WE CAN USE TRADITIONAL FOR LOOP IF WE WANT}.   
document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = "pink"
})


console.log(document.getElementsByTagName("div"))

