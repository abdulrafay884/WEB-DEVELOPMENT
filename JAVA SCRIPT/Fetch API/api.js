let url = "https://quoteslate.vercel.app/api/quotes/random";
let newpara = document.querySelector(".para");
let btn = document.querySelector(".btn");

const getdata = async () =>{
    console.log('fetching data....');
    let response = await fetch(url)
    console.log(response.status);  
    let data = await response.json()
    newpara.innerText = `random quote : ${data.quote}\n ~${data.author}`
} 

btn.addEventListener("click" , getdata)