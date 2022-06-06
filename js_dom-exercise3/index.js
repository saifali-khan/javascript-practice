let li = document.querySelectorAll("li");
let para = document.createElement("p")

function getCount() {
  para.innerText = li.length
  para.setAttribute("class", "cpara");
  document.querySelector("ul").appendChild(para)
}

function checkPara(){
  if (para.getAttribute("class") === "cpara") {
    return;
}else{
  getCount();
  }
}
 


let bold = document.querySelectorAll(".boldy");

for (let b of bold) {
  b.addEventListener("mouseover", function highlight() {
    b.style.backgroundColor = "cyan";
    b.style.textDecoration = "underline"
  })

  b.addEventListener("mouseout", function highlight() {
    b.style.backgroundColor = "transparent";
    b.style.textDecoration = "none"
  })
}

