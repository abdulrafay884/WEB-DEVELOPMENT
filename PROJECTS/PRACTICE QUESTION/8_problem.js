const input = document.getElementById("taskInput")
const button = document.getElementById("addBtn")
const ul = document.getElementById(("taskList"))

button.addEventListener("click" , () =>{
     const task = input.value 


if(task.trim() !== ""){
    const li = document.createElement("li")
    li.textContent = task
     ul.appendChild(li)
    input.value = ""
}
})