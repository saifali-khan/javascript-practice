const btn = document.getElementById("btn");
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");


function loadData() {

  fetch("https://api.quotable.io/random")
    .then(data => data.json())
    .then(response => {
      quotes.innerHTML = `<i class="fa-solid fa-quote-left double-quotes"></i> ${response.content}`;
      author.innerHTML = "- " + response.author;
      randomColor()
    })

}

function randomColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  let doubleQuotes = document.querySelector(".double-quotes");
  let footIcons = document.querySelectorAll(".foot-icons");

  document.body.style.background = bgColor;
  quotes.style.color = bgColor;
  author.style.color = bgColor;
  doubleQuotes.style.color = bgColor;
  btn.style.background = bgColor;
  footIcons[0].style.color = bgColor;
  footIcons[1].style.color = bgColor;
}

window.addEventListener("load", loadData)
btn.addEventListener("click", loadData)