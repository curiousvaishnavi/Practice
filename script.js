//Random Paper Generator

let main = document.querySelector("main")
let button = document.querySelector("button")

button.addEventListener("click",function(){
    let div = document.createElement("div")
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)

    div.style.height = "150px"
    div.style.width = "150px"
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    main.appendChild(div)

    let x =(Math.floor(Math.random()*100))
    let y = (Math.floor(Math.random()*100))
    div.style.position = "absolute"  
    
    div.style.left = x + "%"
    div.style.top = y + "%"
    let c4 = Math.floor(Math.random()*180)
    div.style.rotate = c4 + "deg"
    
})