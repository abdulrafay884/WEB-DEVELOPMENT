
function color() {
    r = Math.ceil(Math.random() * 255)
    g = Math.ceil(Math.random() * 255)
    b = Math.ceil(Math.random() * 255)
    return `rgb( ${r} , ${g} , ${b})`
}

setInterval(() => {
   let random = document.getElementById("car")
if(random){
    random.style.backgroundColor= color()
}
}, 1000);



