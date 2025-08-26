let btn = document.querySelector(".form");
btn.addEventListener("submit" , (event)=>{
    event.preventDefault()
    if(btn.checkValidity()){
        window.location.href = "welcome.html"
    }
    else{
        alert("fill it sirst")
    }
})