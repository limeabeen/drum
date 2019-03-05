let numberOfButtons = document.querySelectorAll(".drum").length;

for(let i = 0; i < numberOfButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

      let buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function(event){//callback function
  console.log(event);
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:console.log(buttonInnerHTML);
  }
}
//Object example

//Object used with constructor function, which uses "this" keywords, starts with a capatalized letter
function HouseKeeper (name, sex , languages) {
  this.name = name;
  this.sex = sex;
  this.languages = languages;
  //Functions associated with objects are called Methods
  this.moveSuitcase = function(){
    alert("Cleanin in progress...");
  }
}
      //constructor...don't forget NEW!
      let NewHouseKeeper = new HouseKeeper("levi", "Male" , ["english","french"]);

/*This is an example of higher order functions, which is functions that use other functions as arguments*/
function add(num1, num2){
  return num1 + num2;
}
function subtract(num1, num2){
  return num1 - num2;
}
function divide(num1, num2){
  return num1 / num2;
}
function multiply(num1, num2){
  return num1 * num2;
}
function calculator(num1, num2, operator){
  return operator(num1, num2);
}

function buttonAnimation(currentKey){
  let activeButton = document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");
  //delay
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
