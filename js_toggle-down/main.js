let firstMenu = document.getElementById("firstMenu");
let secondMenu = document.getElementById("secondMenu");
let thirdMenu = document.getElementById("thirdMenu");
let ul1 = document.querySelector("#ul1");
let ul2 = document.querySelector("#ul2");
let ul3 = document.querySelector("#ul3");
let close = document.getElementById("close");
let close2 = document.getElementById("close2");
let close3 = document.getElementById("close3");


// let btn = document.getElementById("btn"

// console.log(close)

firstMenu.addEventListener("click", function firstMenu() {
  ul1.style.display = "block";
})
secondMenu.addEventListener("click", function firstMenu() {
  ul2.style.display = "block";
})
thirdMenu.addEventListener("click", function firstMenu() {
  ul3.style.display = "block";
})

close.addEventListener("click", function kilose() {
  ul1.style.display = "none";
});
close2.addEventListener("click", function kilose() {
  ul2.style.display = "none";
});
close3.addEventListener("click", function kilose() {
  ul3.style.display = "none";
});






// firstMenu.addEventListener("onMouseDown", function firstMenu() {

  // if (inp1.style = ":checked") {
  //   ul1.style.display = "block"
  // } else if (inp1.style != ":checked") {
  //   ul1.style.display = "none"
  // }
  //   ul1.style.display = "block"
//   // ul2.style.display = "none"
//   // ul3.style.display = "none"
// })

// secondMenu.addEventListener("click", function firstMenu() {
//   ul2.style.display = "block"
//   ul1.style.display = "none"
//   ul3.style.display = "none"
// })

// thirdMenu.addEventListener("click", function firstMenu() {
//   ul3.style.display = "block"
//   ul2.style.display = "none"
//   ul1.style.display = "none"
// })

// btn.addEventListener("click", function firstMenu() {
//   ul3.style.display = "none"
//   ul2.style.display = "none"
//   ul1.style.display = "none"
// })