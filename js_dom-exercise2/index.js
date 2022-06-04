let form = document.querySelector(".flex");
let email = document.querySelector('.email');
let user = document.querySelector(".username");
let btn = document.querySelector('.btn');

//  placeholders

email.placeholder = "enter your email..";
user.placeholder = "enter your name";

// button styles

btn.style.padding = "5px 10px";
btn.style.color = "white";
btn.style.background = "blue";
btn.style.cursor = "pointer";
btn.style.width = "100px";
btn.style.borderRadius = "5px"
btn.style.border = "1px solid transparent"
btn.style.margin = "10px"
btn.addEventListener("mouseover", function btnHover() {
  
btn.style.color = "blue";
btn.style.background = "white";
btn.style.border = "1px solid blue"

})

btn.addEventListener("mouseout", function btnHover() {
  
  btn.style.color = "white";
  btn.style.background = "blue";
  
  })

// alignments using flex

  form.style.display = "flex";
  form.style.justifyContent = "center"

  // input email styles 

  email.style.width = "200px";
  email.style.padding = "5px 40px";
  email.style.fontSize = "16px";
  email.style.margin = "10px";

  // input username styles 

  user.style.width = "200px";
  user.style.padding = "5px 40px";
  user.style.fontSize = "16px";
  user.style.margin = "10px";

  // email and username alert

  function nameAlert() {

    if (user !== "" && email !== "") {
      alert(`your name is ${user.textContent} and your email id is ${email.textContent}`)
    }

  }

  