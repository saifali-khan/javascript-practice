
// ******************   first exercise  ******************   

const fruitList = ["apple", "banana", "tomato"]
const ul = document.getElementById("ul")

for (let key of fruitList) {
  let li = document.createElement("li");
  li.innerText = key;
  ul.appendChild(li)
}

// ******************   second exercise  ******************

const image = document.createElement("IMG");
image.src = "https://media.istockphoto.com/photos/white-sticky-note-with-thank-you-and-red-push-pin-on-yellow-picture-id1366508185?s=612x612"

imgDiv.appendChild(image)
image.style = `width: 200px;
               border-radius: 5px;`

// ******************   third exercise  ******************

let fc = document.querySelectorAll("#ul2 > li:first-child")
let ul2 = document.querySelectorAll("#ul2")

for (let elem of ul2) {
  elem.firstElementChild.innerHTML = "first"
}

for (let elem of ul2) {
  elem.lastElementChild.innerHTML = "last"
}
