//Random Quotes Generator

    let main = document.querySelector("main")
    let button = document.querySelector("button")

button.addEventListener("click",function(){
    let h1 = document.createElement("h1")
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)
    

    let arr = ["Learn. Code. Repeat.","One bug at a time.","Progress > Perfection.","Turning coffee into code","From errors to excellence.","Every line of code counts."]

    let rad = (Math.floor(Math.random()*arr.length))
    h1.innerHTML = arr[rad]
    h1.style.color = `rgb(${c1},${c2},${c3})`
    h1.style.position = "absolute"
    h1.style.scale = (Math.floor(Math.random()*3))
    main.append(h1)
    
//  To create random position of the quotes on the screen

    let x =(Math.floor(Math.random()*100))
    let y = (Math.floor(Math.random()*100))
      
    h1.style.left = x + "%"
    h1.style.top = y + "%"
    
    let c4 = Math.floor(Math.random()*180)
    h1.style.rotate = c4 + "deg"
    
})