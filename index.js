var name = prompt("What's your name?")
document.querySelector("h3").innerHTML="Enjoy your vitual Drumkit 🥁 "+name
function animation(i){

  var active = document.querySelector("."+i);
  active.classList.add("pressed");
  setTimeout(function(){
    active.classList.remove("pressed")
  },300);
  document.querySelector("body").classList.add("gm");
  setTimeout(function(){
    document.querySelector("body").classList.remove("gm");
  },200);

}
function makeSound(key){
    switch (key) {
      case "a":
        var audio1 = new Audio("tom-1.mp3")
        audio1.play()
        break;
      case "s":
        var audio2 = new Audio("tom-2.mp3")
        audio2.play()
        break;
      case "d":
        var audio3 = new Audio("tom-3.mp3")
        audio3.play()
        break;
      case "f":
        var audio4 = new Audio("tom-4.mp3")
        audio4.play()
        break;
      case "g":
        var audio5 = new Audio("crash.mp3")
        audio5.play()
        break;
      case "h":
        var audio6 = new Audio("kick-bass.mp3")
        audio6.play()
        break;
      case "j":
        var audio7 = new Audio("snare.mp3")
        audio7.play()
        break;
      default:

    }
  }
for(var arnab = 0; arnab<3; arnab++){
  for (var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
      var text = this.innerHTML;
      makeSound(text);
      animation(text);

    });
  }

    document.addEventListener("keydown",function(event){
      makeSound(event.key);
      animation(event.key);

    });
}
