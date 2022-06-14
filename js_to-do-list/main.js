let section = document.getElementById("sec");
let input = document.getElementById("input");
let button = document.querySelector(".btn");
button.addEventListener("click", function checkValue() {
  if (input.value == "") {
    alert("empty task can not been added")
  } else {

    let flex = document.createElement("div");
    flex.setAttribute("class", "flex");
    section.appendChild(flex)

    let tick = document.createElement("div");
    tick.setAttribute("class", "tick");
    tick.innerHTML = "&#10004;";
    flex.appendChild(tick);
     
    let task = document.createElement("div");
    task.setAttribute("class", "task");
    task.innerHTML = input.value;
    flex.appendChild(task);

    let del = document.createElement("div");
    del.setAttribute("class", "delete");
    del.innerHTML = "x";
    flex.appendChild(del);


  }
})

let del = document.getElementsByClassName("delete");

for (let i = 0; i < del.length;i++) {
  del[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// let container = document.querySelector("#sec");
// console.log(container.children.length)

// let flex = document.getElementsByClassName("flex");
// for (let f of flex) {
  
//   console.log(flex.innerText)
// }

const btn = document.getElementById("btn");
btn.addEventListener("click", function changeSize() {
  btn.classList.toggle('hide');
})