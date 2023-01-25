// Update loop
import Ball from './ball.js';


const ball = new Ball(docoument.getElementById("ball"))

let lastTime;
function update(time) {
    if(lastTime != null){
        
    }
    const delta = time - lastTime;
    lastTime = time;
    window.requestAnimationFrame(update)

}

window.requestAnimationFrame(update)