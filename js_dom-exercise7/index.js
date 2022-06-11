let container = document.createElement("div");
document.body.appendChild(container)
container.setAttribute("class", "container");

function createGrid1() {
  for (let i =1;i <= 10;i++) {
    var grid = document.createElement("div");
    grid.setAttribute("class", "grid");
    grid.style = `width: 60px;
  height: 60px;
  border: 0.5px solid white;
  background-color: orange;
  grid-gap: 2px;`
  if( i % 2 == 0) {
    grid.style = `width: 60px;
    height: 60px;
    border: 0.5px solid white;
    background-color: gray;
    grid-gap: 2px;`
  }
    container.appendChild(grid)
  }
}

function createGrid2() {
  for (let i =1;i <= 10;i++) {
    var grid = document.createElement("div");
    grid.setAttribute("class", "grid");
    grid.style = `width: 60px;
  height: 60px;
  border: 0.5px solid white;
  background-color: gray;
  grid-gap: 2px;`
  if( i % 2 == 0) {
    grid.style = `width: 60px;
    height: 60px;
    border: 0.5px solid white;
    background-color: orange;
    grid-gap: 2px;`
  }
    container.appendChild(grid)
  }
}

createGrid1()
createGrid2()
createGrid1()
createGrid2()
createGrid1()
createGrid2()
createGrid1()
createGrid2()
createGrid1()
createGrid2()

container.style = `display: grid;
width: 610px;
margin: 0 auto;
grid-template-columns: auto auto auto auto auto auto auto auto auto auto ;`
