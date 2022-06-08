let h1 = document.createElement("h1");
h1.innerText = "my book list";
document.body.appendChild(h1);

let books = [{
  title: 'The Design of EveryDay Things',
  author: 'Don Norman',
  alreadyRead: false
},
{
  title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
}]

// *******************  paragraphs   ******************* 

let para1 = document.createElement("p");
para1.innerText = `${books[0].title} by ${books[0].author}`;
document.body.appendChild(para1)

let para2 = document.createElement("p");
para2.innerText = `${books[1].title} by ${books[1].author}`;
document.body.appendChild(para2)

// *******************  paragraphs for li's   ******************* 

let para3 = document.createElement("p");
para3.innerText = `${books[0].title} by ${books[0].author}`;

let para4 = document.createElement("p");
para4.innerText = `${books[1].title} by ${books[1].author}`;

// *******************  ul li   ******************* 

let ul = document.createElement("ul");
document.body.appendChild(ul)
let li1 = document.createElement("li");
let li2 = document.createElement("li");

// *******************  images   ******************* 

let img1 = document.createElement("img");
img1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCQ1_SNQxIlr4y1_xTXqfG8J342YTEQLdkQ&usqp=CAU"
img1.style.width = "120px"

let img2 = document.createElement("IMG");
img2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT2VFYblZEZAJ7c0eZU1avgHHYjjK5yKjMqQ&usqp=CAU"
img2.style.width = "120px"

// document.querySelectorAll("img").style = `width: 100px; height: 150px;`

// *******************  implementation of first li  ******************* 

li1.appendChild(img1);
li1.appendChild(para3);
ul.appendChild(li1);
para3.style = `display: inline-block;
               margin-left: 80px;`

// *******************  implementation of first li  ******************* 

li2.appendChild(img2);
li2.appendChild(para4);
ul.appendChild(li2);
para4.style = `display: inline-block;
               margin-left: 80px;`