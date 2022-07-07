
// created an asynchronus function for fetching api 
async function getRandomUser() {
  
  const response = await fetch("https://randomuser.me/api/");
  // await is for wait while data is loading from api 

  const data = await response.json();
  // after the data is loaded from api convert it using .json() method

  const user = data.results[0]
  // for selecting the user data array 

  // calls a displayuser function
  displayUser(user)
}

// a function to display all the results from api

function displayUser(user) {
  const name = document.getElementById("name");
  const gender = document.getElementById("gender");
  const img = document.getElementById("img");
  const email = document.getElementById("email");
  const contact = document.getElementById("contact");
  const location = document.getElementById("location");

  // select all dom objects
 
  // added image
  img.src = user.picture.large;

  // added name 
  name.innerText = `${user.name.title} ${user.name.first} ${user.name.last} `

  // added gender 
  gender.innerText = " | " + user.gender;

  // added email 
  email.innerText = user.email;

   // added contact
  contact.innerText = user.phone;

   // added state and location
  location.innerText = `${user.location.state}, ${user.location.country}`;
}

// selcted button and added an click function to run getrandomuser function
let btn = document.getElementById("btn");
btn.addEventListener("click", getRandomUser)
