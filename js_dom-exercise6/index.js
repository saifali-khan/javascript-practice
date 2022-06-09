let container = document.createElement("div");
document.body.appendChild(container)
container.setAttribute("class", "container");

for (let i =1;i <= 100;i++) {
  var grid = document.createElement("div");
  grid.setAttribute("class", "grid");
  grid.style = `width: 60px;
height: 60px;
border: 0.5px solid white;
background-color: orange;
grid-gap: 2px;`
container.appendChild(grid)
}

container.style = `display: grid;
width: 610px;
margin: 0 auto;
grid-template-columns: auto auto auto auto auto auto auto auto auto auto ;`
