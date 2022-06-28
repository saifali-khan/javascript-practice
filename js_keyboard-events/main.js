window.addEventListener("keydown", function(e) {
  
document.querySelector(".intro-container").style.display = "none";
document.querySelector(".container").style.display = "block";
let location = document.getElementById("code-location");
let code = document.getElementById("code");
let which = document.getElementById("which");

if (e.location === 0) {
  location.innerHTML = `general keys(${e.location})`;
}
if (e.location === 1) {
  location.innerHTML = `left side modifier keys(${e.location})`;
}
if (e.location === 2) {
  location.innerHTML = `right side modifier keys(${e.location})`;
}
if (e.location === 3) {
  location.innerHTML = `numpad(${e.location})`;
}
 
code.innerHTML = e.code;

which.innerHTML = e.which;

  let keyName = document.getElementById("keyname");
  keyName.innerHTML = e.key;
  if (keyName.innerHTML === " " ) {
    keyName.innerHTML = "space bar";
  }


  let keyNum = document.getElementById("keycode");
  keyNum.innerHTML = e.keyCode;
  // console.log(e)
  })

