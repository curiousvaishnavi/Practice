let button = document.querySelector("button")
let inner = document.querySelector("#inner")
let h1 = document.querySelector("h1")
let card = document.querySelector("#card")
let container = document.querySelector(".container")
let grow = 0


button.addEventListener("click",function(){
   
    button.style.pointerEvents = "none"

    let int = 50 + Math.floor(Math.random()* 50)
    
    //Progress bar grow logic
    let num = setInterval(function(){
        grow++
        h1.innerHTML = grow + "%"
        inner.style.width = grow + "%"
        
    },int)
     
    //Progress bar must stop on 100% logic
    setTimeout(function(){
        clearTimeout(num)
        button.innerHTML = "Downloaded"
        button.style.pointerEvents = "none"
        button.style.opacity = 0.5;   
        button.style.cursor = "not-allowed"
        card.style.userSelect = "none"
        console.log("Downloaded in "+`${int/10}`+"seconds")
    },int * 100)

})