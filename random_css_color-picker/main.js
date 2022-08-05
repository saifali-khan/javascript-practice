let container = document.getElementById("container");

// create 100 boxes for colors 

for (let i = 1; i <= 100; i++) {
  let box = document.createElement("div");

  // add classes to each box

  box.setAttribute("class", "box");

  //  append it to the container

  container.appendChild(box);
}

// function for create random background colors in RGB 

function randomRgbColor() {

  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);

  let color = "rgb(" + a + "," + b + "," + c + ")";

  return color;
}

// function for create random background colors in Hexadecimal

function randomHexaDecimalColor() {
  var chars = "0123456789abcdef";
  var colorLength = 6;
  color = "";

  for (let i = 0; i < colorLength; i++) {
    let randomColor = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomColor, randomColor + 1);
  }
  return color;
}

// select the box using querySelectorAll

let box = document.querySelectorAll(".box");

function setRgbColor() {

  // iterate through each box 

  box.forEach(e => {

    // create a variable and give the random RGB color function to its value

    var newColor = randomRgbColor();

    // style each box's background and inner HTML with newColor variable

    e.style.background = newColor;
    e.innerHTML = newColor;


  })

}

// function for hexadecimal colors

function setHexaDecimalColor() {

  // iterate through each box 

  box.forEach(e => {

    // create a variable and give the random hexadecial color function to its value

    var newColor = randomHexaDecimalColor();

    // style each box's background and inner HTML with "#" + newColor variable

    e.style.background = "#" + newColor;
    e.innerHTML = "#" + newColor;


  })

}

// add event listener to window onload and create a function for copy the text

window.addEventListener("load", () => {

// iterate through each box

  box.forEach(e => {

    // add eventlistener click to each box for call the copy command

    e.addEventListener("click", () => {

      // set execCommand to copy

      document.execCommand("copy");
    })

    // add event listener to each box for copying text

    e.addEventListener("copy", function (event) {

      // set it to prevent default

      event.preventDefault();

      // set copied text data

      if (event.clipboardData) {
        event.clipboardData.setData("text/plain", e.textContent);
      }
    });
  });
});