let text = "I made something special just for you ❤️";
let i = 0;

function typing(){

if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing,80);
}

}

typing();

function startSurprise(){
window.location.href="gallery.html";
}

function createHeart(){

let heart = document.createElement("div");
heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=Math.random()*20+20+"px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000);

}

setInterval(createHeart,300);