var click = document.getElementById("re");
var click1 = document.getElementById("ho");
var click2= document.getElementById("ab");

click1.addEventListener("click", function() {  
    window.location.href = './index.html'; 
});

click.addEventListener("click", function() {  
    window.location.href = './game.html'; 
});
click2.addEventListener("click", function() {  
    window.location.href = 'https://emperorkp.github.io/Profile/'; 
});
let score =localStorage.getItem("score")
let final=document.querySelector("#final")
final.textContent=score;

