// CREO IL VIDEO
let video = document.getElementById("myVideo");

// ASSEGNO IL PULSANTE
let btn = document.getElementById("myBtn");

// SOUND
let sound = new Audio("./assets/sound/videosound.m4a");

// CREO LA FUNZIONE PAUSA E PALY E CAMBIO IL TESTO DEL PULSANTE
function myFunction() {
  if (video.paused) {
    video.play();
    sound.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    sound.pause();
    btn.innerHTML = "Play";
  }
}

// DARKMODE

let toggle = document.querySelector(".bi-toggle-off");

// PRIMA OPZIONE
// toggle.addEventListener("click", clickToggle);

// function clickToggle() {
//   toggle.classList.toggle("bi-toggle-off");
//   toggle.classList.toggle("bi-toggle-on");
//   document.body.classList.toggle("darkMode");
// }

// SECONDA OPZIONE
toggle.addEventListener("click", function () {
  toggle.classList.toggle("bi-toggle-off");
  toggle.classList.toggle("bi-toggle-on");
  document.body.classList.toggle("darkMode");
});

// ANIMAZIONE FADE SITO
function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
