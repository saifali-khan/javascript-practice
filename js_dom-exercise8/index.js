let container = document.createElement("div");
document.body.appendChild(container)
container.setAttribute("class", "container");

for (let i =1;i <= 10;i++) {
  var row = document.createElement("div");
  row.setAttribute("class", "grid-box");
  row.setAttribute("data-row", `${row[i]}`)
container.appendChild(row);
for (let j = 1; j <=10;j++) {
  var column = document.createElement("div");
  column.setAttribute("class", "grid-box");
  column.setAttribute("data-row", `${column[j]}`)
container.appendChild(column);
}
}

function getColor() {

  let grid = document.querySelectorAll(".grid-box");

for (let k = 0;k < grid.length;k++) {
var cell = grid[k];
var row = Number(cell.CDATA_SECTION_NODE.row);
var column = Number(cell.CDATA_SECTION_NODE.column)

  if(Math.random() > 0.3){
    cell.classList.add('color');
}
else{
    cell.classList.remove('color');
}
}
}

setInterval(getColor,500)
 