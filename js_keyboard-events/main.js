 function keyCodes(event) {
  
  // for intro when user get's in to the webpage
  //so when we click on any key the intro section will remove

document.querySelector(".intro-container").style.display = "none";

// after the removal of intro section we have to display the main container of webpage
document.querySelector(".container").style.display = "block";

// the keycode of the key

let keyNum = document.getElementById("keycode");
  keyNum.innerHTML = event.keyCode;
  

// the name of the key

let keyName = document.getElementById("keyname");
  keyName.innerHTML = event.key;

  // the condition for space bar  as its  shows the empty string  so we have remove it using if condition

  if (keyName.innerHTML === " " ) {
    keyName.innerHTML = "space bar";
  }

  // the location of thekey
let location = document.getElementById("code-location");

if (event.location === 0) {
  location.innerHTML = `general keys(${event.location})`;
}
if (event.location === 1) {
  location.innerHTML = `left side modifier keys(${event.location})`;
}
if (event.location === 2) {
  location.innerHTML = `right side modifier keys(${event.location})`;
}
if (event.location === 3) {
  location.innerHTML = `numpad(${event.location})`;
}

// the code of the key 

let code = document.getElementById("code");

code.innerHTML = event.code;

// the event.which

let which = document.getElementById("which");
which.innerHTML = event.which;


 }
// addEventlistener to  window on keydown and call the keycodes function into it
  window.addEventListener("keydown", keyCodes);