let img = document.querySelector("#pic");
let love = document.querySelector("#love");

img.addEventListener("dblclick", function () {
    
    // show heart
    love.style.opacity = 1;
    love.style.transform = "translate(-50%, -50%) scale(1.5)";

    // hide after some time
    setTimeout(() => {
        love.style.opacity = 0;
        love.style.transform = "translate(-50%, -50%) scale(0) rotate(-60deg)";
    }, 800);

});





