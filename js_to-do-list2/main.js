let myArray = [];
let taskContainer = document.getElementById("task-container");
let input = document.getElementById("inp");
let btn = document.getElementById("btn");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    createTask(text);
    input.value = "";
  }
});
function createTask(text) {
  const task = { id: myArray.length + 1, label: text, done: false };
  myArray.push(task);
  showTasks();
  input.value = "";
  input.focus();
}
function showTasks() {
  let taskList = document.getElementById("task-container");
  const node = document.createElement("li");
  for (let todo of myArray) {
    node.setAttribute("data-key", todo.id);
    node.setAttribute("class", "flex")
    node.innerHTML = `<input class ='tick' id="${todo.id}" type="checkbox"/>
     <span class='span task'>${todo.label}</span>
     <span class="delete-todo delete">x</span>
    `;
    taskList.append(node);
  }
  let flex = document.querySelectorAll(".flex");
  let tick = document.querySelectorAll(".tick");
for (let i = 0; i< tick.length;i++){
  tick[i].onclick = function () {
    flex[i].classList.toggle("flex2");
  }
}
  deleteTask();
}
function deleteTask() {
  var todo = document.querySelectorAll(".delete-todo");
  for (var i = 0; i < todo.length; i++) {
    todo[i].onclick = function () {
      this.parentNode.remove()
    };
  };
};