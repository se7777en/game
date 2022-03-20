let counter = 0;
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function (event) {
    jump();
   /* counter++;
    if(counter < 0) {counter = 0;}
    console.log(counter);*/
    
});

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
        
    }
    setTimeout(function () {
        
        dino.classList.remove("jump");
    }, 300);

}



let isAlive = setInterval(function(){
let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
    alert("GAME OVER!!");
   /* counter --;
    if(counter < 0) {counter = 0;}
    console.log(counter);*/
}
},10);
///
