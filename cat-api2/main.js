let container = document.getElementById("container");
console.log()
function getCat() {
  
  let input = document.getElementById("text");
  let imgContainer = document.createElement("div");
  
  imgContainer.setAttribute("class", "img-container");
  container.appendChild(imgContainer);
  if (input.value > 0 && input.value <= 20) {
    for (let i = 0;i < input.value;i++) {
      if (document.getElementsByTagName("img").length > 19) {
       let p = document.createElement("p")
        p.innerHTML = "can not load images more than 20";
        container.appendChild(p)
        break;
      };
     let createImg = document.createElement("img");
      createImg.setAttribute("class", "cat-img");
      imgContainer.appendChild(createImg);
      }
      input.value = "";
    } else if (input.value > 20) {
      alert("please enter a number less than 20");
      input.value = "";
      input.focus()
    }
    else {
      alert("please enter a number");
      input.value = "";
      input.focus()
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