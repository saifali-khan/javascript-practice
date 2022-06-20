let myArray = [];

let taskContainer = document.getElementById("task-container");
let input = document.getElementById("inp");
let btn = document.getElementById("btn");

btn.addEventListener("click", event => {
  event.preventDefault();
  const text = input.value.trim();
  if (text !== '') {
    createTask(text);
    input.value = '';
  }
});

function createTask(text) {
  const task = {id: myArray.length + 1, label : text, done: false };
  myArray.push(task);
  showTasks();
  input.value = "";
  input.focus()
}


function showTasks(todo){
 let taskList = document.getElementById('task-container');
 const node = document.createElement("li");

 if (todo.done) {
  // remove the item from the DOM
  item.remove();
  return
}

 for (let todo of myArray) {
  node.setAttribute('data-key', todo.id);
  node.innerHTML = 
    `<input id="${todo.id}" type="checkbox"/>
     <span>${todo.label}</span>
     <button class="delete-todo">x</button>
    `;
   
  taskList.append(node);
  }


}

let list = document.getElementById('task-container');
list.addEventListener("click", event => {
  if (event.target.classList.contains('delete-todo')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
})
function deleteTodo(key) {
  
  let index = myArray.findIndex(item => item.id === Number(key));

  const todo = {
    deleted: true,
    ...myArray[index]
  };

  myArray = myArray.filter(item => item.id !== Number(key))

  showTasks(todo)
}
