const drums = document.getElementsByClassName("drum");
const drumLength = drums.length;
const sounds = ["sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3"];
const w = document.getElementById("w");
const keyPressed = [];

drums

for (let i = 0; i < drumLength; i++) {
    drums[i].classList.add("purple");
    drums[i].addEventListener("click",onKeyPress);
    function onKeyPress() {        
        drums[i].classList.add("pressed");
    }

    function playAudio() {
        const audio = new Audio(sounds[i]);
        audio.play();

        setTimeout(() => {    
            drums[i].classList.remove("pressed");
        }, 100);
    }
drums[i].addEventListener("click",playAudio);
}


document.addEventListener("keypress",pressKey);
 function pressKey(event){
    if (event.key ==="w") {
        const audio1 = new Audio("sounds/crash.mp3");
        audio1.play();
        
        drums[0].classList.add("pressed");
        drums[0].addEventListener("keypress",setTimeout(() => {    
            drums[0].classList.remove("pressed");
        }, 100));
       

    } else if(event.key ==="a"){
        const audio2 = new Audio("sounds/kick-bass.mp3");
        audio2.play();
        
        drums[1].classList.add("pressed");
        drums[1].addEventListener("keypress",setTimeout(() => {    
            drums[1].classList.remove("pressed");
        }, 100));

        
    }  else if(event.key ==="s"){
        const audio2 = new Audio("sounds/snare.mp3");
        audio2.play();
        
        drums[2].classList.add("pressed");
        drums[2].addEventListener("keypress",setTimeout(() => {    
            drums[2].classList.remove("pressed");
        }, 100));

        
    } else if(event.key ==="d"){
        const audio2 = new Audio("sounds/tom-1.mp3");
        audio2.play();
        
        drums[3].classList.add("pressed");
        drums[3].addEventListener("keypress",setTimeout(() => {    
            drums[3].classList.remove("pressed");
        }, 100));
        
    } else if(event.key ==="j"){
        const audio2 = new Audio("sounds/tom-2.mp3");
        audio2.play();
        
        drums[4].classList.add("pressed");
        drums[4].addEventListener("keypress",setTimeout(() => {    
            drums[4].classList.remove("pressed");
        }, 100));
        
    } else if(event.key ==="k"){
        const audio2 = new Audio("sounds/tom-3.mp3");
        audio2.play();
        
        drums[5].classList.add("pressed");
        drums[5].addEventListener("keypress",setTimeout(() => {    
            drums[5].classList.remove("pressed");
        }, 100));
        
    } else if(event.key ==="l"){
        const audio2 = new Audio("sounds/tom-4.mp3");
        audio2.play();

        drums[6].classList.add("pressed");
        drums[6].addEventListener("keypress",setTimeout(() => {    
            drums[6].classList.remove("pressed");
        }, 100));
        
    }

 }

 

