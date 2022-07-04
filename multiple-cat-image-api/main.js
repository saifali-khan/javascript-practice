let container = document.getElementById("container");
function getCat() {
  for (let i = 1;i <= 10;i++) {
    if (document.getElementsByTagName("img").length > 9) break;
   let createImg = document.createElement("img");
    createImg.setAttribute("class", "cat-img");
    container.appendChild(createImg);
    }
    addImage()
  }
  function addImage() {
    let kitty = document.getElementsByTagName("img");
    for (let i = 0;i <kitty.length;i++) {
      fetch("https://api.thecatapi.com/v1/images/search")
      .then(response => response.json())
      .then(data => kitty[i].src = data[0].url)
    }
    
  }
  
let btn = document.getElementById("btn");
btn.addEventListener("click", getCat);