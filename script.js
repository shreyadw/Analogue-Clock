const hrEle = document.querySelector(".hr")
const minEle = document.querySelector(".min")
const secEle =  document.querySelector(".sec")
let tick = new Audio("clock_sound.mpeg");
tick.volume = 0.2 ;
document.addEventListener("DOMContentLoaded",
setInterval(() => {
    let date = new Date()

    hr = date.getHours()*30     // 30 isliye kyuki 1 hour ke beech me 30 degree ka antar hota h (360/12 = 30)
    min = date.getMinutes()*6
    sec = date.getSeconds()*6


// yaha hum string interpolation use karenge sui ko definite angle pr ghumane ke liye
    hrEle.style.transform = `rotateZ(${(hr) + min/12}deg)`
    minEle.style.transform = `rotateZ(${min}deg)`
    secEle.style.transform = `rotateZ(${sec}deg)`
    tick.currentTime = 0;
    tick.play();
},1000 )
);