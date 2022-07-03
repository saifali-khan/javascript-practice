function getCat() {
  kitty = document.getElementById("cat-img");
fetch("https://api.thecatapi.com/v1/images/search")
.then(response => response.json())
.then(data => kitty.src = data[0].url)
}
let btn = document.getElementById("btn");
btn.addEventListener("click", getCat);