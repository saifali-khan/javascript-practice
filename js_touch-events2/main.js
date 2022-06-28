// function playSound(e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key =   document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   if(!audio) return
//   audio.currentTime = 0;
//   audio.play()
//   key.classList.add("playing");
// }
// function removeTransition(e) {
//   if (e.propertyName !== 'transform') return
//   this.classList.remove("playing")
// }
// const keys = document.querySelectorAll(".key");
// keys.forEach(key => key.addEventListener("transitionend", removeTransition))
// window.addEventListener("keydown", playSound);


const audio = document.querySelectorAll("audio");
  const keys = document.querySelectorAll(".key");

  for (let i = 0;i < keys.length;i++) {
    audio[i].setAttribute("data-key", `${i}`);
    keys[i].setAttribute("data-key", `${i}`);

    keys[i].addEventListener("touchstart", function () {
       audio[i].currentTime = 0;
       audio[i].play();
      keys[i].classList.add("playing");
    })
    keys[i].addEventListener("transitionend", function() {
      keys[i].classList.remove("playing");
    });
  };