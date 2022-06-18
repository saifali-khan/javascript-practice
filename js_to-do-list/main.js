let button = document.querySelector(".btn");

button.addEventListener("click", function () {
  let input = document.getElementById("input");
  let text = input.value;
  if (text !== "") {

  let section = document.querySelector("#sec");

  let flex = document.createElement("div");

  flex.className = "flex";
  section.appendChild(flex);

  let tick = document.createElement("div");
  tick.classList.add("tick");
  tick.innerHTML = "&#10004;";
  flex.appendChild(tick);

  let task = document.createElement("div");
  task.innerHTML = text;
  task.classList.add("task");
  flex.appendChild(task);

task.addEventListener("click", function () {
  flex.classList.toggle("flex2")
})

localStorage.setItem('task', task.innerHTML);
localStorage.getItem("task", task.innerHTML);

  let del = document.createElement("div");
  del.innerText = "x";
  del.classList.add("delete")
  flex.appendChild(del)

  del.addEventListener("click", function () {
    section.removeChild(flex);
  })
  }
  input.value = "";
})


