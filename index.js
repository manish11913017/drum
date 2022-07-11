/* detecting button press by mouse click */
var numberOfButton = document.querySelectorAll(".drum").length; // number of buttons in the web page = 7

for(var i=0; i<numberOfButton; i++){
    /* We used for loop for the perpose of knowing which key is pressed 
        (.drum)[i] will iterate through the buttons and stores the info of clicked button*/

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
      var buttonInnerHTML = this.innerHTML; // variable for inner html of clicked button
      
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);

    });

  }

/* Event listener for key strokes */
document.addEventListener("keydown", function(event){

    makeSound(event.key);
    buttonAnimation(event.key);

})


/* detecting key presses of the keyboard */
function makeSound(key){

    switch(key){

        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;

        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;

        case "s":
          var tom3 = new Audio('sounds/tom-3.mp3');
          tom3.play();
          break;

        case "d":
          var tom4 = new Audio('sounds/tom-4.mp3');
          tom4.play();
          break;

        case "j":
          var snare = new Audio('sounds/snare.mp3');
          snare.play();
          break;

        case "k":
          var crash = new Audio('sounds/crash.mp3');
          crash.play();
          break;

        case "l":
          var kick = new Audio('sounds/kick-bass.mp3');
          kick.play();
          break;

        default: console.log(key);

      }    

  }

  // Adding animation to websites

  function buttonAnimation(currentkey){

    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
          activeButton.classList.remove("pressed");
      }, 250);

  }
