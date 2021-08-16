document.getElementById("button2").addEventListener("click",Blue);
function Blue(){
    document.getElementById("box").style.backgroundColor="blue";
}
document.getElementById("button1").addEventListener("click",Grow);
function Grow(){
    document.getElementById("box").style.height="250px",box.style.width="250px";
}
document.getElementById("button3").addEventListener("click",Fade);
function Fade(){
    document.getElementById("box").style.opacity="50%";
}
document.getElementById("button4").addEventListener("click",Shrink);
function Shrink(){
    document.getElementById("box").style.height="75px",box.style.width="75px";
}
document.getElementById("button5").addEventListener("click",Stretch);
function Stretch(){
    document.getElementById("box").style.width="1250px"
}
document.getElementById("button6").addEventListener("click",Invisible);
function Invisible(){
    document.getElementById("box").style.backgroundColor="gray";
}
document.getElementById("button7").addEventListener("click",Play);
function Play(){
    window.open("https://rr.noordstar.me/test-496d937a","_blank");
}
document.getElementById("button8").addEventListener("click",Reset);
function Reset(){
    document.getElementById("box").style.height="150px",box.style.width="150px";
    document.getElementById("box").style.opacity="100%";
    document.getElementById("box").style.backgroundColor="orange";}
