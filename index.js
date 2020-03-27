function EventAllot(key){
  switch (key) {
    case "w" :
        var audio = new Audio("sounds/tom-1.mp3");
        setTimeout(() => { b[0].style.color= '#DA0463'; }, 50);
        b[0].style.color= '#D9A362';
        audio.play();
    break;
    case 'a' :
          var audio = new Audio("sounds/tom-2.mp3");
          setTimeout(() => { b[1].style.color= '#DA0463'; }, 50);
          b[1].style.color= '#D9A362';
          audio.play();
    break;
    case 's' :
        var audio = new Audio("sounds/tom-3.mp3");
        setTimeout(() => { b[2].style.color= '#DA0463'; }, 50);
        b[2].style.color= '#D9A362';
        audio.play();
    break;
    case 'd' :
        var audio = new Audio("sounds/tom-4.mp3");
        setTimeout(() => { b[3].style.color= '#DA0463'; }, 50);
        b[3].style.color= '#D9A362';
        audio.play();
    break;
    case 'j' :
          var audio = new Audio("sounds/snare.mp3");
          setTimeout(() => { b[4].style.color= '#DA0463'; }, 50);
          b[4].style.color= '#D9A362';
          audio.play();
    break;
    case 'k' :
        var audio = new Audio("sounds/crash.mp3");
        setTimeout(() => { b[5].style.color= '#DA0463'; }, 50);
        b[5].style.color= '#D9A362';
        audio.play();
    break;
    case 'l' :
        var audio = new Audio("sounds/kick-bass.mp3");
        setTimeout(() => { b[6].style.color= '#DA0463'; }, 50);
        b[6].style.color= '#D9A362';
        audio.play();
    break;
    default: console.log(this.innerHTML)
  }
}

var b=document.querySelectorAll(".drum");

for (var i=0;i<document.querySelectorAll(".drum").length;i++){
    b[i].addEventListener("click",function(){
      EventAllot(this.innerHTML);
    })
}

document.addEventListener("keypress",function(event){
  EventAllot(event["key"]);
})
